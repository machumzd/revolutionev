import { InternalEmailHandler } from "@/app/components/emailHandlers/internalEmail";
import { ThankYouEmailHandler } from "@/app/components/emailHandlers/thankYouEmail";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const TO_USER = process.env.TO_USER;

const EVENT_NAME = process.env.EVENT_NAME || "Revolution EV Malaysia";
const EVENT_DATE = process.env.EVENT_DATE || "October 23–24, 2025";
const EVENT_WEBSITE =
  process.env.EVENT_WEBSITE || "https://www.revolutionevmalaysia.com/";
const EVENT_EMAIL = process.env.EVENT_EMAIL || "info@revolutionevmalaysia.com";

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const {
      name,
      email,
      companyName,
      phoneNumber,
      jobTitle,
      industry,
    } = formData;

    // Basic validation
    if (
      !name ||
      !email ||
      !companyName ||
      !phoneNumber ||
      !jobTitle ||
      !industry
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Email content
    const internalEmailHtml = InternalEmailHandler({ formType: "Delegate", formData });
    const internalEmail = {
      from: `"Revolution EV - Delegate" <${EMAIL_USER}>`,
      to: TO_USER, // Your destination email
      subject: "New Delegate Registration",
      html: internalEmailHtml,
    };

    const thankYouMailData = {
      EVENT_DATE,
      EVENT_NAME,
      EVENT_EMAIL,
      EVENT_WEBSITE,
      name,
    };

    const thankYouMailHtml = ThankYouEmailHandler({
      formData: thankYouMailData,
    });

    const thankYouMail = {
      from: `"${EVENT_NAME}" <${EMAIL_USER}>`,
      to: email,
      subject: `Thank You For Your Interest in ${EVENT_NAME}`,
      html: thankYouMailHtml,
    };

    // Send the email
    await transporter.sendMail(internalEmail);
    await transporter.sendMail(thankYouMail);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
