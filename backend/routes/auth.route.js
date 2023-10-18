// const router = require("express").Router();
import express from "express";
const router = express.Router();

import authUser from "../controllers/auth.controller.js";

router.post("/signup", authUser);

export default router;
