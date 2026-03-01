import jwt from "jsonwebtoken";


// Route for admin login
export const adminLogin = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "passowrd required" });
    }
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(400).json({ success: false, message: "Access denied" });
    }
    if (password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({ password }, process.env.JWT_SECRET);
      return res
        .status(200)
        .json({ success: true, message: "Login successful", token });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.mesaage });
  }
};

// Dashboard authentication
export const adminDashboardLogin = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "passowrd required" });
    }
    if (password !== process.env.SUPERADMIN_PASSWORD) {
      return res
        .status(400)
        .json({ success: false, message: "Unauthorized access" });
    }
    if (password === process.env.SUPERADMIN_PASSWORD) {
      const super_token = jwt.sign({ password }, process.env.JWT_Admin_SECRET);
      return res
        .status(200)
        .json({ success: true, message: "Welcome, Super Admin", super_token });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// Logout User
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return res.json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

// Logout super admin
export const logoutSuperAdmin = async (req, res) => {
  try {
    res.clearCookie("super_token", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return res.json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};
