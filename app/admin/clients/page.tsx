"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, UserCheck, Download } from "lucide-react";

const clientData = [
  { id: "C-101", name: "Vijayanagar Mining Group", location: "Hosapete", totalSpent: "₹12,40,000", lastOrder: "Jan 25, 2026", status: "Business" },
  { id: "C-102", name: "Karnataka Infra Works", location: "Ballari", totalSpent: "₹4,20,000", lastOrder: "Jan 20, 2026", status: "Verified" },
];

export default function ClientManagement() {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-black text-secondary italic">CLIENT DATABASE</h1>
          <p className="text-gray-500 font-bold">Manage purchases and business relationships</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input className="pl-10 h-12 w-full md:w-80" placeholder="Search by GST or Name..." />
          </div>
          <button className="h-12 px-4 bg-secondary text-white rounded-lg"><Download size={20}/></button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-black text-xs uppercase">Client ID</TableHead>
              <TableHead className="font-black text-xs uppercase">Company Name</TableHead>
              <TableHead className="font-black text-xs uppercase">Location</TableHead>
              <TableHead className="font-black text-xs uppercase">Total Revenue</TableHead>
              <TableHead className="font-black text-xs uppercase">Last Purchase</TableHead>
              <TableHead className="font-black text-xs uppercase">Account Tier</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clientData.map((client) => (
              <TableRow key={client.id} className="hover:bg-slate-50 cursor-pointer">
                <TableCell className="font-mono text-primary font-bold">{client.id}</TableCell>
                <TableCell className="font-bold text-secondary">{client.name}</TableCell>
                <TableCell>{client.location}</TableCell>
                <TableCell className="font-black text-green-700">{client.totalSpent}</TableCell>
                <TableCell>{client.lastOrder}</TableCell>
                <TableCell>
                  <Badge className="bg-blue-100 text-blue-700 border-none shadow-none">
                    <UserCheck size={12} className="mr-1"/> {client.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}