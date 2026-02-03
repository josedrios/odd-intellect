import express from "express";
import * as controller from "../controllers/promptController.js";

const router = express.Router();

router.get("/", controller.getAllPrompts);
router.get("/:promptId/comments", controller.getPromptComments);
router.get("/:promptId", controller.getPrompt);

export default router;
