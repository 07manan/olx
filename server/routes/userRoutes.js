import express from "express";
import { loginUser, registerUser } from "../controllers/User.js";
const router = express.Router();

router.post("/register",registerUser);
router.get("/login/:email/:password",loginUser);

export default router;