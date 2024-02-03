import { SignupData } from "@/@types/user";
import axiosInstance from "@/config/axios.config";

async function signup(body: SignupData) {
  return axiosInstance.post("/user/signup", body);
}

export const userService = {
  signup,
};
