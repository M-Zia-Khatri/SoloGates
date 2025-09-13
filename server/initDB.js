// server/initDB.js
import sequelize from "./config/db.connection.js";
import User from "./models/User.js"; // ✅ import your User model

const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected.");

    // Sync models
    await sequelize.sync({ alter: true });
    console.log("✅ All models synced successfully.");

    // ✅ Create admin if not exists
    const adminEmail = "admin@sologate.com";

    const existingAdmin = await User.findOne({ where: { email: adminEmail } });
    if (!existingAdmin) {
      await User.create({
        username: "superadmin",
        email: adminEmail,
        password: "Admin@123", // will be hashed automatically
      });
      console.log("✅ Admin user created.");
    } else {
      console.log("⚡ Admin already exists.");
    }

  } catch (error) {
    console.error("❌ Database sync failed:", error);
    throw error;
  }
};

export default initDB;
