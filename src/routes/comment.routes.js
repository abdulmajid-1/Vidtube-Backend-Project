import { Router } from "express";

import {
  getVideoComments,
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/comment.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// Public routes
router.route("/:videoId").get(getVideoComments);

// Secured routes
router.route("/:videoId").post(verifyJWT, addComment);

router.route("/:commentId").patch(verifyJWT, updateComment);

router.route("/:commentId").delete(verifyJWT, deleteComment);

export default router; 