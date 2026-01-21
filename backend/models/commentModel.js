import { query } from "../database.js";

export const getAllComments = () => query("SELECT * FROM comments;");
