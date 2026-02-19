import express from "express";
import * as controller from "../controllers/user-controller.js";

const router = express.Router();

router.post("/", controller.createUser);
router.get("/", controller.getAllUsers);
router.get("/:username/comments", controller.getUserComments);
router.get("/:username", controller.getUser);
router.delete("/:userId", controller.deleteUser);

export default router;
