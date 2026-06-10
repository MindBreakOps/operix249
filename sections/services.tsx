"use client"

import {
  Brain,
  Globe,
  ShieldCheck,
  Database,
  Workflow,
  Cpu,
} from "lucide-react"

import { motion } from "framer-motion"

const services = [
  {
    title: "AI Solutions",
    icon: Brain,
    description:
      "Modern artificial intelligence systems designed to automate and optimize business operations.",
  },

  {
    title: "Web Development",
    icon: Globe,
    description:
      "High-performance websites and platforms built with modern technologies and premium UI.",
  },

  {
    title: "Enterprise Systems",
    icon: Database,
    description:
      "Custom ERP and business management systems tailored for organizations and enterprises.",
  },

  {
    title: "Cyber Security",
    icon: ShieldCheck,
    description:
      "Advanced security solutions and infrastructure protection for digital businesses.",
  },

  {
    title: "Automation",
    icon: Workflow,
    description:
      "Smart workflow automation solutions that improve productivity and efficiency.",
  },

  {
    title: "Cloud Infrastructure",
    icon: Cpu,
    description:
      "Scalable cloud systems and deployment architectures built for reliability.",
  },
]

export default function Services() {
  return (
    <section className="relative bg-[#020817] px-6 py-32">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
            OUR SERVICES
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Innovative Digital Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            We build advanced digital systems and intelligent platforms
            designed for the future of businesses and organizations.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-500/40"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-gray-400">
                    {service.description}
                  </p>

                </div>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}