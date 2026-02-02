import Assessment from "../models/assessment.model.js";

export const saveAssessment = async (req, res) => {
  try {
    const { skinType } = req.body;
    if (!skinType) return res.status(400).json({ message: "skinType is required" });

    const userId = req.user?.id || req.user?._id;

    const newAssessment = await Assessment.create({
      user: userId,
      skinType,
    });

    return res.json({ message: "Saved successfully", assessment: newAssessment });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};