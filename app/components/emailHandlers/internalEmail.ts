interface FormDataProps {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  industry: string;
  jobTitle: string;
  message: string;
  consent1: boolean;
  consent2: boolean;
}

export const InternalEmailHandler = ({
  formType="N/A",
  formData,
}: {
  formType: string;
  formData: FormDataProps;

}) => {
  const {
    name,
    email,
    phoneNumber,
    companyName,
    industry,
    jobTitle = "N/A",
    message = "N/A",
    consent1,
    consent2,
  } = formData;

  return ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px;">New ${formType} Enquiry Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${companyName}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Type:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${formType}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phoneNumber}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Industry:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${industry}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Job Title:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${jobTitle}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Message:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${
                message || "N/A"
              }</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Consent 1:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${
                consent1 ? "✅ Yes" : "❌ No"
              }</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Consent 2:</strong></td><td style="padding: 8px 0;">${
                consent2 ? "✅ Yes" : "❌ No"
              }</td></tr>
            </table>
          </div>
        </div>
      `;
};
