"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  income.init(
    {
      session_id: DataTypes.INTEGER,
      member_id: DataTypes.INTEGER,
      income_type: DataTypes.STRING,
      income_amount: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "income",
    }
  );
  return income;
};
