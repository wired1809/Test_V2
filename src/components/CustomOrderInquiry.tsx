import React, { useState } from 'react';
import { Palette, Send, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';

export const CustomOrderInquiry: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    quantity: '2 Dozen (24 pops)',
    theme: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="custom-order" className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-900/10 shadow-sm relative overflow-hidden text-left">
        
        {/* Decorative background accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-amber-100/50 blur-2xl pointer-events-none" />

        <div className="max-w-xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3 border border-amber-200">
            <Palette className="w-3.5 h-3.5 text-amber-800" />
            <span>Special Event Themes & Custom Colors</span>
          </div>
          <h2 className="font-serif-bakery text-3xl sm:text-4xl font-bold text-[#382923]">
            Have a Theme in Mind?
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm">
            Whether it's a baby shower, dinosaur birthday, or graduation colors, Melinda loves hand-piping custom sprinkles and matching chocolates!
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center max-w-lg mx-auto space-y-3 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif-bakery font-bold text-xl text-emerald-950">
              Inquiry Sent to Melinda!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              Thank you, <strong>{formData.name}</strong>! I'll review your event details and text or email you within a few hours to confirm availability and discuss colors.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  eventDate: '',
                  quantity: '2 Dozen (24 pops)',
                  theme: '',
                  message: '',
                });
              }}
              className="mt-2 text-xs font-semibold text-emerald-900 underline underline-offset-2 cursor-pointer hover:text-emerald-950"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#382923] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#382923] mb-1">
                  Phone (for quick text confirmation) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#382923] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#382923] mb-1">
                  Event / Desired Pickup Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#382923] mb-1">
                  Estimated Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="1 Dozen (12 pops)">1 Dozen (12 pops)</option>
                  <option value="2 Dozen (24 pops)">2 Dozen (24 pops)</option>
                  <option value="3 Dozen (36 pops)">3 Dozen (36 pops)</option>
                  <option value="4+ Dozen (Party / Event)">4+ Dozen (Party / Event)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#382923] mb-1">
                  Theme or Color Palette
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sage green & gold, pastel rainbow"
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#382923] mb-1">
                Tell Melinda About Your Event
              </label>
              <textarea
                rows={3}
                placeholder="Mention flavor preferences, dietary notes, or any special display requests..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-amber-500 focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4A3228] hover:bg-[#38241C] text-white py-3.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-98"
            >
              <Send className="w-3.5 h-3.5 text-amber-200" />
              <span>Send Custom Order Inquiry to Melinda</span>
            </button>

            <div className="text-[11px] text-stone-500 text-center">
              No deposit required to inquire. Melinda responds within 2-4 hours.
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
