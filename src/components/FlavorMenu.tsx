import React, { useState } from 'react';
import { Sparkles, Plus, Info } from 'lucide-react';
import { FLAVORS } from '../data/flavors';
import { Flavor } from '../types';

interface FlavorMenuProps {
  onAddHalfDozen: (flavor: Flavor) => void;
  onAddDozen: (flavor: Flavor) => void;
  onSelectForCustomBox: (flavor: Flavor) => void;
}

export const FlavorMenu: React.FC<FlavorMenuProps> = ({ onAddHalfDozen, onAddDozen }) => {
  const [activeIngredientModal, setActiveIngredientModal] = useState<Flavor | null>(null);

  return (
    <section id="flavors" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3 border border-amber-200"><Sparkles className="w-3.5 h-3.5 text-amber-700" /><span>One homemade treat, made many ways</span></div>
        <h2 className="font-serif-bakery text-3xl sm:text-4xl lg:text-5xl font-bold text-[#382923] tracking-tight">Handmade Cake Pops</h2>
        <p className="mt-3 text-stone-600 text-sm sm:text-base">Cake pops are the one and only thing we make—baked from scratch, hand-dipped, and available in a range of favorite flavors.</p>
      </div>
      <div className="mb-10 bg-white rounded-3xl p-4 sm:p-6 border border-amber-900/10 shadow-sm flex flex-col md:flex-row items-center gap-6">
        <img src="/src/assets/images/flavor_closeups_1794090846791.jpg" alt="A selection of handmade cake pops" className="w-full md:w-64 h-48 md:h-40 rounded-2xl object-cover shrink-0" />
        <div className="text-left space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Baked fresh to order</span>
          <h3 className="font-serif-bakery text-xl font-bold text-[#382923]">Pick your pop, pick your pack</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">Every flavor is a handmade cake pop. Order a half-dozen or a dozen, made especially for you.</p>
          <div className="text-xs text-amber-900 font-semibold pt-1">Half-dozen from $18 · Dozen from $32</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FLAVORS.map((flavor) => (
          <article key={flavor.id} className="bg-white rounded-3xl p-5 border border-amber-900/10 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between text-left group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3"><span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${flavor.badgeColor}`}>{flavor.badge || 'Made Fresh'}</span><button onClick={() => setActiveIngredientModal(flavor)} title="View ingredients" className="text-stone-400 hover:text-amber-800 p-1 rounded-lg hover:bg-amber-50 transition-colors"><Info className="w-4 h-4" /></button></div>
              <h3 className="font-serif-bakery text-lg font-bold text-[#382923] group-hover:text-amber-900 transition-colors">{flavor.name}</h3>
              <p className="text-xs font-medium text-amber-800/90 mt-0.5">{flavor.tagline}</p>
              <p className="text-xs text-stone-600 mt-2.5 leading-relaxed line-clamp-3">{flavor.description}</p>
            </div>
            <div className="pt-5 mt-4 border-t border-stone-100 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-700 font-medium pb-1"><span>6 pops: <strong>${flavor.priceHalfDozen}</strong></span><span>12 pops: <strong>${flavor.priceDozen}</strong></span></div>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => onAddHalfDozen(flavor)} className="bg-[#FAF4ED] hover:bg-amber-100 text-[#4A3228] border border-amber-200/80 hover:border-amber-300 py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1"><Plus className="w-3 h-3 text-amber-700" />6-Pack</button>
                <button onClick={() => onAddDozen(flavor)} className="bg-[#C25E38] hover:bg-[#A94C29] text-white py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 shadow-xs transition-all"><Plus className="w-3 h-3" />Dozen</button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {activeIngredientModal && <div className="fixed inset-0 z-50 bg-stone-950/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-[#FFFDF9] max-w-md w-full rounded-3xl p-6 border border-amber-200 shadow-2xl space-y-4">
        <div className="flex items-start justify-between"><div><span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Ingredients</span><h3 className="font-serif-bakery text-xl font-bold text-[#382923] mt-1">{activeIngredientModal.name}</h3></div><button onClick={() => setActiveIngredientModal(null)} className="text-stone-400 hover:text-stone-700 text-lg font-bold p-1" aria-label="Close ingredients">✕</button></div>
        <p className="text-xs text-stone-600 leading-relaxed">{activeIngredientModal.description}</p><div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/60 text-xs space-y-1"><div className="font-bold text-[#382923]">Ingredients</div><div className="text-stone-700 leading-relaxed">{activeIngredientModal.ingredients}</div></div>
        <p className="text-[11px] text-stone-500">Prepared in a home kitchen that also handles wheat, dairy, eggs, and tree nuts.</p><button onClick={() => setActiveIngredientModal(null)} className="w-full bg-[#4A3228] text-white py-2.5 rounded-xl font-semibold text-xs">Close</button>
      </div></div>}
    </section>
  );
};
