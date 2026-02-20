import { query } from "../database.js";

export const getAllUsers = () => query("SELECT * FROM users;");

export const getUser = (username) =>
  query(
    "SELECT u.*, COUNT(c.id) AS comment_count FROM users u LEFT JOIN comments c ON u.id = c.user_id AND c.post_id IS NOT NULL WHERE u.username = $1 GROUP BY u.id, u.username;",
    [username],
  );

export const getUserComments = (userId) =>
  query(
    "SELECT c.id, c.text, c.created_at, p.id as post_id,p.text as post_text FROM comments c JOIN posts p ON c.post_id = p.id WHERE c.user_id = $1;",
    [userId],
  );

export const createUser = (userName) =>
  query("INSERT INTO users (username) VALUES ($1)", [userName]);

export const deleteUser = (userId) =>
  query("DELETE FROM users WHERE user.id = $1", [userId]);
