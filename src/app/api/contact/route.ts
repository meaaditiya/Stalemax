import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";
import { contactSchema } from "@/lib/validations";
import { sendContactNotification, sendContactConfirmation } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    await connectDB();
    const contact = await Contact.create(parsed.data);

    try {
      await sendContactNotification(parsed.data);
      await sendContactConfirmation({ name: parsed.data.name, email: parsed.data.email });
    } catch (mailError) {
      console.error("Email sending failed:", mailError);
    }

    return NextResponse.json({ success: true, message: "Enquiry submitted", data: { id: contact._id } });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: false, message: "Server error, please try again later" }, { status: 500 });
  }
}
