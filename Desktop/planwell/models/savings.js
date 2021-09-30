"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class savings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  savings.init(
    {
      session_id: DataTypes.INTEGER,
      savings_type: DataTypes.STRING,
      savings_amount: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "savings",
    }
  );
  return savings;
};
