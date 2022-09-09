import { Cloudinary } from "@cloudinary/url-gen";


export const API_URL = "http://localhost:8000/api";
export const CLOUD_NAME = "cooperatica-ispirare";
export const CLOUDINARY_UPLOAD_PRESET = "lvgnvqn2";
export const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
//export const API_URL = "http://192.168.100.9:8000/api";

export const CloudService = new Cloudinary({
  cloud: {
    cloudName: CLOUD_NAME
  }
});

