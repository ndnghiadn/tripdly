import { LoginForm } from "@/components/LoginForm";
import { authOptions } from "@/app/api/(unprotected)/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const Signin = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <LoginForm />;
};

export default Signin;
