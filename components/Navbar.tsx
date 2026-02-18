"use client";
import React from "react";
import { Search, ShoppingCart, User, Phone, MapPin, ChevronDown, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PCEC_DATA } from "@/lib/config";

export default function Navbar() {
  return (
    <nav className="w-full bg-white sticky top-0 z-[100] border-b border-slate-200">
      {/* 1. TOP UTILITY BAR (Very small, formal text) */}
      <div className="bg-[#0A0A0A] text-white py-1.5 px-6 md:px-12 hidden md:flex justify-between items-center">
        <div className="flex gap-8 items-center text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
          <span className="flex items-center gap-2">
            <Phone size={12} className="text-[#E31837]"/> {PCEC_DATA.contact.phone}
          </span>
          <span className="flex items-center gap-2">
             <MapPin size={12} className="text-[#E31837]"/> Authorized Industrial Supplier
          </span>
        </div>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
          <Link href="/admin" className="hover:text-white transition-colors border-r border-white/10 pr-6">Admin Portal</Link>
          <Link href="/login" className="hover:text-white transition-colors">Sign In</Link>
        </div>
      </div>

      {/* 2. MAIN NAV: LOGO, SEARCH, AND RIGHT-ALIGNED UTILITIES */}
      <div className="px-6 md:px-12 py-4 flex items-center justify-between gap-10">
        {/* LOGO IMAGE - TOP LEFT */}
        <Link href="/" className="shrink-0">
          <img 
            src="/pcec-logo.png" 
            alt="PCEC Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </Link>

        {/* SEARCH BAR - Technical & Balanced */}
        <div className="flex-1 max-w-2xl relative hidden md:block">
          <input 
            className="w-full h-11 pl-4 pr-12 border border-slate-200 focus:border-[#E31837] outline-none rounded-sm bg-slate-50 transition-all text-xs font-medium"
            placeholder="Search products, brands, or part numbers..."
          />
          <button className="absolute right-0 top-0 h-11 w-12 bg-[#E31837] flex items-center justify-center text-white hover:bg-red-700 transition-colors">
            <Search size={18} strokeWidth={3} />
          </button>
        </div>

        {/* ACCOUNT & CART - SPACED PROPERLY TO THE RIGHT */}
        <div className="flex items-center gap-8 ml-auto shrink-0">
           <div className="flex items-center gap-2 cursor-pointer group pr-6 border-r border-slate-100">
              <User size={20} className="text-slate-400 group-hover:text-[#E31837] transition-colors"/>
              <div className="hidden lg:flex flex-col leading-none text-left">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Partner login</span>
                <span className="text-[11px] font-black text-secondary uppercase tracking-tight flex items-center">
                   Account <ChevronDown size={10} className="ml-1"/>
                </span>
              </div>
           </div>
           
           <div className="relative cursor-pointer group flex items-center gap-3">
              <div className="relative">
                <ShoppingCart size={22} className="text-slate-700 group-hover:text-[#E31837] transition-colors" />
                <span className="absolute -top-2.5 -right-2.5 bg-[#E31837] text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white shadow-sm">
                  3
                </span>
              </div>
              <span className="hidden lg:block text-[11px] font-black text-secondary uppercase tracking-tight">Cart</span>
           </div>
        </div>
      </div>

      {/* 3. CATEGORIES BAR: MINIMALIST & FORMAL */}
      <div className="bg-white border-t border-slate-100 px-6 md:px-12 py-2 hidden md:flex items-center gap-10">
         <div className="flex items-center gap-2 text-black text-[11px] font-black uppercase tracking-widest cursor-pointer hover:text-[#E31837] transition-colors pr-8 border-r border-slate-200 group">
           <List size={16} className="text-secondary group-hover:text-[#E31837]"/> 
           <span>All Categories</span>
         </div>
         <div className="flex gap-10 text-[10px] font-bold uppercase text-slate-400 tracking-[0.1em]">
            {["Power Tools", "Safety Equipment", "Industrial Supplies", "Hand Tools", "Fasteners"].map(item => (
              <span key={item} className="hover:text-[#E31837] cursor-pointer transition-all">{item}</span>
            ))}
         </div>
         <Link href="/shop" className="ml-auto text-[#E31837] text-[10px] font-black uppercase border-b-2 border-[#E31837] leading-none pb-0.5 tracking-tighter hover:text-black hover:border-black transition-all">
           Shop All Products
         </Link>
      </div>
    </nav>
  );
}