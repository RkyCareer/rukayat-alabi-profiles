// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ✅ Prevent Next.js from trying to statically optimize this route
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: data.email,
      to: process.env.EMAIL_RECEIVER,
      subject: "Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name || "N/A"} </p>
        <p><strong>Company name:</strong> ${data.company  || "N/A"} </p>
        <p><strong>Email:</strong> ${data.email || "N/A"} </p>
        <p><strong>Subject:</strong> ${data.subject || "N/A"}</p>
        <p><strong>Message:</strong> ${data.message || "N/A"} </p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
