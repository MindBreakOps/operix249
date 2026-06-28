"use client"

import { motion } from "framer-motion"

const impactItems = [
  {
    title: "Future-Focused",
    description:
      "نؤمن أن التكنولوجيا ليست رفاهية، بل وسيلة لصناعة مستقبل أكثر استقرارًا ومرونة",
  },
  {
    title: "Built From Sudan",
    description:
      "كل ما نبنيه ينطلق من واقع حقيقي وتجارب حقيقية داخل السودان",
  },
  {
    title: "Human-Driven Technology",
    description:
      "نصمم تقنيات تساعد الناس فعليًا، وتكون قريبة من احتياجاتهم اليومية",
  },
  {
    title: "Resilience Powered Innovation",
    description:
      "الإبداع الحقيقي يولد عندما تصبح المحاولة أصعب... لكننا نستمر رغم ذلك",
  },
]

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-40 text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[15%] top-[10%] h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute bottom-[10%] right-[10%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-400 backdrop-blur-xl">
            IMPACT
          </span>

          <h2 className="mt-10 text-5xl font-black leading-tight md:text-7xl">

            ما الذي نحاول تغييره؟

          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-loose text-gray-300 md:text-xl">

           ... نحن لا نحاول فقط بناء مواقع أو أنظمة 
            بل نحاول المساهمة في خلق بيئة رقمية تساعد الناس
           . على العمل، الإنتاج، والاستمرار رغم كل التحديات

          </p>

        </motion.div>

        {/* Cards */}
        <div className="mt-28 grid gap-8 md:grid-cols-2">

          {impactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:border-yellow-500/30 hover:bg-white/10"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

              </div>

              <div className="relative z-10">

                <h3 className="text-3xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-6 leading-loose text-gray-300">

                  {item.description}

                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}