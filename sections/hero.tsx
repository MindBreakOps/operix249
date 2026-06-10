"use client"
import BackgroundEffects from "@/components/background-effects"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Aurora from "@/components/aurora"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020817] px-6">
      <Aurora />

      <BackgroundEffects /> 

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Building Sudan’s
          <span className="block text-yellow-500">
            Digital Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
        >
          OPERIX 249 develops enterprise systems, AI solutions,
          and modern digital platforms designed for the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Button className="rounded-2xl bg-yellow-500 px-8 py-6 text-black shadow-[0_0_40px_rgba(212,160,23,0.35)] transition hover:scale-105 hover:bg-yellow-400">
            Start Project
          </Button>

          <Button
            variant="outline"
            className="border-white/20 bg-transparent px-8 py-6 text-white hover:bg-white/10"
          >
            View Portfolio
          </Button>
        </motion.div>

      </div>
    </section>
  )
}