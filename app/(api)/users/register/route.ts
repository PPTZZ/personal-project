import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/userSchema";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type PostRequest = NextRequest & {
  json: () => Promise<any>;
};

export const POST = async (request: PostRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const data = await request.json();
    const { name, email, password } = data;
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPass });
    await newUser.save();
    return NextResponse.json({ message: "User registered", status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log(err);
    }
    return NextResponse.json({ message: "Failed" }, { status: 401 });
  }
};
