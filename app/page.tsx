import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <h1>Homepage</h1>
      ) : (
        <div>You've not signed in<a href="/api/auth/signin">Login</a></div>
      )}
    </>
  );

  // <>
  //   <Button>LOGIN</Button>;
  // </>;
}
