import axiosInstance from "@/config/axios.config";

async function getTags() {
  return await axiosInstance.get("/tag/all");
}

export const tagService = {
  getTags,
};
