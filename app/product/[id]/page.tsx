"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Lock } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Check your auth state here

  const product = {
    name: "Makita HM1307C 35lb. Demolition Hammer",
    brand: "MAKITA",
    sku: "PCEC-MK-7721",
    price: "₹84,500",
    specs: ["15.0 AMP motor", "730 - 1,450 BPM", "Electronic speed control"]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-sm border">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200">
              <span className="text-slate-400 italic text-sm">[ High-Res Product Image ]</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-primary mb-2">{product.brand}</Badge>
              <h1 className="text-4xl font-black text-secondary leading-tight">{product.name}</h1>
              <p className="text-slate-400 font-mono text-sm mt-2">SKU: {product.sku}</p>
            </div>

            {/* Pricing Section */}
            <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100">
              {isLoggedIn ? (
                <div>
                  <span className="text-3xl font-black text-secondary">{product.price}</span>
                  <p className="text-xs text-green-600 font-bold">In Stock - Ready to Ship</p>
                  <Button className="w-full mt-4 bg-primary h-14 text-lg font-black">ADD TO CART</Button>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-secondary font-black">
                    <Lock size={20} className="text-primary"/> 
                    <span className="text-xl uppercase tracking-tighter">B2B Pricing Restricted</span>
                  </div>
                  <p className="text-sm text-slate-500">Sign in as a Business Partner to view wholesale rates and tax benefits.</p>
                  <Button className="w-full bg-secondary h-12 font-bold">LOGIN TO VIEW PRICE</Button>
                </div>
              )}
            </div>

            <div className="space-y-4 border-t pt-6">
              <h3 className="font-bold text-lg">Technical Specifications</h3>
              <ul className="space-y-2">
                {product.specs.map(s => (
                  <li key={s} className="flex items-center gap-2 text-slate-600 text-sm">
                    <CheckCircle size={16} className="text-primary"/> {s}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full gap-2 border-secondary font-bold">
                <FileText size={18}/> DOWNLOAD DATASHEET (PDF)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}