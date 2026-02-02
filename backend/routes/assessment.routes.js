import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { skinType } = req.body;

    if (!skinType) {
      return res.status(400).json({ message: "skinType is required" });
    }

    const user = await User.findOne();
    if (!user) return res.status(404).json({ message: "No user found" });

    user.skinType = skinType;
    await user.save();

    res.json({ message: "Saved successfully", skinType });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
