import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function AnnouncementBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#080808] border-b border-[#222222] text-white text-xs z-50 relative select-none">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="w-6 hidden md:block" />

        <div className="flex-1 flex items-center justify-center space-x-2 text-center">
          <span className="tracking-luxury-wide uppercase font-medium text-[11px] sm:text-xs text-neutral-200">
            {SITE_CONFIG.announcementText}
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 text-neutral-400 hover:text-white transition-colors duration-200 text-[11px] tracking-wider uppercase ml-2 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          aria-expanded={isOpen}
          aria-label="Toggle special note"
        >
          <span className="hidden sm:inline text-[10px]">Note</span>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {isOpen && (
        <div className="bg-[#141414] border-t border-[#262626] py-2 px-4 text-center text-[12px] text-neutral-300 animate-fadeIn">
          <p className="flex items-center justify-center gap-1.5 font-light tracking-wide">
            <Heart size={12} className="text-[#C98791] fill-[#C98791]" />
            {SITE_CONFIG.announcementSubtext}
          </p>
        </div>
      )}
    </div>
  );
}
