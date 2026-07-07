import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, service, message } = body;

    const data = await resend.emails.send({
      from: "LuxeHost Cleaning <info@luxehostcleaning.co.uk>",
      to: "info@luxehostcleaning.co.uk",
      replyTo: email,
      subject: `New Quote Request - ${service}`,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    console.log("EMAIL SENT:", data);

    return NextResponse.json({
      success: true,
      data,
    });

  } catch (error) {
    console.error("RESEND ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}