import * as Comment from "../models/comment-model.js";

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

export const getSubcomments = async (req, res) => {
  const commentId = req.params.commentId;
  try {
    const { rows: commentRows } = await Comment.getComment(commentId);
    if (commentRows.length === 0) {
      return res.status(404).json({
        error: "No comment found with the comment id of " + commentId,
      });
    }
    const { rows: comments } = await Comment.getSubcomments(commentId);
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error:
        "Failed to fetch subcomments for parent comment with commentId of " +
        commentId,
    });
  }
};
