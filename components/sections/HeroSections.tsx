"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex overflow-hidden relative">
      
      {/* LEFT CONTENT - 50% */}
      <div className="w-full lg:w-[50%] px-6 lg:px-16 pt-[120px] lg:pt-[160px] pb-20 relative z-10 flex flex-col justify-center">
        
        {/* BIG TITLE */}
        <h1 className="text-[42px] lg:text-[64px] font-black leading-[0.9] tracking-tight">
          <span className="text-white">suryakiran</span>
          <br />
          <span className="text-[#ff8c00]">PHYSIOTHERAPY</span>
        </h1>

        {/* BACK TO LIFE */}
        <div className="flex items-center gap-3 mt-5 mb-6">
          <div className="w-10 h-[1px] bg-[#ff8c00]"></div>
          <p className="text-[16px] font-serif italic tracking-[2px] font-bold">BACK TO LIFE</p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-[15px] lg:text-[16px] leading-6 text-white/80 max-w-[400px]">
          The Institute of Physical Medicine.<br />
          <span className="text-white font-semibold">Expert women-led care</span> tailored to your recovery.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-8">
          <Link 
            href="#book" 
            className="bg-white text-black text-[11px] font-bold tracking-wide px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#ff8c00] hover:text-white transition"
          >
            BOOK APPOINTMENT <span>→</span>
          </Link>
          <Link 
            href="#services" 
            className="border border-white/20 text-white text-[11px] font-bold tracking-wide px-6 py-3 rounded-full bg-white/5 hover:bg-white hover:text-black transition"
          >
            EXPLORE SERVICES
          </Link>
        </div>

        {/* STATS */}
        <div className="flex gap-10 mt-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#ffca5a] rounded-full flex items-center justify-center text-black text-[14px]">🛡️</div>
            <div className="leading-tight">
              <p className="font-bold text-[13px]">20+</p>
              <p className="text-[11px] text-white/60">Years Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1a2a4a] rounded-full flex items-center justify-center text-[14px]">❤</div>
            <div className="leading-tight">
              <p className="font-bold text-[13px]">10000+</p>
              <p className="text-[11px] text-white/60">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE - 50% */}
      <div className="hidden lg:block w-[50%] h-screen relative">
        {/* Image as background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/medical.jpg')" }}
        ></div>
        {/* Black gradient overlay left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* SCROLL */}
        <div className="absolute bottom-10 left-1/2 flex flex-col items-center gap-3 z-10">
          <p className="text-[9px] tracking-[2px] text-white/50 rotate-0">SCROLL</p>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </div>

      {/* MOBILE - show image as background with overlay */}
      <div className="lg:hidden absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/medical.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* WhatsApp Float - bottom right */}
      <a 
        href="https://wa.me/919048030977" 
        target="_blank"
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-110 transition"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M19.1 4.9A9.9 9.9 0 0 0 12.1 2C6.6 2 2.1 6.5 2.1 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4a9.9 9.9 0 0 0 4.9 1.3c5.5 0 10-4.5 10-10 0-2.7-1-5.1-2.9-7m-7 15.2c-1.5 0-2.9-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 0 1-1.2-4.3c0-4.5 3.7-8.2 8.2-8.2 2.2 0 4.3.9 5.8 2.4a8.2 8.2 0 0 1 2.4 5.8c0 4.6-3.7 8.2-8.2 8.2m6.7-11.3c-.4-.9-2-1.6-2.8-1.7-.8-.1-1.1-.1-1.6.8-.4.7-1.3 1.7-1.6 2-.2.2-.4.4-1 .2-.5-.3-2-1-3.2-2.5-1.2-1.5-1.2-2.3-.9-2.8.2-.4 1-1.3 1.2-1.5.2-.2.3-.4.1-.7-.2-.3-1.6-1.6-2.2-2.2-.5-.5-.8-.5-1.1-.5h-.9c-.4 0-1 .2-1.5.8-.5.6-1.9 1.9-1.9 4.6s1.9 5.3 2.2 5.7c.2.4 3.9 6 9.4 8.4.6.2 1 .2 1.4.1.8-.2 2-1.2 2.3-2.3.3-1.1.3-2 .2-2.2-.1-.2-.5-.3-1-.5"/>
        </svg>
      </a>
    </section>
  );
}