// const mongoose = require("mongoose");
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  // this is important - timestamps bahar aayega BC
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

// module.exports = userModel;

export default userModel;
