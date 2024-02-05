import axiosInstance from "@/config/axios.config";
import { AxiosHeaders } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = req.body;

  return axiosInstance.post("/project", data, {
    headers: req.headers as unknown as AxiosHeaders,
  });
}
