import dbConnect from "@/app/lib/dbConnect";
import Entry from "@/app/models/entriesSchema";
import Product from "@/app/models/productsSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const GET = async (req: Request) => {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("userId");
    const entries = await Entry.find({ owner: id });
    return NextResponse.json(entries, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
    } else {
      console.log(err);
    }
    return NextResponse.json(err);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const data = await req.json();
    const { product, grams, date, owner } = data;
    const { title, calories } = await Product.findOne({
      title: product,
    });
    const productCalories = (calories / 100) * grams;
    const newEntry = new Entry({
      productName: title,
      grams,
      date,
      kcal: productCalories,
      owner,
    });
    await newEntry.save();
    return NextResponse.json(newEntry, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error creating entry:", err.message);
      return NextResponse.json(
        { message: "Failed to create entry", error: err.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error:", err);
      return NextResponse.json(
        {
          message: "Failed to create entry",
          error: "An unknown error occurred",
        },
        { status: 500 }
      );
    }
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    await dbConnect();
    const data = await req.json();
    const { _id } = data;
    await Entry.findOneAndDelete({ _id: _id });
    return NextResponse.json({ status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error removing entry:", err.message);
      return NextResponse.json(
        { message: "Failed to remove entry", error: err.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error:", err);
      return NextResponse.json(
        {
          message: "Failed to remove entry",
          error: "An unknown error occurred",
        },
        { status: 500 }
      );
    }
  }
};
