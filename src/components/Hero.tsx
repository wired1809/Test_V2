import React from 'react';
import { Heart, Sparkles, MapPin, Clock, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreFlavors: () => void;
  onMeetMelinda: () => void;
  onBuildBox: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFlavors, onMeetMelinda }) => (
  <section id="hero" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#dfe8d5]/80 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#efd3bf]/80 blur-3xl pointer-events-none" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf2e9] border border-[#cad7c7] text-[#3f5942] text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#7a9672] animate-pulse" />Fresh from Melinda's farmhouse kitchen
          </div>
          <h1 className="font-serif-bakery text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2d2a28] tracking-tight leading-[1.08]">Handmade cake pops for slow mornings, sweet celebrations, and everyday comfort.</h1>
          <p className="text-base sm:text-lg text-[#5d564f] leading-relaxed max-w-xl">Small-batch cake pops baked from scratch, rolled by hand, and dipped with care. Choose your favorite flavor for birthdays, family gatherings, and little moments worth savoring.</p>
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button onClick={onExploreFlavors} className="bg-[#b6674a] hover:bg-[#a2553d] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer">
              <span>Shop Handmade Cake Pops</span><ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onMeetMelinda} className="text-[#4d453f] hover:text-[#2f2a28] text-sm font-semibold underline underline-offset-4 px-2 py-2 cursor-pointer transition-colors">Meet Melinda</button>
          </div>
          <div className="pt-6 border-t border-[#d8cec2] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#5d564f] font-medium">
            <div className="flex items-center gap-2.5"><div className="w-7 h-7 rounded-lg bg-[#edf2e9] flex items-center justify-center text-[#516b4a]"><Clock className="w-4 h-4" /></div><span>Baked fresh to order</span></div>
            <div className="flex items-center gap-2.5"><div className="w-7 h-7 rounded-lg bg-[#e8e1d8] flex items-center justify-center text-[#6b5848]"><MapPin className="w-4 h-4" /></div><span>Porch pickup in Oakwood</span></div>
            <div className="flex items-center gap-2.5"><div className="w-7 h-7 rounded-lg bg-[#f3e1d8] flex items-center justify-center text-[#9c5e48]"><Heart className="w-4 h-4 fill-[#9c5e48]" /></div><span>Made by one home baker</span></div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(87,72,60,0.18)] border-4 border-white/90 bg-[#f7efe7] group">
            <img src="/src/assets/images/hero_home_cake_pops_1794090815794.jpg" alt="Melinda's handmade cake pops in a bakery box" className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-102 transition-transform duration-500" loading="eager" />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-xs font-semibold text-[#433a33] flex items-center gap-1.5 border border-[#eadfd3]"><Sparkles className="w-3.5 h-3.5 text-[#b6674a]" />Handmade in small batches</div>
            <div className="absolute bottom-4 left-4 right-4 bg-[#2b2a28]/80 backdrop-blur-md text-stone-100 p-3.5 rounded-2xl text-xs flex items-center justify-between border border-white/20">
              <div><div className="font-semibold text-white">Fresh handmade cake pops</div><div className="text-stone-300 text-[11px]">A little sweet touch for every gathering</div></div>
              <div className="text-[#f2c7a5]"><Heart className="w-5 h-5 fill-current" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
