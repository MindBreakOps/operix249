"use client"

import {

  
  Mail,
  MessageCircle,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020817] px-6 py-20 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2">

          <div>

            <h2 className="text-3xl font-black">
              OPERIX 249
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              وسط التحديات تولد الأفكار الأقوى،
              <br />
              ووسط المعاناة يولد الإبداع الحقيقي.
            </p>

            <div className="mt-8 text-sm tracking-[0.3em] text-yellow-400">
              MADE IN SUDAN 🇸🇩
            </div>

          </div>

          <div className="flex flex-col items-start md:items-end">

            <h3 className="text-lg font-bold">
              Connect
            </h3>

            <div className="mt-6 flex gap-5">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-yellow-400"
              >
               
                <Mail />
              </a>

              <a
                href="https://wa.me/249XXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-yellow-400"
              >
                <MessageCircle />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">

          © 2026 OPERIX 249 — All Rights Reserved

        </div>

      </div>

    </footer>
  )
}