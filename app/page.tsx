import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Drill, ShieldAlert, Award } from "lucide-react";
import { PCEC_DATA } from "@/lib/config";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* THE HERO: Massive, Bold, Industrial */}
      <section className="relative pt-20 pb-32 bg-[#1A1A1A] overflow-hidden">
        {/* Subtle high-end grid pattern */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: 'linear-gradient(#E31837 1px, transparent 1px), linear-gradient(90deg, #E31837 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E31837]/10 border border-[#E31837]/20 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E31837] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E31837]"></span>
              </span>
              <span className="text-[10px] font-black text-[#E31837] tracking-[0.2em] uppercase">Hosapete Karnataka Headquarters</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-[900] text-white leading-[0.85] tracking-tighter mb-8 italic">
              EVERY PRODUCT.<br/>
              <span className="text-[#E31837]">EVERY BRAND.</span><br/>
              ONE SUPPLIER.
            </h1>

            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-xl mb-12 leading-tight tracking-tight">
              Authorized heavy-duty tool supplier for Karnataka's biggest construction and mining projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-[#E31837] hover:bg-red-700 h-16 px-10 text-xl font-black italic rounded-none group">
                BROWSE HUB <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform"/>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-2 border-white/20 hover:bg-white hover:text-black h-16 px-10 text-xl font-black italic rounded-none">
                B2B WHOLESALE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* THE FEATURED CATEGORIES: Clean "Vibe" Cards */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard title="Earth Moving" subtitle="Excavation & Mining" icon={<Award/>} />
          <CategoryCard title="Power Tools" subtitle="Makita Authorized" icon={<Drill/>} />
          <CategoryCard title="Safety Gear" subtitle="Industrial PPE" icon={<ShieldAlert/>} />
        </div>
      </section>

      {/* BRAND SHOWCASE: High-end monochrome */}
      <section className="py-24 border-b">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-xs font-black text-gray-400 tracking-[0.4em] uppercase mb-12">Premier Brand Partnerships</h2>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-4xl font-display font-black tracking-tighter italic">MAKITA</span>
               <span className="text-4xl font-display font-black tracking-tighter italic">3M</span>
               <span className="text-4xl font-display font-black tracking-tighter italic">CROMWELL</span>
               <span className="text-4xl font-display font-black tracking-tighter italic">BOSCH</span>
            </div>
         </div>
      </section>
    </main>
  );
}

function CategoryCard({ title, subtitle, icon }: any) {
  return (
    <div className="bg-white p-10 shadow-2xl border-b-4 border-[#E31837] hover:bg-slate-50 transition-all cursor-pointer group">
      <div className="text-[#E31837] mb-6 scale-150 transform group-hover:rotate-12 transition-transform">{icon}</div>
      <h3 className="text-3xl font-display font-black tracking-tighter italic leading-none mb-2 text-secondary">{title}</h3>
      <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{subtitle}</p>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white ${className}`}>{children}</span>;
}