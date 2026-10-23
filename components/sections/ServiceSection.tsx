import Card from "@/components/ui/card"
import { Truck, Palette, ShoppingBag, ShieldCheck, Briefcase, Wrench } from "lucide-react"

const services = [
  { icon: Truck, title: "FREE HOME DELIVERY", desc: "Get premium paints and supplies delivered directly to your doorstep with zero hassle." },
  { icon: Palette, title: "COLOR CONSULTATION", desc: "Expert assistance to choose the perfect color palette that matches your style and space." },
  { icon: ShoppingBag, title: "COMPLETE PROJECT WORKS", desc: "End-to-end management of painting projects, ensuring quality and timely completion." },
  { icon: ShieldCheck, title: "WARRANTED PAINTING", desc: "Professional painting services backed by official warranties for your peace of mind." },
  { icon: Briefcase, title: "EXECUTIVE SITE VISITS", desc: "Our company executives visit your site to assess requirements and ensure standards." },
  { icon: Wrench, title: "AFTER-SALES SUPPORT", desc: "Dedicated maintenance checks and support even after the project is completed." },
]

export default function ServiceSection() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-purple-100 text-purple-700 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full">PREMIUM ADD-ONS</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">EVERYTHING YOU NEED<br/><span className="text-purple-600">UNDER ONE ROOF</span></h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mt-4">We go beyond just selling paint. Experience a complete ecosystem of services designed for your convenience and peace of mind.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s,i) => (
            <Card key={i} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}