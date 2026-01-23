import * as Comment from "../models/commentModel.js";

export const getAllComments = async (req, res) => {
  try {
    const { rows } = await Comment.getAllComments();
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to get all comments" });
  }
};

export const deleteComment = async (req, res) => {
  const commentId = req.params.commentId;
  try {
    const { rows: commentRows } = await Comment.getComment(commentId);
    if (commentRows.length === 0) {
      return res
        .status(404)
        .json({ error: "No comment found with comment id of " + commentId });
    }
    const { result } = await Comment.deleteComment(commentId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: "Failed to delete comment with comment id of " + commentId,
    });
  }
};
