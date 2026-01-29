"use client";
import { Search, ShoppingCart, User, Phone, Menu, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PCEC_CONFIG } from "@/lib/config";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#1A1A1A] text-white text-[10px] md:text-xs py-2 px-6 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} className="text-[#E31837]"/> {PCEC_CONFIG.contact.phone}</span>
          <span className="hidden md:inline text-gray-400">Authorized Distributor: Makita | 3M | Cromwell</span>
        </div>
        <div className="flex gap-4 font-medium uppercase tracking-wider">
          <Link href="/admin" className="hover:text-[#E31837]">Admin Portal</Link>
          <Link href="/b2b" className="text-[#E31837]">B2B Pricing</Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-8">
        <Link href="/" className="flex flex-col">
          <span className="text-3xl font-black text-[#E31837] italic leading-none">PCEC</span>
          <span className="text-[7px] font-bold text-black uppercase tracking-tighter">Perfect Corporation</span>
        </Link>

        {/* Desktop Search */}
        <div className="flex-1 max-w-2xl relative hidden md:block">
          <input 
            className="w-full h-11 pl-4 pr-12 border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#E31837] outline-none rounded-md transition-all"
            placeholder="Search equipment or part numbers..."
          />
          <Button className="absolute right-0 top-0 h-11 rounded-l-none bg-[#E31837] hover:bg-red-700">
            <Search size={18} />
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[10px] text-gray-500 font-bold uppercase">Welcome</span>
            <span className="text-sm font-bold flex items-center gap-1">Sign In <User size={14}/></span>
          </div>
          <div className="relative cursor-pointer group">
            <ShoppingCart size={28} className="group-hover:text-[#E31837] transition-colors" />
            <span className="absolute -top-2 -right-2 bg-[#E31837] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black">0</span>
          </div>
          <Menu className="md:hidden" size={28} />
        </div>
      </div>
    </nav>
  );
}