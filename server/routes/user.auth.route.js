import express from "express";
import { adminLogin, logout } from "../controllers/user.auth.controller.js";
const authRouter = express.Router();

authRouter.post("/login", adminLogin);
authRouter.post("/logout", logout);

export default authRouter;
