import axiosInstance from "@/config/axios.config";
import axios, { AxiosHeaders } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = req.body;

  return axiosInstance.post("/project", data, {
    headers: req.headers as unknown as AxiosHeaders,
  });
}


export async function GET(){
  const response = await  axiosInstance.get("/project/all");
  return Response.json(response.data)
}