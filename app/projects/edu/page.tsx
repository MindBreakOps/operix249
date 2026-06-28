"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectNavbar from "@/components/project-navbar"

export default function EduProjectPage() {
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
    <main className="min-h-screen bg-[#020817] text-white selection:bg-indigo-500/30 font-sans" dir="rtl">
      <ProjectNavbar />
      {/* 1. Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-32 px-6">
        {/* تأثيرات الإضاءة الخلفية الأكاديمية */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          className="relative z-10 mx-auto max-w-5xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-400 backdrop-blur-md">
              <span>🇸🇩</span> Educational Digital Transformation
            </span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="mt-8 text-6xl font-black leading-tight tracking-tight md:text-8xl lg:text-[6rem]">
            منظومة <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-600">مسار</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="mt-6 text-2xl font-light tracking-wide text-indigo-200/80" dir="ltr">
            Education Management System
          </motion.p>

          <motion.p variants={fadeIn} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            منصة رقمية متكاملة لإدارة المدارس والجامعات والمراكز التعليمية، توفر بيئة تفاعلية بين الطالب، المعلم، والإدارة لضمان تجربة تعليمية حديثة.
          </motion.p>

          {/* زر الاشتراك / المعاينة */}
          <motion.div variants={fadeIn} className="mt-10 flex justify-center">
            <a
              href="https://www.edu.operix-solutions.online"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-indigo-500 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
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
            <h2 className="text-3xl font-bold text-indigo-400 md:text-4xl">القصة</h2>
            <p className="text-lg leading-loose text-gray-300">
              في ظل التطور التكنولوجي السريع، صممنا منظومة <strong className="text-white">مسار</strong> لتكون جسراً يربط بين الأساليب التعليمية العريقة وأدوات العصر الرقمي، مما يتيح للمؤسسات التعليمية إدارة شؤونها الأكاديمية والإدارية بكل سلاسة واحترافية.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-indigo-400 md:text-4xl">التحدي والحل</h2>
            <p className="text-lg leading-loose text-gray-300">
              كانت إدارة الجداول، الاختبارات، المناهج، والتواصل مع أولياء الأمور تتم بطرق مشتتة وورقية. الحل كان في <strong className="text-white">منصة تعليمية سحابية</strong> تجمع شؤون الطلاب، الموارد البشرية، والنظام المالي في مكان واحد آمن وفعال.
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
            <h2 className="text-4xl font-black text-white md:text-5xl">واجهات <span className="text-indigo-400">المنظومة</span></h2>
            <p className="mt-4 text-gray-400 text-lg">بيئة تعليمية رقمية سهلة الاستخدام</p>
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
                  src={`/edu-${num}.png`}
                  alt={`Edu interface ${num}`}
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
          <h2 className="mb-16 text-center text-4xl font-black text-white md:text-5xl">الأقسام <span className="text-indigo-400">الأساسية</span></h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "إدارة شؤون الطلاب والقبول",
              "نظام الامتحانات والنتائج",
              "بوابة المعلمين وأولياء الأمور",
              "الإدارة المالية والموارد البشرية"
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-lg font-medium text-gray-200 backdrop-blur-xl transition-colors hover:border-indigo-500/30 hover:bg-white/10"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Impact Metrics */}
      <section className="px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020817] to-[#020817]" />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-black text-white md:text-5xl">التأثير <span className="text-indigo-400">والأرقام</span></h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { value: "100%", label: "أتمتة كاملة للعمليات الإدارية والأكاديمية" },
              { value: "LMS", label: "نظام إدارة تعلم تفاعلي متكامل" },
              { value: "24/7", label: "متابعة مستمرة لأداء الطلاب وتحصيلهم" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="rounded-3xl border border-white/10 bg-black/40 p-10 text-center backdrop-blur-xl hover:border-indigo-500/20 transition-colors"
              >
                <h3 className="text-5xl font-black text-indigo-400 mb-4">{stat.value}</h3>
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
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* زر الاشتراك في النظام */}
            <a
              href="https://www.edu.operix-solutions.online"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-indigo-500 px-10 py-5 font-bold text-white transition-all hover:scale-105 hover:bg-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] w-full sm:w-auto"
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