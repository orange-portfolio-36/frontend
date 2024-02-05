import { DefaultSession } from "next-auth";

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type SigninData = Pick<SignupData, "email" | "password">;

export interface SigninResponse {
  name: string;
  email: string;
  id: string;
  jwt: string;
}

export interface CustomSession extends DefaultSession {
  jwt: string;
}
