"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  result.init(
    {
      session_id: DataTypes.INTEGER,
      value: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "result",
    }
  );
  return result;
};
