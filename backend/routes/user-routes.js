import express from "express";
import * as controller from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", controller.getAllUsers);
router.post("/", controller.createUser);
router.get("/me", controller.getSession);
router.get("/endsession", controller.endSession);
router.post("/login", controller.loginUser);
router.get("/search/:username", controller.searchUser);
router.get("/:username/comments", controller.getUserComments);
router.delete("/:userId", controller.deleteUser);
router.get("/:username", controller.getUser);

export default router;
