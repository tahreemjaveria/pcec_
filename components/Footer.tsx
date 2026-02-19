"use client";
import { PCEC_DATA } from "@/lib/config";
import { Mail, Phone, MapPin, ShieldCheck, Factory } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <img src="/pcec-logo.png" alt="PCEC" className="h-10 w-auto brightness-0 invert opacity-90" />
            <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-xs uppercase tracking-tighter">
              Perfect Constructions and Earth Moving Equipment Corporation. <br/>
              Karnataka's authorized technical logistics hub.
            </p>
            <div className="flex gap-4 opacity-30">
               <div className="w-8 h-8 bg-white/10 rounded-sm"></div>
               <div className="w-8 h-8 bg-white/10 rounded-sm"></div>
            </div>
          </div>

          {/* Quick Technical Access */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Technical Catalog</h4>
            <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-white/60">
              <li className="hover:text-primary cursor-pointer transition-colors">Heavy Machinery</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Power Systems</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Precision Tools</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Safety Modules</li>
            </ul>
          </div>

          {/* Support Channel */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Support Hub</h4>
            <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-white/60">
              <li><Link href="/contact" className="hover:text-primary">Contact Office</Link></li>
              <li><Link href="/register" className="hover:text-primary">Business Partner</Link></li>
              <li className="hover:text-primary cursor-pointer">Track Shipment</li>
              <li className="hover:text-primary cursor-pointer">Refund Policy</li>
            </ul>
          </div>

          {/* Headquarters Info */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Hosapete Terminal</h4>
            <div className="space-y-4 text-xs">
               <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary shrink-0"/>
                  <span className="text-gray-400 font-medium uppercase tracking-tighter leading-tight">
                    {PCEC_DATA.contact.address}
                  </span>
               </div>
               <div className="flex items-center gap-3">
                  <Phone size={16} className="text-primary shrink-0"/>
                  <span className="text-gray-200 font-black italic">{PCEC_DATA.contact.phone}</span>
               </div>
               <div className="flex items-center gap-3">
                  <Mail size={16} className="text-primary shrink-0"/>
                  <span className="text-gray-200 font-bold tracking-tight">{PCEC_DATA.contact.email}</span>
               </div>
            </div>
          </div>

        </div>

        {/* Corporate Seal & Legal */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-8 opacity-20 grayscale grayscale-100 invert">
              <span className="text-xl font-black italic">MAKITA</span>
              <span className="text-xl font-black italic">3M CORP</span>
              <span className="text-xl font-black italic">BOSCH</span>
           </div>
           <div className="text-center md:text-right space-y-1">
             <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em]">
               © 2026 Perfect Constructions Corp. All Technical Rights Reserved.
             </p>
             <p className="text-[9px] font-bold text-[#E31837] uppercase tracking-widest">
               GSTIN: {PCEC_DATA.contact.gst} | Registered in Karnataka
             </p>
           </div>
        </div>
      </div>
    </footer>
  );
}