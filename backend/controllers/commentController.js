import * as Comment from "../models/commentModel.js";

export const getAllComments = async (req, res) => {
  try {
    const { rows } = await Comment.getAllComments();
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to get all comments" });
  }
};
