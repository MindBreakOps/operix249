"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SudanLayer from "@/components/sudan-layer"

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-40 text-white">
      <SudanLayer />
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute left-[20%] top-[20%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-400 backdrop-blur-xl">
            START YOUR JOURNEY
          </span>

        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-5xl font-black leading-tight md:text-7xl"
        >

          المستقبل لا يُنتظر...
          <span className="block text-yellow-400">
            بل يُبنى.
          </span>

        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl text-lg leading-loose text-gray-300 md:text-xl"
        >

          إذا كنت تؤمن أن التغيير ممكن،
          فنحن مستعدون لبناء شيء استثنائي معك.

        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >

          <Button className="h-14 rounded-2xl bg-yellow-500 px-8 text-base font-bold text-black hover:bg-yellow-400">

            ابدأ مشروعك الآن

            <ArrowRight className="ml-2 h-5 w-5" />

          </Button>

          <Button
            variant="outline"
            className="h-14 rounded-2xl border-white/20 bg-white/5 px-8 text-base text-white backdrop-blur-xl hover:bg-white/10"
          >

            Let’s Build The Future

          </Button>

        </motion.div>

      </div>

    </section>
  )
}