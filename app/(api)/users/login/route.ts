import dbConnect from "@/app/lib/dbConnect";
import { verifyPassword } from "@/app/lib/services";
import User from "@/app/models/userSchema";
import { NextResponse } from "next/server";

interface PostRequest {
  json: () => Promise<{ email: string; password: string }>;
}

export const POST = async (request: PostRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const data = await request.json();
    const { email, password } = data;
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const validPassword = verifyPassword(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Password not valid" },
        { status: 401 }
      );
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Error", error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "Error", error: "Unknown error" },
        { status: 500 }
      );
    }
  }
};
