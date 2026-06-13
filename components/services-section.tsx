"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Digital Infrastructure",
    description:
      "نبني أنظمة ومنصات رقمية حديثة تساعد الأعمال على الاستمرار، التنظيم، والنمو بثبات",
  },
  {
    title: "AI Solutions",
    description:
      "حلول ذكية تعتمد على الذكاء الاصطناعي لتحسين الأداء، تسريع القرارات، ورفع الكفاءة",
  },
  {
    title: "Intelligent Automation",
    description:
      "أتمتة العمليات والمهام المتكررة لتقليل التعقيد وتوفير الوقت والموارد",
  },
  {
    title: "Future Platforms",
    description:
      "منصات وتقنيات مرنة قابلة للتوسع تساعد الشركات على مواكبة المستقبل بثقة",
  },
]

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-32 text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

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
            SERVICES
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">

            نبني تقنيات تساعد على الحركة من جديد

          </h2>

          <p className="mt-8 text-lg leading-loose text-gray-300 md:text-xl">

            حلول رقمية حديثة مصممة لمساعدة الأفراد والأعمال
            على الاستمرار، التطور، ومواكبة المستقبل

          </p>

        </motion.div>

        {/* Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-2">

          {services.map((service, index) => (
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

              {/* Number */}
              <div className="relative z-10">

                <span className="text-sm text-yellow-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-3xl font-bold text-white">

                  {service.title}

                </h3>

                <p className="mt-6 leading-loose text-gray-300">

                  {service.description}

                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}