"use client"

const tech = [
  "NEXT.JS",
  "AI SYSTEMS",
  "REACT",
  "TAILWIND",
  "NODE.JS",
  "SUPABASE",
  "VERCEL",
  "TYPESCRIPT",
  "AUTOMATION",
  "CLOUD",
]

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#020817] py-8">

      <div className="flex animate-marquee whitespace-nowrap">

        {[...tech, ...tech].map((item, index) => (
          <div
            key={index}
            className="mx-10 text-lg font-semibold tracking-[0.3em] text-white/40"
          >
            {item}
          </div>
        ))}

      </div>
    </section>
  )
}