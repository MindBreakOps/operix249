"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    title: "Reality",
    text: "بدأ كل شيء من واقع مليء بالتحديات وعدم الاستقرار.",
  },
  {
    title: "Vision",
    text: "ظهرت فكرة بناء حلول رقمية تساعد الناس على الاستمرار والعمل بكفاءة.",
  },
  {
    title: "Innovation",
    text: "بدأنا بتطوير أنظمة حديثة تجمع بين التقنية والاحتياجات الحقيقية.",
  },
  {
    title: "Future",
    text: "رؤيتنا أن نكون جزءًا من مستقبل رقمي جديد ينطلق من السودان إلى العالم.",
  },
]

export default function TimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-40 text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[20%] top-[10%] h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute bottom-[10%] right-[10%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-400 backdrop-blur-xl">
            JOURNEY
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

            رحلتنا نحو المستقبل

          </h2>

        </motion.div>

        {/* Timeline */}
        <div className="relative mt-28">

          {/* Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-500 via-yellow-400 to-transparent" />

          <div className="space-y-20">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative pl-20"
              >

                {/* Dot */}
                <div className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-xl">

                  <div className="h-4 w-4 rounded-full bg-yellow-400" />

                </div>

                {/* Card */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                  <h3 className="text-3xl font-bold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-6 text-lg leading-loose text-gray-300">

                    {item.text}

                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}