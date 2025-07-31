import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/user.auth.route.js";
import helmet from "helmet";
import postRouter from "./routes/post.route.js";
const app = express();

// DB AND CLOUDINARY CONNECTIONS
connectDB();

// Frontend Url
const allowedOrigins = [
  "https://medhunt-portal.vercel.app",
  "http://localhost:3000",
];

const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(cors());

// Helmet to secure my HTTP headers
app.use(helmet());

// API ENDPOINTS
app.use("/api/auth", authRouter);
app.use("/api", postRouter);
app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
