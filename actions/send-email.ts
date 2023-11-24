"use server";

import { Resend } from "resend";
import { formSchema } from "@/app/(routes)/contact/page";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY)

const validateString = (value: unknown) => {
    if(!value || typeof value !== "string") {
        return false
    }

    return true
}

export const sendEmail = async (formData: z.infer<typeof formSchema>) => {

    const name = formData.name
    const email = formData.email
    const message = formData.message



    resend.emails.send({
        from: "onboarding@resend.dev",
        to: "davidvojvodic1@gmail.com",
        subject: "Message from store",
        reply_to: email,
        text: message,
    })
  };