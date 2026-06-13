"use client"

import { motion } from "framer-motion"

export default function SudanManifesto() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-40 text-white">

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-5xl text-center">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.4em] text-yellow-400"
        >
          OUR MANIFESTO
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-4xl font-black leading-tight md:text-7xl"
        >
          لسنا مجرد شركة تقنية
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl space-y-10 text-xl leading-loose text-gray-300 md:text-2xl"
        >

          <p>
            نحن جيل يؤمن أن السودان يستحق أن يكون
            جزءاً من المستقبل الرقمي.
          </p>

          <p className="font-bold text-white">
            وسط التحديات تولد الأفكار الأقوى،
            <br />
            ووسط المعاناة يولد الإبداع الحقيقي.
          </p>

          <p>
            لا نرى الأزمات نهاية الطريق،
            بل بداية لحلول أكثر ذكاءً،
            وأكثر قرباً من واقع الناس.
          </p>

          <p>
            نحن لا ننتظر التغيير...
            <br />
            نحن نشارك في صناعته.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-sm tracking-[0.5em] text-gray-500"
        >
          MADE IN SUDAN • BUILT FOR THE FUTURE
        </motion.div>

      </div>

    </section>
  )
}