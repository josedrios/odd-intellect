import { query } from "../database.js";

export const getComment = (commentId) =>
  query("SELECT * FROM comments WHERE comment_id = $1", [commentId]);

export const getAllComments = () => query("SELECT * FROM comments;");

export const deleteComment = (commentId) =>
  query("DELETE FROM comments WHERE comment_id = $1", [commentId]);
