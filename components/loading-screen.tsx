"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020817]"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="mb-6 flex items-center justify-center"
            >
              {/* تم استبدال المربع باللوجو المفرغ مع تأثير الإضاءة الملتفة */}
              <img 
                src="/logo.png" 
                alt="Operix Solutions Logo" 
                className="h-32 w-auto object-contain drop-shadow-[0_0_35px_rgba(212,160,23,0.45)]" 
              />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="text-4xl font-black tracking-[0.2em] text-white"
            >
              OPERIX 249
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
              }}
              className="mt-4 text-sm uppercase tracking-[0.4em] text-yellow-500"
            >
              Sudan Future AI
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}