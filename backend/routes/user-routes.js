import express from "express";
import * as controller from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", controller.getAllUsers);
router.post("/", controller.createUser);
router.post("/login", controller.loginUser);
router.get("/search/:username", controller.searchUser);
router.get("/:username/comments", controller.getUserComments);
router.get("/:username", controller.getUser);
router.delete("/:userId", controller.deleteUser);

export default router;
