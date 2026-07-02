import nodemailer from "nodemailer";

export function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function wrapEmail(title: string, body: string) {
  return `
  <div style="font-family:Manrope,Arial,sans-serif;background:#FAF8F5;padding:32px;">
    <div style="max-width:520px;margin:0 auto;background:#FFFFFF;border:1px solid #E8E5E1;border-radius:16px;overflow:hidden;">
      <div style="background:#17143C;padding:24px 28px;">
        <span style="color:#FFDCCF;font-size:18px;font-weight:700;">Stalemax Technologies</span>
      </div>
      <div style="padding:28px;">
        <h2 style="color:#17143C;font-size:20px;margin:0 0 12px;">${title}</h2>
        <div style="color:#1B1B1B;font-size:14px;line-height:1.7;">${body}</div>
      </div>
      <div style="padding:16px 28px;border-top:1px solid #E8E5E1;color:#6B6878;font-size:12px;">
        Stalemax Technologies · Meerut, Uttar Pradesh, India
      </div>
    </div>
  </div>`;
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget?: string;
  projectType?: string;
  timeline?: string;
  description: string;
}) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.COMPANY_EMAIL,
    subject: `New Enquiry — ${data.name}`,
    html: wrapEmail(
      "New Contact Enquiry",
      `
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone ?? "-"}</p>
      <p><b>Company:</b> ${data.company ?? "-"}</p>
      <p><b>Budget:</b> ${data.budget ?? "-"}</p>
      <p><b>Project Type:</b> ${data.projectType ?? "-"}</p>
      <p><b>Timeline:</b> ${data.timeline ?? "-"}</p>
      <p><b>Description:</b><br/>${data.description}</p>
      `
    ),
  });
}

export async function sendContactConfirmation(data: { name: string; email: string }) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: data.email,
    subject: "We received your enquiry — Stalemax Technologies",
    html: wrapEmail(
      `Thank you, ${data.name}`,
      `<p>We've received your project enquiry and our team will get back to you within 24 hours.</p>
       <p>In the meantime, feel free to explore our portfolio and services on our website.</p>
       <p>— Team Stalemax</p>`
    ),
  });
}

export async function sendCareerNotification(data: {
  name: string;
  email: string;
  phone: string;
  experience: string;
  position: string;
  currentCompany?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  message?: string;
  resumeUrl: string;
  resumeLocalPath: string;
}) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.COMPANY_EMAIL,
    subject: `New Job Application — ${data.name} (${data.position})`,
    html: wrapEmail(
      "New Job Application",
      `
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Position:</b> ${data.position}</p>
      <p><b>Experience:</b> ${data.experience}</p>
      <p><b>Current Company:</b> ${data.currentCompany ?? "-"}</p>
      <p><b>LinkedIn:</b> ${data.linkedin ?? "-"}</p>
      <p><b>GitHub:</b> ${data.github ?? "-"}</p>
      <p><b>Portfolio:</b> ${data.portfolio ?? "-"}</p>
      <p><b>Message:</b><br/>${data.message ?? "-"}</p>
      <p><b>Resume:</b> <a href="${data.resumeUrl}">${data.resumeUrl}</a></p>
      `
    ),
    attachments: [{ path: data.resumeLocalPath }],
  });
}

export async function sendCareerConfirmation(data: { name: string; email: string; position: string }) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: data.email,
    subject: "Application Received — Stalemax Technologies",
    html: wrapEmail(
      `Thank you for applying, ${data.name}`,
      `<p>We've received your application for the <b>${data.position}</b> role.</p>
       <p>Our hiring team will review your profile and reach out if there is a match.</p>
       <p>— Team Stalemax</p>`
    ),
  });
}
