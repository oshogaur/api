"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("recommendations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      session_id: {
        type: Sequelize.INTEGER,
      },
      mortgage_duration: {
        type: Sequelize.STRING,
      },
      interest_rate: {
        type: Sequelize.FLOAT,
      },
      debt_to_equity_ratio: {
        type: Sequelize.FLOAT,
      },
      option_type: {
        type: Sequelize.STRING,
      },
      down_payment_amount: {
        type: Sequelize.FLOAT,
      },
      home_value: {
        type: Sequelize.FLOAT,
      },
      closing_cost: {
        type: Sequelize.FLOAT,
      },
      max_mortgage_value: {
        type: Sequelize.FLOAT,
      },
      property_tax: {
        type: Sequelize.FLOAT,
      },
      pmi: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("recommendations");
  },
};
