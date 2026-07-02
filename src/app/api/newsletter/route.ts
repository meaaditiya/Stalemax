import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Newsletter from "@/models/Newsletter";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, message: "Enter a valid email" }, { status: 400 });
    }

    await connectDB();
    await Newsletter.updateOne(
      { email: parsed.data.email },
      { email: parsed.data.email },
      { upsert: true }
    );

    return NextResponse.json({ success: true, message: "Subscribed" });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
