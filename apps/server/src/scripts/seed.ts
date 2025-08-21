import "dotenv/config";
import mongoose from "mongoose";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { Company } from "../db/models/company.model.js";
import { User } from "../db/models/auth.model.js";
import { client } from "../db/index.js";

// Types for our seed data
interface SeedConfig {
  company: {
    name: string;
    email: string;
    phone?: string;
    taxId?: string;
  };
  adminUser: {
    name: string;
    email: string;
    password: string;
    role: string;
  };
}

// Default seed configuration
const DEFAULT_SEED_CONFIG: SeedConfig = {
  company: {
    name: process.env.DEFAULT_COMPANY_NAME || "Default Company",
    email: process.env.DEFAULT_COMPANY_EMAIL || "info@defaultcompany.com",
    phone: process.env.DEFAULT_COMPANY_PHONE,
    taxId: process.env.DEFAULT_COMPANY_TAX_ID,
  },
  adminUser: {
    name: process.env.ADMIN_USER_NAME || "System Administrator",
    email: process.env.ADMIN_USER_EMAIL || "admin@example.com",
    password: process.env.ADMIN_USER_PASSWORD || "Admin123!",
    role: process.env.ADMIN_USER_ROLE || "owner",
  },
};


/**
 * Check if a company already exists
 */
async function checkCompanyExists(email: string): Promise<boolean> {
  try {
    const existingCompany = await Company.findOne({ email });
    return !!existingCompany;
  } catch (error) {
    console.error("Error checking if company exists:", error);
    throw error;
  }
}

/**
 * Check if a user already exists
 */
async function checkUserExists(email: string): Promise<boolean> {
  try {
    const existingUser = await User.findOne({ email });
    return !!existingUser;
  } catch (error) {
    console.error("Error checking if user exists:", error);
    throw error;
  }
}

/**
 * Create a new company
 */
async function createCompany(companyData: SeedConfig["company"]) {
  try {
    console.log(`Creating company: ${companyData.name}`);
    
    const company = new Company({
      _id: new mongoose.Types.ObjectId().toString(),
      name: companyData.name,
      email: companyData.email,
      phone: companyData.phone,
      taxId: companyData.taxId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const savedCompany = await company.save();
    console.log(`✅ Company created successfully: ${savedCompany.name} (ID: ${savedCompany._id})`);
    return savedCompany;
  } catch (error) {
    console.error("❌ Error creating company:", error);
    throw error;
  }
}

/**
 * Create an admin user using Better Auth's signUp method
 */
async function createAdminUser(auth: any, userData: SeedConfig["adminUser"]) {
  try {
    console.log(`Creating admin user: ${userData.name}`);
    
    // Use Better Auth's signUp method to create user with proper password hashing
    const result = await auth.api.signUp({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });

    if (result.error) {
      if (result.error.code === "USER_ALREADY_EXISTS") {
        console.log(`ℹ️  User already exists: ${userData.email}`);
        return null;
      }
      throw new Error(result.error.message);
    }

    // Mark the user as verified for admin accounts
    await User.findOneAndUpdate(
      { email: userData.email },
      { emailVerified: true, updatedAt: new Date() }
    );

    console.log(`✅ Admin user created successfully: ${userData.email}`);
    console.log(`📝 User role: ${userData.role}`);
    console.log(`🔐 Password set securely using Better Auth hashing`);
    
    return result.data?.user;
  } catch (error: any) {
    if (error.code === 11000 || error.message?.includes("duplicate key")) {
      console.log(`ℹ️  User already exists: ${userData.email}`);
      return null;
    }
    console.error("❌ Error creating admin user:", error);
    throw error;
  }
}

/**
 * Main seeding function
 */
async function seedDatabase(auth: any, config: SeedConfig = DEFAULT_SEED_CONFIG) {
  console.log("🚀 Starting database seeding process...");
  console.log("==========================================");

  try {
    // Check if company already exists
    const companyExists = await checkCompanyExists(config.company.email);
    if (companyExists) {
      console.log(`ℹ️  Company already exists: ${config.company.email}`);
      console.log("Skipping company creation...");
    } else {
      await createCompany(config.company);
    }

    // Check if user already exists
    const userExists = await checkUserExists(config.adminUser.email);
    if (userExists) {
      console.log(`ℹ️  User already exists: ${config.adminUser.email}`);
      console.log("Skipping user creation...");
    } else {
      await createAdminUser(auth, config.adminUser);
    }

    console.log("==========================================");
    console.log("✅ Database seeding completed successfully!");
    console.log("\n📋 Summary:");
    console.log(`   - Company: ${config.company.name} (${config.company.email})`);
    console.log(`   - Admin User: ${config.adminUser.name} (${config.adminUser.email})`);
    console.log(`   - Role: ${config.adminUser.role}`);
    
  } catch (error) {
    console.error("❌ Database seeding failed:", error);
    process.exit(1);
  }
}

/**
 * Handle command line execution
 */
async function main() {
  // Validate required environment variables
  const requiredEnvVars = ["DATABASE_URL", "BETTER_AUTH_SECRET"];
  const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingEnvVars.length > 0) {
    console.error("❌ Missing required environment variables:");
    missingEnvVars.forEach(varName => console.error(`   - ${varName}`));
    console.log("\n💡 Make sure to set these variables in your .env file:");
    console.log("   DATABASE_URL=your_mongodb_connection_string");
    console.log("   BETTER_AUTH_SECRET=your_better_auth_secret");
    process.exit(1);
  }

  // Connect to database
  try {
    console.log("🔗 Connecting to database...");
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log("✅ Connected to database successfully");
  } catch (error) {
    console.error("❌ Failed to connect to database:", error);
    process.exit(1);
  }

  // Initialize Better Auth
  console.log("🔧 Initializing Better Auth...");
  let auth;
  try {
    auth = betterAuth({
      database: mongodbAdapter(client.db("biz-app")),
      trustedOrigins: [process.env.CORS_ORIGIN || ""],
      emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        passwordValidation: {
          minLength: 8,
          requireUppercase: true,
          requireLowercase: true,
          requireNumber: true,
          requireSpecialChar: false,
        },
      },
    });
    console.log("✅ Better Auth initialized successfully");
  } catch (error) {
    console.error("❌ Failed to initialize Better Auth:", error);
    process.exit(1);
  }

  // Run seeding
  await seedDatabase(auth);

  // Close connection
  await mongoose.connection.close();
  console.log("🔌 Database connection closed");
  process.exit(0);
}

// Run if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error("❌ Unhandled error in seeding script:", error);
    process.exit(1);
  });
}

export { seedDatabase, DEFAULT_SEED_CONFIG };
export type { SeedConfig };