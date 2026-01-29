"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validUser = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const validPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (username === validUser && password === validPass) {
      // Save session locally
      localStorage.setItem("isPCECAdmin", "true");
      router.push("/admin");
    } else {
      alert("Unauthorized Access: Incorrect Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] p-6">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#E31837 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <Card className="w-full max-w-md shadow-2xl border-none bg-white relative z-10">
        <CardHeader className="text-center space-y-2 pb-2">
          <div className="mx-auto w-16 h-16 bg-[#E31837] flex items-center justify-center rounded-2xl rotate-3 shadow-lg mb-4">
            <Lock className="text-white" size={32} />
          </div>
          <CardTitle className="text-3xl font-black italic text-secondary">PCEC ADMIN</CardTitle>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Secure Entry Portal</p>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-tighter">Admin Identifier</label>
              <Input 
                className="h-12 border-2 focus:border-[#E31837]"
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-tighter">Access Key</label>
              <Input 
                type="password" 
                className="h-12 border-2 focus:border-[#E31837]"
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button className="w-full bg-[#E31837] hover:bg-red-700 h-14 text-lg font-black italic shadow-xl">
              AUTHORIZE LOGIN
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}