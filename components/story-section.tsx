"use client"

import { motion } from "framer-motion"

export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-32 text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-400 backdrop-blur-xl">
            WHY WE STARTED
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">

            لماذا بدأنا؟

          </h2>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8 text-lg leading-loose text-gray-300"
        >

          <p>
            بدأنا OPERIX 249 بإيمان بسيط:
            أن الظروف الصعبة لا تمنع التطور،
            بل تجعل الحاجة إليه أكبر من أي وقت مضى.
          </p>

          <p>
            رأينا أعمالًا تتوقف،
            وأفكارًا تضيع،
            وأشخاصًا يحاولون الاستمرار رغم كل شيء…
            لذلك قررنا أن نبني أدوات تساعد على الحركة من جديد.
          </p>

          <p>
            نحن لا نؤمن أن الابتكار يحتاج لبيئة مثالية،
            بل نؤمن أن أقوى الأفكار تولد عندما يصبح الاستسلام خيارًا سهلًا…
            لكن أحدًا يقرر أن يحاول رغم ذلك.
          </p>

        </motion.div>

      </div>

    </section>
  )
}