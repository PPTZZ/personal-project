import dbConnect from "@/app/lib/dbConnect";
import { hasPassword } from "@/app/lib/services";
import User from "@/app/models/userSchema";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface PostRequest extends NextRequest {
  json: () => Promise<any>;
}

export const POST = async (request: PostRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const data = await request.json();
    const { name, email, password } = data;
    const hashedPass = hasPassword(password)
    const newUser = new User({name,email,password:hashedPass });
    await newUser.save();
    return NextResponse.json(newUser);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log(err);
    }
    return NextResponse.json({ message: "Failed" }, { status: 401 });
  }
};
