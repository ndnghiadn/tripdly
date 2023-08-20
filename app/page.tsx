"use client";

import { useSession } from "next-auth/react";
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
