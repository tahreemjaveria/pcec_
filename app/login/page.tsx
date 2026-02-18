"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock, ShieldCheck, Globe, ArrowRight, UserPlus, LogIn } from "lucide-react";
import Link from "next/link";

export default function AdminAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded logic for your request
    if (username === "admin" && password === "PerfectPCEC2026") {
      localStorage.setItem("isPCECAdmin", "true");
      router.push("/admin");
    } else {
      alert("TERMINAL ERROR: Access Denied. Verify Credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-industrial-grid p-6 relative overflow-hidden">
      {/* Visual background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none"></div>
      
      <div className="w-full max-w-[400px] relative z-10">
        {/* LOGO AREA - Same as Navbar */}
        <div className="flex flex-col items-center mb-10">
          <img src="/pcec-logo.png" alt="PCEC Logo" className="h-12 w-auto mb-4" />
          <div className="h-[1px] w-12 bg-[#E31837] mb-2"></div>
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">
            Central Admin Terminal
          </span>
        </div>

        <Card className="bg-white rounded-none border-none shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header with high-density technical labels */}
          <CardHeader className="bg-secondary text-white py-4 px-8 border-b border-white/5">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-black italic tracking-widest flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#E31837]"/> 
                {isLogin ? "AUTHORIZE ACCESS" : "CREATE OPERATOR"}
              </CardTitle>
              <span className="text-[8px] font-bold text-gray-500 font-mono">V.2026.01</span>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleAuth} className="space-y-6">
              
              {/* Username Field */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] flex justify-between">
                  Identification <span>Required</span>
                </label>
                <div className="relative">
                  <Input 
                    className="h-11 rounded-none border-slate-200 bg-slate-50 focus:bg-white focus:border-[#E31837] text-xs font-bold transition-all pl-10"
                    placeholder="ADMIN USERNAME"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <div className="absolute left-3 top-3.5 text-slate-300">
                    <Globe size={14}/>
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] flex justify-between">
                  Secure Access Key <span>Encrypted</span>
                </label>
                <div className="relative">
                  <Input 
                    type="password"
                    className="h-11 rounded-none border-slate-200 bg-slate-50 focus:bg-white focus:border-[#E31837] text-xs font-bold transition-all pl-10"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="absolute left-3 top-3.5 text-slate-300">
                    <Lock size={14}/>
                  </div>
                </div>
              </div>

              {/* Action Button - Classy Industrial Style */}
              <Button className="w-full h-12 bg-[#E31837] hover:bg-red-700 text-[11px] font-black uppercase tracking-[0.2em] rounded-none border-b-4 border-black/20 active:border-b-0 transition-all shadow-xl">
                {isLogin ? (
                  <>EXECUTE LOGIN <LogIn size={14} className="ml-2"/></>
                ) : (
                  <>REGISTER ACCOUNT <UserPlus size={14} className="ml-2"/></>
                )}
              </Button>

              {/* Toggle Logic - Minimalist and Formal */}
              <div className="pt-4 border-t border-slate-100 flex flex-col items-center gap-3">
                 <button 
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[9px] font-black text-slate-400 hover:text-[#E31837] uppercase tracking-widest transition-colors"
                 >
                   {isLogin ? "Need a new account? Request Access" : "Existing Operator? Return to Login"}
                 </button>
                 
                 <Link href="/" className="text-[9px] font-black text-[#E31837] border-b border-[#E31837] pb-0.5 uppercase tracking-widest">
                    Return to Public Store
                 </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Technical Detail */}
        <div className="mt-8 text-center">
           <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.5em] opacity-50">
             Hosapete Hub Terminal • Secure Connection Established
           </p>
        </div>
      </div>
    </div>
  );
}