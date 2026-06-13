"use client"

import { motion } from "framer-motion"
import SudanLayer from "@/components/sudan-layer" 


const visionPoints = [
  {
    number: "01",
    title: "Digital Stability",
    description:
      "نبني حلولًا تساعد الأعمال والمؤسسات على العمل باستقرار وكفاءة حتى في البيئات الصعبة.",
  },
  {
    number: "02",
    title: "Human-Centered Technology",
    description:
      "نؤمن أن التكنولوجيا يجب أن تكون قريبة من الناس، مفهومة، وعملية في الواقع الحقيقي.",
  },
  {
    number: "03",
    title: "Future Built From Reality",
    description:
      "نصنع مستقبلًا رقميًا ينطلق من الواقع والتحديات الحقيقية، لا من الخيال فقط.",
  },
]

export default function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-40 text-white">
      <SudanLayer />
      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute bottom-[10%] right-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      </div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />

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
            OUR VISION
          </span>

          <h2 className="mt-10 text-5xl font-black leading-tight md:text-7xl">

            نحن لا ننتظر المستقبل...
            <span className="block text-yellow-400">
              نحن نحاول بناءه.
            </span>

          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-loose text-gray-300 md:text-xl">

            رؤيتنا هي أن تصبح التكنولوجيا أداة تساعد على
            إعادة الحركة، الإنتاج، والاستقرار في المجتمعات التي تواجه التحديات.

          </p>

        </motion.div>

        {/* Vision Cards */}
        <div className="mt-28 grid gap-8 md:grid-cols-3">

          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:border-yellow-500/30 hover:bg-white/10"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

              </div>

              <div className="relative z-10">

                <span className="text-sm font-bold text-yellow-400">
                  {point.number}
                </span>

                <h3 className="mt-6 text-3xl font-bold text-white">

                  {point.title}

                </h3>

                <p className="mt-6 leading-loose text-gray-300">

                  {point.description}

                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}