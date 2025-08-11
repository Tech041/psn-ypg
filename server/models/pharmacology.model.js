import mongoose, { Schema } from "mongoose";

const pharmacologySchema = new Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required"],
    },
    options: {
      type: [String],
      required: [true, "Options are required"],
    },
    correctAnswerIndex: {
      type: Number,
      required: [true, "Correct answer index is required"],
    },
    explanation: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Pharmacology = mongoose.model("Pharmacology", pharmacologySchema);
export default Pharmacology;
