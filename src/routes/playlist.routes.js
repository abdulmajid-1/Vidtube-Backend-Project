import { Router } from "express";

import {
  createPlaylist,
  getUserPlaylists,
  getPlaylistById,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  deletePlaylist,
  updatePlaylist,
} from "../controllers/playlist.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// Secured routes
router.route("/").post(verifyJWT, createPlaylist);

router.route("/user/:userId").get(verifyJWT, getUserPlaylists);

router.route("/:playlistId").get(verifyJWT, getPlaylistById);

router.route("/:playlistId/videos/:videoId").post(verifyJWT, addVideoToPlaylist);

router.route("/:playlistId/videos/:videoId").delete(verifyJWT, removeVideoFromPlaylist);

router.route("/:playlistId").delete(verifyJWT, deletePlaylist);

router.route("/:playlistId").patch(verifyJWT, updatePlaylist);

export default router; 