const express = require("express"),
  app = express();
require("dotenv").config();
const port = process.env.PORT;
const route = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", route);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
