import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/user.auth.route.js";
import helmet from "helmet";
import postRouter from "./routes/post.route.js";
import questionRouter from "./routes/questions.route.js";
const app = express();

// DB AND CLOUDINARY CONNECTIONS
connectDB();

// Frontend Url
const allowedOrigins = [
  "https://medhunt-portal.vercel.app",
  "http://localhost:3000",
];

const port = process.env.PORT || 8000;
// Limiter
const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    status: 429,
    error: "Too many login attempts. Please try again later.",
  },
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false, // Disable X-RateLimit headers
});

// Middlewares
app.use(express.json());
app.use(cors());

// Helmet to secure my HTTP headers
app.use(helmet());

// API ENDPOINTS
app.use("/api/auth", authRateLimiter, authRouter);
app.use("/api", postRouter);
app.use("/api", questionRouter);

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
