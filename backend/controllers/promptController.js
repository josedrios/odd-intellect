import * as Prompt from "../models/promptModel.js";

export const getAllPrompts = async (req, res) => {
  try {
    const { rows } = await Prompt.getAllPrompts();
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch all prompts" });
  }
};

export const getPrompt = async (req, res) => {
  const promptId = req.params.promptId;
  try {
    const { rows } = await Prompt.getPrompt(promptId);
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ error: "No prompt with promptId of " + promptId });
    }
    res.status(200).json(rows[0]);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch prompt with promptId of " + promptId });
  }
};

export const getPromptComments = async (req, res) => {
  const promptId = req.params.promptId;
  try {
    const { rows: promptRows } = await Prompt.getPrompt(promptId);
    if (promptRows.length === 0) {
      return res.status(404).json({
        error: "Prompt with promptId " + promptId + " does not exist",
      });
    }
    const { rows: comments } = await Prompt.getPromptComments(promptId);
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch comments for prompt with promptId of " + promptId,
    });
  }
};
