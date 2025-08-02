import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

import dotenv from "dotenv";

dotenv.config();

// (async function () {
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload an image

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded on cloudinary file src: " + response.url);

    // once the file is uploaded we would like to
    // delete if from our server

    fs.unlink(localFilePath, (err) => {
      if (err) {
        console.error("Failed to delete file:", err);
      } else {
        console.log("File deleted successfully.");
      }
    });

    return response;
  } catch (error) {
    fs.unlink(localFilePath, (err) => {
      if (err) {
        console.error("Failed to delete file:", err);
      } else {
        console.log("File deleted successfully.");
      }
    });
    return null;
  }
};
// });

const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Deleted from cloudinary, public id ", publicId);
  } catch (error) {
    console.log("Error deleting from cloundinary", error);

    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
