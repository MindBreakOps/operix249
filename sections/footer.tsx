"use client"

import { Mail, Phone } from "lucide-react"

// مكون أيقونة GitHub المخصص ليتوافق مع أوزان Lucide ومستجيب لخاصية size
const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

// مكون أيقونة LinkedIn المخصص ليتوافق مع أوزان Lucide ومستجيب لخاصية size
const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020817] px-6 py-16">

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-3">

        <div>
          <h2 className="text-3xl font-black text-white">
            OPERIX 249
          </h2>

          <p className="mt-4 max-w-sm leading-relaxed text-gray-400">
            Building Sudan’s digital future through intelligent systems,
            modern technologies, and enterprise-grade solutions.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <div className="space-y-4 text-gray-400">

            <a href="#" className="block transition hover:text-yellow-500">
              Home
            </a>

            <a href="#" className="block transition hover:text-yellow-500">
              Services
            </a>

            <a href="#" className="block transition hover:text-yellow-500">
              Portfolio
            </a>

            <a href="#" className="block transition hover:text-yellow-500">
              Contact
            </a>

          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Connect
          </h3>

          <div className="space-y-5 text-gray-400">

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>mustafa.abdallah@operix-solutions.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+249 126 968 187</span>
            </div>

            <div className="flex items-center gap-4 pt-4">

              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-yellow-500 hover:text-yellow-500"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-yellow-500 hover:text-yellow-500"
              >
                <LinkedinIcon size={18} />
              </a>

            </div>

          </div>
        </div>

      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

        <p>
          © 2026 OPERIX 249. All rights reserved.
        </p>

        <p>
          Under the Operix Solutions
          www.operix-solutions.com
        </p>

      </div>

    </footer>
  )
}