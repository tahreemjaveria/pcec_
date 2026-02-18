"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Trash2, ShieldCheck, Truck, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-12">
        <h1 className="text-3xl font-black italic tracking-tighter uppercase text-secondary mb-10">Your Shipment</h1>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {/* ITEM LIST */}
          <div className="lg:col-span-2 space-y-4">
            <CartItem name="Makita HM1307C Demolition Hammer" sku="PCEC-MK-7721" price="₹84,500" />
            <CartItem name="3M Reusable Respirator" sku="PCEC-3M-6200" price="₹3,200" />
            
            <div className="p-6 bg-white border border-dashed border-slate-200 rounded-xl flex items-center justify-between text-slate-400">
               <span className="text-xs font-bold uppercase tracking-widest italic">Add more equipment to save on Hosapete hub shipping</span>
               <Link href="/shop" className="text-[10px] font-black text-[#E31837] border-b border-[#E31837]">CATALOG →</Link>
            </div>
          </div>

          {/* SUMMARY SIDEBAR */}
          <div className="bg-white p-8 border border-slate-100 shadow-2xl h-fit sticky top-32">
             <h2 className="text-sm font-black uppercase tracking-widest border-b pb-4 mb-6 text-secondary">Order Valuation</h2>
             <div className="space-y-4 text-sm font-bold mb-8">
                <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>₹87,700</span></div>
                <div className="flex justify-between text-slate-500"><span>Est. GST (18%)</span><span>₹15,786</span></div>
                <div className="flex justify-between text-slate-500"><span>Logistics</span><span className="text-green-600 uppercase text-[10px]">Free</span></div>
                <div className="flex justify-between text-xl font-black text-secondary pt-4 border-t">
                  <span>TOTAL</span>
                  <span className="text-[#E31837] italic font-[900]">₹1,03,486</span>
                </div>
             </div>
             
             <Button className="w-full h-14 bg-[#E31837] hover:bg-red-700 text-lg font-black italic rounded-none shadow-xl mb-4">
               PROCEED TO PAY <ChevronRight className="ml-2"/>
             </Button>
             
             <div className="flex flex-col gap-3">
                <p className="text-[9px] text-center font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                  <ShieldCheck size={14} className="text-green-600"/> Secure Razorpay Gateway
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartItem({ name, sku, price }: any) {
  return (
    <div className="bg-white p-6 border border-slate-100 flex gap-6 items-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-20 h-20 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-2xl italic font-black text-slate-200">IMG</div>
      <div className="flex-1">
        <h3 className="text-xs font-black text-secondary uppercase tracking-tight mb-1">{name}</h3>
        <p className="text-[10px] text-slate-400 font-mono">SKU: {sku}</p>
        <div className="flex items-center gap-4 mt-4">
           <select className="text-[10px] font-black border p-1 rounded bg-slate-50">
             <option>QTY: 01</option>
             <option>QTY: 05</option>
             <option>QTY: 10</option>
           </select>
           <button className="text-[9px] font-bold text-red-400 uppercase flex items-center gap-1 hover:text-red-700 transition-colors">
             <Trash2 size={12}/> Remove
           </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-black text-secondary tracking-tighter">{price}</p>
      </div>
    </div>
  );
}