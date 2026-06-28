"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/249126968187"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_40px_rgba(34,197,94,0.45)] transition duration-300 hover:scale-110"
    >

      <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20" />

      <MessageCircle size={30} className="relative z-10" />

    </a>
  )
}