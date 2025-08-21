import mongoose from "mongoose";

// Connect to MongoDB
try {
  await mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/biz-app");
  console.log("✅ Connected to MongoDB successfully");
} catch (error) {
  console.error("❌ Failed to connect to MongoDB:", error);
  process.exit(1);
}

// Get the native MongoDB client for Better Auth adapter
const client = mongoose.connection.getClient();
export { client };
