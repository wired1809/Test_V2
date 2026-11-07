import React, { useState } from 'react';
import { Heart, Sparkles, ChefHat, CheckCircle2, MessageSquareHeart, Edit3, Check } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';

export const AboutMelinda: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [headline, setHeadline] = useState(BAKERY_INFO.melindaStory.headline);
  const [subheadline, setSubheadline] = useState(BAKERY_INFO.melindaStory.subheadline);
  const [quote, setQuote] = useState(BAKERY_INFO.melindaStory.quote);
  const [paragraphs, setParagraphs] = useState<string[]>([...BAKERY_INFO.melindaStory.storyParagraphs]);

  const handleParagraphChange = (index: number, value: string) => {
    const updated = [...paragraphs];
    updated[index] = value;
    setParagraphs(updated);
  };

  return (
    <section id="about-melinda" className="py-16 md:py-24 bg-[#F5ECE1]/60 border-y border-amber-900/10 relative overflow-hidden">
      {/* Background soft styling */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/70 text-amber-900 text-xs font-semibold mb-3 border border-amber-300/50">
              <ChefHat className="w-3.5 h-3.5 text-amber-800" />
              <span>{BAKERY_INFO.melindaStory.badge}</span>
            </div>
            
            {isEditing ? (
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="w-full text-3xl sm:text-4xl font-serif-bakery font-bold text-[#382923] bg-white border border-amber-300 rounded-xl px-3 py-2"
              />
            ) : (
              <h2 className="font-serif-bakery text-3xl sm:text-4xl lg:text-5xl font-bold text-[#382923] tracking-tight">
                {headline}
              </h2>
            )}

            {isEditing ? (
              <textarea
                value={subheadline}
                onChange={(e) => setSubheadline(e.target.value)}
                rows={2}
                className="w-full mt-2 text-stone-700 bg-white border border-amber-300 rounded-xl p-2 text-sm"
              />
            ) : (
              <p className="mt-3 text-base sm:text-lg text-stone-700 max-w-2xl">
                {subheadline}
              </p>
            )}
          </div>

          {/* Quick Edit Helper for user */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white border border-amber-300/80 text-amber-900 hover:bg-amber-50 transition-colors shadow-xs cursor-pointer"
            >
              {isEditing ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Done Previewing</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5 text-amber-700" />
                  <span>Customize Story (Live Preview)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Portrait of Melinda in her home kitchen */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-amber-50">
                <img
                  src="/src/assets/images/melinda_baker_portrait_1794090830480.jpg"
                  alt="Melinda smiling in her home kitchen with a freshly dipped tray of cake pops"
                  className="w-full h-[460px] object-cover"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-amber-200/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-serif-bakery font-bold text-base text-[#382923]">Melinda</div>
                      <div className="text-xs text-amber-800 font-medium">Sole Baker, Founder & Decorator</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
                      <Heart className="w-4 h-4 fill-amber-700 text-amber-700" />
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] text-stone-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Every batch baked, rolled & dipped by Melinda</span>
                  </div>
                </div>
              </div>

              {/* Decorative stamp */}
              <div className="absolute -top-4 -right-4 bg-amber-800 text-amber-50 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md border-2 border-white rotate-6">
                100% Home Kitchen
              </div>
            </div>
          </div>

          {/* Right Column: Story & 4 Solo Touchpoints */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Story Paragraphs */}
            <div className="bg-white/90 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-amber-900/10 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <MessageSquareHeart className="w-4 h-4 text-amber-700" />
                <span>The Story of Melinda's Home Bakery</span>
              </div>

              {paragraphs.map((para, i) => (
                <div key={i}>
                  {isEditing ? (
                    <textarea
                      value={para}
                      onChange={(e) => handleParagraphChange(i, e.target.value)}
                      rows={3}
                      className="w-full text-stone-700 bg-amber-50/50 border border-amber-300 rounded-xl p-2.5 text-sm"
                    />
                  ) : (
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                      {para}
                    </p>
                  )}
                </div>
              ))}

              {/* Personal quote */}
              <div className="pt-2 border-t border-amber-900/10">
                {isEditing ? (
                  <input
                    type="text"
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    className="w-full text-xs italic text-amber-900 bg-amber-50/50 border border-amber-300 rounded-lg p-2"
                  />
                ) : (
                  <blockquote className="italic text-xs sm:text-sm text-amber-900 font-medium">
                    "{quote}"
                  </blockquote>
                )}
              </div>
            </div>

            {/* 4 Pillars of a Solo Home Operation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {BAKERY_INFO.melindaStory.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 p-4 rounded-2xl border border-amber-200/70 shadow-2xs hover:border-amber-400 transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-[#382923] text-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>{item.title}</span>
                  </div>
                  <p className="mt-1 text-xs text-stone-600 leading-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Note indicator for user */}
            <div className="text-[11px] text-stone-500 bg-amber-50/80 px-3.5 py-2 rounded-xl border border-amber-200/50 flex items-center justify-between">
              <span>💡 <strong>Tip for Melinda:</strong> You can edit this story directly in <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900 font-mono">src/data/bakeryInfo.ts</code> whenever you want to update your background or bio.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
