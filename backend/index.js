import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoute from "./routes/user.route.js";

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

app.use("/api/user", userRoute);
