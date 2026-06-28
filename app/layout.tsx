import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Space_Grotesk } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
  
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "OPERIX 249 | Sudan Future AI",

  description:
    "OPERIX 249 develops enterprise systems, AI solutions, automation platforms, and modern digital infrastructure for businesses and organizations.",

  keywords: [
    "Sudan AI",
    "AI Solutions",
    "Enterprise Systems",
    "Web Development",
    "Automation",
    "OPERIX 249",
    "Sudan Future AI",
  ],

  authors: [
    {
      name: "OPERIX 249",
    },
  ],

  creator: "OPERIX 249",

  openGraph: {
    title: "OPERIX 249 | Sudan Future AI",

    description:
      "Building Sudan’s digital future through intelligent systems and modern technologies.",

    url: "https://operix249.com",

    siteName: "OPERIX 249",

    locale: "en_US",

    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} ${geistMono.className} ${spaceGrotesk.className} min-h-full`}>
        {children}
      </body>
    </html>
  );
}
