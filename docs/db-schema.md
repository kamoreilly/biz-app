# Biz-App Database Schema

## Entity Relationship Diagram

```
Users ──── belongs to ──── Companies
  │                           │
  └── manages ──┐             │
                │             │ owns
Projects ───────┘             │
  │                           │
  │ belongs to                │
  │                           │
Clients ────────────────── belongs to
  │                           │
  │ has                       │
  │                           │
Invoices ────────────────── belongs to
  │                           │
  │ generates                 │
  │                           │
Transactions ─────────────── belongs to
  │
  │ references
  │
SupportTickets
  │
  │ attached to
  │
Documents ──────────────── belongs to ──── Companies

Services ────────────────── belongs to ──── Companies
```

## Document Structures

### Users Collection
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  role: String, // 'owner', 'manager', 'employee'
  companyId: ObjectId (ref: Companies),
  permissions: [String],
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Companies Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  taxId: String,
  logo: String, // URL or file path
  settings: {
    currency: String,
    timezone: String,
    taxRate: Number,
    invoiceTerms: String,
    invoicePrefix: String,
    invoiceCounter: Number
  },
  subscription: {
    plan: String,
    status: String,
    expiresAt: Date
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Clients Collection
```javascript
{
  _id: ObjectId,
  companyId: ObjectId (ref: Companies),
  name: String,
  email: String,
  phone: String,
  contactPerson: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  taxId: String,
  paymentTerms: String,
  status: String, // 'active', 'inactive', 'archived'
  notes: String,
  tags: [String],
  customFields: {},
  createdAt: Date,
  updatedAt: Date
}
```

### Projects Collection
```javascript
{
  _id: ObjectId,
  companyId: ObjectId (ref: Companies),
  clientId: ObjectId (ref: Clients),
  name: String,
  description: String,
  status: String, // 'not_started', 'in_progress', 'on_hold', 'completed'
  startDate: Date,
  endDate: Date,
  budget: Number,
  actualCost: Number,
  currency: String,
  projectManager: ObjectId (ref: Users),
  teamMembers: [ObjectId] (ref: Users),
  milestones: [{
    name: String,
    dueDate: Date,
    completed: Boolean,
    completedAt: Date
  }],
  timeEntries: [{
    userId: ObjectId (ref: Users),
    description: String,
    hours: Number,
    date: Date,
    billable: Boolean,
    rate: Number
  }],
  documents: [ObjectId] (ref: Documents),
  createdAt: Date,
  updatedAt: Date
}
```

### Invoices Collection
```javascript
{
  _id: ObjectId,
  companyId: ObjectId (ref: Companies),
  clientId: ObjectId (ref: Clients),
  projectId: ObjectId (ref: Projects),
  invoiceNumber: String (unique per company),
  status: String, // 'draft', 'sent', 'paid', 'overdue', 'cancelled'
  issueDate: Date,
  dueDate: Date,
  lineItems: [{
    description: String,
    quantity: Number,
    rate: Number,
    amount: Number,
    serviceId: ObjectId (ref: Services)
  }],
  subtotal: Number,
  taxRate: Number,
  taxAmount: Number,
  discountRate: Number,
  discountAmount: Number,
  total: Number,
  currency: String,
  notes: String,
  terms: String,
  payments: [{
    amount: Number,
    date: Date,
    method: String,
    transactionId: String,
    notes: String
  }],
  emailHistory: [{
    sentAt: Date,
    recipient: String,
    subject: String,
    status: String
  }],
  pdfPath: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Transactions Collection
```javascript
{
  _id: ObjectId,
  companyId: ObjectId (ref: Companies),
  type: String, // 'income', 'expense'
  amount: Number,
  currency: String,
  date: Date,
  description: String,
  category: String,
  subcategory: String,
  payee: String,
  clientId: ObjectId (ref: Clients),
  projectId: ObjectId (ref: Projects),
  invoiceId: ObjectId (ref: Invoices),
  taxDeductible: Boolean,
  taxCategory: String,
  paymentMethod: String,
  bankAccount: String,
  receiptPath: String,
  reconciled: Boolean,
  reconciledAt: Date,
  tags: [String],
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Services Collection
```javascript
{
  _id: ObjectId,
  companyId: ObjectId (ref: Companies),
  name: String,
  description: String,
  category: String,
  price: Number,
  currency: String,
  billingType: String, // 'hourly', 'fixed', 'monthly'
  taxable: Boolean,
  isActive: Boolean,
  priceHistory: [{
    price: Number,
    effectiveDate: Date,
    notes: String
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### SupportTickets Collection
```javascript
{
  _id: ObjectId,
  companyId: ObjectId (ref: Companies),
  clientId: ObjectId (ref: Clients),
  ticketNumber: String (unique per company),
  subject: String,
  description: String,
  priority: String, // 'low', 'medium', 'high', 'critical'
  status: String, // 'open', 'in_progress', 'waiting', 'resolved', 'closed'
  category: String,
  assignedTo: ObjectId (ref: Users),
  createdBy: ObjectId (ref: Users),
  communications: [{
    from: String,
    to: String,
    message: String,
    type: String, // 'note', 'email', 'call'
    timestamp: Date,
    internal: Boolean
  }],
  timeEntries: [{
    userId: ObjectId (ref: Users),
    description: String,
    hours: Number,
    date: Date,
    billable: Boolean
  }],
  resolution: String,
  resolvedAt: Date,
  closedAt: Date,
  satisfactionRating: Number,
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Documents Collection
```javascript
{
  _id: ObjectId,
  companyId: ObjectId (ref: Companies),
  fileName: String,
  originalName: String,
  fileSize: Number,
  mimeType: String,
  filePath: String,
  folder: String,
  tags: [String],
  description: String,
  uploadedBy: ObjectId (ref: Users),
  accessPermissions: {
    public: Boolean,
    users: [ObjectId] (ref: Users),
    roles: [String]
  },
  relatedTo: {
    type: String, // 'client', 'project', 'invoice', 'ticket'
    id: ObjectId
  },
  version: Number,
  versions: [{
    version: Number,
    filePath: String,
    uploadedBy: ObjectId (ref: Users),
    uploadedAt: Date,
    notes: String
  }],
  downloadCount: Number,
  lastAccessed: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## Indexes

### Users Collection
```javascript
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ companyId: 1 })
db.users.createIndex({ companyId: 1, role: 1 })
db.users.createIndex({ isActive: 1 })
```

### Clients Collection
```javascript
db.clients.createIndex({ companyId: 1 })
db.clients.createIndex({ companyId: 1, status: 1 })
db.clients.createIndex({ companyId: 1, name: 1 })
db.clients.createIndex({ email: 1 })
db.clients.createIndex({ companyId: 1, tags: 1 })
```

### Projects Collection
```javascript
db.projects.createIndex({ companyId: 1 })
db.projects.createIndex({ clientId: 1 })
db.projects.createIndex({ projectManager: 1 })
db.projects.createIndex({ companyId: 1, status: 1 })
db.projects.createIndex({ startDate: 1, endDate: 1 })
db.projects.createIndex({ "teamMembers": 1 })
```

### Invoices Collection
```javascript
db.invoices.createIndex({ companyId: 1, invoiceNumber: 1 }, { unique: true })
db.invoices.createIndex({ clientId: 1 })
db.invoices.createIndex({ projectId: 1 })
db.invoices.createIndex({ companyId: 1, status: 1 })
db.invoices.createIndex({ dueDate: 1 })
db.invoices.createIndex({ companyId: 1, issueDate: -1 })
```

### Transactions Collection
```javascript
db.transactions.createIndex({ companyId: 1 })
db.transactions.createIndex({ companyId: 1, type: 1 })
db.transactions.createIndex({ companyId: 1, date: -1 })
db.transactions.createIndex({ clientId: 1 })
db.transactions.createIndex({ projectId: 1 })
db.transactions.createIndex({ invoiceId: 1 })
db.transactions.createIndex({ companyId: 1, category: 1 })
db.transactions.createIndex({ reconciled: 1 })
```

### SupportTickets Collection
```javascript
db.supporttickets.createIndex({ companyId: 1, ticketNumber: 1 }, { unique: true })
db.supporttickets.createIndex({ clientId: 1 })
db.supporttickets.createIndex({ assignedTo: 1 })
db.supporttickets.createIndex({ companyId: 1, status: 1 })
db.supporttickets.createIndex({ companyId: 1, priority: 1 })
db.supporttickets.createIndex({ createdAt: -1 })
```

### Documents Collection
```javascript
db.documents.createIndex({ companyId: 1 })
db.documents.createIndex({ uploadedBy: 1 })
db.documents.createIndex({ "relatedTo.type": 1, "relatedTo.id": 1 })
db.documents.createIndex({ companyId: 1, folder: 1 })
db.documents.createIndex({ tags: 1 })
db.documents.createIndex({ fileName: "text", description: "text" })
```

### Services Collection
```javascript
db.services.createIndex({ companyId: 1 })
db.services.createIndex({ companyId: 1, isActive: 1 })
db.services.createIndex({ companyId: 1, category: 1 })
```

## Data Validation Rules

### Required Fields
- Users: email, password, firstName, lastName, role, companyId
- Companies: name, email
- Clients: companyId, name, email
- Projects: companyId, clientId, name, status
- Invoices: companyId, clientId, invoiceNumber, total
- Transactions: companyId, type, amount, date, description

### Business Logic Constraints
- Invoice numbers must be unique per company
- Support ticket numbers must be unique per company
- Users can only access data from their company
- Project budget cannot be negative
- Invoice total must equal sum of line items plus tax minus discount

### Data Integrity
- Soft deletes for critical business data (invoices, transactions)
- Audit trails for financial data changes
- Foreign key validation through application layer
- Cascading updates for related documents