"use client";
import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Phone, Menu, MapPin, X, ChevronDown, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PCEC_DATA } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for that "SaaS" glass look
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 z-[100] transition-all duration-300">
      {/* 1. TOP UTILITY BAR (Formal/Industrial) */}
      <div className="bg-[#0A0A0A] text-white py-2 px-6 border-b border-white/5 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6 items-center text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2 text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E31837] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E31837]"></span>
              </span>
              Authorized Dealer: <span className="text-white">Makita • 3M • Cromwell • Bosch</span>
            </span>
            <span className="flex items-center gap-2 hover:text-[#E31837] cursor-pointer transition-colors">
              <MapPin size={12} className="text-[#E31837]"/> Hosapete Hub
            </span>
          </div>
          
          <div className="flex gap-6 items-center text-[10px] font-black uppercase tracking-[0.2em]">
            <a href={`tel:${PCEC_DATA.contact.phone}`} className="flex items-center gap-2 hover:text-[#E31837] transition-colors">
              <Phone size={12} className="text-[#E31837]"/> {PCEC_DATA.contact.phone}
            </a>
            <Link href="/admin" className="px-3 py-1 bg-white/5 rounded border border-white/10 hover:bg-[#E31837] hover:border-[#E31837] transition-all">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (The "Slick" Part) */}
      <div className={cn(
        "w-full transition-all duration-500 border-b",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-slate-200" 
          : "bg-white py-5 border-transparent"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between gap-12">
          
          {/* THE LOGO (As specified) */}
          <Link href="/" className="flex flex-col group shrink-0">
            <span className="text-4xl font-display font-[900] text-[#E31837] italic leading-none tracking-tighter group-hover:text-black transition-colors">
              PCEC
            </span>
            <span className="text-[9px] font-black text-secondary tracking-[0.15em] uppercase border-t border-black mt-1 pt-0.5">
              Perfect Corporation
            </span>
          </Link>

          {/* HIGH-DENSITY SEARCH (Formal & Structured) */}
          <div className="flex-1 max-w-2xl relative hidden lg:block group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#E31837] transition-colors">
              <Search size={18} />
            </div>
            <input 
              className="w-full h-12 pl-12 pr-32 bg-slate-50 border-2 border-slate-100 rounded-xl focus:bg-white focus:border-[#E31837] focus:ring-4 focus:ring-[#E31837]/5 outline-none transition-all font-sans text-sm font-bold tracking-tight text-secondary placeholder:text-slate-400 placeholder:font-medium"
              placeholder="Search part numbers, brands, or technical specs..."
            />
            <div className="absolute right-2 top-2 flex items-center gap-2">
               <div className="h-8 w-px bg-slate-200 mx-1"></div>
               <Button className="h-8 bg-[#1A1A1A] hover:bg-[#E31837] text-[10px] font-black uppercase tracking-widest px-4 rounded-lg shadow-lg">
                 Find Gear
               </Button>
            </div>
          </div>

          {/* UTILITY ACTIONS */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Account - Desktop */}
            <Link href="/login" className="hidden md:flex flex-col items-end group">
              <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1 group-hover:text-[#E31837]">Partner Login</span>
              <span className="text-sm font-black text-secondary flex items-center gap-1 leading-none">
                MY ACCOUNT <ChevronDown size={14} className="text-[#E31837]"/>
              </span>
            </Link>

            {/* Cart - Always Visible */}
            <div className="relative p-3 bg-slate-50 hover:bg-[#E31837]/10 rounded-2xl cursor-pointer transition-all group border border-slate-100">
              <ShoppingCart size={24} className="text-secondary group-hover:text-[#E31837] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-[#E31837] text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-black border-4 border-white shadow-lg shadow-[#E31837]/20">
                0
              </span>
            </div>

            {/* Mobile Menu Trigger */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-secondary"
            >
              {isMobileMenuOpen ? <X size={32}/> : <Menu size={32}/>}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU OVERLAY (Classy/Formal) */}
      <div className={cn(
        "fixed inset-0 bg-[#0A0A0A] z-[90] transition-all duration-500 md:hidden flex flex-col p-8 pt-32",
        isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <div className="space-y-8">
          <MobileNavLink href="/catalog" label="Heavy Machinery" />
          <MobileNavLink href="/catalog" label="Power Tools" />
          <MobileNavLink href="/catalog" label="Safety PPE" />
          <MobileNavLink href="/b2b" label="B2B Quote Request" active />
        </div>
        
        <div className="mt-auto border-t border-white/10 pt-8 space-y-4">
          <Button className="w-full h-14 bg-[#E31837] text-lg font-black italic">SIGN IN TO PORTAL</Button>
          <p className="text-center text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
            Hosapete • Karnataka • India
          </p>
        </div>
      </div>
    </nav>
  );
}

// Helper Components
function MobileNavLink({ href, label, active = false }: { href: string, label: string, active?: boolean }) {
  return (
    <Link href={href} className={cn(
      "block text-4xl font-display font-black italic tracking-tighter uppercase",
      active ? "text-[#E31837]" : "text-white"
    )}>
      {label}
    </Link>
  );
}