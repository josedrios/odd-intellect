import express from "express";
import * as controller from "../controllers/comment-controller.js";

const router = express.Router();
function loggedInMiddlware(req, res, next) {
  console.log("middleware ran");
  console.log(req.session);
  if (!req.session.username) {
    return res.status(401).send("THIS ACTION IS FOR LOGGED IN USERS");
  }
  next();
}

router.post("/create", loggedInMiddlware, controller.createComment);
router.delete("/:commentId", controller.deleteComment);
router.get("/:commentId/subcomments", controller.getSubcomments);

export default router;
