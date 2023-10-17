import express from "express";
const router = express.Router();
import authUser from "../controllers/auth.controller.js";

router.post("/user", authUser);

export default router;
