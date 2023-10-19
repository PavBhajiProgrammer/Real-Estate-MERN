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

app.listen(port, () => {
  console.log(`Server is running on port no ${port}!`);
});

app.use("/", test);
app.use("/api/auth", authUser);
// localhost:8080/api/auth/signup

// middleware for handling erros

// I don't know why I was using double parenthesis here
app.use((err, req, res, next) => {
  // (err, req, res, next) - this should be the order
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
