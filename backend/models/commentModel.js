import { query } from "../database.js";

export const getComment = (commentId) =>
  query("SELECT * FROM comments WHERE id = $1", [commentId]);

export const getPromptComments = (promptId) =>
  query(
    "SELECT comments.*, users.username FROM comments JOIN users ON comments.user_id = users.id where comments.prompt_id = $1;",
    [promptId],
  );

export const getAllComments = () => query("SELECT * FROM comments;");

export const deleteComment = (commentId) =>
  query("DELETE FROM comments WHERE id = $1", [commentId]);
