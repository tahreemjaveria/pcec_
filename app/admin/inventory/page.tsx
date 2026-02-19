"use client";
import { 
  Plus, Search, Filter, Trash2, Edit3, Image as ImageIcon, 
  LayoutDashboard, ShoppingBag, Users, Layers, LogOut, Factory 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function AdminInventory() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#F4F4F7]">
      {/* 1. SIDEBAR (Same as Dashboard) */}
      <aside className="w-72 bg-[#0A0A0A] p-8 flex flex-col fixed h-full border-r border-white/5 z-50">
        <div className="mb-12">
          <div className="text-4xl font-display font-black text-[#E31837] italic tracking-tighter">PCEC</div>
          <div className="h-1 w-12 bg-[#E31837] mt-1"></div>
        </div>
        <nav className="flex-1 space-y-2">
          <SidebarLink icon={<LayoutDashboard size={18}/>} label="Overview" onClick={() => router.push('/admin')} />
          <SidebarLink icon={<Layers size={18}/>} label="Inventory" active />
          <SidebarLink icon={<ShoppingBag size={18}/>} label="Quotes/Orders" />
          <SidebarLink icon={<Users size={18}/>} label="Clients" />
        </nav>
        <Button variant="ghost" className="mt-auto justify-start text-gray-500 hover:text-white font-bold italic uppercase text-[10px] tracking-widest">
          <LogOut size={16} className="mr-3"/> Terminate Session
        </Button>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 ml-72 p-12">
        <header className="flex justify-between items-end mb-12">
           <div>
              <h1 className="text-5xl font-display font-black text-secondary italic tracking-tighter uppercase">TECHNICAL INVENTORY</h1>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] mt-2 italic">Global SKU Management Hub</p>
           </div>

           {/* --- THE CHANGE: TRIGGER DIALOG HERE --- */}
           <Dialog>
             <DialogTrigger asChild>
                <Button className="bg-[#E31837] hover:bg-red-700 h-12 px-8 font-black italic rounded-none shadow-xl shadow-red-500/20">
                   <Plus size={20} className="mr-2"/> NEW SKU DEPLOYMENT
                </Button>
             </DialogTrigger>
             <DialogContent className="max-w-2xl bg-white rounded-none border-none p-0 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <div className="bg-secondary p-4 px-8 flex justify-between items-center border-b border-white/5">
                   <h2 className="text-white text-sm font-black italic tracking-widest uppercase flex items-center gap-2">
                     <Factory size={16} className="text-[#E31837]"/> Inventory Entry Terminal
                   </h2>
                </div>
                <div className="p-10 space-y-8 bg-white">
                   <div className="grid grid-cols-2 gap-6 text-left">
                      <div className="space-y-1.5">
                         <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Model Identifier</label>
                         <Input className="rounded-none border-2 border-slate-100 focus:border-[#E31837] h-11 font-bold text-sm" placeholder="e.g. MAKITA-HM1307" />
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Authorized Brand</label>
                         <select className="w-full h-11 border-2 border-slate-100 rounded-none px-3 text-xs font-black uppercase tracking-tight focus:border-[#E31837] outline-none">
                            <option>Makita</option>
                            <option>3M Corp</option>
                            <option>Cromwell</option>
                            <option>Bosch Professional</option>
                         </select>
                      </div>
                   </div>

                   <div className="grid grid-cols-3 gap-6 text-left">
                      <div className="space-y-1.5">
                         <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">B2C Base Price (₹)</label>
                         <Input className="rounded-none border-2 border-slate-100 h-11 font-black text-sm" placeholder="0.00" />
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">On-Hand Stock</label>
                         <Input className="rounded-none border-2 border-slate-100 h-11 font-black text-sm" placeholder="Units" />
                      </div>
                      <div className="flex items-end pb-1.5">
                         <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 accent-[#E31837] border-2" />
                            <span className="text-[9px] font-black uppercase text-slate-400 group-hover:text-secondary tracking-widest transition-colors">Lock for B2B</span>
                         </label>
                      </div>
                   </div>

                   <Button className="w-full h-14 bg-secondary hover:bg-[#0A0A0A] text-lg font-black italic rounded-none border-b-4 border-black/30 shadow-2xl shadow-black/20">
                     EXECUTE SYSTEM DEPLOYMENT 
                   </Button>
                </div>
             </DialogContent>
           </Dialog>
        </header>

        {/* 3. INVENTORY TABLE */}
        <Card className="bg-white rounded-none border-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
           <div className="p-6 bg-slate-50 border-b flex justify-between gap-4">
              <div className="relative flex-1 group">
                <Search className="absolute left-4 top-3.5 text-slate-300 group-focus-within:text-[#E31837] transition-colors" size={18}/>
                <Input className="pl-12 h-12 rounded-none border-slate-200 bg-white focus:border-[#E31837] transition-all font-bold text-sm" placeholder="Filter by Brand, Model or Serial Number..." />
              </div>
              <Button variant="outline" className="h-12 px-8 rounded-none border-2 border-secondary font-black italic uppercase text-[10px] tracking-[0.2em] hover:bg-secondary hover:text-white transition-all">
                <Filter size={14} className="mr-2"/> Global Filter
              </Button>
           </div>
           
           <Table>
             <TableHeader className="bg-slate-50 border-b border-slate-100">
               <TableRow>
                 <TableHead className="font-black uppercase text-[9px] tracking-widest pl-8 py-5">Unit Preview</TableHead>
                 <TableHead className="font-black uppercase text-[9px] tracking-widest">Model & Manufacturer</TableHead>
                 <TableHead className="font-black uppercase text-[9px] tracking-widest">Valuation</TableHead>
                 <TableHead className="font-black uppercase text-[9px] tracking-widest">Inventory Status</TableHead>
                 <TableHead className="font-black uppercase text-[9px] tracking-widest text-center">B2B Gate</TableHead>
                 <TableHead className="text-right pr-8 font-black uppercase text-[9px] tracking-widest">Modify</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody className="bg-white">
               <InventoryRow model="DDF484Z Cordless Driver" brand="MAKITA" price="₹28,400" stock={42} b2b={false} />
               <InventoryRow model="SecureFit 400X Goggles" brand="3M CORP" price="₹890" stock={8} b2b={true} />
               <InventoryRow model="Kennedy 52pc Socket System" brand="CROMWELL" price="₹14,200" stock={120} b2b={true} />
             </TableBody>
           </Table>
        </Card>
      </main>
    </div>
  );
}

// --- SUB-COMPONENTS (Styling Helpers) ---

function SidebarLink({ icon, label, active = false, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-4 p-4 cursor-pointer transition-all border-l-2 ${
        active 
          ? 'bg-[#E31837]/10 text-white font-black italic border-[#E31837]' 
          : 'text-gray-500 hover:text-white border-transparent hover:bg-white/5'
      }`}
    >
      <div className={active ? 'text-[#E31837]' : ''}>{icon}</div> 
      <span className="uppercase text-[10px] tracking-[0.2em]">{label}</span>
    </div>
  );
}

function InventoryRow({ model, brand, price, stock, b2b }: any) {
  return (
    <TableRow className="hover:bg-slate-50/80 transition-colors border-b border-slate-100">
      <TableCell className="pl-8 py-5">
        <div className="w-12 h-12 bg-slate-50 rounded border-2 border-slate-100 flex items-center justify-center text-slate-300 shadow-inner">
          <ImageIcon size={20}/>
        </div>
      </TableCell>
      <TableCell>
        <div className="font-black text-secondary uppercase text-[12px] tracking-tighter leading-none mb-1">{model}</div>
        <div className="text-[9px] font-black text-[#E31837] italic tracking-[0.1em]">{brand}</div>
      </TableCell>
      <TableCell className="font-black text-secondary text-base italic">{price}</TableCell>
      <TableCell>
        <div className="flex flex-col gap-1.5">
          <span className={`text-[10px] font-black uppercase ${stock < 10 ? 'text-[#E31837] animate-pulse' : 'text-slate-500'}`}>
             {stock} UNITS REMAINING
          </span>
          <div className="w-24 h-1.5 bg-slate-100 rounded-none overflow-hidden">
             <div 
               className={`h-full ${stock < 10 ? 'bg-[#E31837]' : 'bg-green-500'}`} 
               style={{ width: stock > 100 ? '100%' : `${stock}%` }}
             ></div>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <Badge className={`${b2b ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-400'} rounded-none uppercase text-[8px] font-black px-3 py-1 tracking-widest`}>
          {b2b ? 'LOCKED' : 'PUBLIC'}
        </Badge>
      </TableCell>
      <TableCell className="text-right pr-8">
        <div className="flex justify-end gap-1">
          <Button size="icon" variant="ghost" className="h-9 w-9 text-slate-300 hover:text-secondary hover:bg-slate-100 transition-all">
            <Edit3 size={16}/>
          </Button>
          <Button size="icon" variant="ghost" className="h-9 w-9 text-slate-200 hover:text-[#E31837] hover:bg-red-50 transition-all">
            <Trash2 size={16}/>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}