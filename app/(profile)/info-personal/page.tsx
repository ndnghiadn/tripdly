import DetailPersonalPage from "@/components/profile/Detail";
import Introduction from "@/components/profile/Introduction";
import { authOptions } from "@/app/api/(unprotected)/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';


export default async function inforPersonal(){
    const session = await getServerSession(authOptions)
    console.log(session);
    if(session) 
        return (
            <div className="w-4/6 h-full">
                <Introduction/>
                <DetailPersonalPage/>
            </div>
        )
    else{
        redirect("/sign-in")
    }
}