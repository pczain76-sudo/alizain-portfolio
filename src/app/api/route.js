import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, message: "Ali Zain Portfolio API" });
}
