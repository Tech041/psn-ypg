// models/tracker.model.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const trackerSchema = new Schema(
  {
    url: { type: String, required: true },
    timestamp: { type: Date, required: true },
    visitorId: { type: String, required: true },
  },
  { timestamps: true },
);

// Indexes for performance
trackerSchema.index({ visitorId: 1 });
trackerSchema.index({ timestamp: 1 });
trackerSchema.index({ url: 1 });

const Tracker =
  mongoose.models.Tracker || mongoose.model("Tracker", trackerSchema);
export default Tracker;
