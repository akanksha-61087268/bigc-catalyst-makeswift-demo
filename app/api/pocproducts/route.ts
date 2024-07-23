import { NextResponse } from "next/server";
import { uri} from "../../mongodb/db";
import mongoose from "mongoose"
import Product  from "../../mongodb/model/product"

export async function GET() {

  const connectionString = await mongoose.connect(uri)
  let data = []
  let success = true
  try {
    data = await Product.find();
  } catch (error) {
    console.log(error)
    success = false
  }

  console.log("data",data)
  return NextResponse.json({result:data, success})
}