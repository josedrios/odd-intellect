import { query } from "../database.js";

export const getComment = (commentId) =>
  query("SELECT * FROM comments WHERE id = $1", [commentId]);

export const getPromptComments = (promptId) =>
  query("SELECT * FROM comments WHERE prompt_id = $1", [promptId]);

export const getAllComments = () => query("SELECT * FROM comments;");

export const deleteComment = (commentId) =>
  query("DELETE FROM comments WHERE id = $1", [commentId]);
