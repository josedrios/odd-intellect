import { query } from "../database.js";

export const getAllPosts = (sort) => {
  let order = "posts.created_at DESC";

  if (sort === "newest") {
    order = "posts.created_at DESC";
  } else if (sort === "popular") {
    order = "comment_count DESC";
  }

  return query(
    `SELECT posts.*, count(comments.id) AS comment_count FROM posts LEFT JOIN comments ON posts.id = comments.post_id OR comments.parent_id IN (SELECT id FROM comments WHERE comments.post_id = posts.id) GROUP BY posts.id ORDER BY ${order}`,
    [],
  );
};

export const getPost = (postId) =>
  query("SELECT * FROM posts WHERE posts.id = $1;", [postId]);

export const searchPost = (request) =>
  query(
    "SELECT posts.*, count(comments.id) AS comment_count FROM posts LEFT JOIN comments ON posts.id = comments.post_id OR comments.parent_id IN (SELECT id FROM comments WHERE comments.post_id = posts.id) WHERE posts.text LIKE $1 GROUP BY posts.id ;",
    [`%${request}%`],
  );
