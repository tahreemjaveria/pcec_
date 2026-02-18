"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, Trash2, Edit3, Image as ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminInventory() {
  return (
    <div className="flex min-h-screen bg-[#F4F4F7]">
      {/* (Sidebar is same as Admin Dashboard) */}
      
      <main className="flex-1 p-10">
        <header className="flex justify-between items-end mb-12">
           <div>
              <h1 className="text-4xl font-display font-black text-secondary italic tracking-tighter">TECHNICAL INVENTORY</h1>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Manage 1,402 Stock Keeping Units</p>
           </div>
           <Button className="bg-[#E31837] hover:bg-red-700 h-12 px-8 font-black italic rounded-none shadow-xl">
              <Plus size={20} className="mr-2"/> NEW SKU
           </Button>
        </header>

        <Card className="bg-white rounded-none border-none shadow-xl overflow-hidden">
           <div className="p-6 bg-slate-50 border-b flex justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 text-slate-300" size={18}/>
                <Input className="pl-10 h-12 rounded-none border-slate-200" placeholder="Filter by Brand, Model or SKU..." />
              </div>
              <Button variant="outline" className="h-12 px-6 rounded-none border-2 border-secondary font-black italic uppercase text-xs tracking-widest">
                <Filter size={16} className="mr-2"/> Advanced
              </Button>
           </div>
           
           <Table>
             <TableHeader className="bg-slate-50 border-b border-slate-100">
               <TableRow>
                 <TableHead className="font-black uppercase text-[10px] pl-8">Preview</TableHead>
                 <TableHead className="font-black uppercase text-[10px]">Model & Brand</TableHead>
                 <TableHead className="font-black uppercase text-[10px]">Valuation</TableHead>
                 <TableHead className="font-black uppercase text-[10px]">In Stock</TableHead>
                 <TableHead className="font-black uppercase text-[10px]">Price Lock</TableHead>
                 <TableHead className="text-right pr-8 font-black uppercase text-[10px]">Modify</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
               <InventoryRow model="DDF484Z Cordless Drill" brand="MAKITA" price="₹28,400" stock={42} b2b={false} />
               <InventoryRow model="SecureFit Safety Goggles" brand="3M" price="₹890" stock={8} b2b={true} />
               <InventoryRow model="Kennedy 52pc Socket Set" brand="CROMWELL" price="₹14,200" stock={120} b2b={true} />
             </TableBody>
           </Table>
        </Card>
      </main>
    </div>
  );
}

function InventoryRow({ model, brand, price, stock, b2b }: any) {
  return (
    <TableRow className="hover:bg-slate-50 transition-colors border-b border-slate-100">
      <TableCell className="pl-8">
        <div className="w-10 h-10 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-slate-400">
          <ImageIcon size={16}/>
        </div>
      </TableCell>
      <TableCell>
        <div className="font-black text-secondary uppercase text-[11px] tracking-tight">{model}</div>
        <div className="text-[9px] font-bold text-[#E31837] italic tracking-widest">{brand}</div>
      </TableCell>
      <TableCell className="font-black text-secondary">{price}</TableCell>
      <TableCell>
        <div className="flex flex-col gap-1">
          <span className={`text-[11px] font-black ${stock < 10 ? 'text-red-500' : 'text-slate-600'}`}>{stock} Units</span>
          <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
             <div className="h-full bg-green-500" style={{ width: '70%' }}></div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <Badge className={`${b2b ? 'bg-secondary' : 'bg-slate-100 text-slate-400'} rounded-none uppercase text-[8px] font-black`}>
          {b2b ? 'B2B Locked' : 'Public Price'}
        </Badge>
      </TableCell>
      <TableCell className="text-right pr-8">
        <div className="flex justify-end gap-2">
          <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-blue-600"><Edit3 size={14}/></Button>
          <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-red-600"><Trash2 size={14}/></Button>
        </div>
      </TableCell>
    </TableRow>
  );
}