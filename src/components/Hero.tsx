import React from 'react';
import { Heart, Sparkles, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';

interface HeroProps {
  onExploreFlavors: () => void;
  onMeetMelinda: () => void;
  onBuildBox: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreFlavors,
  onMeetMelinda,
  onBuildBox,
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Decorative warm ambient glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-orange-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Friendly badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              <span>Cottage Home Bakery • Baked Fresh in Melinda's Kitchen</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-bakery text-4xl sm:text-5xl lg:text-6xl font-bold text-[#382923] tracking-tight leading-[1.12]">
              Homemade cake pops, baked with love right from my house.
            </h1>

            {/* Approachable Subtitle */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal max-w-xl">
              No industrial factories, no bulk frozen warehouses. Just Melinda baking small batches from scratch with real creamery butter, pure vanilla, and hand-dipped chocolates for your birthdays, events, and family celebrations.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onExploreFlavors}
                className="bg-[#C25E38] hover:bg-[#A94C29] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Browse Fresh Flavors</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onBuildBox}
                className="bg-[#FFFDF9] hover:bg-amber-50 text-[#382923] border border-stone-300 hover:border-amber-400 px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Build a Sampler Box</span>
              </button>

              <button
                onClick={onMeetMelinda}
                className="text-stone-700 hover:text-amber-900 text-sm font-semibold underline underline-offset-4 px-2 py-2 cursor-pointer transition-colors"
              >
                Meet Melinda →
              </button>
            </div>

            {/* Trust Points / Home Kitchen Highlights */}
            <div className="pt-6 border-t border-amber-900/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-700 font-medium">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>48-Hour notice so it's baked fresh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Contactless Oakwood porch pickup</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-orange-800 shrink-0">
                  <Heart className="w-4 h-4 fill-orange-700 text-orange-700" />
                </div>
                <span>Crafted 100% by one home baker</span>
              </div>
            </div>

          </div>

          {/* Right Column: Rustic Kraft Box Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-[#FAF4ED] group">
                <img
                  src="/src/assets/images/hero_home_cake_pops_1794090815794.jpg"
                  alt="Melinda's homemade cake pops in a rustic kraft bakery box tied with baker's twine"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />

                {/* Overlaid Warm Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-xs font-semibold text-stone-800 flex items-center gap-1.5 border border-amber-100">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Handcrafted in small batches</span>
                </div>

                {/* Overlaid Bottom Note */}
                <div className="absolute bottom-4 left-4 right-4 bg-stone-900/80 backdrop-blur-md text-stone-100 p-3.5 rounded-2xl text-xs flex items-center justify-between border border-white/20">
                  <div>
                    <div className="font-semibold text-white">Classic Dozen Gift Box</div>
                    <div className="text-stone-300 text-[11px]">Tied with rustic twine & parchment label</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-amber-300 text-sm">$32</div>
                    <div className="text-[10px] text-stone-300">12 fresh pops</div>
                  </div>
                </div>
              </div>

              {/* Decorative floating note */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#FFFDF9] border border-amber-200/80 p-3.5 rounded-2xl shadow-xl max-w-[220px] text-left hidden sm:block">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {"★".repeat(5)}
                </div>
                <p className="text-[11px] text-stone-700 italic">
                  "Melinda made these for my son's 7th birthday. They were fresh, moist, and a giant hit with all the parents!"
                </p>
                <div className="text-[10px] font-bold text-stone-900 mt-1.5">— Jessica M., Neighborhood Mom</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
