"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building2, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function B2BRegister() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] bg-industrial-grid">
      <Navbar />
      <div className="container mx-auto px-6 py-20 flex justify-center">
        <div className="w-full max-w-2xl">
          
          <div className="text-center mb-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
                <ShieldCheck size={14} className="text-[#E31837]"/>
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Authorized Channel Partner Program</span>
             </div>
             <h1 className="text-4xl font-black italic text-secondary tracking-tighter uppercase">Business Registration</h1>
             <p className="text-slate-500 text-sm font-medium mt-2 italic">Unlock wholesale valuations and priority fulfillment for Hosapete operations.</p>
          </div>

          <Card className="rounded-none border-none shadow-2xl overflow-hidden">
            <CardHeader className="bg-secondary text-white py-4 px-8 border-b border-white/5">
               <CardTitle className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3">
                 <Building2 size={16} className="text-[#E31837]"/> Corporate Credentials
               </CardTitle>
            </CardHeader>
            <CardContent className="p-10 bg-white">
              <form className="space-y-8">
                {/* Section 1: Company Profile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Registered Company Name</label>
                    <Input className="rounded-none border-slate-200 h-11 focus:border-[#E31837] font-bold text-sm uppercase" placeholder="e.g. KARNATAKA MINES LTD" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">GST Number (Required)</label>
                    <Input className="rounded-none border-slate-200 h-11 focus:border-[#E31837] font-mono text-sm uppercase" placeholder="29AAAAA0000A1Z5" />
                  </div>
                </div>

                {/* Section 2: Contact Hub */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-50">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Procurement Head Name</label>
                    <Input className="rounded-none border-slate-200 h-11 focus:border-[#E31837] font-bold text-sm" placeholder="Full Name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Official Email</label>
                    <Input type="email" className="rounded-none border-slate-200 h-11 focus:border-[#E31837] font-bold text-sm" placeholder="name@company.com" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Site Address / Headquarters</label>
                  <Input className="rounded-none border-slate-200 h-11 focus:border-[#E31837] font-bold text-sm" placeholder="Complete Billing Address" />
                </div>

                <div className="bg-slate-50 p-6 border-l-4 border-secondary flex items-start gap-4">
                   <div className="mt-1 text-[#E31837]"><FileText size={20}/></div>
                   <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
                     By registering, you apply for a **PCEC Business Account**. All accounts are manually verified by our Hosapete compliance team within 24 hours. Once verified, bulk pricing will be visible on all technical SKUs.
                   </p>
                </div>

                <Button className="w-full h-14 bg-[#E31837] hover:bg-red-700 text-lg font-black italic rounded-none border-b-4 border-black/20 shadow-xl group">
                  SUBMIT FOR VERIFICATION <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform"/>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}