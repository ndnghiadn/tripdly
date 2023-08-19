import type { NextAuthOptions } from "@/node_modules/next-auth/index";
import FacebookProvider from "@/node_modules/next-auth/providers/facebook";
import GoogleProvider from "@/node_modules/next-auth/providers/google";
import CredentialsProvider from "@/node_modules/next-auth/providers/credentials";

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
        //hard code --->> need to upgrade to fetch user from DB and return the user if its passed
        const user = { id: 1, username: "Nghia", password: "1234" };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          console.log("This is user", user);
          return user;
        } else {
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
