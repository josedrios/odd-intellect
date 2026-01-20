import { query } from "../database.js";

export const getAllUsers = () => query("SELECT * FROM users;");
