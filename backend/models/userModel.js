import { query } from "../database.js";

export const getAllUsers = () => query("SELECT * FROM users;");

export const getUser = (userId) =>
  query("SELECT * FROM users where user_id = $1", [userId]);

export const getUserComments = (userId) =>
  query("SELECT * FROM comments WHERE user_id = $1", [userId]);

export const createUser = (userName) =>
  query("INSERT INTO users (username) VALUES ($1)", [userName]);

export const deleteUser = (userId) =>
  query("DELETE FROM users WHERE user_id = $1", [userId]);
