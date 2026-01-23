import express from "express";
import * as controller from "../controllers/userController.js";

const router = express.Router();

router.post("/", controller.createUser);
router.get("/", controller.getAllUsers);
router.get("/:userId", controller.getUser);
router.get("/:userId/comments", controller.getUserComments);
router.delete("/:userId", controller.deleteUser);

export default router;
