# Database Seeding Script

This script provides a comprehensive database seeding solution for the application.

## Features

- ✅ Creates a default company if it doesn't exist
- ✅ Creates an admin user with proper role and permissions
- ✅ Uses idempotent operations (checks for existing records)
- ✅ Provides clear console output about the seeding process
- ✅ Uses environment variables for configuration
- ✅ Includes proper error handling and logging

## Usage

### 1. Set up environment variables

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
DATABASE_URL=mongodb://localhost:27017/your-database-name
BETTER_AUTH_SECRET=your-super-secret-key-here
CORS_ORIGIN=http://localhost:3000

# Optional: Customize seed data
DEFAULT_COMPANY_NAME=My Awesome Company
DEFAULT_COMPANY_EMAIL=info@mycompany.com
DEFAULT_COMPANY_PHONE=+1234567890
DEFAULT_COMPANY_TAX_ID=TAX123456789

ADMIN_USER_NAME=System Administrator
ADMIN_USER_EMAIL=admin@example.com
ADMIN_USER_PASSWORD=Admin123!
ADMIN_USER_ROLE=owner
```

### 2. Run the seed script

Using npm/yarn/bun:

```bash
# Using bun (recommended)
bun run seed

# Or using the direct script
bun run src/scripts/seed.ts
```

### 3. Verify the seeding

The script will output detailed information about the seeding process:

```
🚀 Starting database seeding process...
==========================================
🔗 Connecting to database...
✅ Connected to database successfully
Creating company: Default Company
✅ Company created successfully: Default Company (ID: 1234567890)
Creating admin user: System Administrator
✅ Admin user created successfully: admin@example.com (ID: 1234567890)
📝 User role: owner
⚠️  Note: Password is not set in this simplified approach. Use Better Auth endpoints for full functionality.
==========================================
✅ Database seeding completed successfully!

📋 Summary:
   - Company: Default Company (info@defaultcompany.com)
   - Admin User: System Administrator (admin@example.com)
   - Role: owner
🔌 Database connection closed
```

## Configuration Options

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | MongoDB connection string | Required |
| `BETTER_AUTH_SECRET` | Better Auth secret key | Required |
| `CORS_ORIGIN` | CORS origin for auth | `""` |
| `DEFAULT_COMPANY_NAME` | Default company name | `"Default Company"` |
| `DEFAULT_COMPANY_EMAIL` | Default company email | `"info@defaultcompany.com"` |
| `DEFAULT_COMPANY_PHONE` | Default company phone | Optional |
| `DEFAULT_COMPANY_TAX_ID` | Default company tax ID | Optional |
| `ADMIN_USER_NAME` | Admin user name | `"System Administrator"` |
| `ADMIN_USER_EMAIL` | Admin user email | `"admin@example.com"` |
| `ADMIN_USER_PASSWORD` | Admin user password | `"Admin123!"` |
| `ADMIN_USER_ROLE` | Admin user role | `"owner"` |

### Programmatic Usage

You can also use the seed function programmatically:

```typescript
import { seedDatabase } from './seed.js';

// With default configuration
await seedDatabase();

// With custom configuration
await seedDatabase({
  company: {
    name: "Custom Company",
    email: "custom@company.com",
    phone: "+1234567890"
  },
  adminUser: {
    name: "Custom Admin",
    email: "admin@custom.com",
    password: "CustomPass123!",
    role: "admin"
  }
});
```

## Idempotency

The script is designed to be idempotent - it will check if records already exist before creating them:

- ✅ Company existence check by email
- ✅ User existence check by email
- ✅ Duplicate key error handling
- ✅ Graceful skipping of existing records

## Error Handling

The script includes comprehensive error handling:

- ✅ Database connection errors
- ✅ Missing environment variables validation
- ✅ Duplicate record detection
- ✅ General error catching with proper logging

## Notes

- The user creation uses a simplified approach for seeding purposes
- For production user creation with proper password hashing, use the Better Auth endpoints
- The script creates users with `emailVerified: true` for admin accounts
- Role information is logged but not stored in the database (you may want to extend the User model for role storage)

## Extending

To add more seed data, extend the `SeedConfig` interface and update the `seedDatabase` function accordingly.