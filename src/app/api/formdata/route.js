import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend';

const resend = new Resend("re_jomCRfaD_HGorfVxvRenuJsKq4cTmiG4s");

export async function POST(request){
    try {
        const data = await request.json()
        const {location, date, email,contactNo} = data;
        // console.log(location,date,email,contactNo);
        const { datas, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['priyeshrai.dev@gmail.com'],
            subject: 'Traveler Details',
            html: `<strong>Location:-${location} <br/> Date:-${date} <br/> Email:-${email} <br/> Contact No:- ${contactNo}  </strong>`,
          });
        return NextResponse.json({data})
    } catch (error) {
        return NextResponse.json({error:error.message})
    }
}