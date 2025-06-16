import { InternalEmailHandler } from "@/app/components/emailHandlers/internalEmail";
import { ThankYouEmailHandler } from "@/app/components/emailHandlers/thankYouEmail";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const TO_USER = process.env.TO_USER;

const EVENT_NAME = process.env.EVENT_NAME || "Revolution EV Malaysia";
const EVENT_DATE = process.env.EVENT_DATE || "October 23–24, 2025";
const EVENT_WEBSITE =
  process.env.EVENT_WEBSITE || "https://www.revolutionevmalaysia.com/";
const EVENT_EMAIL = process.env.EVENT_EMAIL || "info@revolutionevmalaysia.com";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const {
      name,
      email,

    } = formData;

    const transporter = nodemailer.createTransport({
      host:'smtpout.secureserver.net',
      port: 465,
      secure:true,
      auth: {
        user: EMAIL_USER,
        pass:EMAIL_PASS,
      },
    });

    const internalEmailHtml=InternalEmailHandler({ formType: "Enquiry", formData });
    const internalEmail = {
      from: `"Revolution EV - Enquiry" <${EMAIL_USER}>`,
      to: TO_USER, // Replace as needed
      subject: "New Enquiry - Revolution EV",
      html:internalEmailHtml,
    };

        const thankYouMailData = {
              EVENT_DATE,
              EVENT_NAME,
              EVENT_EMAIL,
              EVENT_WEBSITE,
              name
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
    
    await transporter.sendMail(internalEmail);
    await transporter.sendMail(thankYouMail);

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully and email sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit enquiry." },
      { status: 500 }
    );
  }
}
