"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recommendations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recommendations.init(
    {
      session_id: DataTypes.INTEGER,
      mortgage_duration: DataTypes.STRING,
      interest_rate: DataTypes.FLOAT,
      debt_to_equity_ratio: DataTypes.FLOAT,
      option_type: DataTypes.STRING,
      down_payment_amount: DataTypes.FLOAT,
      home_value: DataTypes.FLOAT,
      closing_cost: DataTypes.FLOAT,
      max_mortgage_value: DataTypes.FLOAT,
      property_tax: DataTypes.FLOAT,
      pmi: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "recommendations",
    }
  );
  return recommendations;
};
