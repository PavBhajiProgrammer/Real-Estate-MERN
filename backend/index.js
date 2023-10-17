import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import test from "./routes/user.route.js";
import authUser from "./routes/auth.route.js";

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

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ mes: "hello there" });
});

app.use("/", test);
app.use("/signin", authUser);

// 8080/signin/user
