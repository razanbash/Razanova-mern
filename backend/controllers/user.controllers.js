import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    return res.json({ user });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateMyProfile = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const exists = await User.findOne({ email, _id: { $ne: req.user._id } });
    if (exists) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name;
    user.email = email;

    await user.save();

    const safeUser = await User.findById(user._id).select("-password");
    return res.json({ message: "Profile updated", user: safeUser });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const changeMyPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    if (!oldPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "New password must be at least 6 characters" });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await User.findById(req.user._id).select("+password");
    if (!user) return res.status(404).json({ message: "User not found" });

    const ok = await bcrypt.compare(oldPassword, user.password);
    if (!ok) return res.status(400).json({ message: "Old password is wrong" });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    return res.json({ message: "Password changed successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

// To Be Continued Final Project
