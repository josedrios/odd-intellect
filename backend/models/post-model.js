import { query } from "../database.js";

export const getAllPosts = () =>
  query(
    "SELECT posts.*, count(comments) AS comment_count FROM posts JOIN comments ON posts.id = comments.post_id GROUP BY posts.id ORDER BY posts.id DESC",
    [],
  );

export const getPost = (postId) =>
  query("SELECT * FROM posts WHERE posts.id = $1", [postId]);
