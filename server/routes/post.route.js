import { Router } from "express";
import {
  deleteJob,
  fetchAllJobs,
  postJob,
} from "../controllers/post.controller.js";
import adminAuth from "../middlewares/admin.auth.js";

const postRouter = Router();

postRouter.post("/post-job", adminAuth, postJob);
postRouter.get("/fetch-jobs", fetchAllJobs);
postRouter.delete("/job/delete/:id", adminAuth, deleteJob);

export default postRouter;
