// server/models/User.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.connection.js";
import bcrypt from "bcryptjs"; // ✅ Import bcrypt here

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin"),
      defaultValue: "admin",
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

// ✅ Hash password before saving to DB
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

export default User;
