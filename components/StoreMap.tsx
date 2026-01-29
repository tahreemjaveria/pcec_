"use client";
import { MapPin, Navigation } from "lucide-react";
import { PCEC_DATA } from "@/lib/config";
import { Button } from "@/components/ui/button";

export default function StoreMap() {
  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
      <div className="p-8 bg-[#1A1A1A] text-white flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-2 h-2 bg-[#E31837] rounded-full animate-pulse" />
            <h3 className="text-2xl font-black italic tracking-tighter uppercase">Karnataka Headquarters</h3>
          </div>
          <p className="text-sm text-gray-400 font-medium">{PCEC_DATA.contact.address}</p>
        </div>
        <Button 
          onClick={() => window.open("https://maps.app.goo.gl/oBs6aLBnXQoYWFjDA", "_blank")}
          className="bg-[#E31837] hover:bg-red-700 font-black h-14 px-8 rounded-xl shadow-lg shadow-red-500/20"
        >
          <Navigation size={20} className="mr-2"/> OPEN IN GOOGLE MAPS
        </Button>
      </div>
      <div className="h-[450px] w-full relative">
        <iframe
          src={PCEC_DATA.location.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "contrast(1.1) brightness(0.9)" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}