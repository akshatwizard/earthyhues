import { NextRequest,NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend("re_jomCRfaD_HGorfVxvRenuJsKq4cTmiG4s");

export async function POST(request) {
    try {
        const data = await request.json()
        const { name, phone, email, message } = data;
        // console.log(data);
        const { datas, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['priyeshrai.dev@gmail.com'],
            subject: 'Package Enquery',
            html: `<strong>Customer Name :- ${name} <br/>Customer Number:- ${phone} <br/> Customer Email:- ${email} <br/> Customer Message:- ${message}  </strong>`,
        });
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ error: error.message })
    }
}