import type { NextAuthOptions } from "@/node_modules/next-auth/index";
import FacebookProvider from "@/node_modules/next-auth/providers/facebook";
import GoogleProvider from "@/node_modules/next-auth/providers/google";
import CredentialsProvider from "@/node_modules/next-auth/providers/credentials";
import User from "@/lib/models/user.model";
import { connectToDB } from "@/lib/mongoose";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username: ",
          type: "text",
          placeholder: "Your-username",
        },
        password: {
          label: "Password: ",
          type: "password",
          placeholder: "Your-password",
        },
      },
      async authorize(credentials: any) {
        connectToDB();
        try {
          const user = await User.findOne({ username: credentials.username });
          if (!user) return null;

          const isCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isCorrect) return null;

          return {
            name: user.username
          };
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
  },
};
