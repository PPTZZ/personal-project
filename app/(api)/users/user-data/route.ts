import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/productsSchema";
import User from "@/app/models/userSchema";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await dbConnect();
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const searchQuery = searchParams.get("bloodType") || 0;
    const querry = { [`groupBloodNotAllowed.${searchQuery}`]: true };
    await Product.distinct("categories", querry);
    return NextResponse.json({ status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log(err);
    }
    return NextResponse.json(err);
  }
};

export const PUT = async (request: Request) => {
  try {
    await dbConnect();
    const url = new URL(request.url);
    const dataBody = await request.json();
    const searchParams = url.searchParams;
    const age = searchParams.get("age") || 0;
    const height = searchParams.get("height") || 0;
    const currentWeight = searchParams.get("currentWeight") || 0;
    const desiredWeight = searchParams.get("desiredWeight") || 0;
    const user = await User.findById(dataBody?.userId);
    user.userData = {
      age: age,
      height: height,
      weight: currentWeight,
      desiredWeight: desiredWeight,
      bannedProducts: dataBody.bannedProducts,
      recomandedKcal: dataBody.recomandedKcal,
    };
    await user.save();
    return NextResponse.json({ status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
    } else {
      console.log(err);
    }
    return NextResponse.json(err);
  }
};
