import { query } from "../database.js";

export const getAllPosts = () =>
  query(
    "SELECT posts.*, count(comments.id) AS comment_count FROM posts LEFT JOIN comments ON posts.id = comments.post_id OR comments.parent_id IN (SELECT id FROM comments WHERE comments.post_id = posts.id) GROUP BY posts.id ORDER BY posts.id DESC",
    [],
  );

export const getPost = (postId) =>
  query("SELECT * FROM posts WHERE posts.id = $1", [postId]);
