import Post from "../models/post.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      salary,
      requirements,
      facility,
      contact,
      location,
      category,
    } = req.body;
    if (
      !title ||
      !salary ||
      !requirements ||
      !facility ||
      !contact ||
      !location ||
      !category
    ) {
      return res.status(400).json({ message: "Missing details" });
    }

    const postedJob = await Post.create({
      title,
      salary,
      requirements,
      facility,
      contact,
      location,
      category,
    });
    return res
      .status(200)
      .json({ success: true, message: "Posted successfuly", postedJob });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetchAllJobs = async (req, res) => {
  try {
    const allJobs = await Post.find({});
    return res
      .status(200)
      .json({ success: true, message: "All Jobs Fetched", allJobs });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const jobId = id;

    await Post.findByIdAndDelete(jobId);

    return res
      .status(200)
      .json({ success: true, message: "Deletion successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
