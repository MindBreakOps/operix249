import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }),
  company: z.string().optional(),
  email: z.string().email({ message: "صيغة البريد الإلكتروني غير صحيحة" }),
  phone: z.string().min(8, { message: "رقم الهاتف غير مكتمل" }),
  projectType: z.string().min(1, { message: "الرجاء اختيار نوع المشروع" }),
  budget: z.string().min(1, { message: "الرجاء تحديد الميزانية" }),
  timeline: z.string().min(1, { message: "الرجاء تحديد الجدول الزمني" }),
  description: z.string().min(20, { message: "الرجاء كتابة تفاصيل أكثر (20 حرفاً على الأقل)...
});

export type ContactFormData = z.infer<typeof ContactSchema>;