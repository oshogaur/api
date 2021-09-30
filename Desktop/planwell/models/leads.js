"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class leads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  leads.init(
    {
      session_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
      adults_count: DataTypes.INTEGER,
      kids_count: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      zipcode: DataTypes.STRING,
      residence_type: DataTypes.STRING,
      type_of_calculator: DataTypes.STRING,
      tax_rate: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "leads",
    }
  );
  return leads;
};
