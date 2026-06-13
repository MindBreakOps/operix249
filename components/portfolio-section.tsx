"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ProjectModal from "@/components/project-modal"
import Link from "next/link"
     

const projects = [
  
  {
    id: 1,
    badge: "🇸🇩 Featured Sudanese Project",
    title: "منظومة إسناد",
    subtitle: "Esnad Quran Center Management System",

  challenge:
    "إدارة بيانات الطلاب والحضور والاختبارات والسجلات المالية بشكل ورقي واستهلاك وقت كبير في الأعمال الإدارية",
   solution:
    "منصة سحابية متكاملة لإدارة مراكز التحفيظ تشمل الطلاب والحضور والاختبارات والشهادات والإدارة المالية",

    category: "EdTech • ERP • Cloud",
    description:
      "منصة رقمية متكاملة لإدارة مراكز تحفيظ القرآن الكريم والحلقات التعليمية، تشمل الحضور والاختبارات والشهادات والإدارة المالية",
    image: "/esnad.png",
    impact: [
      "100% Digital Transformation",
      "80% Less Administrative Work",
      "Cloud Based Management",
    ],
  },

  {
    id: 2,
    badge: "🇸🇩 Healthcare Digital Transformation",
    title: "منظومة شفاء",
    subtitle: "Shifa Healthcare System",
    category: "Healthcare • EMR • ERP",
    challenge:
  "تعاني المراكز الطبية من تشتت الملفات الورقية وصعوبة إدارة المرضى والمواعيد والمختبرات والصيدليات بشكل مترابط وفعال",

solution:
  "قمنا بتطوير نظام صحي متكامل يربط الاستقبال والأطباء والمختبرات والصيدليات والملفات الطبية الإلكترونية داخل منصة واحدة آمنة وسهلة الاستخدام",
    description:
      "نظام طبي متكامل لإدارة المستشفيات والعيادات والمختبرات والصيدليات والملفات الطبية الإلكترونية",
    image: "/shifa.png",
    impact: [
      "Electronic Medical Records",
      "Smart Pharmacy",
      "70% Faster Workflow",
    ],
  },
  {
  id: 3,

  badge: "🇸🇩 Community Digital Transformation",

  title: "منظومة حشد",

  subtitle: "Hashd Community Management System",

  category: "Government • Community • Census",
  challenge:
  "واجهت لجان الأحياء صعوبة في حصر السكان والأسر والممتلكات والبيانات الخدمية بسبب الاعتماد على السجلات الورقية وعدم وجود قاعدة بيانات موحدة",

solution:
  "قمنا ببناء منصة رقمية لإدارة الأحياء السكنية وإحصاء السكان والأسر والممتلكات، مع أدوات متقدمة للبحث والتصنيف وإعداد التقارير واتخاذ القرار",

  description:
    "منصة رقمية متكاملة لإحصاء السكان وإدارة شؤون الأحياء السكنية، تساعد لجان الخدمات على بناء قاعدة بيانات دقيقة وتحسين توزيع الخدمات واتخاذ القرار",

  image: "/noicse.png",

  impact: [
    "Accurate Population Census",
    "Fair Service Distribution",
    "Community Data Intelligence",
  ],
}
]

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  return (
    <section
      id="portfolio"
      className="relative bg-[#020817] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Our Work
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
أنظمة رقمية بُنيت لحل تحديات حقيقية  

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            نبني أنظمة رقمية تعالج تحديات حقيقية وتخدم المؤسسات
           . والمجتمعات السودانية بأدوات تقنية حديثة ومعايير عالمية
          </p>
        </motion.div>

        <div className="space-y-12">

          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
group
overflow-hidden
rounded-3xl
border border-white/10
bg-white/5
backdrop-blur-xl
transition-all
duration-500
hover:border-yellow-500/30
hover:bg-white/10
hover:shadow-[0_0_60px_rgba(234,179,8,0.08)]
"
            >
              <div className="grid lg:grid-cols-2">

                <div className="relative min-h-[400px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                       className="
h-full
w-full
object-cover
transition-all
duration-700
group-hover:scale-105
"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">

                  <span className="mb-4 text-sm text-yellow-400">
                    {project.badge}
                  </span>

                  <h3 className="text-4xl font-black">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-yellow-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 text-gray-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                      {project.category}
                    </span>

                  </div>

                  <div className="mt-8 space-y-3">

                    {project.impact.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="h-2 w-2 rounded-full bg-yellow-400" />
                        {item}
                      </div>
                    ))}

                  </div>

                <Link
  href={
    project.id === 1
      ? "/projects/esnad"
      : project.id === 2
      ? "/projects/shifa"
      : "/projects/hashd"
  }
>
  <Button className="mt-10 w-fit bg-yellow-500 text-black hover:bg-yellow-400">
    عرض دراسة الحالة
    <ArrowUpRight className="ml-2 h-4 w-4" />
  </Button>
</Link>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
      <ProjectModal
  open={!!selectedProject}
  project={selectedProject}
  onClose={() => setSelectedProject(null)}
/>
    </section>
  )
}