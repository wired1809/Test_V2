import React from 'react';
import { Heart, Sparkles, MapPin, Clock, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreFlavors: () => void;
  onMeetMelinda: () => void;
  onBuildBox: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFlavors, onMeetMelinda }) => (
  <section id="hero" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-orange-200/20 blur-3xl pointer-events-none" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />Fresh from Melinda's home kitchen
          </div>
          <h1 className="font-serif-bakery text-4xl sm:text-5xl lg:text-6xl font-bold text-[#382923] tracking-tight leading-[1.12]">Handmade cake pops. A little bite of celebration.</h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-xl">Small-batch cake pops baked from scratch, rolled by hand, and dipped with care. Choose your favorite flavor and order a fresh 6-pack or dozen for your next sweet moment.</p>
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button onClick={onExploreFlavors} className="bg-[#C25E38] hover:bg-[#A94C29] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer">
              <span>Shop Handmade Cake Pops</span><ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onMeetMelinda} className="text-stone-700 hover:text-amber-900 text-sm font-semibold underline underline-offset-4 px-2 py-2 cursor-pointer transition-colors">Meet Melinda</button>
          </div>
          <div className="pt-6 border-t border-amber-900/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-700 font-medium">
            <div className="flex items-center gap-2.5"><div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800"><Clock className="w-4 h-4" /></div><span>Baked fresh to order</span></div>
            <div className="flex items-center gap-2.5"><div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800"><MapPin className="w-4 h-4" /></div><span>Convenient porch pickup</span></div>
            <div className="flex items-center gap-2.5"><div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-orange-800"><Heart className="w-4 h-4 fill-orange-700" /></div><span>Handmade by one baker</span></div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-[#FAF4ED] group">
            <img src="/src/assets/images/hero_home_cake_pops_1794090815794.jpg" alt="Melinda's handmade cake pops in a bakery box" className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-102 transition-transform duration-500" loading="eager" />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-xs font-semibold text-stone-800 flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-amber-600" />Made by hand in small batches</div>
            <div className="absolute bottom-4 left-4 right-4 bg-stone-900/80 backdrop-blur-md text-stone-100 p-3.5 rounded-2xl text-xs flex items-center justify-between border border-white/20">
              <div><div className="font-semibold text-white">Fresh handmade cake pops</div><div className="text-stone-300 text-[11px]">A sweet treat for any occasion</div></div>
              <div className="text-amber-300"><Heart className="w-5 h-5 fill-current" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
