import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";
import { adminLoginSchema } from "@/lib/validations";
import { signAdminToken, ADMIN_COOKIE } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = adminLoginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 400 });
    }

    await connectDB();
    let admin = await Admin.findOne({ email: parsed.data.email });

    if (!admin && parsed.data.email === process.env.ADMIN_EMAIL) {
      const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD ?? "", 10);
      admin = await Admin.create({ email: process.env.ADMIN_EMAIL, password: hashed });
    }

    if (!admin) {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 });
    }

    const valid = await bcrypt.compare(parsed.data.password, admin.password);
    if (!valid) {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 });
    }

    const token = await signAdminToken(admin.email);
    const response = NextResponse.json({ success: true, message: "Logged in" });
    response.cookies.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
