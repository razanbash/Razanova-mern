import express from "express";
import { protect, authorize } from "../middleware/auth.middleware.js";
import {
  getCategories,
  createCategory,
  deleteCategory,
} from "../controllers/category.controllers.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", protect, authorize("admin"), createCategory);
router.delete("/:id", protect, authorize("admin"), deleteCategory);

export default router;

// To Be Continued Final Project
