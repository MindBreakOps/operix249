"use client"

import React, { useState } from "react"
import { X, Loader2 } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactSchema, ContactFormData } from "@/lib/validation"
import { sendProjectRequest } from "@/lib/resend"

interface StartProjectModalProps {
  open: boolean
  onClose: () => void
}

export default function StartProjectModal({ open, onClose }: StartProjectModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setStatusMessage(null)
    
    const result = await sendProjectRequest(data)
    setIsSubmitting(false)

    if (result.success) {
      setStatusMessage({ type: 'success', text: "تم إرسال تفاصيل مشروعك بنجاح! سيتواصل معك فريقنا قريباً." })
      setTimeout(() => {
        reset()
        onClose()
        setStatusMessage(null)
      }, 3000)
    } else {
      setStatusMessage({ type: 'error', text: result.error || "حدث خطأ غير متوقع. حاول مرة أخرى." })
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[90]">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Scrollable Container */}
          <div className="absolute inset-0 z-[100] overflow-y-auto">
            <div 
              className="flex min-h-full items-center justify-center p-4 py-10 sm:p-6"
              onClick={onClose}
            >
              {/* Modal Content */}
              <motion.div
                className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#020817] to-[#0a1128] p-6 sm:p-8 text-white shadow-2xl"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                dir="rtl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="absolute left-6 top-6 rounded-full bg-white/5 p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={20} />
                </button>

                <div className="mb-8">
                  <span className="inline-block rounded-full bg-yellow-400/10 px-3 py-1 text-sm font-bold text-yellow-400">
                    ابدأ رحلتك الرقمية
                  </span>
                  <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                    تفاصيل المشروع الجديد
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">أخبرنا عن فكرتك، وسنقوم بتحويلها إلى واقع.</p>
                </div>

                {statusMessage && (
                  <div className={`mb-6 rounded-xl p-4 text-sm font-bold ${statusMessage.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {statusMessage.text}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-300">الاسم الكامل *</label>
                      <input {...register("name")} className={`w-full rounded-xl border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-yellow-400'} bg-white/5 p-3.5 text-white outline-none transition focus:bg-white/10 focus:ring-1 focus:ring-yellow-400/50`} placeholder="مثال: مصطفى أحمد" />
                      {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-300">اسم الشركة (اختياري)</label>
                      <input {...register("company")} className="w-full rounded-xl border border-white/10 bg-white/5 p-3.5 text-white outline-none transition focus:border-yellow-400 focus:bg-white/10 focus:ring-1 focus:ring-yellow-400/50" placeholder="أوبيريكس سولوشنز" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-300">البريد الإلكتروني *</label>
                      <input {...register("email")} type="email" className={`w-full rounded-xl border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-yellow-400'} bg-white/5 p-3.5 text-left text-white outline-none transition focus:bg-white/10 focus:ring-1 focus:ring-yellow-400/50`} placeholder="name@example.com" />
                      {errors.email && <p className="mt-1.5 text-xs text-red-400 text-right">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-300">رقم الهاتف *</label>
                      <input {...register("phone")} dir="ltr" className={`w-full rounded-xl border ${errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-yellow-400'} bg-white/5 p-3.5 text-left text-white outline-none transition focus:bg-white/10 focus:ring-1 focus:ring-yellow-400/50`} placeholder="+249..." />
                      {errors.phone && <p className="mt-1.5 text-xs text-red-400 text-right">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-300">نوع المشروع *</label>
                      <select {...register("projectType")} className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0a1128] p-3.5 text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50">
                        <option value="تطبيق موبايل">تطبيق موبايل</option>
                        <option value="موقع ويب">موقع ويب / لوحة تحكم</option>
                        <option value="نظام متكامل">نظام برمجي مخصص</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-300">الميزانية *</label>
                      <select {...register("budget")} className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0a1128] p-3.5 text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50">
                        <option value="أقل من 1,000$">أقل من 1,000$</option>
                        <option value="1,000$ - 3,000$">1,000$ - 3,000$</option>
                        <option value="أكثر من 3,000$">أكثر من 3,000$</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-300">الجدول الزمني *</label>
                      <select {...register("timeline")} className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0a1128] p-3.5 text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50">
                        <option value="شهر واحد">شهر واحد</option>
                        <option value="1-3 أشهر">1 - 3 أشهر</option>
                        <option value="مفتوح">حسب حجم العمل</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-300">تفاصيل المشروع *</label>
                    <textarea {...register("description")} rows={4} className={`w-full rounded-xl border ${errors.description ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-yellow-400'} bg-white/5 p-3.5 text-white outline-none transition focus:bg-white/10 focus:ring-1 focus:ring-yellow-400/50`} placeholder="اشرح لنا فكرة مشروعك بالتفصيل (ما هي الأهداف، الميزات المطلوبة، الخ)..."></textarea>
                    {errors.description && <p className="mt-1.5 text-xs text-red-400">{errors.description.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 p-4 font-bold text-black shadow-lg transition hover:bg-yellow-400 hover:shadow-yellow-500/20 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        جاري إرسال الطلب...
                      </>
                    ) : (
                      "إرسال الطلب 🚀"
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}