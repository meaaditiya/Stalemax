import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { connectDB } from "@/lib/db";
import Career from "@/models/Career";
import { careerSchema } from "@/lib/validations";
import { sendCareerNotification, sendCareerConfirmation } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fields = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      experience: String(formData.get("experience") ?? ""),
      position: String(formData.get("position") ?? ""),
      currentCompany: String(formData.get("currentCompany") ?? ""),
      linkedin: String(formData.get("linkedin") ?? ""),
      github: String(formData.get("github") ?? ""),
      portfolio: String(formData.get("portfolio") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = careerSchema.safeParse(fields);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    const resume = formData.get("resume") as File | null;
    if (!resume) {
      return NextResponse.json({ success: false, message: "Resume file is required" }, { status: 400 });
    }
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json({ success: false, message: "Resume must be under 5MB" }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads", "resumes");
    await mkdir(uploadsDir, { recursive: true });

    const safeName = resume.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const fileName = `${Date.now()}-${safeName}`;
    const filePath = path.join(uploadsDir, fileName);
    const buffer = Buffer.from(await resume.arrayBuffer());
    await writeFile(filePath, buffer);

    const resumeUrl = `${req.nextUrl.origin}/uploads/resumes/${fileName}`;

    await connectDB();
    const career = await Career.create({ ...parsed.data, resumeUrl });

    try {
      await sendCareerNotification({ ...parsed.data, resumeUrl, resumeLocalPath: filePath });
      await sendCareerConfirmation({
        name: parsed.data.name,
        email: parsed.data.email,
        position: parsed.data.position,
      });
    } catch (mailError) {
      console.error("Email sending failed:", mailError);
    }

    return NextResponse.json({ success: true, message: "Application submitted", data: { id: career._id } });
  } catch (error) {
    console.error("Careers API error:", error);
    return NextResponse.json({ success: false, message: "Server error, please try again later" }, { status: 500 });
  }
}
