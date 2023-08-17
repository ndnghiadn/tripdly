import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <pre>{JSON.stringify(session, null, 2)}</pre>
      ) : (
        <div>You've not signed in</div>
      )}
    </>
  );

  // <>
  //   <Button>LOGIN</Button>;
  // </>;
}
