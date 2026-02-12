import { query } from "../database.js";

export const getAllPrompts = () =>
  query(
    "SELECT prompts.*, count(comments) AS comment_count FROM prompts JOIN comments ON prompts.id = comments.prompt_id GROUP BY prompts.id ORDER BY prompts.id",
    [],
  );

export const getPrompt = (promptId) =>
  query("SELECT * FROM prompts WHERE prompts.id = $1", [promptId]);
