# Biz-App API Specifications

## Base URL
```
Production: https://api.biz-app.com/v1
Development: http://localhost:3000/api/v1
```

## Authentication

### POST /auth/login
```json
Request:
{
  "email": "user@example.com",
  "password": "password123"
}

Response (200):
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "owner",
    "companyId": "company_id"
  }
}

Response (401):
{
  "success": false,
  "error": "Invalid credentials"
}
```

### POST /auth/logout
```json
Response (200):
{
  "success": true,
  "message": "Logged out successfully"
}
```

### POST /auth/refresh
```json
Response (200):
{
  "success": true,
  "token": "new_jwt_token"
}
```

## Users

### GET /users
```json
Response (200):
{
  "success": true,
  "data": [
    {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "role": "owner",
      "isActive": true,
      "lastLogin": "2025-08-21T10:30:00Z"
    }
  ]
}
```

### POST /users
```json
Request:
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "role": "manager",
  "permissions": ["clients.read", "projects.write"]
}

Response (201):
{
  "success": true,
  "data": {
    "id": "new_user_id",
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "role": "manager"
  }
}
```

## Clients

### GET /clients
```json
Query Parameters:
- page: number (default: 1)
- limit: number (default: 20)
- search: string
- status: string ('active', 'inactive', 'archived')

Response (200):
{
  "success": true,
  "data": [
    {
      "id": "client_id",
      "name": "TechStart Corp",
      "email": "contact@techstart.com",
      "phone": "+27123456789",
      "contactPerson": "Sarah Johnson",
      "status": "active",
      "totalProjects": 5,
      "totalInvoiced": 25000,
      "createdAt": "2025-01-15T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "pages": 3
  }
}
```

### GET /clients/:id
```json
Response (200):
{
  "success": true,
  "data": {
    "id": "client_id",
    "name": "TechStart Corp",
    "email": "contact@techstart.com",
    "phone": "+27123456789",
    "contactPerson": "Sarah Johnson",
    "address": {
      "street": "123 Tech Street",
      "city": "Cape Town",
      "state": "Western Cape",
      "zipCode": "8000",
      "country": "South Africa"
    },
    "paymentTerms": "Net 30",
    "status": "active",
    "notes": "Preferred client",
    "projects": [],
    "invoices": []
  }
}
```

### POST /clients
```json
Request:
{
  "name": "New Client Corp",
  "email": "contact@newclient.com",
  "phone": "+27987654321",
  "contactPerson": "Mike Wilson",
  "address": {
    "street": "456 Business Ave",
    "city": "Johannesburg",
    "state": "Gauteng",
    "zipCode": "2000",
    "country": "South Africa"
  },
  "paymentTerms": "Net 15"
}

Response (201):
{
  "success": true,
  "data": {
    "id": "new_client_id",
    "name": "New Client Corp",
    "email": "contact@newclient.com",
    "status": "active"
  }
}
```

### PUT /clients/:id
```json
Request:
{
  "name": "Updated Client Name",
  "phone": "+27111222333"
}

Response (200):
{
  "success": true,
  "data": {
    "id": "client_id",
    "name": "Updated Client Name",
    "phone": "+27111222333"
  }
}
```

## Projects

### GET /projects
```json
Query Parameters:
- status: string
- clientId: string
- projectManager: string

Response (200):
{
  "success": true,
  "data": [
    {
      "id": "project_id",
      "name": "Website Redesign",
      "clientName": "TechStart Corp",
      "status": "in_progress",
      "budget": 15000,
      "actualCost": 8500,
      "progress": 65,
      "startDate": "2025-07-01",
      "endDate": "2025-09-01",
      "projectManager": "John Doe"
    }
  ]
}
```

### POST /projects
```json
Request:
{
  "name": "Mobile App Development",
  "clientId": "client_id",
  "description": "iOS and Android app development",
  "startDate": "2025-09-01",
  "endDate": "2025-12-01",
  "budget": 50000,
  "projectManager": "user_id",
  "teamMembers": ["user_id_1", "user_id_2"]
}

Response (201):
{
  "success": true,
  "data": {
    "id": "new_project_id",
    "name": "Mobile App Development",
    "status": "not_started",
    "budget": 50000
  }
}
```

### PUT /projects/:id/status
```json
Request:
{
  "status": "completed",
  "notes": "Project completed successfully"
}

Response (200):
{
  "success": true,
  "data": {
    "id": "project_id",
    "status": "completed",
    "completedAt": "2025-08-21T15:30:00Z"
  }
}
```

## Invoices

### GET /invoices
```json
Query Parameters:
- status: string
- clientId: string
- startDate: string
- endDate: string

Response (200):
{
  "success": true,
  "data": [
    {
      "id": "invoice_id",
      "invoiceNumber": "INV-2025-001",
      "clientName": "TechStart Corp",
      "status": "sent",
      "total": 5000,
      "dueDate": "2025-09-15",
      "issueDate": "2025-08-15",
      "overdueDays": 0
    }
  ]
}
```

### POST /invoices
```json
Request:
{
  "clientId": "client_id",
  "projectId": "project_id",
  "dueDate": "2025-09-15",
  "lineItems": [
    {
      "description": "Web Development",
      "quantity": 40,
      "rate": 100,
      "amount": 4000,
      "serviceId": "service_id"
    },
    {
      "description": "Project Management",
      "quantity": 10,
      "rate": 120,
      "amount": 1200
    }
  ],
  "taxRate": 0.15,
  "notes": "Payment due within 30 days"
}

Response (201):
{
  "success": true,
  "data": {
    "id": "new_invoice_id",
    "invoiceNumber": "INV-2025-002",
    "subtotal": 5200,
    "taxAmount": 780,
    "total": 5980,
    "status": "draft"
  }
}
```

### POST /invoices/:id/send
```json
Request:
{
  "to": "client@example.com",
  "subject": "Invoice INV-2025-001",
  "message": "Please find attached your invoice."
}

Response (200):
{
  "success": true,
  "data": {
    "emailSent": true,
    "sentAt": "2025-08-21T16:00:00Z",
    "status": "sent"
  }
}
```

### POST /invoices/:id/payments
```json
Request:
{
  "amount": 2500,
  "date": "2025-08-21",
  "method": "bank_transfer",
  "notes": "Partial payment received"
}

Response (201):
{
  "success": true,
  "data": {
    "paymentId": "payment_id",
    "remainingBalance": 2500,
    "status": "partial"
  }
}
```

## Transactions

### GET /transactions
```json
Query Parameters:
- type: string ('income', 'expense')
- category: string
- startDate: string
- endDate: string

Response (200):
{
  "success": true,
  "data": [
    {
      "id": "transaction_id",
      "type": "expense",
      "amount": 150,
      "description": "Office supplies",
      "category": "Office Expenses",
      "date": "2025-08-20",
      "taxDeductible": true,
      "reconciled": false
    }
  ]
}
```

### POST /transactions
```json
Request:
{
  "type": "expense",
  "amount": 250,
  "description": "Software subscription",
  "category": "Software",
  "date": "2025-08-21",
  "paymentMethod": "credit_card",
  "taxDeductible": true
}

Response (201):
{
  "success": true,
  "data": {
    "id": "new_transaction_id",
    "type": "expense",
    "amount": 250,
    "category": "Software"
  }
}
```

## Support Tickets

### GET /support-tickets
```json
Response (200):
{
  "success": true,
  "data": [
    {
      "id": "ticket_id",
      "ticketNumber": "TICK-2025-001",
      "subject": "Server connectivity issues",
      "clientName": "TechStart Corp",
      "priority": "high",
      "status": "in_progress",
      "assignedTo": "John Doe",
      "createdAt": "2025-08-21T09:00:00Z"
    }
  ]
}
```

### POST /support-tickets
```json
Request:
{
  "clientId": "client_id",
  "subject": "Email not working",
  "description": "Unable to send or receive emails",
  "priority": "medium",
  "category": "Email Support"
}

Response (201):
{
  "success": true,
  "data": {
    "id": "new_ticket_id",
    "ticketNumber": "TICK-2025-002",
    "status": "open"
  }
}
```

### PUT /support-tickets/:id/status
```json
Request:
{
  "status": "resolved",
  "resolution": "Updated email server settings"
}

Response (200):
{
  "success": true,
  "data": {
    "id": "ticket_id",
    "status": "resolved",
    "resolvedAt": "2025-08-21T16:30:00Z"
  }
}
```

## Documents

### GET /documents
```json
Query Parameters:
- folder: string
- type: string
- relatedTo: string

Response (200):
{
  "success": true,
  "data": [
    {
      "id": "doc_id",
      "fileName": "contract.pdf",
      "fileSize": 245760,
      "folder": "Contracts",
      "uploadedBy": "John Doe",
      "uploadedAt": "2025-08-20T14:00:00Z",
      "downloadUrl": "/documents/download/doc_id"
    }
  ]
}
```

### POST /documents/upload
```json
Content-Type: multipart/form-data

Form Fields:
- file: (binary)
- folder: string
- description: string
- relatedTo: object

Response (201):
{
  "success": true,
  "data": {
    "id": "new_doc_id",
    "fileName": "uploaded_file.pdf",
    "fileSize": 123456,
    "downloadUrl": "/documents/download/new_doc_id"
  }
}
```

## Services

### GET /services
```json
Response (200):
{
  "success": true,
  "data": [
    {
      "id": "service_id",
      "name": "Web Development",
      "description": "Custom website development",
      "price": 100,
      "billingType": "hourly",
      "category": "Development",
      "isActive": true
    }
  ]
}
```

### POST /services
```json
Request:
{
  "name": "Mobile Development",
  "description": "iOS and Android app development",
  "price": 120,
  "billingType": "hourly",
  "category": "Development"
}

Response (201):
{
  "success": true,
  "data": {
    "id": "new_service_id",
    "name": "Mobile Development",
    "price": 120,
    "isActive": true
  }
}
```

## Analytics

### GET /analytics/dashboard
```json
Response (200):
{
  "success": true,
  "data": {
    "revenue": {
      "thisMonth": 15000,
      "lastMonth": 12000,
      "change": 25
    },
    "expenses": {
      "thisMonth": 8000,
      "lastMonth": 7500,
      "change": 6.67
    },
    "profit": {
      "thisMonth": 7000,
      "lastMonth": 4500,
      "change": 55.56
    },
    "outstandingInvoices": {
      "count": 5,
      "amount": 12500
    },
    "activeProjects": 8,
    "openTickets": 3
  }
}
```

### GET /analytics/reports/:type
```json
Query Parameters:
- startDate: string
- endDate: string
- clientId: string (optional)

Response (200):
{
  "success": true,
  "data": {
    "reportType": "profit-loss",
    "period": {
      "startDate": "2025-07-01",
      "endDate": "2025-07-31"
    },
    "income": [
      {
        "category": "Web Development",
        "amount": 15000
      }
    ],
    "expenses": [
      {
        "category": "Software",
        "amount": 500
      }
    ],
    "netProfit": 14500
  }
}
```

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": "Authentication required"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "error": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal server error"
}
```

## Rate Limiting
- 1000 requests per hour per authenticated user
- 100 requests per hour for unauthenticated endpoints

## Authentication
All protected endpoints require JWT token in Authorization header:
```
Authorization: Bearer <jwt_token>
```