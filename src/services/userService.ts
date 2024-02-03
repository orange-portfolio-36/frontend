import { SigninData, SignupData } from "@/@types/user";
import axiosInstance from "@/config/axios.config";
import {CredentialResponse } from "@react-oauth/google";

async function signup(body: SignupData) {
  return axiosInstance.post("/user/signup", body);
}

async function signin(body: SigninData) {
  return axiosInstance.post("/user/signin", body);
}

async function googleLogin(credentials: CredentialResponse){
  return axiosInstance.post("/user/google_auth", credentials)
}

export const userService = {
  signup,
  signin,
  googleLogin
};
