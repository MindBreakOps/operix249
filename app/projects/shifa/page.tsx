"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectNavbar from "@/components/project-navbar"

export default function ShifaProjectPage() {
  // إعدادات الحركة (Framer Motion Variants)
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="min-h-screen bg-[#020817] text-white selection:bg-cyan-500/30 font-sans" dir="rtl">
      <ProjectNavbar />
      {/* 1. Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-32 px-6">
        {/* تأثيرات الإضاءة الخلفية الطبية */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          className="relative z-10 mx-auto max-w-5xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400 backdrop-blur-md">
              <span>🇸🇩</span> Healthcare Digital Transformation
            </span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="mt-8 text-6xl font-black leading-tight tracking-tight md:text-8xl lg:text-[6rem]">
            منظومة <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600">شفاء</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="mt-6 text-2xl font-light tracking-wide text-cyan-200/80" dir="ltr">
            Shifa Healthcare System
          </motion.p>

          <motion.p variants={fadeIn} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            نظام طبي متكامل لإدارة المستشفيات والعيادات والمختبرات والصيدليات والملفات الطبية الإلكترونية بأعلى معايير الكفاءة والأمان.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Story & Challenge Section */}
      <section className="relative px-6 py-24 bg-white/[0.02] border-y border-white/5">
        <motion.div 
          className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400 md:text-4xl">القصة</h2>
            <p className="text-lg leading-loose text-gray-300">
              في بيئة صحية تعتمد كلياً على السرعة والدقة، جاءت <strong className="text-white">منظومة شفاء</strong> لرقمنة رحلة المريض بالكامل. نسعى لتسهيل الخطوات وتوفير تجربة استثنائية تبدأ من الاستقبال والتشخيص وحتى صرف الدواء وإصدار التقارير الطبية.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400 md:text-4xl">التحدي والحل</h2>
            <p className="text-lg leading-loose text-gray-300">
              الاعتماد التقليدي على الملفات الورقية وصعوبة الربط الفوري بين الطبيب والمختبر والصيدلية يتسبب دائماً في بطء الخدمة وفقدان البيانات الطبية الهامة. لذلك قمنا بتطوير <strong className="text-white">نظام طبي سحابي موحد</strong> يدمج جميع أقسام المنشأة الصحية في منصة واحدة آمنة.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. System Screenshots Section */}
      <section className="px-6 py-32 relative">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white md:text-5xl">واجهات <span className="text-cyan-400">المنظومة</span></h2>
            <p className="mt-4 text-gray-400 text-lg">بساطة التصميم تلتقي مع دقة الأداء الطبي</p>
          </motion.div>

          {/* تم التعديل هنا ليمر على الصور الأربع بالكامل */}
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: num * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 aspect-video"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={`/shifa-${num}.png`}
                  alt={`Shifa interface ${num}`}
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Modules */}
      <section className="px-6 py-24 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-black text-white md:text-5xl">الأقسام <span className="text-cyan-400">المدعومة</span></h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "إدارة المستشفيات والعيادات",
              "نظام المختبرات والتحاليل",
              "إدارة الصيدليات والمخزون",
              "السجلات والملفات الطبية"
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-lg font-medium text-gray-200 backdrop-blur-xl transition-colors hover:border-cyan-500/30 hover:bg-white/10"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Impact Metrics */}
      <section className="px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#020817] to-[#020817]" />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-black text-white md:text-5xl">التأثير <span className="text-cyan-400">والأرقام</span></h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { value: "70%", label: "تسريع العمليات الطبية وسير العمل" },
              { value: "EMR", label: "ملفات طبية إلكترونية موحدة لكل مريض" },
              { value: "24/7", label: "وصول آمن ومستمر لبيانات المرضى التقارير" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="rounded-3xl border border-white/10 bg-black/40 p-10 text-center backdrop-blur-xl hover:border-cyan-500/20 transition-colors"
              >
                <h3 className="text-5xl font-black text-cyan-400 mb-4">{stat.value}</h3>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action & Footer */}
      <section className="px-6 py-24 bg-white/[0.02] border-t border-white/5">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/#portfolio">
              <button className="group relative overflow-hidden rounded-2xl bg-cyan-500 px-10 py-5 font-bold text-black transition-all hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  العودة إلى المشاريع
                  <svg className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}