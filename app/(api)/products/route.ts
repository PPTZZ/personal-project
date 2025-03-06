import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/productsSchema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log(err);
    }
    return NextResponse.json(err);
  }
};
