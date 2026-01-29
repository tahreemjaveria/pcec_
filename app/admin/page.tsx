"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  History, Package, Users, Plus, Trash2, LayoutDashboard, 
  LogOut, Globe, ShoppingBag, Layers, Search, TrendingUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const router = useRouter();
  
  // -- STATE MANAGEMENT --
  const [brands, setBrands] = useState(["Makita", "3M", "Cromwell", "Bosch", "DeWalt"]);
  const [categories, setCategories] = useState(["Excavators", "Power Tools", "Safety PPE", "Adhesives"]);
  const [newBrand, setNewBrand] = useState("");
  const [newCat, setNewCat] = useState("");

  // -- AUTHENTICATION CHECK --
  useEffect(() => {
    const session = localStorage.getItem("isPCECAdmin");
    if (session !== "true") {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isPCECAdmin");
    router.push("/login");
  };

  // -- LOGIC: ADD/REMOVE --
  const addBrand = () => {
    if (newBrand.trim()) {
      setBrands([...brands, newBrand.trim()]);
      setNewBrand("");
    }
  };

  const removeBrand = (name: string) => {
    setBrands(brands.filter(b => b !== name));
  };

  const addCategory = () => {
    if (newCat.trim()) {
      setCategories([...categories, newCat.trim()]);
      setNewCat("");
    }
  };

  const removeCategory = (name: string) => {
    setCategories(categories.filter(c => c !== name));
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* SIDEBAR (Desktop) */}
      <aside className="hidden md:flex w-72 bg-[#1A1A1A] text-white flex-col p-6 fixed h-full z-50">
        <div className="flex flex-col mb-10">
          <span className="text-3xl font-black text-[#E31837] italic leading-none">PCEC</span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Admin Control Center</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
          <NavItem icon={<ShoppingBag size={20}/>} label="Orders" />
          <NavItem icon={<Users size={20}/>} label="Client History" />
          <NavItem icon={<Layers size={20}/>} label="Inventory" />
        </nav>

        <Button 
          onClick={handleLogout} 
          variant="outline" 
          className="mt-auto border-white/10 text-gray-400 hover:bg-[#E31837] hover:text-white transition-all"
        >
          <LogOut size={18} className="mr-2"/> SECURE LOGOUT
        </Button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 md:ml-72 p-4 md:p-10 pb-20">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-black text-secondary tracking-tight">COMMAND CENTER</h1>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Hosapete Karnataka Hub</p>
          </div>
          <Button className="bg-[#E31837] hover:bg-red-700 shadow-xl shadow-red-500/20 font-black h-12 px-6 rounded-xl">
            <Plus size={20} className="mr-2"/> ADD NEW PRODUCT
          </Button>
        </header>

        {/* TOP STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <StatCard label="Total Revenue" value="₹14,20,500" trend="+12.5%" icon={<TrendingUp size={20}/>} />
          <StatCard label="Active Clients" value="892" trend="+24" icon={<Users size={20}/>} />
          <StatCard label="Pending Quotes" value="18" trend="High Priority" icon={<ShoppingBag size={20}/>} color="bg-orange-500" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          
          {/* LEFT COLUMN: CLIENT PURCHASE HISTORY */}
          <div className="space-y-8">
            <Card className="shadow-2xl border-none overflow-hidden">
              <CardHeader className="bg-secondary text-white flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <History size={20} className="text-[#E31837]"/> RECENT PURCHASES
                </CardTitle>
                <Search size={18} className="text-gray-500 cursor-pointer"/>
              </CardHeader>
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="font-bold">Client</TableHead>
                    <TableHead className="font-bold">Type</TableHead>
                    <TableHead className="text-right font-bold">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <ClientRow name="Jindal Steels" type="B2B" amount="₹8,50,000" status="Paid" />
                  <ClientRow name="Rohan Construction" type="B2B" amount="₹1,20,000" status="Pending" />
                  <ClientRow name="Suresh K." type="B2C" amount="₹12,400" status="Paid" />
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* RIGHT COLUMN: BRAND & CATEGORY MANAGEMENT */}
          <div className="space-y-8">
            {/* BRAND MANAGER */}
            <Card className="border-none shadow-xl bg-white">
              <CardHeader className="bg-[#E31837] text-white rounded-t-2xl">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe size={18}/> BRAND VISIBILITY
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex gap-2 mb-6">
                  <Input 
                    placeholder="Enter brand name..." 
                    className="h-11 border-2 focus:border-[#E31837]"
                    value={newBrand}
                    onChange={(e) => setNewBrand(e.target.value)}
                  />
                  <Button onClick={addBrand} className="bg-secondary px-6 font-bold h-11">ADD</Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 group hover:border-[#E31837] transition-all">
                      <span className="font-black italic text-secondary text-sm">{brand}</span>
                      <Trash2 
                        size={16} 
                        className="text-slate-300 hover:text-red-500 cursor-pointer transition-colors"
                        onClick={() => removeBrand(brand)}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CATEGORY MANAGER */}
            <Card className="border-none shadow-xl bg-white">
              <CardHeader className="bg-secondary text-white rounded-t-2xl">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layers size={18} className="text-[#E31837]"/> STORE CATEGORIES
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex gap-2 mb-6">
                  <Input 
                    placeholder="New category..." 
                    className="h-11 border-2 focus:border-primary"
                    value={newCat}
                    onChange={(e) => setNewCat(e.target.value)}
                  />
                  <Button onClick={addCategory} className="bg-[#E31837] font-bold h-11">CREATE</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Badge key={cat} className="bg-slate-100 text-secondary border-slate-200 px-4 py-2 rounded-lg flex items-center gap-3 text-sm font-bold shadow-sm">
                      {cat} 
                      <Trash2 
                        size={14} 
                        className="text-red-400 cursor-pointer hover:text-red-600"
                        onClick={() => removeCategory(cat)}
                      />
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
}

// -- HELPER COMPONENTS (STYLING) --

function NavItem({ icon, label, active = false }: any) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-[#E31837] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
      {icon}
      <span className="font-bold text-sm">{label}</span>
    </div>
  );
}

function StatCard({ label, value, trend, icon, color = "bg-[#E31837]" }: any) {
  return (
    <Card className="border-none shadow-lg bg-white overflow-hidden relative group">
      <div className={`absolute top-0 left-0 w-1.5 h-full ${color}`}></div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</span>
          <div className={`p-2 rounded-lg ${color} text-white`}>{icon}</div>
        </div>
        <div className="text-3xl font-black text-secondary tracking-tighter">{value}</div>
        <div className="text-[10px] font-bold text-green-500 mt-1 uppercase">{trend}</div>
      </CardContent>
    </Card>
  );
}

function ClientRow({ name, type, amount, status }: any) {
  return (
    <TableRow className="hover:bg-slate-50 transition-colors">
      <TableCell>
        <div className="font-bold text-secondary tracking-tight">{name}</div>
        <div className="text-[10px] text-gray-400 font-medium">Verified Partner</div>
      </TableCell>
      <TableCell><Badge variant="outline" className="font-bold text-[10px]">{type}</Badge></TableCell>
      <TableCell className="text-right font-black text-secondary">{amount}</TableCell>
    </TableRow>
  );
}