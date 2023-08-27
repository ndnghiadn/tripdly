import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface ServerIdPageProps {
  params: {
    serverId: string;
  }
};

const ServerIdPage = async ({
  params
}: ServerIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const channel = await db.channel.findFirst({
    where: {
      serverId: params.serverId
    }
  });

  if (channel?.name !== "general") {
    return null;
  }

  return redirect(`/servers/${params.serverId}/channels/${channel?.id}`)
}
 
export default ServerIdPage;