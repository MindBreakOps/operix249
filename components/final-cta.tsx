"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-40 text-white">

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-5xl text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black leading-tight md:text-7xl"
        >
          هل لديك فكرة
          <br />
          يمكن أن تغيّر شيئاً؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-gray-400"
        >
          الأفكار العظيمة تبدأ بخطوة بسيطة.
          <br />
          دعنا نحول فكرتك إلى منتج رقمي حقيقي.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Button className="h-16 rounded-2xl bg-yellow-500 px-10 text-lg font-bold text-black hover:bg-yellow-400">
            ابدأ مشروعك الآن
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            className="h-16 rounded-2xl border-white/20 bg-white/5 px-10 text-lg text-white hover:bg-white/10"
          >
            تحدث معنا
          </Button>
        </motion.div>

      </div>

    </section>
  )
}