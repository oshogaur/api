"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class targets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  targets.init(
    {
      session_id: DataTypes.INTEGER,
      member_id: DataTypes.INTEGER,
      target_type: DataTypes.STRING,
      targe_amount: DataTypes.FLOAT,
      maturity_period: DataTypes.STRING,
      current_age: DataTypes.INTEGER,
      currently_saved_amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "targets",
    }
  );
  return targets;
};
