"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-32">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
            CONTACT US
          </p>

          <h2 className="text-5xl font-black leading-tight text-white">
            Let’s Build
            <span className="block text-yellow-500">
              The Future Together
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            We help businesses and organizations build modern digital
            systems, AI solutions, and enterprise-grade platforms.
          </p>

          <div className="mt-12 space-y-6">

            <div>
              <p className="text-sm text-gray-500">
                Email
              </p>

              <h3 className="text-xl font-semibold text-white">
                operix249@gmail.com
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Phone
              </p>

              <h3 className="text-xl font-semibold text-white">
                +249 126 968 187
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Location
              </p>

              <h3 className="text-xl font-semibold text-white">
                Khartoum, Sudan
              </h3>
            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition focus:border-yellow-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition focus:border-yellow-500"
            />

            <textarea
              placeholder="Tell us about your project..."
              rows={6}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition focus:border-yellow-500"
            />

            <button
              className="w-full rounded-2xl bg-yellow-500 py-5 text-lg font-semibold text-black shadow-[0_0_40px_rgba(212,160,23,0.35)] transition hover:scale-[1.02] hover:bg-yellow-400"
            >
              Send Message
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  )
}