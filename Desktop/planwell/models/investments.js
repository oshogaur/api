"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class investments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  investments.init(
    {
      session_id: DataTypes.INTEGER,
      member_id: DataTypes.INTEGER,
      investment_type: DataTypes.STRING,
      investment_amount: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "investments",
    }
  );
  return investments;
};
