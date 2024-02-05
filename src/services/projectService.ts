import axiosInstance from "@/config/axios.config";

async function createProject(body: unknown) {
  return axiosInstance.post("/project", body);
}

export const projectService = {
  createProject,
};
