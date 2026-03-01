import express from "express";
import {
  adminDashboardLogin,
  adminLogin,
  logout,
  logoutSuperAdmin,
} from "../controllers/user.auth.controller.js";
const authRouter = express.Router();

authRouter.post("/login", adminLogin);
authRouter.post("/admin/login", adminDashboardLogin);
authRouter.post("/logout", logout);
authRouter.post("/super-admin/logout", logoutSuperAdmin);

export default authRouter;
// /api/auth/dashboard/
