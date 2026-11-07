import React from 'react';
import { ShoppingBag, Heart, MapPin, Clock, Phone } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
      {/* Top micro-announcement banner for home bakery */}
      <div className="bg-[#5B3E31] text-[#FDF8F3] px-4 py-1.5 text-xs text-center font-medium flex items-center justify-center gap-4 flex-wrap">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-amber-300" />
          <span>Baking to order: <strong>48-hour advance notice</strong></span>
        </span>
        <span className="hidden sm:inline text-amber-200/50">|</span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-amber-300" />
          <span>Porch Pickup in {BAKERY_INFO.neighborhood.split('(')[0].trim()}</span>
        </span>
        <span className="hidden md:inline text-amber-200/50">|</span>
        <a href={`tel:${BAKERY_INFO.phone}`} className="hidden md:flex items-center gap-1 hover:text-amber-200 transition-colors">
          <Phone className="w-3 h-3 text-amber-300" />
          <span>Call / Text: {BAKERY_INFO.phone}</span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl bg-amber-100/80 border border-amber-200/80 flex items-center justify-center text-amber-800 shadow-xs group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-amber-700 text-amber-700" />
          </div>
          <div>
            <div className="font-serif-bakery text-2xl font-bold tracking-tight text-[#382923] group-hover:text-amber-900 transition-colors">
              {BAKERY_INFO.name}
            </div>
            <div className="text-[11px] font-semibold text-amber-800/80 uppercase tracking-widest flex items-center gap-1.5">
              <span>Home Kitchen Cakery</span>
              <span>•</span>
              <span className="text-emerald-700">Baked to Order</span>
            </div>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          <button
            onClick={() => onNavigate('flavors')}
            className="hover:text-amber-800 transition-colors cursor-pointer py-1"
          >
            Flavor Menu
          </button>
          <button
            onClick={() => onNavigate('about-melinda')}
            className="hover:text-amber-800 transition-colors cursor-pointer py-1 flex items-center gap-1.5"
          >
            <span>Meet Melinda</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-amber-100 text-amber-900 rounded font-semibold">Solo Baker</span>
          </button>
          <button
            onClick={() => onNavigate('box-builder')}
            className="hover:text-amber-800 transition-colors cursor-pointer py-1"
          >
            Build a Box
          </button>
          <button
            onClick={() => onNavigate('how-it-works')}
            className="hover:text-amber-800 transition-colors cursor-pointer py-1"
          >
            Porch Pickup
          </button>
          <button
            onClick={() => onNavigate('custom-order')}
            className="hover:text-amber-800 transition-colors cursor-pointer py-1"
          >
            Custom Themes
          </button>
          <button
            onClick={() => onNavigate('faq')}
            className="hover:text-amber-800 transition-colors cursor-pointer py-1"
          >
            FAQs
          </button>
        </nav>

        {/* Right CTA / Cart Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 bg-[#4A3228] hover:bg-[#38241C] text-[#FFFDF9] px-4 py-2.5 rounded-full font-medium text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            aria-label="View shopping bag"
          >
            <ShoppingBag className="w-4 h-4 text-amber-200" />
            <span className="font-semibold">Order Bag</span>
            {cartCount > 0 && (
              <span className="bg-amber-500 text-stone-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
