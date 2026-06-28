"use client"

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020817] px-6 py-32 text-white">

      <div className="mx-auto max-w-5xl">

        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Start Your Project
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            Let's Build Something Great Together
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Tell us about your idea and our team will contact you within 24 hours.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <div className="grid gap-6 md:grid-cols-2">

            <input
              placeholder="Full Name *"
              className="rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
            />

            <input
              placeholder="Company Name"
              className="rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
            />

            <input
              placeholder="Email Address *"
              className="rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
            />

            <input
              placeholder="Phone Number *"
              className="rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
            />

          </div>

          <select
            className="mt-6 w-full rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
          >
            <option>Select Project Type</option>
            <option>Business Website</option>
            <option>Business Management System</option>
            <option>Healthcare System</option>
            <option>Educational Platform</option>
            <option>Government System</option>
            <option>AI Solution</option>
            <option>Mobile Application</option>
            <option>Other</option>
          </select>

          <textarea
            rows={7}
            placeholder="Describe your project..."
            className="mt-6 w-full rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
          />

          <Button className="mt-8 w-full bg-yellow-500 py-7 text-lg font-bold text-black hover:bg-yellow-400">
            Start My Project →
          </Button>

        </div>

      </div>

    </main>
  )
}