import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // <--- THIS WAS MISSING
import { Search, ArrowRight, ChevronRight, Calculator, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* REFINED INDUSTRIAL HERO: High-Density & Textured */}
      <section className="relative pt-24 pb-32 bg-industrial-grid overflow-hidden border-b border-white/5">
        {/* The Technical Grid Overlay (controlled in globals.css) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            {/* The "Classy" Headline with Red Emphasis */}
            <h1 className="text-white mb-6 font-sans font-bold leading-[1.05] tracking-tight">
              Industrial Tools & <br/>
              Equipment <br/>
              <span className="text-[#E31837] italic font-black">You Can Trust</span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base font-medium max-w-lg mb-12 leading-relaxed opacity-60 tracking-tight">
              Authorized dealer of Makita, 3M, Cromwell, and leading industrial brands. 
              Delivering precision engineering to Karnataka's construction sector since 2026.
            </p>

            {/* CLASSY B2B ACTIONS: High visibility buttons */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <Button size="lg" className="h-11 px-8 text-[10px] font-black uppercase bg-[#E31837] hover:bg-red-700 rounded-none tracking-widest border-b-4 border-black/30 active:border-b-0 transition-all">
                Browse Products <ArrowRight size={14} className="ml-2"/>
              </Button>
              <Button size="lg" variant="secondary" className="h-11 px-8 text-[10px] font-black uppercase bg-white text-secondary hover:bg-slate-100 rounded-none tracking-widest flex items-center gap-2 border border-slate-200 shadow-xl">
                <Calculator size={14} className="text-[#E31837]"/> Request B2B Quote
              </Button>
            </div>
          </div>
        </div>

        {/* ELEGANT HOSAPETE TAG (Minimalist Choice) */}
        <div className="absolute right-12 bottom-12 hidden xl:block">
           <div className="flex items-center gap-4">
             <div className="h-[1px] w-12 bg-[#E31837]"></div>
             <div>
               <div className="text-[9px] text-gray-500 font-bold tracking-[0.4em] uppercase mb-1">Corporate Hub</div>
               <div className="text-white font-medium text-sm tracking-widest opacity-80 uppercase">Hosapete, Karnataka</div>
             </div>
           </div>
        </div>
      </section>

      {/* FORMAL CATEGORY TILES (Minimalist Grid) */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-1">
              <div className="text-[#E31837] text-[9px] font-black uppercase tracking-[0.4em]">Inventory Catalog</div>
              <h2 className="text-2xl font-black italic tracking-tighter uppercase text-secondary">Shop by Category</h2>
            </div>
            <Link href="/" className="text-secondary text-[9px] font-black uppercase tracking-widest flex items-center gap-2 border-b border-secondary pb-1 hover:text-[#E31837] hover:border-[#E31837] transition-all">
               View All Categories <ChevronRight size={12}/>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-slate-200">
            {["Power Tools", "Safety Gear", "Hand Tools", "Electrical", "Fasteners", "Lubricants"].map((cat) => (
              <div key={cat} className="bg-white p-8 border-r border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-all group relative overflow-hidden">
                <div className="absolute -top-2 -right-2 text-slate-100 group-hover:text-[#E31837]/5 transition-colors">
                  <CheckCircle2 size={60}/>
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-800 relative z-10">{cat}</h3>
                <p className="text-[8px] font-bold text-slate-400 mt-2 flex items-center gap-1 group-hover:text-[#E31837] transition-colors">
                  Explore Range <ArrowRight size={8}/>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}