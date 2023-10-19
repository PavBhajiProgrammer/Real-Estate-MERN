import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import errorHandler from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    // save user in db
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);

    // use this only when we want to show any error - like not long enough password
    // next(errorHandler(550, "Error from the function"));
  }
};

export default signup;
