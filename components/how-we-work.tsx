"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "الاستماع والفهم",
    description:
      "نبدأ بفهم المشكلة الحقيقية واحتياجات المستخدمين قبل كتابة أي سطر برمجي",
  },
  {
    number: "02",
    title: "التخطيط والتصميم",
    description:
      "نصمم تجربة المستخدم وهيكل النظام ونحول الأفكار إلى مخططات واضحة",
  },
  {
    number: "03",
    title: "التطوير والاختبار",
    description:
      "نبني النظام بأحدث التقنيات مع اختبارات مستمرة لضمان الجودة والاستقرار",
  },
  {
    number: "04",
    title: "الإطلاق والدعم",
    description:
      "نرافق المشروع بعد الإطلاق ونوفر الدعم والتطوير المستمر لتحقيق النجاح",
  },
]

export default function HowWeWork() {
  return (
    <section className="bg-[#020817] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            HOW WE WORK
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
           ... من الفكرة
            <br />
            إلى نظام يعمل على أرض الواقع
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400">
           . لا نبدأ بالكود
            <br />
           ، نبدأ بفهم الناس، ثم نصمم الحل، ثم نبنيه
            ثم نرافقه حتى ينجح
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 text-6xl font-black text-yellow-400">
                {step.number}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="leading-relaxed text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}