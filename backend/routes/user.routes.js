import express from "express";

import { protect } from "../middleware/auth.middleware.js";

import {
  getMyProfile,
  updateMyProfile,
  changeMyPassword,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/me", protect, getMyProfile);
router.put("/me", protect, updateMyProfile);
router.put("/change-password", protect, changeMyPassword);

export default router;

// To Be Continued Final Project
