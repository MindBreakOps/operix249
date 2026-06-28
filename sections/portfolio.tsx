"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Enterprise Management System",
    category: "ERP Solution",
  },

  {
    title: "AI Automation Platform",
    category: "Artificial Intelligence",
  },

  {
    title: "Corporate Trading Website",
    category: "Web Development",
  },
]

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-32">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
            OUR WORK
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Innovative systems and modern digital platforms designed
            to empower businesses and organizations.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              <div className="relative h-[420px] overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-blue-500/5 to-transparent opacity-60 transition duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.25),transparent_40%)] opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 z-10 p-8">

                  <p className="mb-3 text-sm uppercase tracking-[0.2em] text-yellow-500">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
<section id="portfolio"></section>