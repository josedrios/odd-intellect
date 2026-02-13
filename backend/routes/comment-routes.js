import express from "express";
import * as controller from "../controllers/comment-controller.js";

const router = express.Router();

router.delete("/:commentId", controller.deleteComment);
router.get("/:commentId/subcomments", controller.getSubcomments);

export default router;
