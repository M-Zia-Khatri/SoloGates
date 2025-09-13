import { DataTypes } from "sequelize";
import sequelize from "../config/db.connection.js";

const PortfolioCategory = sequelize.define(
  "PortfolioCategory",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // e.g. "Reels & Video Editing"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // optional
    },
  },
  {
    tableName: "portfolio_categories",
    timestamps: true,
  }
);

export default PortfolioCategory;
