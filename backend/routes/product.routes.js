import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

import { protect } from "../middleware/auth.middleware.js";
import { checkRole } from "../middleware/checkRole.middleware.js";

const router = express.Router();

router.get("/", protect, getProducts);
router.get("/:id", protect, getProductById);

router.post("/", protect, checkRole("admin"), createProduct);
router.put("/:id", protect, checkRole("admin"), updateProduct);
router.delete("/:id", protect, checkRole("admin"), deleteProduct);

export default router;
