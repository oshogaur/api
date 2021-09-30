const { NetworkAuthenticationRequire } = require("http-errors");
const { Validator, niv } = require("node-input-validator");

module.exports = {
  async income_val(req, res, next) {
    const validation = new Validator(req.body, {
      income_amount: ["required", "regex:[+-]?([0-9]*[.])?[0-9]+"],
      income_type: "required|string",
    });
    let matched = await validation.check();
    !matched ? res.status(422).send(validation.errors) : next();
  },

  async leads_Val(req, res, next) {
    const validation = new Validator(req.body, {
      adults_count: "required|integer",
      kids_count: "required|integer",
      age: "required|integer",
      zipcode: "required|string",
      residence_type: "required|string",
      email: "required|email",
    });
    let matched = await validation.check();
    !matched ? res.status(422).send(validation.errors) : next();
  },

  async user_val(req, res, next) {
    const validation = new Validator(req.body, {
      first_name: "required|string",
      email: "required|email",
    });
    let matched = await validation.check();
    !matched ? res.status(422).send(validation.errors) : next();
  },
};
