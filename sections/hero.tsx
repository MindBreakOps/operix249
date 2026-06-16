import React from 'react';
import Image from 'next/image';
import { Play, Users, ClipboardCheck, Award, Code2, ArrowUpLeft } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#03060f] pt-20">
      
      {/* الخلفية */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/ss.png" 
          alt="Operix 249 Future AI Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03060f] via-[#03060f]/60 to-transparent" />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-16 z-10 flex flex-col flex-grow justify-center py-10">
        
        {/* الجزء العلوي (النصوص) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-auto mb-auto">
          
          <div className="lg:col-span-7 flex flex-col text-right" dir="rtl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[3px] h-6 bg-amber-500 rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium tracking-wide">من السودان إلي المستقبل</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] mb-6">
              وسط التحديات تولد <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">الأفكار الأقوى</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-8">
              ووسط المعاناة يولد <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">الإبداع الحقيقي</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed font-light">
              نحن في <span className="font-semibold text-amber-400">OPERIX 249</span> نبني حلولاً رقمية وأنظمة ذكية تساعد الأعمال علي الاستمرار، النمو، ومواكبة المستقبل
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center justify-center gap-2 bg-amber-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-amber-500 transition-all duration-300 group">
                <span>ابدأ مشروعك</span>
                <ArrowUpLeft className="w-5 h-5 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button className="flex items-center justify-center gap-3 border border-gray-700 hover:border-amber-400/50 text-white font-medium px-8 py-4 rounded-xl bg-slate-900/30 backdrop-blur-sm transition-all duration-300">
                <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>اكتشف رؤيتنا</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* شريط الإحصائيات (معدل ليكون أنحف وأكثر أناقة) */}
      <div className="w-full bg-gradient-to-b from-transparent to-[#03060f] pt-10 pb-6 z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="bg-[#0a1120]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center" dir="rtl">
            
            {[
              { icon: Users, val: "50+", title: "عميل سعيد" },
              { icon: ClipboardCheck, val: "120+", title: "مشروع مكتمل" },
              { icon: Award, val: "5+", title: "سنوات خبرة" },
              { icon: Code2, val: "24/7", title: "دعم فني" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <stat.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{stat.val}</h4>
                  <p className="text-[11px] text-gray-400">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
<section id="home"></section> 