"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#020817] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-5xl text-center">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-yellow-400"
        >
          CONTACT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl font-black md:text-6xl"
        >
          لديك فكرة؟
          <br />
           لنحوّلها إلى واقع  
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400"
        >
          من السودان نبني حلولاً رقمية تساعد المؤسسات
          والمشاريع على النمو والتطور
          <br />
         ، إذا كانت لديك فكرة أو تحدٍ حقيق
          فنحن جاهزون للبدء
        </motion.p>

        <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <a
            href="https://wa.me/249XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="h-14 rounded-2xl bg-yellow-500 px-8 text-black hover:bg-yellow-400">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </a>

          <a href="mailto:your@email.com">
            <Button
              variant="outline"
              className="h-14 rounded-2xl border-white/20 bg-white/5 px-8 text-white hover:bg-white/10"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
          </a>

        </div>

        <div className="mt-16 text-sm tracking-[0.3em] text-gray-500">
          MADE IN SUDAN • BUILT FOR THE FUTURE
        </div>

      </div>
    </section>
  )
}