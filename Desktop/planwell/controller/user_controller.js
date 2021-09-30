const { INTEGER } = require("sequelize/lib/data-types");
const { err } = require("../config/constants");
const {
  expenses,
  income,
  investments,
  leads,
  recommendations,
  savings,
  targets,
  user_groups,
  users,
} = require("../models/index");

const Insert = async (req, res) => {
  const request = req.body;
  const leads_Details = {
    adults_count: request.adults_count,
    kids_count: request.kids_count,
    age: request.age,
    zipcode: request.zipcode,
    residence_type: request.residence_type,
    tax_rate: request.tax_rate,
    email: request.email,
  };

  const targets_Details = {
    target_type: request.target_type,
    maturity_period: request.maturity_period,
    target_amount: request.target_amount,
    currently_saved_amount: request.currently_saved_amount,
    current_age: request.current_age,
  };

  const income_Details = {
    income_type: request.income_type,
    income_amount: request.income_amount,
  };

  const investment_Details = {
    investment_type: request.investment_type,
    investment_amount: request.investment_amount,
  };

  const expenses_Details = {
    expense_type: request.expense_type,
    expense_amount: request.expense_amount,
  };

  const savings_Details = {
    savings_type: request.savings_type,
    saving_amount: request.saving_amount,
  };

  const recommendations_Details = {
    mortgage_duration: request.mortgage_duration,
    interest_rate: request.interest_rate,
    debt_to_equity_ratio: request.debt_to_equity_ratio,
    property_tax: request.property_tax,
    pmi: request.pmi,
    down_payment_amount: request.down_payment_amount,
    rental_income: request.rental_income,
  };

  const users_Details = {
    first_name: request.first_name,
    email: request.email,
  };

  const user_groups_Details = {
    member_email: request.member_email,
  };

  const Lead = await leads.create(leads_Details),
    Target = await targets.create(targets_Details),
    Income = await income.create(income_Details),
    Investment = await investments.create(investment_Details),
    Expenses = await expenses.create(expenses_Details),
    Saving = await savings.create(savings_Details),
    Recommendation = await recommendations.create(recommendations_Details),
    User_Details = await users.create(users_Details),
    User_groups_Details = await user_groups.create(user_groups_Details);

  try {
    if (
      (Lead,
      Target,
      Income,
      Investment,
      Expenses,
      Saving,
      Recommendation,
      User_Details,
      User_groups_Details)
    ) {
      res.send({
        sucess: true,
        Msg: err.insert,
        result: [],
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  Insert: Insert,
};
