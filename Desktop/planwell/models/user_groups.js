"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_groups.init(
    {
      session_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      member_id: DataTypes.INTEGER,
      member_type: DataTypes.STRING,
      member_email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_groups",
    }
  );
  return user_groups;
};
