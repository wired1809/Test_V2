import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-amber-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3 border border-amber-200">
            <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-serif-bakery text-3xl sm:text-4xl font-bold text-[#382923]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm">
            Everything you need to know about ordering from a small home bakery.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 text-left">
          {BAKERY_INFO.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-amber-900/10 bg-[#FAF6F0]/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-serif-bakery font-bold text-sm sm:text-base text-[#382923] hover:text-amber-900 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className="w-7 h-7 rounded-full bg-white border border-amber-200/80 flex items-center justify-center text-amber-900 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-amber-900/5 bg-white/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-10 text-center text-xs text-stone-600 bg-amber-50 p-4 rounded-2xl border border-amber-200/60">
          Have a question not listed here? Text or call Melinda directly at{' '}
          <a href={`tel:${BAKERY_INFO.phone}`} className="font-bold text-amber-900 underline">
            {BAKERY_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
