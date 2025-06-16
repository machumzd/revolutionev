import { InternalEmailHandler } from "@/app/components/emailHandlers/internalEmail";
import { ThankYouEmailHandler } from "@/app/components/emailHandlers/thankYouEmail";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const TO_USER = process.env.TO_USER;

const EVENT_NAME = process.env.EVENT_NAME || "Revolution EV Malaysia";
const EVENT_DATE = process.env.EVENT_DATE || "October 23–24, 2025";
const EVENT_WEBSITE =
  process.env.EVENT_WEBSITE || "https://www.revolutionevmalaysia.com/";
const EVENT_EMAIL = process.env.EVENT_EMAIL || "info@revolutionevmalaysia.com";

export async function sendExhibitorEmail(formData: {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  industry: string;
  jobTitle: string;
  message: string;
  consent1: boolean;
  consent2: boolean;
}) {
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
  const internalEmailHtml = InternalEmailHandler({ formType: "Exhibitor", formData });
  const internalEmail = {
    from: `"Revolution EV - Exhibitor" <${EMAIL_USER}>`,
    to: TO_USER,
    subject: "New Exhibitor Registration",
    html: internalEmailHtml,
  };

  const thankYouMailData = {
    EVENT_DATE,
    EVENT_NAME,
    EVENT_EMAIL,
    EVENT_WEBSITE,
    name: formData.name,
  };

  const thankYouMailHtml = ThankYouEmailHandler({
    formData: thankYouMailData,
  });

  const thankYouMail = {
    from: `"${EVENT_NAME}" <${EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Thank You For Your Interest in ${EVENT_NAME}`,
    html: thankYouMailHtml,
  };

  const info = await transporter.sendMail(internalEmail);
  await transporter.sendMail(thankYouMail);

  return info;
}
