"use client"

import { motion } from "framer-motion"

const stats = [
  {
    number: "10+",
    label: "Projects Planned",
  },

  {
    number: "24/7",
    label: "Technical Support",
  },

  {
    number: "100%",
    label: "Modern Technologies",
  },

  {
    number: "AI",
    label: "Future Driven",
  },
]

export default function Stats() {
  return (
    <section className="relative bg-[#020817] px-6 py-24">

      <div className="mx-auto grid max-w-7xl gap-8 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-5xl font-black text-yellow-500">
              {stat.number}
            </h3>

            <p className="mt-3 text-gray-400">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  )
}