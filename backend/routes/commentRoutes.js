import express from "express";
import * as controller from "../controllers/commentController.js";

const router = express.Router();

router.get("/", controller.getAllComments);

export default router;
