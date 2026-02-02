import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    brand: { type: String, trim: true, default: "" },
    category: { type: String, trim: true, default: "" },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, trim: true, default: "" },
    description: { type: String, trim: true, default: "" },
    skinTypes: [
      { type: String, enum: ["dry", "oily", "combo", "normal", "sensitive"] },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
