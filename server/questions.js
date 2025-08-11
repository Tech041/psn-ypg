import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Pharmacology from "./models/pharmacology.model.js";

dotenv.config();

const __dirname = path.resolve();
const filePath = path.join(__dirname, "data", "pharmacology.questions.json");
const rawData = fs.readFileSync(filePath, "utf-8");
const parsed = JSON.parse(rawData);
const mcqs = Array.isArray(parsed) ? parsed : parsed.questions || [];
console.log("✅ Parsed type:", Array.isArray(mcqs) ? "Array" : typeof mcqs);
console.log("🔍 First entry:", mcqs[0]);

const seedDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/psn-ypg`);
    console.log("✅ Connected to MongoDB");

    await Pharmacology.insertMany(mcqs);

    console.log("🌱 MCQs seeded successfully");
  } catch (error) {
    console.error("❌ Seeding error:", error);
  } finally {
    await mongoose.disconnect();
  }
};

seedDB();
