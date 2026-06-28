"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Sending data to the Next.js API route we just fixed!
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company: "N/A", // Adding placeholders for your API route expectations
          phone: "N/A",
          projectType: "Landing Page Inquiry"
        })
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form
        setTimeout(() => setIsSuccess(false), 5000); // Hide success message after 5s
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#020817] px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
            CONTACT US
          </p>
          <h2 className="text-5xl font-black leading-tight text-white">
            Let’s Build
            <span className="block text-yellow-500">
              The Future Together
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            We help businesses and organizations build modern digital
            systems, AI solutions, and enterprise-grade platforms.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <h3 className="text-xl font-semibold text-white">
                mustafa.abdallah@operix-solutions.com
              </h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <h3 className="text-xl font-semibold text-white">
                +249 126 968 187
              </h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <h3 className="text-xl font-semibold text-white">
                Khartoum, Sudan
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >
          {isSuccess ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="flex h-full flex-col items-center justify-center space-y-4 py-12 text-center"
             >
               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500">
                 <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
               <p className="text-gray-400">We will get back to you shortly.</p>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition focus:border-yellow-500"
              />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition focus:border-yellow-500"
              />
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition focus:border-yellow-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-yellow-500 py-5 text-lg font-semibold text-black shadow-[0_0_40px_rgba(212,160,23,0.35)] transition hover:scale-[1.02] hover:bg-yellow-400 disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}