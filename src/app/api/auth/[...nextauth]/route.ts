import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { CustomSession, SigninData, SigninResponse } from "@/@types/user";
import { userService } from "@/services/userService";
import { GoogleCredentialResponse } from "@react-oauth/google";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const body = credentials as SigninData;
        const { data, status } = await userService.signin(body);

        if (status !== 200) return null;
        return data as User;
      },
    }),
    Credentials({
      name: "google",
      credentials: {
        clientId: { label: "id", type: "text" },
        credential: { label: "token", type: "text" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const body = credentials as GoogleCredentialResponse;
        const { data, status } = await userService.googleLogin(body);

        if (status !== 200) return null;
        return data as User;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      const { token: jwt } = user as SigninResponse;
      if (user) {
        return {
          ...token,
          jwt,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      const custom = session as CustomSession;
      if (token) {
        custom.jwt = token.jwt as string;
      }
      return custom;
    },
  },
});

export { handler as GET, handler as POST };
