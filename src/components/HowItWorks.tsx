import React from 'react';
import { Calendar, ChefHat, PackageCheck, Sparkles, MapPin, Clock } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F8F3EC]/70 border-t border-amber-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3 border border-amber-200">
            <PackageCheck className="w-3.5 h-3.5 text-amber-800" />
            <span>The Home Kitchen Process</span>
          </div>
          <h2 className="font-serif-bakery text-3xl sm:text-4xl font-bold text-[#382923] tracking-tight">
            How Ordering Works
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Everything is baked strictly to order so it reaches your family at peak freshness.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {BAKERY_INFO.howItWorks.map((step, idx) => {
            const icons = [
              <Calendar className="w-6 h-6 text-amber-800" />,
              <ChefHat className="w-6 h-6 text-amber-800" />,
              <PackageCheck className="w-6 h-6 text-amber-800" />,
            ];

            return (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-900/10 shadow-xs relative text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-bakery text-2xl font-bold text-amber-800/40">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-100/80 border border-amber-200/60 flex items-center justify-center">
                      {icons[idx]}
                    </div>
                  </div>

                  <h3 className="font-serif-bakery text-xl font-bold text-[#382923]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] font-semibold text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>
                    {idx === 0 && 'Simple 1-click cart or custom inquiry'}
                    {idx === 1 && 'Fresh eggs, real butter & rich chocolate'}
                    {idx === 2 && 'Weather-safe, labeled & contact-free'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Porch Pickup Station Details Callout */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-amber-300/70 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif-bakery font-bold text-lg text-[#382923]">
                Oakwood Neighborhood Porch Station
              </div>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                On pickup day, your box will be waiting in our insulated front-porch cabinet labeled with your name. Convenient, flexible pickup between 10:00 AM and 6:30 PM.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-stone-500">Need Delivery?</div>
              <div className="text-xs font-bold text-amber-900">Within 8 miles for $5</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
