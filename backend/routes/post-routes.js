import express from "express";
import * as controller from "../controllers/post-controller.js";

const router = express.Router();

router.get("/", controller.getAllPosts);
router.get("/search/:text", controller.searchPost);
router.get("/:postId/comments", controller.getPostComments);
router.get("/:postId", controller.getPost);

export default router;
