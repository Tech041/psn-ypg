import Tracker from "../models/tracker.model.js";
export const postTracker = async (req, res) => {
  try {
    const { url, timestamp, visitorId } = req.body;

    const tracker = new Tracker({ url, timestamp, visitorId });
    await tracker.save();

    return res
      .status(201)
      .json({ message: "Visit tracked successfully", tracker });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// Lifetime unique visitors
export const getAllUniqueVisitors = async (req, res) => {
  try {
    const count = (await Tracker.distinct("visitorId")).length;

    return res.json({ success: true, allUniqueVisitors: count });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching lifetime unique visitors stats" });
  }
};

// Daily unique visitors
export const getDailyUniqueVisitors = async (req, res) => {
  try {
    const dailyVisitors = await Tracker.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } },
          uniqueVisitors: { $addToSet: "$visitorId" },
        },
      },
      {
        $project: {
          day: "$_id",
          uniqueVisitorsCount: { $size: "$uniqueVisitors" },
        },
      },
      { $sort: { day: 1 } },
    ]);

    return res.json({ success: true, dailyVisitors });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching daily stats" });
  }
};

// Most visited URL
export const getMostVisitedUrl = async (req, res) => {
  try {
    const mostVisitedUrl = await Tracker.aggregate([
      { $group: { _id: "$url", visits: { $sum: 1 } } },
      { $sort: { visits: -1 } },
      { $limit: 1 },
    ]);

    return res.json({ success: true, mostVisitedUrl: mostVisitedUrl[0] || {} });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching url stats" });
  }
};
