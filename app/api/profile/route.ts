import Guide from "@/lib/models/guide.model"
import { connectToDB } from "@/lib/mongoose"
import { log } from "console"
import mongoose from "mongoose"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../(unprotected)/auth/[...nextauth]/options"

interface User {
    name: string
    age: string
  }

export async function GET(req:NextRequest){
  await connectToDB()
  const guideQuery = await Guide.find({user:'64e1c870d403750f8582fa5b'})
  console.log(guideQuery);
  return new NextResponse('oke')
}

export async function PUST(req:NextRequest){
  const session = await getServerSession(authOptions)
  console.log(session);
  
  return new NextResponse("oke")
}