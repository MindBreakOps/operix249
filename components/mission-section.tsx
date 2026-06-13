"use client"

import { motion } from "framer-motion"

const cards = [
  {
    title: "Resilience",
    description:
      "نؤمن أن التحديات ليست نهاية الطريق، بل بداية للأفكار الأقوى والحلول الأكثر تأثيرًا.",
  },
  {
    title: "Innovation",
    description:
      "نصنع حلولًا رقمية حديثة تساعد الأفراد والأعمال على مواكبة المستقبل بثقة واستقرار.",
  },
  {
    title: "Sudan Vision",
    description:
      "نحمل رؤية تؤمن بأن السودان قادر على أن يكون جزءًا من المستقبل التقني العالمي.",
  },
]

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-32 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-400 backdrop-blur-xl">
            OUR MISSION
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">

            لسنا مجرد شركة تقنية

          </h2>

          <p className="mt-8 text-lg leading-loose text-gray-300 md:text-xl">

            نحن نؤمن أن التكنولوجيا يمكن أن تكون أداة للنهوض،
            وأن الأفكار العظيمة لا تحتاج لظروف مثالية حتى تولد.

          </p>

        </motion.div>

        {/* Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-yellow-500/30 hover:bg-white/10"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

              </div>

              <div className="relative z-10">

                <div className="mb-6 h-1 w-16 rounded-full bg-yellow-500" />

                <h3 className="text-2xl font-bold text-white">

                  {card.title}

                </h3>

                <p className="mt-6 leading-loose text-gray-300">

                  {card.description}

                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
  
}