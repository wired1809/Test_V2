import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Clock, MapPin, Heart } from 'lucide-react';
import { CartItem, OrderFormState } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onOrderSuccess: (orderSummary: { items: CartItem[]; form: OrderFormState; total: number }) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart, onOrderSuccess }) => {
  const [form, setForm] = useState<OrderFormState>({ customerName: '', customerPhone: '', customerEmail: '', pickupDate: '', pickupTime: 'Afternoon (1:00 PM – 4:00 PM)', fulfillmentType: 'porch-pickup', deliveryAddress: '', specialNotes: '', isCustomTheme: false, themeNotes: '' });
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = form.fulfillmentType === 'local-delivery' ? 5 : 0;
  const total = subtotal + deliveryFee;
  const updateForm = (updates: Partial<OrderFormState>) => setForm((current) => ({ ...current, ...updates }));
  const submitOrder = (event: React.FormEvent) => {
    event.preventDefault();
    if (cartItems.length) onOrderSuccess({ items: cartItems, form, total });
  };

  return <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/50 backdrop-blur-xs flex justify-end">
    <div className="w-full max-w-lg bg-[#FAF6F0] h-full shadow-2xl flex flex-col overflow-y-auto">
      <div className="p-5 bg-white border-b border-amber-900/10 flex items-center justify-between sticky top-0 z-10"><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800"><ShoppingBag className="w-4 h-4" /></div><div><h2 className="font-serif-bakery text-lg font-bold text-[#382923]">Your Cake Pop Order</h2><div className="text-[11px] text-stone-500">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</div></div></div><button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100" aria-label="Close order bag"><X className="w-5 h-5" /></button></div>
      <div className="p-5 space-y-6 flex-1">
        {!cartItems.length ? <div className="py-16 text-center space-y-3"><div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto"><ShoppingBag className="w-8 h-8 opacity-60" /></div><h3 className="font-serif-bakery font-bold text-lg text-stone-800">Your bag is empty</h3><p className="text-xs text-stone-500 max-w-xs mx-auto">Choose your favorite handmade cake pops to get started.</p><button onClick={onClose} className="mt-2 bg-[#4A3228] text-white px-5 py-2.5 rounded-xl text-xs font-semibold">Browse Cake Pops</button></div> : <>
          <div className="space-y-3"><div className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center justify-between"><span>Your Cake Pops</span><button onClick={onClearCart} className="text-[11px] text-stone-400 hover:text-red-600">Clear All</button></div>
            {cartItems.map((item) => <div key={item.id} className="p-3.5 bg-white rounded-2xl border border-amber-900/10 shadow-2xs flex items-center justify-between gap-3"><div className="flex-1 min-w-0"><div className="font-serif-bakery font-bold text-sm text-[#382923] truncate">{item.title}</div><div className="text-[11px] text-stone-500 truncate mt-0.5">{item.subtitle}</div><div className="text-xs font-bold text-amber-900 mt-1">${(item.price * item.quantity).toFixed(2)}</div></div><div className="flex items-center gap-1.5 shrink-0 bg-stone-50 border border-stone-200 rounded-xl p-1"><button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity" className="w-6 h-6 rounded-lg bg-white flex items-center justify-center"><Minus className="w-2.5 h-2.5" /></button><span className="w-6 text-center text-xs font-bold">{item.quantity}</span><button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity" className="w-6 h-6 rounded-lg bg-[#4A3228] flex items-center justify-center text-white"><Plus className="w-2.5 h-2.5" /></button></div><button onClick={() => onRemoveItem(item.id)} className="p-1.5 text-stone-300 hover:text-red-600" title="Remove"><Trash2 className="w-3.5 h-3.5" /></button></div>)}
          </div>
          <form onSubmit={submitOrder} id="order-form" className="space-y-4 pt-4 border-t border-amber-900/10">
            <div className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-700" />Pickup / Delivery</div>
            <div className="grid grid-cols-2 gap-2"><button type="button" onClick={() => updateForm({ fulfillmentType: 'porch-pickup' })} className={`p-3 rounded-2xl border text-left ${form.fulfillmentType === 'porch-pickup' ? 'bg-amber-100 border-amber-400 font-bold' : 'bg-white border-stone-200'}`}><div className="text-xs">Porch Pickup</div><div className="text-[10px] text-stone-500 font-normal">Free</div></button><button type="button" onClick={() => updateForm({ fulfillmentType: 'local-delivery' })} className={`p-3 rounded-2xl border text-left ${form.fulfillmentType === 'local-delivery' ? 'bg-amber-100 border-amber-400 font-bold' : 'bg-white border-stone-200'}`}><div className="text-xs">Local Delivery</div><div className="text-[10px] text-stone-500 font-normal">+$5 • Within 8 miles</div></button></div>
            {form.fulfillmentType === 'local-delivery' && <label className="block text-[11px] font-bold text-stone-700">Delivery Address *<input required value={form.deliveryAddress} onChange={(e) => updateForm({ deliveryAddress: e.target.value })} className="mt-1 w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white" placeholder="Street address, city & zip" /></label>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><label className="text-[11px] font-bold text-stone-700">Preferred Date (48h notice) *<input type="date" required value={form.pickupDate} onChange={(e) => updateForm({ pickupDate: e.target.value })} className="mt-1 w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white" /></label><label className="text-[11px] font-bold text-stone-700">Pickup Window<select value={form.pickupTime} onChange={(e) => updateForm({ pickupTime: e.target.value })} className="mt-1 w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white"><option>Morning (10:00 AM – 1:00 PM)</option><option>Afternoon (1:00 PM – 4:00 PM)</option><option>Evening (4:00 PM – 6:30 PM)</option></select></label></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><label className="text-[11px] font-bold text-stone-700">Your Name *<input required value={form.customerName} onChange={(e) => updateForm({ customerName: e.target.value })} className="mt-1 w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white" placeholder="First & last name" /></label><label className="text-[11px] font-bold text-stone-700">Cell Phone *<input required type="tel" value={form.customerPhone} onChange={(e) => updateForm({ customerPhone: e.target.value })} className="mt-1 w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white" placeholder="(555) 000-0000" /></label></div>
            <label className="block text-[11px] font-bold text-stone-700">Notes for Melinda (Optional)<textarea rows={2} value={form.specialNotes} onChange={(e) => updateForm({ specialNotes: e.target.value })} className="mt-1 w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white" placeholder="Flavor preferences or event details" /></label>
          </form>
        </>}
      </div>
      {cartItems.length > 0 && <div className="p-5 bg-white border-t border-amber-900/10 space-y-3 sticky bottom-0"><div className="space-y-1.5 text-xs text-stone-600"><div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>{deliveryFee > 0 && <div className="flex justify-between"><span>Local Delivery</span><span>+$5.00</span></div>}<div className="flex justify-between text-sm font-bold text-[#382923] pt-1 border-t border-stone-100"><span>Estimated Total</span><span className="font-serif-bakery">${total.toFixed(2)}</span></div></div><button type="submit" form="order-form" className="w-full bg-[#C25E38] hover:bg-[#A94C29] text-white py-3.5 rounded-2xl font-bold text-xs shadow-md flex items-center justify-center gap-2"><Heart className="w-3.5 h-3.5 fill-white" />Submit Cake Pop Order Request</button><div className="text-[10px] text-stone-500 text-center">No payment required now. Melinda will confirm your date and pickup details.</div></div>}
    </div>
  </div>;
};
