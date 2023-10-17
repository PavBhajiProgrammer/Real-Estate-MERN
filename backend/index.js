const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// connecting with database
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("connedted to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

app.get("/", () => {
  console.log("heloo there");
});
