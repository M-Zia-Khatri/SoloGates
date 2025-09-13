import { DataTypes } from "sequelize";
import sequelize from "../config/db.connection.js";
import PortfolioCategory from "./PortfolioCategory.model.js";

const Portfolio = sequelize.define(
  "Portfolio",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING, // store file path / URL
      allowNull: true,
    },
    video: {
      type: DataTypes.STRING, // store video file path / URL
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING, // e.g. "normal", "premium", or null
      allowNull: true,
    },
  },
  {
    tableName: "portfolios",
    timestamps: true,
  }
);

// Associations
Portfolio.belongsTo(PortfolioCategory, {
  foreignKey: "portfolioCategoryId",
  as: "portfolioCategory",
});

PortfolioCategory.hasMany(Portfolio, {
  foreignKey: "portfolioCategoryId",
  as: "portfolios",
});

export default Portfolio;
