import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/psn-ypg`);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};
export default connectDB;
