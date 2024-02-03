export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type SigninData = Pick<SignupData, "email" | "password">;
