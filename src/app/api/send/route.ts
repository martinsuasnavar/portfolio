"use server";

import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

interface Data {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {

    const body: Data = await request.json();
    const { email, name, subject, message } = body;

    const resend = new Resend('re_LvYGmmy7_G4ECuoaGHM8eHaFXxuJtY3yn');

    const response = await resend.emails.send({
      from: 'msuasnavar21@gmail.com', // Use a valid sender email address
      to: "msuasnavar21@gmail.com",
      subject: subject,
      html: `<p>${message}</p>`,
    });

}