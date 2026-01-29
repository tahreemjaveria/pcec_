import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Truck, Factory, ArrowRight, Star } from "lucide-react";
import { PCEC_CONFIG } from "@/lib/config";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative bg-[#1A1A1A] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E31837 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <Badge className="mb-4 bg-[#E31837]">Trusted by 500+ Industries</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              HEAVY DUTY <br/><span className="text-[#E31837]">PERFORMANCE.</span>
            </h1>
            <p className="text-gray-400 text-xl mb-8">
              Perfect Constructions and Earth Moving Equipment Corporation is India's premium supplier for technical tools.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#E31837] hover:bg-red-700 h-14 px-8 text-lg font-bold">SHOP CATALOG</Button>
              <Button size="lg" variant="outline" className="text-white border-white h-14 px-8 text-lg hover:bg-white hover:text-black">B2B QUOTES</Button>
            </div>
          </div>
          <div className="hidden md:block bg-gradient-to-br from-gray-800 to-transparent p-1 rounded-2xl">
             <div className="bg-secondary rounded-2xl h-[400px] flex items-center justify-center text-gray-600 italic">
               [ Industrial Equipment Showcase Image ]
             </div>
          </div>
        </div>
      </section>

      {/* BRAND BAR */}
      <div className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all gap-8">
          <span className="text-2xl font-black text-gray-400">MAKITA</span>
          <span className="text-2xl font-black text-gray-400">3M</span>
          <span className="text-2xl font-black text-gray-400">CROMWELL</span>
          <span className="text-2xl font-black text-gray-400">BOSCH</span>
          <span className="text-2xl font-black text-gray-400">DEWALT</span>
        </div>
      </div>

      {/* TRUST INDICATORS */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: <ShieldCheck size={40}/>, title: "Authorized Dealer", desc: "100% genuine products with manufacturer warranty." },
            { icon: <Truck size={40}/>, title: "Express Delivery", desc: "Fast pan-India shipping for all industrial orders." },
            { icon: <Factory size={40}/>, title: "B2B Solutions", desc: "Special pricing and GST invoices for business accounts." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="text-[#E31837]">{item.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white ${className}`}>{children}</span>;
}