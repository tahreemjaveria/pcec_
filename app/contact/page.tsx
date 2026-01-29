import Navbar from "@/components/Navbar";
import StoreMap from "@/components/StoreMap";
import { Mail, Phone, Clock } from "lucide-react";
import { PCEC_DATA } from "@/lib/config";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-secondary italic mb-4">GET IN TOUCH</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Connect with the official Perfect Corporation hub in Hosapete for bulk orders and technical support.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          <ContactCard icon={<Phone/>} title="Call Us" detail={PCEC_DATA.contact.phone} subDetail="Mon-Sat, 9am - 7pm" />
          <ContactCard icon={<Mail/>} title="Email Support" detail={PCEC_DATA.contact.email} subDetail="24/7 Response Rate" />
          <ContactCard icon={<Clock/>} title="Visit Office" detail="B-27, Industrial Area" subDetail="Hosapete, Karnataka" />
        </div>

        <StoreMap />
      </div>
    </div>
  );
}

function ContactCard({ icon, title, detail, subDetail }: any) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
      <div className="text-[#E31837] mb-4 bg-red-50 p-4 rounded-2xl">{icon}</div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="font-black text-secondary mb-1">{detail}</p>
      <p className="text-sm text-gray-400 font-medium">{subDetail}</p>
    </div>
  );
}