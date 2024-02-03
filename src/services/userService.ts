import { SigninData, SignupData } from "@/@types/user";
import axiosInstance from "@/config/axios.config";

async function signup(body: SignupData) {
  return axiosInstance.post("/user/signup", body);
}

async function signin(body: SigninData) {
  return axiosInstance.post("/user/signin", body);
}

export const userService = {
  signup,
  signin
};
