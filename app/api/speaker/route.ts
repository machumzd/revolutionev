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

if (!EMAIL_USER || !EMAIL_PASS || !TO_USER) {
  throw new Error("Missing EMAIL_USER, EMAIL_PASS or TO_USER env variables");
}

const transporter = nodemailer.createTransport({
  host:'smtpout.secureserver.net',
  port: 465,
  secure:true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const { name, email, phone, organization, industry, topic, bio } = formData;

    const internalEmailHtml = InternalEmailHandler({ formType: "Speaker", formData });
    const internalMail = {
      from: `"Revolution EV - Speaker" <${EMAIL_USER}>`,
      to: TO_USER,
      subject: `New Speaker Proposal from ${name}`,
      html: internalEmailHtml,
    };

    const thankYouMailData = {
      EVENT_DATE,
      EVENT_NAME,
      EVENT_EMAIL,
      EVENT_WEBSITE,
      name,
    };

    const thankYouMailHtml = ThankYouEmailHandler({ formData: thankYouMailData });
    const thankYouMail = {
      from: `"${EVENT_NAME}" <${EMAIL_USER}>`,
      to: email,
      subject: `Thank You For Your Interest in ${EVENT_NAME}`,
      html: thankYouMailHtml,
    };

    await transporter.sendMail(internalMail);

    await transporter.sendMail(thankYouMail);

    return NextResponse.json(
      { message: "Speaker proposal sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Speaker form error:", error);
    return NextResponse.json(
      { message: "Failed to send speaker proposal", error: error.message },
      { status: 500 }
    );
  }
}
