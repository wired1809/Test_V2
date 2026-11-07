import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Clock, MapPin, CheckCircle2, Heart } from 'lucide-react';
import { CartItem, OrderFormState } from '../types';
import { BAKERY_INFO } from '../data/bakeryInfo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onOrderSuccess: (orderSummary: { items: CartItem[]; form: OrderFormState; total: number }) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderSuccess,
}) => {
  const [form, setForm] = useState<OrderFormState>({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    pickupDate: '',
    pickupTime: 'Afternoon (1:00 PM – 4:00 PM)',
    fulfillmentType: 'porch-pickup',
    deliveryAddress: '',
    specialNotes: '',
    isCustomTheme: false,
    themeNotes: '',
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = form.fulfillmentType === 'local-delivery' ? 5 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    onOrderSuccess({
      items: cartItems,
      form,
      total: grandTotal,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/50 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-lg bg-[#FAF6F0] h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-250">
        
        {/* Header */}
        <div className="p-5 bg-white border-b border-amber-900/10 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif-bakery text-lg font-bold text-[#382923]">
                Your Fresh Order Bag
              </h2>
              <div className="text-[11px] text-stone-500">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} ready for Melinda
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-6 flex-1">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h3 className="font-serif-bakery font-bold text-lg text-stone-800">
                Your bag is empty
              </h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Select your favorite homemade cake pops or build a custom sampler box to get started!
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-[#4A3228] text-white px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Browse Flavors
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center justify-between">
                  <span>Selected Treats</span>
                  <button
                    onClick={onClearCart}
                    className="text-[11px] text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-white rounded-2xl border border-amber-900/10 shadow-2xs flex items-center justify-between gap-3 text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-serif-bakery font-bold text-sm text-[#382923] truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-stone-500 truncate mt-0.5">
                        {item.subtitle}
                      </div>
                      <div className="text-xs font-bold text-amber-900 mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 shrink-0 bg-stone-50 border border-stone-200 rounded-xl p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-lg bg-white hover:bg-stone-100 flex items-center justify-center text-stone-700 text-xs cursor-pointer shadow-2xs"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-stone-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-lg bg-[#4A3228] hover:bg-[#38241C] flex items-center justify-center text-white text-xs cursor-pointer shadow-2xs"
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-stone-300 hover:text-red-600 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Details & Porch Pickup Form */}
              <form onSubmit={handleFormSubmit} id="order-form" className="space-y-4 pt-4 border-t border-amber-900/10">
                <div className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Pickup / Delivery Scheduling</span>
                </div>

                {/* Fulfillment Toggle */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, fulfillmentType: 'porch-pickup' })}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      form.fulfillmentType === 'porch-pickup'
                        ? 'bg-amber-100/70 border-amber-400 text-amber-950 font-bold'
                        : 'bg-white border-stone-200 text-stone-600'
                    }`}
                  >
                    <div className="text-xs">Porch Pickup</div>
                    <div className="text-[10px] text-stone-500 font-normal">Free • Oakwood home</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm({ ...form, fulfillmentType: 'local-delivery' })}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      form.fulfillmentType === 'local-delivery'
                        ? 'bg-amber-100/70 border-amber-400 text-amber-950 font-bold'
                        : 'bg-white border-stone-200 text-stone-600'
                    }`}
                  >
                    <div className="text-xs">Local Delivery</div>
                    <div className="text-[10px] text-stone-500 font-normal">+$5 • Within 8 miles</div>
                  </button>
                </div>

                {form.fulfillmentType === 'local-delivery' && (
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street address, city & zip"
                      value={form.deliveryAddress}
                      onChange={(e) => setForm({ ...form, deliveryAddress: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white"
                    />
                  </div>
                )}

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Preferred Date (48h Notice) *
                    </label>
                    <input
                      type="date"
                      required
                      value={form.pickupDate}
                      onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Pickup Window
                    </label>
                    <select
                      value={form.pickupTime}
                      onChange={(e) => setForm({ ...form, pickupTime: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)">Morning (10am – 1pm)</option>
                      <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1pm – 4pm)</option>
                      <option value="Evening (4:00 PM – 6:30 PM)">Evening (4pm – 6:30pm)</option>
                    </select>
                  </div>
                </div>

                {/* Customer Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First & last name"
                      value={form.customerName}
                      onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Cell Phone (for SMS address) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={form.customerPhone}
                      onChange={(e) => setForm({ ...form, customerPhone: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    Notes for Melinda (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Birthday party theme colors, special packaging notes..."
                    value={form.specialNotes}
                    onChange={(e) => setForm({ ...form, specialNotes: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-white"
                  />
                </div>
              </form>
            </>
          )}
        </div>

        {/* Footer / Total & Checkout Button */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-white border-t border-amber-900/10 space-y-3 sticky bottom-0">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {form.fulfillmentType === 'local-delivery' && (
                <div className="flex justify-between">
                  <span>Local Neighborhood Delivery</span>
                  <span>+$5.00</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-[#382923] pt-1 border-t border-stone-100">
                <span>Estimated Total</span>
                <span className="font-serif-bakery text-base">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              form="order-form"
              className="w-full bg-[#C25E38] hover:bg-[#A94C29] text-white py-3.5 rounded-2xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Submit Order Request to Melinda</span>
            </button>

            <div className="text-[10px] text-stone-500 text-center leading-normal">
              🔒 No payment required now! Melinda verifies your date and texts you confirmation and pickup address within a couple of hours.
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
