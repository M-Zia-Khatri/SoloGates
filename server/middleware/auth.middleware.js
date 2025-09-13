import jwt from "jsonwebtoken";
import User from "../models/admin.model.js";

export default async function auth(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer token

  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user data
    next();
  } catch (err) {
    console.log("Error in auth middleware", err);
    switch (err.name) {
      case "JsonWebTokenError":
        res.status(401).json({
          success: false,
          message: "Invalid token provided",
        });
        break;
      default:
        console.error("Error in auth middleware", err);
        res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
    }
  }
}
