import Navbar from "@/components/layout/navbar"
import HeroSections from "@/components/sections/HeroSections"
import AboutSection from "@/components/sections/AboutSection"
import ServiceSection from "@/components/sections/ServiceSection"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSections />
      <AboutSection />
      <ServiceSection/>
      
    </main>
  )
}