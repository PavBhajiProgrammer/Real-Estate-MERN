// const express = require("express");
import express from "express";
// const { default: mongoose } = require("mongoose");
// import mongoose from "mongoose";
// require("dotenv").config();
// import dotenv.config();

const app = express();

const port = process.env.PORT || 5010;

// connecting with database
// mongoose
//   .connect(process.env.MONGODB_CONNECTION_STRING)
//   .then(() => {
//     console.log("connedted to database");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

app.get("/", (req, res) => {
  res.send("heloo there");
});
