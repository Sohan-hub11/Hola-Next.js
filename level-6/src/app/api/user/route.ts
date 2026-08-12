//NextRequest & NextResponse

import { NextRequest, NextResponse } from "next/server";


//GET Request.
export async function GET(){
  return NextResponse.json({
    "name":"Sohan",
    "age":22
  })
}

//POST Request.
export async function POST(req:NextRequest) {
  const {name, age} =await req.json();
  return NextResponse.json({
    name,age
  })
}