import Pharmacology from "../models/pharmacology.model.js";

export const RevisionQuestions = async (req, res) => {
  try {
    const questions = await Pharmacology.find({});
    return res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
