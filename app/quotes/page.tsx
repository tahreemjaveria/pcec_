"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MailOpen, PhoneCall, ExternalLink } from "lucide-react";

export default function AdminQuotes() {
  const quotes = [
    { id: "QT-101", company: "Hampi Infra Projects", product: "Makita Drills", qty: 25, status: "Urgent" },
    { id: "QT-102", company: "Bellary Mining Corp", product: "3M Masks", qty: 500, status: "Follow-up" },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-4xl font-black text-secondary italic mb-8">INCOMING B2B QUOTES</h1>
      
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-secondary text-white">
            <TableRow>
              <TableHead className="text-white font-bold">ID</TableHead>
              <TableHead className="text-white font-bold">Company</TableHead>
              <TableHead className="text-white font-bold">Requirement</TableHead>
              <TableHead className="text-white font-bold">Qty</TableHead>
              <TableHead className="text-white font-bold">Status</TableHead>
              <TableHead className="text-white text-right font-bold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quotes.map((q) => (
              <TableRow key={q.id} className="hover:bg-red-50/30 transition-colors">
                <TableCell className="font-black text-primary">{q.id}</TableCell>
                <TableCell className="font-bold text-secondary">{q.company}</TableCell>
                <TableCell className="text-sm italic">{q.product}</TableCell>
                <TableCell className="font-black">{q.qty}</TableCell>
                <TableCell>
                  <Badge className={q.status === "Urgent" ? "bg-red-600" : "bg-blue-600"}>
                    {q.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right flex justify-end gap-2">
                  <Button size="icon" variant="outline" className="rounded-full"><PhoneCall size={16}/></Button>
                  <Button size="icon" className="bg-secondary rounded-full"><MailOpen size={16}/></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}