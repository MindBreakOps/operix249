import Navbar from "../components/navbar";
import Hero from "../sections/hero";
import Services from "@/sections/services"
import SmoothScroll from "@/components/smooth-scroll"
import Stats from "@/sections/stats"
import Portfolio from "@/sections/portfolio"
import MouseGlow from "@/components/mouse-glow"
import Particles from "@/components/particles"
import TechMarquee from "@/sections/tech-marquee"
import Contact from "@/sections/contact"
import Footer from "@/sections/footer"
import ScrollProgress from "@/components/scroll-progress"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="bg-[#020817]">
  <ScrollProgress />
  <Particles /> 
  <MouseGlow />
  <SmoothScroll />
  <WhatsAppButton />
  <Navbar />
  <Hero />
  <TechMarquee />
  <Services />
  <Stats />
  <Portfolio />
  <Contact />
  <Footer />
</main>
  )
}