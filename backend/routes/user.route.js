import express from "express";
import user from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);

export default router;
