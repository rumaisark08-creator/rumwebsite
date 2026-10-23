"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[80px] flex items-center justify-between">
        
        {/* LEFT - LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] border border-yellow-500 p-1">
            <img 
              src="/logo.png" // put your logo in /public/logo.png
              alt="Suryakiran" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <h1 className="font-bold text-[18px] tracking-wide">suryakiran</h1>
            <p className="text-[10px] tracking-[2px] font-semibold opacity-80">PHYSIOTHERAPY</p>
          </div>
        </Link>

        {/* CENTER - LINKS */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium">
          <Link href="/" className="text-[#ff8c00]">Home</Link>
          <Link href="#about" className="hover:text-[#ff8c00] transition">About</Link>
          <Link href="#services" className="hover:text-[#ff8c00] transition">Services</Link>
          <Link href="#faq" className="hover:text-[#ff8c00] transition">FAQ</Link>
          <Link href="#contact" className="hover:text-[#ff8c00] transition">Contact</Link>
        </div>

        {/* RIGHT - PHONE */}
        <div className="hidden md:block">
          <a 
            href="tel:+919048030977" 
            className="bg-[#111] border border-white/10 rounded-full px-5 py-2.5 text-[13px] font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition"
          >
            <span>✆</span> +91 90480 30977
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-[14px]">
          <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link href="#about" onClick={()=>setOpen(false)}>About</Link>
          <Link href="#services" onClick={()=>setOpen(false)}>Services</Link>
          <Link href="#faq" onClick={()=>setOpen(false)}>FAQ</Link>
          <Link href="#contact" onClick={()=>setOpen(false)}>Contact</Link>
          <a href="tel:+919048030977" className="bg-white text-black rounded-full px-5 py-2.5 text-center mt-2 font-bold">
            +91 90480 30977
          </a>
        </div>
      )}
    </nav>
  );
}