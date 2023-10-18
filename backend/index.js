import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import test from "./routes/user.route.js";
import authUser from "./routes/auth.route.js";

import bodyParser from "body-parser";

const port = process.env.PORT || 8081;

// connecting with database

mongoose
  .connect(
    "mongodb+srv://swapnil:V1IpLlpLT9IzY7VA@mern-estate.kt6acba.mongodb.net/mern-estate?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connedted to database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// Note - before the route use bodyParser.json()

app.use("/", test);
app.use("/api/auth", authUser);
// api/auth/signup

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ mes: "hello there" });
});

// 8080/api/auth/signup
