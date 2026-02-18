import { query } from "../database.js";

export const getComment = (commentId) =>
  query("SELECT * FROM comments WHERE id = $1;", [commentId]);

export const getPromptComments = (promptId) =>
  query(
    "SELECT c.*, u.username, COUNT(r.id) AS reply_count FROM comments c JOIN users u ON c.user_id = u.id LEFT JOIN comments r ON c.id = r.parent_id WHERE c.prompt_id = $1 AND c.parent_id IS NULL GROUP BY c.id, u.username ORDER BY c.created_at DESC;",
    [promptId],
  );

export const getSubcomments = (commentId) =>
  query(
    "SELECT comments.*, users.username FROM comments JOIN users ON comments.user_id = users.id WHERE comments.parent_id = $1 ORDER BY comments.created_at ;",
    [commentId],
  );

export const deleteComment = (commentId) =>
  query("DELETE FROM comments WHERE id = $1;", [commentId]);
