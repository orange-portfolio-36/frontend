import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { CustomSession, SigninResponse } from "@/@types/user";
import { userService } from "@/services/userService";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
        clientId: { label: "ID", type: "text" },
        credential: { label: "token", type: "text" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        let response;
        try {
          if (!credentials?.email) {
            response = await userService.googleLogin({
              clientId: credentials.clientId,
              credential: credentials.credential,
            });
          } else {
            response = await userService.signin({
              email: credentials.email,
              password: credentials.password,
            });
          }

          if (response.status !== 200) return null;
          return response.data as User;
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      const data = user as SigninResponse;
      if (user) {
        return {
          ...token,
          jwt: data.jwt,
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
