"use client"

import { useState } from "react"

import { Menu, X } from "lucide-react"

import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020817]/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700" />

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              OPERIX 249
            </h1>

            <p className="text-xs text-gray-400">
              Sudan Future AI
            </p>
          </div>

        </div>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">

          <a
            href="#"
            className="transition hover:text-yellow-400"
          >
            Home
          </a>

          <a
            href="#"
            className="transition hover:text-yellow-400"
          >
            Services
          </a>

          <a
            href="#"
            className="transition hover:text-yellow-400"
          >
            Portfolio
          </a>

          <a
            href="#"
            className="transition hover:text-yellow-400"
          >
            Contact
          </a>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Button className="hidden bg-yellow-500 text-black hover:bg-yellow-400 md:flex">
            Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="text-white md:hidden"
          >
            <Menu size={30} />
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {open && (
          <>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[300px] flex-col border-l border-white/10 bg-[#020817] p-8"
            >

              {/* Top */}
              <div className="mb-12 flex items-center justify-between">

                <h2 className="text-2xl font-bold text-white">
                  OPERIX 249
                </h2>

                <button onClick={() => setOpen(false)}>
                  <X className="text-white" />
                </button>

              </div>

              {/* Links */}
              <div className="flex flex-col gap-8 text-lg text-white">

                <a href="#" onClick={() => setOpen(false)}>
                  Home
                </a>

                <a href="#" onClick={() => setOpen(false)}>
                  Services
                </a>

                <a href="#" onClick={() => setOpen(false)}>
                  Portfolio
                </a>

                <a href="#" onClick={() => setOpen(false)}>
                  Contact
                </a>

              </div>

              {/* CTA */}
              <Button className="mt-auto bg-yellow-500 text-black hover:bg-yellow-400">
                Start Project
              </Button>

            </motion.div>

          </>
        )}

      </AnimatePresence>

    </header>
  )
}