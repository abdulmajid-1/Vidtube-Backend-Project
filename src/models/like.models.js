import mongoose, { Schema } from "mongoose";
import { Video } from "./video.models";

const likeSchema = new Schema(
  {
    // either of "video", "comment" or "tweet" will be
    // assigned others are null

    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
    tweet: {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

export const Like = mongoose.model("Like", likeSchema);
