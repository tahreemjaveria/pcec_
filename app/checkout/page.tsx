import Navbar from "@/components/Navbar";
import { PCEC_DATA } from "@/lib/config";
import CheckoutButton from "@/components/CheckoutButton";

export default function CheckoutPage() {
  const cartTotal = 95400; // Example amount

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-black text-secondary italic mb-10">ORDER CHECKOUT</h1>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
             <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                   <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">1</div>
                   SHIPPING DETAILS
                </h3>
                <p className="text-sm text-slate-500 italic"> Lucknow Hub (Self-Pickup or Express Delivery Available)</p>
             </div>
          </div>
          
          {/* Razorpay Integration */}
          <div className="bg-secondary p-8 rounded-3xl text-white h-fit shadow-2xl">
            <h2 className="text-xl font-bold mb-6">ORDER SUMMARY</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400"><span>Subtotal</span><span>₹95,400</span></div>
              <div className="flex justify-between text-gray-400"><span>GST (18%)</span><span>Included</span></div>
              <div className="flex justify-between font-black text-2xl border-t border-white/10 pt-4">
                <span>TOTAL</span><span className="text-primary italic">₹95,400</span>
              </div>
            </div>
            <CheckoutButton amount={cartTotal} />
          </div>
        </div>
      </div>
    </div>
  );
}