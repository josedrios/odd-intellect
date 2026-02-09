import { query } from "../database.js";

export const getComment = (commentId) =>
  query("SELECT * FROM comments WHERE id = $1;", [commentId]);

export const getPromptComments = (promptId) =>
  query(
    "SELECT comments.*, users.username FROM comments JOIN users ON comments.user_id = users.id WHERE comments.prompt_id = $1 AND comments.parent_id IS NULL ORDER BY comments.created_at;",
    [promptId],
  );

export const getSubcomments = (commentId) =>
  query(
    "SELECT comments.*, users.username FROM comments JOIN users ON comments.user_id = users.id WHERE comments.parent_id = $1 ORDER BY comments.created_at;",
    [commentId],
  );

export const deleteComment = (commentId) =>
  query("DELETE FROM comments WHERE id = $1;", [commentId]);
