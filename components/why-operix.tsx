"use client"

import { motion } from "framer-motion"
import {
  Zap,
  ShieldCheck,
  Users,
  Lightbulb,
} from "lucide-react"

const reasons = [
  {
    icon: Lightbulb,
    title: "نبني من الواقع السوداني",
    text: "نصمم أنظمة تنطلق من التحديات الحقيقية التي تواجه المؤسسات والمجتمعات السودانية يومياً",
  },

  {
    icon: Zap,
    title: "سرعة التنفيذ",
    text: "نحوّل الأفكار إلى منتجات رقمية حقيقية بسرعة وكفاءة دون التضحية بالجودة",
  },

  {
    icon: ShieldCheck,
    title: "أنظمة قابلة للنمو",
    text: "نبني حلولاً تقنية حديثة يمكن تطويرها وتوسعتها مع نمو أعمالك",
  },

  {
    icon: Users,
    title: "شراكة طويلة الأمد",
    text: "نرافق عملاءنا بعد الإطلاق بالتحديثات والدعم والتطوير المستمر",
  },
]

export default function WhyOperix() {
  return (
   <section
      id="why-operix"
      className="relative overflow-hidden bg-[#020817] px-6 py-32 text-white">"
    

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            WHY OPERIX 249
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            من هنا... تبدأ الشرارة
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400">
           ، نؤمن أن التكنولوجيا ليست رفاهية
           . بل أداة للتغيير الحقيقي وصناعة مستقبل أفضل
           . ومن السودان ننطلق لبناء حلول ذكية تخدم الإنسان والمؤسسات
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {reasons.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-yellow-500/30 hover:bg-white/10"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Icon className="h-8 w-8 text-yellow-400" />

                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-400">
                  {item.text}
                </p>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}