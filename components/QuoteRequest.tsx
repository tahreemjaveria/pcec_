"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Send, Building2, Calculator } from "lucide-react";

export default function QuoteRequest({ productName }: { productName?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Card className="border-2 border-green-500 bg-green-50">
        <CardContent className="pt-6 text-center space-y-3">
          <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto">
            <Send size={20} />
          </div>
          <h3 className="text-xl font-black text-secondary">QUOTE REQUEST SENT</h3>
          <p className="text-sm text-green-700 font-medium">Our Hosapete team will contact you within 2 business hours with wholesale pricing.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-2xl border-none overflow-hidden">
      <CardHeader className="bg-secondary text-white">
        <CardTitle className="flex items-center gap-2 text-lg italic">
          <Calculator className="text-primary" size={20}/> WHOLESALE QUOTE REQUEST
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400">Company Name</label>
            <Input className="border-2 focus:border-primary" placeholder="e.g. VNR Constructions" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400">GST Number</label>
            <Input className="border-2 focus:border-primary" placeholder="29XXXXX..." />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase text-gray-400">Target Equipment/Brand</label>
          <Input className="border-2 focus:border-primary" defaultValue={productName} placeholder="What are you looking for?" />
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase text-gray-400">Required Quantity</label>
          <Input type="number" className="border-2 focus:border-primary" placeholder="e.g. 50" />
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase text-gray-400">Project Requirements</label>
          <Textarea className="border-2 focus:border-primary" placeholder="Tell us about your project or deadline..." />
        </div>

        <Button onClick={() => setSubmitted(true)} className="w-full h-14 bg-primary hover:bg-red-700 text-lg font-black italic shadow-lg">
          SUBMIT FOR BULK PRICING
        </Button>
        <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">
          Authorized PCEC Corporate Channel
        </p>
      </CardContent>
    </Card>
  );
}