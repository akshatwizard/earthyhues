import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend';

const resend = new Resend("re_jomCRfaD_HGorfVxvRenuJsKq4cTmiG4s");

export async function POST(request) {
    try {
        const data = await request.json()
        const { name, travelKind, noOfTravellers, noOfDays } = data;
        const fullData ={
            ...data.newData,
            ...data.formData
        }
        const fullDataString = JSON.stringify(fullData, null, 2);
        console.log(fullData);
        const { datas, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['priyeshrai.dev@gmail.com'],
            subject: 'Traveler Details',
            html: `<strong>User Data :- ${fullDataString}</strong>`,
        });
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ error: error.message })
    }
}