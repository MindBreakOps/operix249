"use server";

import { Resend } from "resend";
import { ContactSchema, ContactFormData } from "./validation";

// تهيئة Resend باستخدام المفتاح السري الذي ستضعه في ملف الـ .env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendProjectRequest(formData: ContactFormData) {
  // إعادة فحص البيانات في السيرفر لزيادة الأمان ومنع الاختراقات
  const validatedFields = ContactSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { success: false, error: "الرجاء التأكد من صحة البيانات المدخلة." };
  }

  const { name, company, email, phone, projectType, budget, timeline, description } = validatedFields.data;

  try {
    // إرسال الإيميل الفعلي إلى بريد الشركة
    await resend.emails.send({
      from: "Operix Solutions <onboarding@resend.dev>", 
      to: ["mustafa.abdallah@operix-solutions.com"], // بريدكم الرسمي المستلم
      subject: `🚀 طلب مشروع جديد من العميل: ${name}`,
      html: `
        <div style="direction: rtl; text-align: right; font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563eb;">🚀 طلب مشروع جديد عبر الموقع</h2>
          <hr />
          <p><strong>اسم العميل:</strong> ${name}</p>
          <p><strong>الشركة:</strong> ${company || "غير محدد"}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>رقم الهاتف:</strong> ${phone}</p>
          <p><strong>نوع المشروع المطلوب:</strong> ${projectType}</p>
          <p><strong>الميزانية التقديرية:</strong> ${budget}</p>
          <p><strong>الجدول الزمني:</strong> ${timeline}</p>
          <br />
          <p><strong>وصف وتفاصيل المشروع:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 6px; border-right: 4px solid #2563eb;">
            ${description}
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Resend Email Error:", error);
    return { success: false, error: "فشل في إرسال الإيميل، الرجاء المحاولة لاحقاً." };
  }
}