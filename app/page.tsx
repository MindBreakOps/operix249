

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
import LoadingScreen from "@/components/loading-screen"
import MissionSection from "@/components/mission-section"
import StorySection from "@/components/story-section"
import ServicesSection from "@/components/services-section"
import VisionSection from "@/components/vision-section"
import ImpactSection from "@/components/impact-section"
import TimelineSection from "@/components/timeline-section"
import CTASection from "@/components/cta-section"
import PortfolioSection from "@/components/portfolio-section"
import WhyOperix from "@/components/why-operix"
import ContactSection from "@/components/contact-section"
import HowWeWork from "@/components/how-we-work"
import SudanManifesto from "@/components/sudan-manifesto"
import FinalCTA from "@/components/final-cta"
import Footerr from "@/components/footerr"



export default function Home() {
  return (
    <main className="bg-[#020817]">
  <ScrollProgress />
  <Particles /> 
  <MouseGlow />
  <SmoothScroll />
  <WhatsAppButton />
  <LoadingScreen /> 
  <Navbar />
  <Hero />
  <WhyOperix />
  <TechMarquee />
  <Services />
  <Stats />
  <PortfolioSection />
  <MissionSection />
  <StorySection />
  <ServicesSection />
  <VisionSection />
  <ImpactSection /> 
  <TimelineSection />
  <HowWeWork />
  <SudanManifesto />
  <ContactSection />
  <Footer />
  <CTASection />
  <FinalCTA />
  <Footerr />
</main>
  )
}