import express from "express";
import * as controller from "../controllers/promptController.js";

const router = express.Router();

router.get("/", controller.getAllPrompts);
router.get("/:promptId", controller.getPrompt);
router.get("/:promptId/comments", controller.getPromptComments);

export default router;
