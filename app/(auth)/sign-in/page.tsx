import { LoginForm } from "@/components/LoginForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const Signin = () => {
  return <LoginForm />;
};

export default Signin;

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  console.log("session ne", session);

  redirect("/sign-out");
}
