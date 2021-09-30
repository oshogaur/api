"use strict";
const { Model } = require("sequelize");
const { INTEGER } = require("sequelize/lib/data-types");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      user_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
      mobile_number: DataTypes.INTEGER,
      signup_session_id: DataTypes.INTEGER,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
