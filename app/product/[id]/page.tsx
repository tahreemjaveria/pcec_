"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import QuoteRequest from "@/components/QuoteRequest";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  FileText, 
  Lock, 
  ArrowLeft, 
  ShieldCheck, 
  Package, 
  Truck, 
  Wrench 
} from "lucide-react";

// --- MOCK DATABASE ---
const PRODUCT_DATA: any = {
  "makita-hammer": {
    id: "makita-hammer",
    name: "Makita HM1307C 35lb. Demolition Hammer",
    brand: "MAKITA",
    sku: "PCEC-MK-7721",
    price: "₹84,500",
    isB2B: true,
    description: "Industry-leading demolition power with a 15.0 AMP motor. Engineered for heavy-duty concrete breaking and earth moving support.",
    specs: ["15.0 AMP Motor", "730-1,450 BPM", "Constant Speed Control", "Tool-less bit changes"],
    image: "🔨"
  },
  "3m-safety-kit": {
    id: "3m-safety-kit",
    name: "3M Ultimate Industrial Safety Kit",
    brand: "3M",
    sku: "PCEC-3M-4402",
    price: "₹12,499",
    isB2B: false,
    description: "Full PPE kit including respirator, impact-resistant goggles, and high-decibel ear protection.",
    specs: ["NIOSH Approved", "Anti-fog Coating", "Adjustable Fit", "Heavy Duty Case"],
    image: "🛡️"
  }
};

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate B2B login

  // Get product or default
  const product = PRODUCT_DATA[id] || {
    name: "Industrial Equipment",
    brand: "PCEC Authorized",
    sku: "PCEC-GEN-000",
    price: "Quote Required",
    isB2B: true,
    description: "Contact our Hosapete office for detailed technical specifications and heavy machinery pricing.",
    specs: ["Authorized Warranty", "PCEC Verified"],
    image: "📦"
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <Link href="/" className="inline-flex items-center text-sm font-black text-[#E31837] mb-8 hover:ml-[-5px] transition-all">
          <ArrowLeft size={16} className="mr-2"/> BACK TO CATALOG
        </Link>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT: Product Visuals (4 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-square bg-slate-50 rounded-[2.5rem] flex items-center justify-center border-2 border-slate-100 text-9xl shadow-inner shadow-black/5">
              {product.image}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#E31837] cursor-pointer transition-all"></div>
              ))}
            </div>
          </div>

          {/* RIGHT: Main Details & Buying Logic (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-[#E31837] hover:bg-[#E31837] px-4 py-1 rounded-full text-xs font-black italic tracking-widest">
                  {product.brand}
                </Badge>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">SKU: {product.sku}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter leading-[0.9] mb-6">
                {product.name}
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl italic">
                {product.description}
              </p>
            </div>

            {/* HIGH-END PRICING BOX */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              {/* Pricing Display */}
              <div className="bg-[#1A1A1A] rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Package size={140} />
                </div>
                
                {isLoggedIn ? (
                  <div className="relative z-10">
                    <span className="text-[10px] font-black uppercase text-[#E31837] tracking-[0.2em]">Authorized Dealer Price</span>
                    <div className="text-5xl font-black mt-2 mb-6 tracking-tighter">{product.price}</div>
                    <Button className="w-full h-14 bg-[#E31837] hover:bg-red-700 text-lg font-black italic rounded-xl shadow-lg">
                      ADD TO SHIPMENT
                    </Button>
                  </div>
                ) : (
                  <div className="relative z-10 text-center py-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E31837]/20 text-[#E31837] rounded-2xl mb-4">
                      <Lock size={28} />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tighter mb-2 italic">B2B Pricing Restricted</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-6 leading-relaxed">
                      Register your GST and Company <br/> to view wholesale rates.
                    </p>
                    <Button 
                      onClick={() => setIsLoggedIn(true)} 
                      className="w-full bg-white text-[#1A1A1A] hover:bg-gray-200 h-12 font-black italic rounded-lg"
                    >
                      LOGIN TO VIEW PRICE
                    </Button>
                  </div>
                )}
              </div>

              {/* Quick Trust Icons */}
              <div className="space-y-6 pt-4">
                <TrustItem icon={<Truck size={18}/>} title="Express Logistics" desc="Dispatch within 24hrs from Hosapete" />
                <TrustItem icon={<CheckCircle size={18}/>} title="Authentic Stock" desc="100% Original Manufacturer Parts" />
                <TrustItem icon={<Wrench size={18}/>} title="Service Support" desc="On-site maintenance available" />
              </div>

            </div>

            {/* TECHNICAL DATA TAB SECTION */}
            <div className="mt-12 pt-8 border-t border-slate-100">
               <h4 className="font-black text-secondary italic mb-6 tracking-tight flex items-center gap-2">
                 <div className="w-8 h-[2px] bg-[#E31837]"></div> TECHNICAL DATA & SPECS
               </h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {product.specs.map((spec: string) => (
                    <div key={spec} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold text-slate-600">
                      <CheckCircle size={16} className="text-[#E31837] shrink-0" /> {spec}
                    </div>
                  ))}
               </div>
               <Button variant="outline" className="w-full md:w-fit px-10 h-12 border-2 border-secondary font-black hover:bg-secondary hover:text-white transition-all rounded-xl italic">
                  <FileText size={18} className="mr-2"/> DOWNLOAD CATALOG (PDF)
               </Button>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: BULK QUOTE FORM */}
        <div className="mt-20">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-black text-secondary italic uppercase tracking-tighter">Buying for a large project?</h2>
             <p className="text-slate-500 font-medium">Get specialized pricing for government contracts or large construction sites.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <QuoteRequest productName={product.name} />
          </div>
        </div>

      </div>
    </div>
  );
}

// --- HELPER SUB-COMPONENTS ---

function TrustItem({ icon, title, desc }: any) {
  return (
    <div className="flex gap-3">
      <div className="text-[#E31837] shrink-0 mt-1">{icon}</div>
      <div>
        <h5 className="text-xs font-black uppercase text-secondary tracking-tight leading-none mb-1">{title}</h5>
        <p className="text-[10px] text-slate-400 font-bold leading-tight">{desc}</p>
      </div>
    </div>
  );
}