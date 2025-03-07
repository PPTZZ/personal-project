import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/productsSchema";
import { NextResponse } from "next/server";
import { LIMITED_PRODUCTS } from "@/app/lib/constants";

export const GET = async (request: Request) => {
  try {
    await dbConnect();
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const limit = Number(searchParams.get("n")) || LIMITED_PRODUCTS;
    const skip = Number(searchParams.get("p")) || 0;
    const searchQuery = searchParams.get("bloodType") || 0;
    const querry =  { [`groupBloodNotAllowed.${searchQuery}`]: true };
    
    const products = await Product.find(querry)
      .limit(limit)
      .skip(skip);
    
      return NextResponse.json(products, { status: 200 });

  } catch (err: unknown) {

    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log(err);
    }
   
    return NextResponse.json(err);
  }
};
