import Category from "../models/category.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json({ categories });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });

    const exists = await Category.findOne({ name });
    if (exists)
      return res.status(400).json({ message: "Category already exists" });

    const category = await Category.create({ name });
    res.status(201).json({ message: "Category created", category });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// To Be Continued Final Project
