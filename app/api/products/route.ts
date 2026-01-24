import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const client = await clientPromise;
  const db = client.db("apliquelandia");

  const query: any = { active: true };
  if (category) query.category = category;

  const products = await db
    .collection("products")
    .find(query)
    .toArray();

  return NextResponse.json(products);
}
