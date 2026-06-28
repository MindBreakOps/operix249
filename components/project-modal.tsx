"use client"

import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

interface ProjectModalProps {
  open: boolean
  onClose: () => void
  project: {
    title: string
    subtitle: string
    challenge: string
    solution: string
    impact: string[]
  } | null
}

export default function ProjectModal({
  open,
  onClose,
  project,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {open && project && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed left-1/2 top-1/2 z-[100] w-[95%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#020817] p-8 text-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6"
            >
              <X />
            </button>

            <span className="text-yellow-400">
              {project.subtitle}
            </span>

            <h2 className="mt-4 text-4xl font-black">
              {project.title}
            </h2>

            <div className="mt-10 space-y-8">

              <div>
                <h3 className="mb-3 text-xl font-bold text-yellow-400">
                  التحدي
                </h3>

                <p className="text-gray-300">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-yellow-400">
                  الحل
                </h3>

                <p className="text-gray-300">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-yellow-400">
                  النتائج
                </h3>

                <div className="space-y-3">
                  {project.impact.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}