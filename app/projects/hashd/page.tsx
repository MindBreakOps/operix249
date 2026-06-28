"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectNavbar from "@/components/project-navbar"

export default function HashdProjectPage() {
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
    <main className="min-h-screen bg-[#020817] text-white selection:bg-yellow-500/30 font-sans" dir="rtl">
      <ProjectNavbar />
      {/* 1. Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-32 px-6">
        {/* تأثيرات الإضاءة الخلفية */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-yellow-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          className="relative z-10 mx-auto max-w-5xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-medium text-yellow-400 backdrop-blur-md">
              <span>🇸🇩</span> Community Digital Transformation
            </span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="mt-8 text-6xl font-black leading-tight tracking-tight md:text-8xl lg:text-[6rem]">
            منظومة <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">حشد</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="mt-6 text-2xl font-light tracking-wide text-yellow-200/80" dir="ltr">
            Hashd Community Management System
          </motion.p>

          <motion.p variants={fadeIn} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            منصة رقمية متكاملة لإحصاء السكان وإدارة شؤون الأحياء السكنية ولجان الخدمات المجتمعية بكفاءة عالية.
          </motion.p>

          {/* زر الاشتراك / المعاينة المضاف هنا */}
          <motion.div variants={fadeIn} className="mt-10 flex justify-center">
            <a
              href="https://www.hasad.operix-solutions.online"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-yellow-500 px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]"
            >
              <span className="relative z-10 text-lg">الاشتراك وزيارة النظام</span>
              <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
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
            <h2 className="text-3xl font-bold text-yellow-400 md:text-4xl">القصة</h2>
            <p className="text-lg leading-loose text-gray-300">
              استلهمت فكرة <strong className="text-white">حشد</strong> من حاجة الأحياء السودانية الماسة إلى قاعدة بيانات دقيقة تساعد في التخطيط الاستراتيجي، توزيع الخدمات بعدالة، واتخاذ القرارات السليمة لخدمة المجتمع.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-yellow-400 md:text-4xl">التحدي والحل</h2>
            <p className="text-lg leading-loose text-gray-300">
              كان غياب البيانات السكانية الدقيقة وصعوبة حصر الأسر والممتلكات والخدمات بشكل منظم يشكل عائقاً كبيراً. لذا، قمنا بتطوير <strong className="text-white">منصة سحابية</strong> شاملة لإدارة السكان، الأسر، الكفاءات، الممتلكات، وإصدار التقارير الإحصائية الدقيقة.
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
            <h2 className="text-4xl font-black text-white md:text-5xl">واجهات <span className="text-yellow-400">المنظومة</span></h2>
            <p className="mt-4 text-gray-400 text-lg">تصميم عصري يخدم الإدارة المجتمعية</p>
          </motion.div>

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
                  src={`/hashd-${num}.png`}
                  alt={`Hashd interface ${num}`}
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
          <h2 className="mb-16 text-center text-4xl font-black text-white md:text-5xl">الأقسام <span className="text-yellow-400">الرئيسية</span></h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "إدارة السكان والأسر",
              "حصر الممتلكات والموارد",
              "إدارة الكفاءات المجتمعية",
              "التقارير والإحصائيات"
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-lg font-medium text-gray-200 backdrop-blur-xl transition-colors hover:border-yellow-500/30 hover:bg-white/10"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Impact Metrics */}
      <section className="px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-[#020817] to-[#020817]" />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-black text-white md:text-5xl">التأثير <span className="text-yellow-400">والأرقام</span></h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { value: "100%", label: "حصر رقمي دقيق وشامل للسكان" },
              { value: "Fair", label: "توزيع عادل وشفاف للخدمات المجتمعية" },
              { value: "Data", label: "ذكاء مجتمعي وإدارة مبنية على البيانات" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="rounded-3xl border border-white/10 bg-black/40 p-10 text-center backdrop-blur-xl hover:border-yellow-500/20 transition-colors"
              >
                <h3 className="text-5xl font-black text-yellow-400 mb-4">{stat.value}</h3>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action & Footer (المعدل) */}
      <section className="px-6 py-24 bg-white/[0.02] border-t border-white/5">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* زر الاشتراك في النظام (جديد) */}
            <a
              href="https://www.hasad.operix-solutions.online"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-yellow-500 px-10 py-5 font-bold text-black transition-all hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                الاشتراك وتجربة النظام
                <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>

            {/* زر العودة للمشاريع */}
            <Link href="/#portfolio" className="w-full sm:w-auto">
              <button className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-10 py-5 font-bold text-white transition-all hover:scale-105 hover:bg-white/10 hover:border-white/30 backdrop-blur-md">
                <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
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