"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { authOptions } from "./api/(unprotected)/auth/[...nextauth]/options";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      {session ? (
        <>
          <h1>Homepage</h1>
          <pre>{JSON.stringify(session)}</pre>
        </>
      ) : (
        <div>
          You've not signed in <Link href="/api/auth/signin">Login</Link>
        </div>
      )}
    </>
  );

  // <>
  //   <Button>LOGIN</Button>;
  // </>;
}
