import React, { useState } from 'react';
import { Box, Plus, Minus, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { FLAVORS } from '../data/flavors';
import { Flavor } from '../types';

interface CustomBoxBuilderProps {
  onAddCustomBox: (box: {
    sizeName: string;
    totalCount: number;
    price: number;
    items: { flavorId: string; name: string; count: number }[];
  }) => void;
  primedFlavor?: Flavor | null;
}

export const CustomBoxBuilder: React.FC<CustomBoxBuilderProps> = ({
  onAddCustomBox,
  primedFlavor,
}) => {
  const [boxSize, setBoxSize] = useState<6 | 12>(12);
  const [flavorCounts, setFlavorCounts] = useState<{ [id: string]: number }>({
    'confetti-birthday': 4,
    'chocolate-fudge': 4,
    'salted-caramel': 4,
  });

  const totalSelected = Object.values(flavorCounts).reduce((a, b) => a + b, 0);
  const boxPrice = boxSize === 6 ? 19 : 34;
  const remaining = boxSize - totalSelected;

  const handleAdjustCount = (flavorId: string, delta: number) => {
    const current = flavorCounts[flavorId] || 0;
    const next = current + delta;

    if (delta > 0 && totalSelected >= boxSize) {
      return; // Box is full
    }
    if (next < 0) return;

    setFlavorCounts((prev) => {
      const updated = { ...prev };
      if (next === 0) {
        delete updated[flavorId];
      } else {
        updated[flavorId] = next;
      }
      return updated;
    });
  };

  const handleSelectBoxSize = (size: 6 | 12) => {
    setBoxSize(size);
    // If current selections exceed new size, trim proportionally
    if (size === 6 && totalSelected > 6) {
      setFlavorCounts({
        'confetti-birthday': 2,
        'chocolate-fudge': 2,
        'salted-caramel': 2,
      });
    }
  };

  const handleAddToBag = () => {
    if (totalSelected !== boxSize) return;

    const summaryItems = Object.entries(flavorCounts).map(([fId, count]) => {
      const f = FLAVORS.find((flavor) => flavor.id === fId);
      return {
        flavorId: fId,
        name: f ? f.name : fId,
        count,
      };
    });

    onAddCustomBox({
      sizeName: boxSize === 6 ? '6-Pack Custom Sampler' : '12-Pack Custom Party Box',
      totalCount: boxSize,
      price: boxPrice,
      items: summaryItems,
    });
  };

  return (
    <section id="box-builder" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-amber-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3 border border-amber-200">
            <Box className="w-3.5 h-3.5 text-amber-800" />
            <span>Mix & Match Box Builder</span>
          </div>
          <h2 className="font-serif-bakery text-3xl sm:text-4xl font-bold text-[#382923] tracking-tight">
            Build Your Own Assorted Box
          </h2>
          <p className="mt-2 text-stone-600 text-sm">
            Can’t pick just one flavor? Mix and match your favorite homemade cake pops into a customized kraft gift box.
          </p>

          {/* Box Size Toggle */}
          <div className="mt-6 inline-flex p-1.5 rounded-2xl bg-amber-50 border border-amber-200">
            <button
              onClick={() => handleSelectBoxSize(6)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                boxSize === 6
                  ? 'bg-[#4A3228] text-white shadow-xs'
                  : 'text-stone-700 hover:text-amber-900'
              }`}
            >
              6-Pack Sampler Box ($19)
            </button>
            <button
              onClick={() => handleSelectBoxSize(12)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                boxSize === 12
                  ? 'bg-[#4A3228] text-white shadow-xs'
                  : 'text-stone-700 hover:text-amber-900'
              }`}
            >
              12-Pack Party Box ($34)
            </button>
          </div>
        </div>

        {/* Builder Status Bar */}
        <div className="bg-amber-50/80 rounded-2xl p-4 sm:p-5 border border-amber-200 max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-xs text-stone-600 font-medium">
              Box Progress: <strong className="text-[#382923]">{totalSelected} of {boxSize}</strong> pops picked
            </div>
            <div className="w-48 sm:w-64 h-2 bg-amber-200/70 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-[#C25E38] transition-all duration-300 rounded-full"
                style={{ width: `${Math.min(100, (totalSelected / boxSize) * 100)}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-stone-500">Box Total</div>
              <div className="text-xl font-bold font-serif-bakery text-[#382923]">${boxPrice}</div>
            </div>

            <button
              onClick={handleAddToBag}
              disabled={totalSelected !== boxSize}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                totalSelected === boxSize
                  ? 'bg-[#C25E38] hover:bg-[#A94C29] text-white shadow-md active:scale-95'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>
                {totalSelected === boxSize
                  ? 'Add Custom Box to Bag'
                  : `Add ${remaining} More to Finish`}
              </span>
            </button>
          </div>
        </div>

        {/* Flavors Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {FLAVORS.map((flavor) => {
            const count = flavorCounts[flavor.id] || 0;
            return (
              <div
                key={flavor.id}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  count > 0
                    ? 'bg-amber-50/60 border-amber-300 shadow-2xs'
                    : 'bg-white border-stone-200 hover:border-amber-200'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                    {flavor.badge || 'Homemade'}
                  </span>
                  {count > 0 && (
                    <span className="w-5 h-5 rounded-full bg-amber-700 text-white text-[11px] font-bold flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </div>

                <div className="font-serif-bakery font-bold text-sm text-[#382923] mt-1.5">
                  {flavor.name}
                </div>
                <div className="text-[11px] text-stone-600 line-clamp-1 mt-0.5">
                  {flavor.tagline}
                </div>

                {/* Counter controls */}
                <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-amber-900/10">
                  <span className="text-xs font-semibold text-stone-700">
                    {count} in box
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleAdjustCount(flavor.id, -1)}
                      disabled={count === 0}
                      className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-stone-700 cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleAdjustCount(flavor.id, 1)}
                      disabled={totalSelected >= boxSize}
                      className="w-7 h-7 rounded-lg bg-[#4A3228] hover:bg-[#38241C] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
