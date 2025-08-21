# Biz-App Technical Design Document (TDD)

## Core Architecture Logic

**Monorepo Structure:**
- Frontend: Next.js 15 with tRPC client
- Backend: Hono server with tRPC procedures
- Database: MongoDB with Mongoose ODM
- Shared types across frontend/backend via TypeScript

**Request Flow:**
```
Client → tRPC → Hono Router → Business Logic → Mongoose → MongoDB
```

## Authentication Workflow

**JWT-Based Authentication:**
```typescript
// Login flow
async function authenticateUser(email: string, password: string) {
  const user = await User.findOne({ email });
  const isValid = await bcrypt.compare(password, user.password);
  
  if (!isValid) throw new Error('Invalid credentials');
  
  const token = jwt.sign(
    { userId: user._id, companyId: user.companyId },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  
  return { token, user };
}

// Middleware for protected routes
function requireAuth(context) {
  const token = context.req.header('Authorization')?.replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  context.user = decoded;
}
```

## Invoice Generation Logic

**Invoice Number Algorithm:**
```typescript
async function generateInvoiceNumber(companyId: string) {
  const company = await Company.findById(companyId);
  const prefix = company.settings.invoicePrefix || 'INV';
  const year = new Date().getFullYear();
  
  // Atomic counter increment
  const updatedCompany = await Company.findByIdAndUpdate(
    companyId,
    { $inc: { 'settings.invoiceCounter': 1 } },
    { new: true }
  );
  
  const counter = updatedCompany.settings.invoiceCounter;
  return `${prefix}-${year}-${counter.toString().padStart(3, '0')}`;
}
```

**Invoice Calculation Engine:**
```typescript
function calculateInvoiceTotals(lineItems: LineItem[], taxRate: number, discountRate: number) {
  const subtotal = lineItems.reduce((sum, item) => {
    return sum + (item.quantity * item.rate);
  }, 0);
  
  const discountAmount = subtotal * (discountRate / 100);
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = taxableAmount * (taxRate / 100);
  const total = taxableAmount + taxAmount;
  
  return {
    subtotal: Math.round(subtotal * 100) / 100,
    discountAmount: Math.round(discountAmount * 100) / 100,
    taxAmount: Math.round(taxAmount * 100) / 100,
    total: Math.round(total * 100) / 100
  };
}
```

## Project Budget Tracking

**Real-time Budget Algorithm:**
```typescript
async function updateProjectBudget(projectId: string) {
  const project = await Project.findById(projectId);
  
  // Calculate actual costs from time entries
  const actualCost = project.timeEntries.reduce((total, entry) => {
    return total + (entry.hours * entry.rate);
  }, 0);
  
  // Calculate budget utilization
  const utilization = (actualCost / project.budget) * 100;
  
  // Trigger alerts
  if (utilization >= 90) {
    await triggerBudgetAlert(project, 'critical');
  } else if (utilization >= 75) {
    await triggerBudgetAlert(project, 'warning');
  }
  
  return Project.findByIdAndUpdate(projectId, { actualCost }, { new: true });
}
```

## Financial Analytics Engine

**Revenue Calculation:**
```typescript
async function calculateMonthlyRevenue(companyId: string, month: number, year: number) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  
  const pipeline = [
    {
      $match: {
        companyId: new ObjectId(companyId),
        status: 'paid',
        'payments.date': { $gte: startDate, $lte: endDate }
      }
    },
    {
      $unwind: '$payments'
    },
    {
      $match: {
        'payments.date': { $gte: startDate, $lte: endDate }
      }
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$payments.amount' },
        invoiceCount: { $sum: 1 }
      }
    }
  ];
  
  const result = await Invoice.aggregate(pipeline);
  return result[0] || { totalRevenue: 0, invoiceCount: 0 };
}
```

## Support Ticket Auto-Assignment

**Load Balancing Algorithm:**
```typescript
async function autoAssignTicket(ticket: SupportTicket) {
  // Get available technicians
  const technicians = await User.find({
    companyId: ticket.companyId,
    role: { $in: ['manager', 'employee'] },
    isActive: true
  });
  
  // Calculate current workload
  const workloads = await Promise.all(
    technicians.map(async (tech) => {
      const openTickets = await SupportTicket.countDocuments({
        assignedTo: tech._id,
        status: { $in: ['open', 'in_progress'] }
      });
      
      return { techId: tech._id, workload: openTickets };
    })
  );
  
  // Assign to technician with lowest workload
  const leastBusy = workloads.reduce((min, current) =>
    current.workload < min.workload ? current : min
  );
  
  return SupportTicket.findByIdAndUpdate(
    ticket._id,
    { assignedTo: leastBusy.techId },
    { new: true }
  );
}
```

## Document Storage Workflow

**File Upload Processing:**
```typescript
async function processFileUpload(file: File, metadata: UploadMetadata) {
  // Validate file
  validateFile(file);
  
  // Generate unique filename
  const filename = `${uuid()}-${file.name}`;
  const filepath = `${metadata.companyId}/${metadata.folder}/${filename}`;
  
  // Upload to storage (S3/CloudFlare R2)
  const uploadResult = await uploadToStorage(file, filepath);
  
  // Save metadata to database
  const document = await Document.create({
    fileName: filename,
    originalName: file.name,
    fileSize: file.size,
    mimeType: file.type,
    filePath: uploadResult.url,
    folder: metadata.folder,
    uploadedBy: metadata.userId,
    companyId: metadata.companyId
  });
  
  return document;
}

function validateFile(file: File) {
  const maxSize = 50 * 1024 * 1024; // 50MB
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword'];
  
  if (file.size > maxSize) throw new Error('File too large');
  if (!allowedTypes.includes(file.type)) throw new Error('Invalid file type');
}
```

## Data Aggregation Pipelines

**Client Profitability Analysis:**
```typescript
async function getClientProfitability(companyId: string, dateRange: DateRange) {
  const pipeline = [
    {
      $match: {
        companyId: new ObjectId(companyId),
        issueDate: { $gte: dateRange.start, $lte: dateRange.end }
      }
    },
    {
      $lookup: {
        from: 'clients',
        localField: 'clientId',
        foreignField: '_id',
        as: 'client'
      }
    },
    {
      $group: {
        _id: '$clientId',
        clientName: { $first: '$client.name' },
        totalRevenue: { $sum: '$total' },
        invoiceCount: { $sum: 1 },
        avgInvoiceValue: { $avg: '$total' }
      }
    },
    {
      $sort: { totalRevenue: -1 }
    }
  ];
  
  return Invoice.aggregate(pipeline);
}
```

## Caching Strategy

**Redis Cache Implementation:**
```typescript
class CacheService {
  private redis: Redis;
  
  async get<T>(key: string): Promise<T | null> {
    const cached = await this.redis.get(key);
    return cached ? JSON.parse(cached) : null;
  }
  
  async set(key: string, value: any, ttl: number = 3600) {
    await this.redis.setex(key, ttl, JSON.stringify(value));
  }
  
  async invalidatePattern(pattern: string) {
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await this.redis.del(...keys);
    }
  }
}

// Usage in API
async function getClientList(companyId: string) {
  const cacheKey = `clients:${companyId}`;
  
  let clients = await cache.get(cacheKey);
  if (!clients) {
    clients = await Client.find({ companyId }).lean();
    await cache.set(cacheKey, clients, 600); // 10 minutes
  }
  
  return clients;
}
```

## Background Job Processing

**Email Queue System:**
```typescript
import Bull from 'bull';

const emailQueue = new Bull('email processing');

// Producer
async function sendInvoiceEmail(invoiceId: string) {
  await emailQueue.add('send-invoice', { invoiceId }, {
    attempts: 3,
    backoff: 'exponential',
    delay: 2000
  });
}

// Consumer
emailQueue.process('send-invoice', async (job) => {
  const { invoiceId } = job.data;
  const invoice = await Invoice.findById(invoiceId).populate('client');
  
  const emailData = {
    to: invoice.client.email,
    subject: `Invoice ${invoice.invoiceNumber}`,
    template: 'invoice',
    data: { invoice }
  };
  
  await sendEmail(emailData);
  
  // Update email history
  await Invoice.findByIdAndUpdate(invoiceId, {
    $push: {
      emailHistory: {
        sentAt: new Date(),
        recipient: invoice.client.email,
        status: 'sent'
      }
    }
  });
});
```

## Database Optimization

**Query Optimization Patterns:**
```typescript
// Efficient pagination
async function getPaginatedInvoices(companyId: string, page: number, limit: number) {
  const skip = (page - 1) * limit;
  
  const [invoices, total] = await Promise.all([
    Invoice.find({ companyId })
      .populate('client', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Invoice.countDocuments({ companyId })
  ]);
  
  return { invoices, total, pages: Math.ceil(total / limit) };
}

// Aggregation for dashboard stats
async function getDashboardStats(companyId: string) {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  
  const [revenue, expenses, projects, tickets] = await Promise.all([
    Transaction.aggregate([
      { $match: { companyId: new ObjectId(companyId), type: 'income', date: { $gte: thirtyDaysAgo } } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]),
    Transaction.aggregate([
      { $match: { companyId: new ObjectId(companyId), type: 'expense', date: { $gte: thirtyDaysAgo } } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]),
    Project.countDocuments({ companyId, status: 'in_progress' }),
    SupportTicket.countDocuments({ companyId, status: { $in: ['open', 'in_progress'] } })
  ]);
  
  return {
    revenue: revenue[0]?.total || 0,
    expenses: expenses[0]?.total || 0,
    activeProjects: projects,
    openTickets: tickets
  };
}
```

## Error Handling

**Centralized Error Management:**
```typescript
class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'AppError';
  }
}

// Global error handler
function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      error: error.message,
      code: error.code
    });
  }
  
  // Log unexpected errors
  console.error('Unexpected error:', error);
  
  return res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
}
```

This TDD provides the technical foundation for implementing Biz-App's core business logic and workflows.