import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
import { verifyToken } from "../VerifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment);
router.delete("/:id", verifyToken, deleteComment);
router.post("/:videoId", getComments);

export default router;
