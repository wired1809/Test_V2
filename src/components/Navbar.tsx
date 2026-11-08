import React from 'react';
import { ShoppingBag, Heart, MapPin, Clock, Phone } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigate }) => (
  <header className="sticky top-0 z-40 bg-[#fffdf8]/95 backdrop-blur-md border-b border-[#d8cec2] shadow-[0_4px_18px_rgba(76,66,57,0.06)]">
    <div className="bg-[#536d55] text-[#f9f4ee] px-4 py-1.5 text-xs text-center font-medium flex items-center justify-center gap-4 flex-wrap">
      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#e8d7c3]" />Handmade cake pops, baked fresh to order</span>
      <span className="hidden sm:inline text-[#dfe8d5]/70">|</span>
      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#e8d7c3]" />Porch pickup in {BAKERY_INFO.neighborhood.split('(')[0].trim()}</span>
      <a href={`tel:${BAKERY_INFO.phone}`} className="hidden md:flex items-center gap-1 hover:text-[#f7d9be] transition-colors"><Phone className="w-3 h-3 text-[#e8d7c3]" />{BAKERY_INFO.phone}</a>
    </div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
      <button onClick={() => onNavigate('hero')} className="text-left group flex items-center gap-3 cursor-pointer">
        <div className="w-11 h-11 rounded-2xl bg-[#edf2e9] border border-[#d7e0d0] flex items-center justify-center text-[#516b4a] shadow-xs group-hover:scale-105 transition-transform"><Heart className="w-5 h-5 fill-[#516b4a] text-[#516b4a]" /></div>
        <div>
          <div className="font-serif-bakery text-xl sm:text-2xl font-bold tracking-tight text-[#2d2a28] group-hover:text-[#435542] transition-colors">{BAKERY_INFO.name}</div>
          <div className="text-[10px] sm:text-[11px] font-semibold text-[#5c665a] uppercase tracking-widest">Handmade Cake Pops • Baked to Order</div>
        </div>
      </button>
      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#564f4b]">
        <button onClick={() => onNavigate('flavors')} className="hover:text-[#435542] transition-colors cursor-pointer py-1">Cake Pops</button>
        <button onClick={() => onNavigate('about-melinda')} className="hover:text-[#435542] transition-colors cursor-pointer py-1">Meet Melinda</button>
        <button onClick={() => onNavigate('how-it-works')} className="hover:text-[#435542] transition-colors cursor-pointer py-1">Pickup & Ordering</button>
        <button onClick={() => onNavigate('custom-order')} className="hover:text-[#435542] transition-colors cursor-pointer py-1">Event Orders</button>
        <button onClick={() => onNavigate('faq')} className="hover:text-[#435542] transition-colors cursor-pointer py-1">FAQs</button>
      </nav>
      <button onClick={onOpenCart} className="relative flex items-center gap-2 bg-[#435542] hover:bg-[#2f463a] text-[#fffdf8] px-4 py-2.5 rounded-full font-medium text-sm shadow-md transition-all" aria-label="View shopping bag">
        <ShoppingBag className="w-4 h-4 text-[#e8d7c3]" /><span className="font-semibold">Order Bag</span>
        {cartCount > 0 && <span className="bg-[#f0c9a5] text-[#2d2a28] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</span>}
      </button>
    </div>
  </header>
);
