"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

// The Google Apps Script API endpoint
const OPS_API = 'https://script.google.com/macros/s/AKfycby7xDEoYBzGM7sAAAkX0LDTKNHo63LjbgmaC-0VLXESPFj7BSl10GE-sIqM-Ss3wE8/exec';
const TARGET_EMAIL = 'info@operix-solutions.com';

export default function ContactPage() {
  // 1. Setup state for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Select Project Type",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. Handle input changes dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. The GAS Fetching Method
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = `NEW CONTACT LEAD\n\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\nMessage: ${formData.message || 'No message provided.'}`;

    try {
      await fetch(OPS_API, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ 
          action: 'sendEmail', 
          to: TARGET_EMAIL, 
          subject: `New Lead: ${formData.company || formData.name}`, 
          body 
        })
      });
      setIsSuccess(true);
      // Optional: Clear form data here if you want
    } catch (error) {
      console.error("Submission failed:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#020817] px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Start Your Project
          </span>
          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            Let's Build Something Great Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Tell us about your idea and our team will contact you within 24 hours.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          {/* Show Success Message or Form */}
          {isSuccess ? (
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">Request Sent Successfully!</h2>
              <p className="text-gray-400 mb-8">Our team will be in touch with you shortly.</p>
              <Button 
                onClick={() => setIsSuccess(false)}
                className="bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
              >
                Send Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
                />
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className="rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
                />
              </div>

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="mt-6 w-full rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
              >
                <option disabled>Select Project Type</option>
                <option>Business Website</option>
                <option>Business Management System</option>
                <option>Healthcare System</option>
                <option>Educational Platform</option>
                <option>Government System</option>
                <option>AI Solution</option>
                <option>Mobile Application</option>
                <option>Other</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={7}
                placeholder="Describe your project..."
                className="mt-6 w-full rounded-xl border border-white/10 bg-[#0f172a] p-4 outline-none focus:border-yellow-400"
              />

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-8 w-full bg-yellow-500 py-7 text-lg font-bold text-black hover:bg-yellow-400 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Start My Project →"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}