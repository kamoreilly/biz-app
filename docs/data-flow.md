# Biz-App Data Flow Diagrams (DFDs)

## Level 0 - Context Diagram

```
External Entities → System Boundary → Data Stores

[Business Owner] ──────┐
[Project Manager] ─────┤
[Employee] ────────────┼─→ [Biz-App System] ←─→ [MongoDB Database]
[Client] ──────────────┤                    ←─→ [File Storage]
[Email Service] ───────┘                    ←─→ [PDF Generator]
```

## Level 1 - Main System Processes

```
1.0 [User Management] ←─→ D1 [Users]
         ↕
2.0 [Client Management] ←─→ D2 [Clients]
         ↕
3.0 [Project Management] ←─→ D3 [Projects]
         ↕
4.0 [Invoice Management] ←─→ D4 [Invoices]
         ↕
5.0 [Financial Management] ←─→ D5 [Transactions]
         ↕
6.0 [Support Management] ←─→ D6 [Support Tickets]
         ↕
7.0 [Document Management] ←─→ D7 [Documents]
         ↕
8.0 [Analytics & Reporting] ←─→ D8 [Reports]
```

## DFD 1: Invoice Creation Process

```
[User] ──(invoice request)──→ [1.1 Create Invoice]
                                      ↓
                               (client lookup)
                                      ↓
                              [1.2 Validate Client] ←─→ D2 [Clients]
                                      ↓
                               (client data)
                                      ↓
                              [1.3 Add Line Items] ←─→ D9 [Services]
                                      ↓
                               (invoice data)
                                      ↓
                              [1.4 Calculate Totals]
                                      ↓
                               (completed invoice)
                                      ↓
                              [1.5 Save Invoice] ─→ D4 [Invoices]
                                      ↓
                               (invoice PDF)
                                      ↓
                              [1.6 Generate PDF] ←─→ [PDF Service]
                                      ↓
                               (email notification)
                                      ↓
                              [1.7 Send Email] ──→ [Email Service]
                                      ↓
                               (confirmation)
                                      ↓
                                   [User]
```

## DFD 2: Client Management Process

```
[User] ──(client data)──→ [2.1 Validate Client Data]
                                      ↓
                               (validated data)
                                      ↓
                              [2.2 Check Duplicates] ←─→ D2 [Clients]
                                      ↓
                               (unique client)
                                      ↓
                              [2.3 Save Client] ─→ D2 [Clients]
                                      ↓
                               (client ID)
                                      ↓
                              [2.4 Update Relationships] ←─→ D3 [Projects]
                                                        ←─→ D4 [Invoices]
                                      ↓
                               (success confirmation)
                                      ↓
                                   [User]

[User] ──(search query)──→ [2.5 Search Clients] ←─→ D2 [Clients]
                                      ↓
                               (client list)
                                      ↓
                                   [User]
```

## DFD 3: Project Management Process

```
[User] ──(project data)──→ [3.1 Create Project]
                                      ↓
                               (project details)
                                      ↓
                              [3.2 Assign Team] ←─→ D1 [Users]
                                      ↓
                               (team assignments)
                                      ↓
                              [3.3 Set Budget] 
                                      ↓
                               (project setup)
                                      ↓
                              [3.4 Save Project] ─→ D3 [Projects]

[Project Manager] ──(time entry)──→ [3.5 Track Time]
                                           ↓
                                    (time data)
                                           ↓
                                   [3.6 Update Budget] ←─→ D3 [Projects]
                                           ↓
                                    (budget status)
                                           ↓
                                   [3.7 Check Alerts]
                                           ↓
                                    (alert if needed)
                                           ↓
                                 [Project Manager]

[Client] ──(status request)──→ [3.8 Generate Status] ←─→ D3 [Projects]
                                      ↓
                               (status report)
                                      ↓
                                   [Client]
```

## DFD 4: Support Ticket Process

```
[Client] ──(support request)──→ [4.1 Create Ticket]
                                       ↓
                                (ticket data)
                                       ↓
                               [4.2 Assign Priority]
                                       ↓
                                (prioritized ticket)
                                       ↓
                               [4.3 Auto-assign] ←─→ D1 [Users]
                                       ↓
                                (assigned ticket)
                                       ↓
                               [4.4 Save Ticket] ─→ D6 [Support Tickets]
                                       ↓
                                (notification)
                                       ↓
                               [4.5 Notify Team] ──→ [Email Service]

[Technician] ──(progress update)──→ [4.6 Update Status] ←─→ D6 [Support Tickets]
                                           ↓
                                    (status change)
                                           ↓
                                   [4.7 Notify Client] ──→ [Email Service]

[Technician] ──(resolution)──→ [4.8 Close Ticket] ←─→ D6 [Support Tickets]
                                      ↓
                               (billable time)
                                      ↓
                               [4.9 Create Invoice] ←─→ D4 [Invoices]
```

## DFD 5: Financial Transaction Process

```
[User] ──(transaction data)──→ [5.1 Validate Transaction]
                                      ↓
                               (validated data)
                                      ↓
                              [5.2 Categorize] ←─→ D10 [Categories]
                                      ↓
                               (categorized transaction)
                                      ↓
                              [5.3 Calculate Tax Impact]
                                      ↓
                               (tax-adjusted transaction)
                                      ↓
                              [5.4 Save Transaction] ─→ D5 [Transactions]
                                      ↓
                               (transaction ID)
                                      ↓
                              [5.5 Update Balances] ←─→ D11 [Account Balances]
                                      ↓
                               (updated balances)
                                      ↓
                              [5.6 Check Reconciliation] ←─→ D12 [Bank Data]
                                      ↓
                               (reconciliation status)
                                      ↓
                                   [User]
```

## DFD 6: Analytics and Reporting Process

```
[User] ──(report request)──→ [6.1 Select Report Type]
                                     ↓
                              (report parameters)
                                     ↓
                             [6.2 Validate Parameters]
                                     ↓
                              (validated parameters)
                                     ↓
                             [6.3 Aggregate Data] ←─→ D3 [Projects]
                                     ↑            ←─→ D4 [Invoices] 
                                     ↑            ←─→ D5 [Transactions]
                                     ↑            ←─→ D2 [Clients]
                                     ↓
                              (aggregated data)
                                     ↓
                             [6.4 Calculate Metrics]
                                     ↓
                              (calculated metrics)
                                     ↓
                             [6.5 Format Report]
                                     ↓
                              (formatted report)
                                     ↓
                             [6.6 Generate Output] ──→ [PDF Service]
                                     ↓              ──→ [Excel Service]
                              (final report)
                                     ↓
                                  [User]
```

## DFD 7: Document Management Process

```
[User] ──(file upload)──→ [7.1 Validate File]
                                 ↓
                          (validated file)
                                 ↓
                         [7.2 Virus Scan] ←─→ [Security Service]
                                 ↓
                          (safe file)
                                 ↓
                         [7.3 Generate Metadata]
                                 ↓
                          (file metadata)
                                 ↓
                         [7.4 Store File] ──→ [File Storage]
                                 ↓
                          (storage location)
                                 ↓
                         [7.5 Save Metadata] ─→ D7 [Documents]
                                 ↓
                          (confirmation)
                                 ↓
                              [User]

[User] ──(search query)──→ [7.6 Search Documents] ←─→ D7 [Documents]
                                   ↓
                            (search results)
                                   ↓
                           [7.7 Check Permissions] ←─→ D1 [Users]
                                   ↓
                            (filtered results)
                                   ↓
                                [User]
```

## Data Stores

**D1 [Users]**: Authentication, profiles, permissions  
**D2 [Clients]**: Client information, contacts, preferences  
**D3 [Projects]**: Project data, timelines, budgets, status  
**D4 [Invoices]**: Invoice details, line items, payment status  
**D5 [Transactions]**: Financial transactions, categories, tax data  
**D6 [Support Tickets]**: Support requests, status, resolution  
**D7 [Documents]**: File metadata, permissions, storage references  
**D8 [Reports]**: Generated reports, configurations, schedules  
**D9 [Services]**: Service catalog, pricing, descriptions  
**D10 [Categories]**: Transaction categories, tax classifications  
**D11 [Account Balances]**: Current financial balances, summaries  
**D12 [Bank Data]**: Bank transaction imports, reconciliation data

## Key Data Flows

**Real-time Updates**: Dashboard metrics, project status, payment notifications  
**Batch Processing**: Report generation, email campaigns, data backups  
**Event-driven**: Invoice payments, project milestones, support ticket status changes  
**Scheduled**: Daily backups, weekly reports, monthly financial summaries