const express = require("express"),
  router = express.Router(),
  controller = require("../controller/user_controller"),
  {
    leads_Val,
    income_val,
    user_val,
  } = require("../middlewares/form_validation");

router.post("/api", leads_Val, income_val, user_val, controller.Insert);

module.exports = router;
