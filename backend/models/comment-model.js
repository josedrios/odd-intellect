import { query } from "../database.js";

export const getComment = (commentId) =>
  query("SELECT * FROM comments WHERE id = $1;", [commentId]);

export const getPostComments = (postId, sort) => {
  let order = "c.created_at DESC";

  if (sort === "newest") {
    order = "c.created_at DESC";
  } else if (sort === "popular") {
    // TODO: WHEN COMMENT VOTES ARE IMPLEMENTED DO THIS
  }

  return query(
    `SELECT c.*, u.username, COUNT(r.id) AS reply_count FROM comments c JOIN users u ON c.user_id = u.id LEFT JOIN comments r ON c.id = r.parent_id WHERE c.post_id = $1 AND c.parent_id IS NULL GROUP BY c.id, u.username ORDER BY ${order};`,
    [postId],
  );
};
export const getSubcomments = (commentId) =>
  query(
    "SELECT comments.*, users.username FROM comments JOIN users ON comments.user_id = users.id WHERE comments.parent_id = $1 ORDER BY comments.created_at ;",
    [commentId],
  );

export const deleteComment = (commentId) =>
  query("DELETE FROM comments WHERE id = $1;", [commentId]);

export const createComment = (postId, userId, text) => {
  console.log("POSTID", postId);
  console.log("USERID", userId);
  console.log("TEXT", text);
  return query(
    "INSERT INTO comments (post_id, user_id, parent_id, text) VALUES ($1, $2, NULL, $3);",
    [postId, userId, text],
  );
};
