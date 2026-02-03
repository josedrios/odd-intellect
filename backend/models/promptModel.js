import { query } from "../database.js";

export const getAllPrompts = () => query("SELECT * FROM prompts;");

export const getPrompt = (promptId) =>
  query("SELECT * FROM prompts WHERE id = $1;", [promptId]);

export const getPromptComments = (promptId) =>
  query("SELECT * FROM comments WHERE id = $1", [promptId]);
