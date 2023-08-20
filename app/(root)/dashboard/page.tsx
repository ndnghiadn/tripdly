import { authOptions } from "../../api/(unprotected)/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <div>You logged in</div>
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  );
}
