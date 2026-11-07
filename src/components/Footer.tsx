import React from 'react';
import { Heart, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#422D24] text-[#FDF8F3] pt-16 pb-12 border-t border-amber-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-amber-900/40 text-left">
          
          {/* Brand & Melinda Note */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="font-serif-bakery text-2xl font-bold tracking-tight text-white">
                {BAKERY_INFO.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              Handcrafted cake pops and sweet celebration treats made fresh from scratch in Melinda's home kitchen. We love baking for your family milestones!
            </p>

            <div className="text-xs text-amber-200/90 flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Baked, dipped, and packaged 100% by Melinda.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-bakery font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('flavors')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Flavor Menu (8 Flavors)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-melinda')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Meet Melinda (Solo Baker)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('box-builder')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Mix & Match Box Builder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Porch Pickup Details
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom-order')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Custom Party Themes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-bakery font-bold text-sm text-white uppercase tracking-wider">
              Pickup & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BAKERY_INFO.neighborhood}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BAKERY_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BAKERY_INFO.phone}`} className="hover:text-white transition-colors">
                  {BAKERY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BAKERY_INFO.email}`} className="hover:text-white transition-colors">
                  {BAKERY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Cottage Food Disclosure & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 text-center md:text-left">
          <div className="flex items-center gap-2 max-w-xl">
            <ShieldCheck className="w-4 h-4 text-amber-400/80 shrink-0" />
            <span>
              <strong>Cottage Food Operation:</strong> This food is made in a home kitchen and is not inspected by the Department of State Health Services or local health authority.
            </span>
          </div>

          <div>
            © {new Date().getFullYear()} {BAKERY_INFO.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
