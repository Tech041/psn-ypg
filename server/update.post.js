import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Post from "./models/post.model.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/psn-ypg`);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Connection failed:", error);
    process.exit(1);
  }
};

const updatePosts = async () => {
  try {
    const result = await Post.updateMany(
      { category: { $exists: false } },
      { $set: { category: "jobs" } }
    );
    console.log(
      `🔧 Updated ${result.modifiedCount} posts with category "jobs".`
    );
  } catch (error) {
    console.error("❌ Error updating posts:", error);
  } finally {
    mongoose.connection.close();
  }
};

const run = async () => {
  await connectDB();
  await updatePosts();
};

run();
