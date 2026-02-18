"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ChevronRight, Lock, LayoutGrid, List as ListIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PRODUCTS = [
  { id: "makita-hammer", name: "HM1307C Demolition Hammer", brand: "MAKITA", price: "₹84,500", cat: "Power Tools", img: "🔨" },
  { id: "3m-mask", name: "6200 Reusable Respirator", brand: "3M", price: "₹3,200", cat: "Safety PPE", img: "🎭" },
  { id: "bosch-drill", name: "GBH 2-28 Professional", brand: "BOSCH", price: "₹14,900", cat: "Power Tools", img: "🌀" },
  { id: "cromwell-wrench", name: "Kennedy Adjustable Wrench", brand: "CROMWELL", price: "₹2,100", cat: "Hand Tools", img: "🔧" },
];

export default function ShopPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* SIDEBAR FILTERS (High Density) */}
          <aside className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E31837] mb-4">Filter by Brand</h3>
              <div className="space-y-2">
                {["Makita", "3M", "Bosch", "Cromwell", "DeWalt"].map(b => (
                  <label key={b} className="flex items-center gap-3 text-[11px] font-bold text-slate-500 uppercase cursor-pointer hover:text-black">
                    <input type="checkbox" className="accent-[#E31837]" /> {b}
                  </label>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E31837] mb-4">Category</h3>
              <div className="space-y-2 text-[11px] font-bold text-slate-500 uppercase">
                <p className="text-black cursor-pointer">Power Tools (420)</p>
                <p className="hover:text-black cursor-pointer">Safety Equipment (150)</p>
                <p className="hover:text-black cursor-pointer">Earth Moving (85)</p>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
               <h1 className="text-xl font-black italic tracking-tighter uppercase italic text-secondary">Authorized Catalog</h1>
               <div className="flex gap-4 items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">View:</span>
                  <LayoutGrid size={16} className="text-[#E31837] cursor-pointer"/>
                  <ListIcon size={16} className="text-slate-300 cursor-pointer"/>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map(p => (
                <Link href={`/product/${p.id}`} key={p.id} className="group border border-slate-100 bg-white hover:border-[#E31837] hover:shadow-2xl transition-all relative overflow-hidden">
                  <div className="aspect-square bg-slate-50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    {p.img}
                  </div>
                  <div className="p-6 border-t border-slate-50">
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-[9px] font-black text-[#E31837] tracking-widest">{p.brand}</span>
                       <Badge variant="outline" className="text-[8px] rounded-none border-slate-200">{p.cat}</Badge>
                    </div>
                    <h3 className="text-sm font-black text-secondary uppercase leading-tight mb-4 group-hover:text-[#E31837] transition-colors">{p.name}</h3>
                    
                    {/* B2B PRICING LOGIC */}
                    <div className="flex items-center justify-between mt-auto">
                       {isLoggedIn ? (
                         <span className="text-lg font-black text-secondary tracking-tighter">{p.price}</span>
                       ) : (
                         <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                           <Lock size={12}/> Login for price
                         </div>
                       )}
                       <Button size="sm" className="h-8 rounded-none bg-secondary hover:bg-[#E31837] text-[10px] font-black uppercase italic">Details</Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}