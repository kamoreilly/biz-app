# Biz-App Component Library & Style Guide

## Brand Identity

**Logo:**
- Primary: "Biz-App" in Inter Bold, 24px
- Icon: Geometric "B" in circle, 32x32px
- Colors: Primary blue on white, white on dark backgrounds

**Brand Voice:**
- Professional yet approachable
- Clear and efficient
- Growth-focused

## Color System

**Primary Palette:**
```css
--primary-50: #EFF6FF
--primary-500: #3B82F6  /* Main brand color */
--primary-600: #2563EB
--primary-700: #1D4ED8
--primary-900: #1E3A8A
```

**Semantic Colors:**
```css
--success: #10B981
--warning: #F59E0B  
--error: #EF4444
--info: #06B6D4
```

**Neutral Palette:**
```css
--gray-50: #F9FAFB   /* Backgrounds */
--gray-100: #F3F4F6  /* Subtle borders */
--gray-300: #D1D5DB  /* Borders */
--gray-500: #6B7280  /* Secondary text */
--gray-700: #374151  /* Primary text */
--gray-900: #111827  /* Headings */
```

## Typography

**Font Stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Scale:**
```css
/* Headers */
--text-4xl: 36px / 40px  /* Page titles */
--text-3xl: 30px / 36px  /* Section headers */
--text-2xl: 24px / 32px  /* Card headers */
--text-xl: 20px / 28px   /* Subheadings */
--text-lg: 18px / 28px   /* Large body */

/* Body */
--text-base: 16px / 24px /* Default body */
--text-sm: 14px / 20px   /* Small text */
--text-xs: 12px / 16px   /* Labels, captions */
```

**Weights:**
- Regular: 400 (body text)
- Medium: 500 (labels, buttons)
- Semibold: 600 (subheadings)
- Bold: 700 (headings)

## Spacing System

```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
```

## Component Library

### Buttons

**Primary Button:**
```css
.btn-primary {
  background: var(--primary-500);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
}
.btn-primary:hover { background: var(--primary-600); }
```

**Secondary Button:**
```css
.btn-secondary {
  background: white;
  color: var(--gray-700);
  border: 1px solid var(--gray-300);
  padding: 12px 24px;
  border-radius: 6px;
}
```

**Button Sizes:**
- Small: 8px 16px, 12px text
- Medium: 12px 24px, 14px text (default)
- Large: 16px 32px, 16px text

### Form Elements

**Input Field:**
```css
.input {
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 14px;
  width: 100%;
}
.input:focus {
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

**Label:**
```css
.label {
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-700);
  margin-bottom: 4px;
}
```

**Select Dropdown:**
```css
.select {
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  padding: 12px 40px 12px 16px;
  background: white url("chevron-down.svg") no-repeat right 12px center;
}
```

### Cards

**Basic Card:**
```css
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
}
```

**Stats Card:**
```css
.stats-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  border-left: 4px solid var(--primary-500);
}
```

### Table

**Data Table:**
```css
.table {
  width: 100%;
  border-collapse: collapse;
}
.table th {
  text-align: left;
  padding: 12px 16px;
  background: var(--gray-50);
  font-weight: 600;
  border-bottom: 1px solid var(--gray-200);
}
.table td {
  padding: 16px;
  border-bottom: 1px solid var(--gray-100);
}
.table tr:hover {
  background: var(--gray-50);
}
```

### Status Indicators

**Status Badges:**
```css
.badge {
  display: inline-flex;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}
.badge-success { background: #D1FAE5; color: #065F46; }
.badge-warning { background: #FEF3C7; color: #92400E; }
.badge-error { background: #FEE2E2; color: #991B1B; }
```

**Progress Bar:**
```css
.progress {
  width: 100%;
  height: 8px;
  background: var(--gray-200);
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: var(--primary-500);
  transition: width 0.3s ease;
}
```

### Navigation

**Sidebar:**
```css
.sidebar {
  width: 240px;
  background: white;
  border-right: 1px solid var(--gray-200);
  height: 100vh;
}
.nav-item {
  padding: 12px 16px;
  color: var(--gray-600);
  border-radius: 6px;
  margin: 4px 8px;
}
.nav-item.active {
  background: var(--primary-50);
  color: var(--primary-700);
}
```

**Breadcrumb:**
```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--gray-500);
}
.breadcrumb-separator::before {
  content: "/";
  margin: 0 8px;
}
```

### Modals

**Modal Overlay:**
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: white;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-header {
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--gray-200);
}
.modal-body {
  padding: 20px 24px;
}
```

### Icons

**Icon System:**
- Heroicons (outline for 16px, solid for 12px)
- Consistent 16px or 20px sizes
- Color: var(--gray-500) default, contextual colors for states

**Common Icons:**
- Plus, Edit, Trash, Eye, Download
- ArrowUp/Down for sorting
- Check, X, Warning, Info for states

### Layout Grid

**Container:**
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

**Grid System:**
```css
.grid {
  display: grid;
  gap: 24px;
}
.grid-cols-1 { grid-template-columns: 1fr; }
.grid-cols-2 { grid-template-columns: 1fr 1fr; }
.grid-cols-3 { grid-template-columns: 1fr 1fr 1fr; }
.grid-cols-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }
```

### Responsive Breakpoints

```css
/* Mobile first approach */
--xs: 320px
--sm: 640px   /* Tablet */
--md: 768px   /* Small desktop */
--lg: 1024px  /* Desktop */
--xl: 1280px  /* Large desktop */
```

### Animation

**Transitions:**
```css
--transition-fast: 150ms ease
--transition-normal: 250ms ease
--transition-slow: 350ms ease
```

**Hover Effects:**
```css
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Dark Mode Support

**CSS Variables:**
```css
[data-theme="dark"] {
  --gray-50: #1F2937;
  --gray-100: #374151;
  --gray-900: #F9FAFB;
  /* Invert gray scale for dark mode */
}
```

This component library ensures visual consistency and provides a scalable foundation for development teams.