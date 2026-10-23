import Navbar from "@/components/layout/navbar"
import AboutSection from "@/components/sections/AboutSection"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3]">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
    </main>
  )
}