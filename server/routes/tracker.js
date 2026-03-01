// routes/tracker.routes.js
import express from "express";
import {
  getAllUniqueVisitors,
  getDailyUniqueVisitors,
  getMostVisitedUrl,
  postTracker,
} from "../controllers/tracker.js";

const trackRouter = express.Router();

// Track a visit
trackRouter.post("/ypg-track-visit", postTracker);

// Stats endpoints
trackRouter.get("/stats/unique-visitors", getAllUniqueVisitors);
trackRouter.get("/stats/daily", getDailyUniqueVisitors);
trackRouter.get("/stats/top-url", getMostVisitedUrl);

export default trackRouter;
