import { authOptions } from "@/app/api/(unprotected)/auth/[...nextauth]/options";
import LogoutForm from "@/components/SignOut";
import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if(!session) redirect("/sign-in");

  return (
    <LogoutForm />
  );
}
