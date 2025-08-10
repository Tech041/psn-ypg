import mongoose from "mongoose";
import { Schema } from "mongoose";
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    facility: {
      type: String,
      required: true,
    },

    contact: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["jobs", "internships"],
      default: "jobs",
    },
  },
  { timestamps: true }
);
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
