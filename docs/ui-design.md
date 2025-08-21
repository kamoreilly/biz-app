# Biz-App UI/UX Design Mockups

## Design System

**Colors:**
- Primary: #3B82F6 (Blue)
- Success: #10B981 (Green) 
- Warning: #F59E0B (Amber)
- Error: #EF4444 (Red)
- Gray scale: #F9FAFB to #111827

**Typography:**
- Headers: Inter, 24px-32px, Bold
- Body: Inter, 14px-16px, Regular
- Small text: Inter, 12px-14px, Medium

**Layout:**
- Sidebar: 240px fixed width
- Main content: Responsive grid
- Cards: 8px border radius, subtle shadow
- Buttons: 6px border radius, 40px height

## 1. Dashboard

**Layout Structure:**
```
┌─ Sidebar ─┬─────── Header (Breadcrumb + User Menu) ──────┐
│           │                                              │
│ Navigation│  KPI Cards Row (4 cards)                    │
│           │  ┌─Revenue─┐┌─Expenses─┐┌─Profit─┐┌─Outstanding─┐
│ • Dashboard│  │$15,000 ││ $8,000  ││$7,000 ││    $12,500   │
│ • Clients │  │+25% ↗  ││ +6.7% ↗ ││+55% ↗││   5 invoices │
│ • Projects│  └────────┘└─────────┘└──────┘└──────────────┘
│ • Invoices│                                              │
│ • Support │  Recent Activity Feed     Quick Actions      │
│ • Analytics│  ┌─────────────────────┐ ┌─────────────────┐  │
│ • Settings│  │○ Payment received   │ │[+ New Invoice] │  │
│           │  │○ Project completed  │ │[+ Add Client]  │  │
│           │  │○ New support ticket │ │[+ New Project] │  │
│           │  └─────────────────────┘ └─────────────────┘  │
└───────────┴──────────────────────────────────────────────┘
```

**Key Components:**
- KPI cards with trend indicators and color coding
- Activity feed with timestamps and icons
- Quick action buttons with primary styling
- Chart widget showing revenue trends (line chart)

## 2. Client List

**Layout:**
```
┌─ Header ──────────────────────────────────────────────┐
│ Clients (45) [+ Add Client] [Search box] [Filter ▼] │
├───────────────────────────────────────────────────────┤
│ Table View                                            │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Name ↑     Contact        Status    Projects Total │ │
│ │ TechStart  sarah@tech...  ●Active   5        $25K │ │
│ │ MegaCorp   mike@mega...   ●Active   3        $45K │ │
│ │ StartupXYZ lisa@start...  ○Inactive 1        $5K  │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                       │
│ Pagination: ← 1 2 3 → (45 total)                    │
└───────────────────────────────────────────────────────┘
```

**Interactive Elements:**
- Sortable column headers
- Status indicators with color coding
- Clickable rows leading to client detail
- Bulk action checkboxes
- Search with live filtering

## 3. Client Detail Page

**Layout:**
```
┌─ Header ──────────────────────────────────────────────┐
│ ← Clients / TechStart Corp                   [Edit]  │
├─ Client Info Card ─────────┬─ Quick Stats ─────────────┤
│ TechStart Corp             │ Projects: 5              │
│ sarah@techstart.com        │ Total Invoiced: $25,000  │
│ +27 123 456 789           │ Outstanding: $2,500      │
│ Cape Town, South Africa    │ Avg Payment: 28 days     │
├─ Tabs ─────────────────────┴──────────────────────────┤
│ [Projects] [Invoices] [Documents] [Communication]     │
├─ Projects Tab Content ─────────────────────────────────┤
│ ┌─ Project Cards ──────────────────────────────────────┐ │
│ │ Website Redesign        Status: In Progress      │ │
│ │ Budget: $15K | Spent: $8.5K | Progress: 65%     │ │
│ │ Due: Sep 1, 2025                                 │ │
│ └──────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────┘
```

## 4. Invoice Creation

**Multi-step Layout:**
```
┌─ Header ──────────────────────────────────────────────┐
│ Create Invoice                              [Cancel]  │
├─ Progress Steps ───────────────────────────────────────┤
│ ●──●──○──○  1.Client 2.Items 3.Details 4.Review     │
├─ Form Content ─────────────────────────────────────────┤
│ Client Selection                                      │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Search clients...        ▼]                       │ │
│ │ Selected: TechStart Corp                           │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                       │
│ Line Items                              [+ Add Item]  │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Description    Qty  Rate    Amount         [×]     │ │
│ │ Web Development 40   $100    $4,000       [×]     │ │
│ │ Project Mgmt    10   $120    $1,200       [×]     │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                       │
│                              Subtotal: $5,200        │
│                              Tax (15%): $780         │
│                              Total: $5,980           │
│                                                       │
│                    [Back] [Continue]                  │
└───────────────────────────────────────────────────────┘
```

## 5. Project Dashboard

**Grid Layout:**
```
┌─ Header + Filters ─────────────────────────────────────┐
│ Projects (8) [+ New] [All▼] [Active▼] [Search...]    │
├─ Project Cards Grid ───────────────────────────────────┤
│ ┌─ Card 1 ──────────┐ ┌─ Card 2 ──────────┐ ┌─ Card 3─┐ │
│ │ Website Redesign  │ │ Mobile App Dev    │ │ Logo    │ │
│ │ TechStart Corp    │ │ MegaCorp         │ │ StartupX│ │
│ │ ████████░░ 65%    │ │ ███░░░░░░░ 30%    │ │ Done ✓ │ │
│ │ $8.5K / $15K     │ │ $15K / $50K      │ │ $3K    │ │
│ │ Due: Sep 1       │ │ Due: Dec 1       │ │ Aug 20 │ │
│ │ John Doe         │ │ Sarah Smith      │ │ Mike   │ │
│ └──────────────────┘ └──────────────────┘ └────────┘ │
└───────────────────────────────────────────────────────┘
```

**Progress Indicators:**
- Color-coded progress bars (green: on track, yellow: at risk, red: delayed)
- Budget utilization bars
- Status badges (Not Started, In Progress, On Hold, Completed)

## 6. Support Tickets

**List + Detail Layout:**
```
┌─ Ticket List (Left 40%) ─┬─ Ticket Detail (Right 60%) ────┐
│ [+ New Ticket] [Filter▼] │ Ticket #TICK-2025-001          │
│ ┌─ Ticket Card ─────────┐ │ Server connectivity issues     │
│ │ TICK-001 🔴 Critical  │ │ Client: TechStart Corp         │
│ │ Server issues         │ │ Priority: High | Status: Open  │
│ │ TechStart Corp        │ │ Assigned: John Doe             │
│ │ 2 hours ago          │ │ Created: Aug 21, 09:00         │
│ └───────────────────────┘ │                               │
│ ┌─ Ticket Card ─────────┐ │ ┌─ Communication Thread ─────┐ │
│ │ TICK-002 🟡 Medium   │ │ │ Client reported server...   │ │
│ │ Email not working     │ │ │ 09:00 - Sarah (Client)     │ │
│ │ MegaCorp             │ │ │                           │ │
│ │ 1 day ago            │ │ │ Investigating the issue... │ │
│ └───────────────────────┘ │ │ 09:15 - John (Internal)   │ │
│                          │ └───────────────────────────┘ │
│                          │ [Add Note] [Update Status]    │
└──────────────────────────┴────────────────────────────────┘
```

## 7. Analytics Dashboard

**Chart-Heavy Layout:**
```
┌─ Header + Date Range ──────────────────────────────────┐
│ Analytics [Last 30 days ▼] [Export] [Schedule]       │
├─ Revenue Chart (Full Width) ───────────────────────────┤
│ Revenue Trend                                         │
│     $20K┌─────────────────────────────────────────────┐│
│     $15K│     ╭─╮                                     ││
│     $10K│   ╭─╯ ╰─╮                                   ││
│      $5K│ ╭─╯     ╰─╮                                 ││
│       $0└─────────────────────────────────────────────┘│
│          Jul    Aug    Sep    Oct    Nov    Dec       │
├─ Charts Row ───────────────────────────────────────────┤
│ ┌─ Client Revenue ─┐ ┌─ Project Status ─┐ ┌─ Expenses ─┐ │
│ │ TechStart 40%   │ │ Completed 60%   │ │ Office 30% │ │
│ │ MegaCorp  35%   │ │ In Progress 25% │ │ Software 25%│ │
│ │ Others   25%    │ │ Not Started 15% │ │ Travel 20% │ │
│ │ (Pie Chart)     │ │ (Donut Chart)   │ │ (Bar Chart)│ │
│ └─────────────────┘ └─────────────────┘ └────────────┘ │
└───────────────────────────────────────────────────────┘
```

## 8. Settings Page

**Tab-Based Layout:**
```
┌─ Settings Tabs ────────────────────────────────────────┐
│ [Company] [Users] [Billing] [Integrations] [Security] │
├─ Company Tab Content ──────────────────────────────────┤
│ Company Profile                                       │
│ ┌─ Logo Upload ──┐ ┌─ Company Details ────────────────┐ │
│ │ [Upload Image] │ │ Company Name: [Biz Solutions]   │ │
│ │     [Logo]     │ │ Email: [info@bizsolutions.com] │ │
│ │   150x150px    │ │ Phone: [+27 123 456 789]       │ │
│ └────────────────┘ │ Address: [123 Business St...]   │ │
│                    │ Tax ID: [123456789]             │ │
│ Invoice Settings   │ └─────────────────────────────────┘ │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Invoice Prefix: [INV]                               │ │
│ │ Next Number: [2025-001]                             │ │
│ │ Default Terms: [Net 30 days]                        │ │
│ │ Tax Rate: [15%]                                     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                           [Save Changes] │
└───────────────────────────────────────────────────────┘
```

## Mobile Responsive Design

**Mobile Dashboard (375px width):**
```
┌─ Header ──────────────────┐
│ ☰ Biz-App        👤      │
├─ KPI Cards (Stacked) ─────┤
│ Revenue: $15,000 (+25%)   │
│ Expenses: $8,000 (+6.7%)  │
│ Profit: $7,000 (+55%)     │
│ Outstanding: $12,500 (5)  │
├─ Quick Actions ───────────┤
│ [+ Invoice] [+ Client]    │
│ [+ Project] [+ Ticket]    │
├─ Recent Activity ─────────┤
│ ○ Payment received        │
│ ○ Project completed       │
│ ○ New support ticket      │
└───────────────────────────┘
```

## Design Patterns

**Data Tables:**
- Sticky headers
- Sortable columns with visual indicators
- Row hover states
- Pagination with "Show more" option on mobile

**Forms:**
- Floating labels
- Inline validation with error states
- Progress indicators for multi-step forms
- Auto-save indicators

**Status Indicators:**
- Color-coded dots (green/yellow/red)
- Badge styles for categories
- Progress bars with percentage labels

**Navigation:**
- Collapsible sidebar on desktop
- Bottom tab bar on mobile
- Breadcrumb navigation
- Search overlay on mobile

This design system ensures consistency while providing intuitive user flows for all business management tasks.