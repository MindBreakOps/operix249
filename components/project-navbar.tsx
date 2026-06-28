"use client"

import Link from "next/link"

export default function ProjectNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-xl font-black text-yellow-400"
        >
          OPERIX 249
        </Link>

        <nav className="flex items-center gap-6 text-sm">

          <Link href="/" className="hover:text-yellow-400">
            الرئيسية
          </Link>

          <Link href="/#services" className="hover:text-yellow-400">
            خدماتنا
          </Link>

          <Link href="/#portfolio" className="hover:text-yellow-400">
            أعمالنا
          </Link>

          <Link
            href="/projects/esnad"
            className="hover:text-yellow-400"
          >
            إسناد
          </Link>

          <Link
            href="/projects/shifa"
            className="hover:text-yellow-400"
          >
            شفاء
          </Link>

          <Link
            href="/projects/hashd"
            className="hover:text-yellow-400"
          >
            حشد
          </Link>

        </nav>

      </div>
    </header>
  )
}