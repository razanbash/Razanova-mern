import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    skinType: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Assessment", assessmentSchema)