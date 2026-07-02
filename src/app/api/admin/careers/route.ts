import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import Career from "@/models/Career";
import { verifyAdminToken, ADMIN_COOKIE } from "@/lib/auth";

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const careers = await Career.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ success: true, message: "OK", data: careers });
}

export async function PATCH(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id, status } = await req.json();
  await connectDB();
  await Career.findByIdAndUpdate(id, { status });
  return NextResponse.json({ success: true, message: "Updated" });
}
