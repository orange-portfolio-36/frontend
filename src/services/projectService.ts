import { Project } from "@/@types/project";
import axiosInstance, { requestNextApi } from "@/config/axios.config";

async function createProject(body: unknown) {
  return axiosInstance.post("/project", body);
}

async function getAllProjects(){
  return await requestNextApi.get<Project[]>('/api/project')
}

export const projectService = {
  createProject,
  getAllProjects
};
