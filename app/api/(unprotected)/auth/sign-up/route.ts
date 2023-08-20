import { NextRequest, NextResponse } from "@/node_modules/next/server";
import User from "@/lib/models/user.model";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/lib/mongoose";
import Guide from "@/lib/models/guide.model";

export async function POST(req: NextRequest) {
  await connectToDB();
  const { username, password } = await req.json();
  try {
    const user = await User.findOne({ username });
    if (user) return new NextResponse("User has been declared");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({ username, password: hash });
    const userProfile = new Guide({user:newUser._id,fullname:newUser.username})

    await newUser.save();
    await userProfile.save();
    return new NextResponse("User has been created!");
  } catch (err) {
    return new NextResponse("ERROR: " + err);
  }
}
