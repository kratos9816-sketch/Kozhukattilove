import React, { useEffect } from 'react';
import { X, Heart, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function HamburgerMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavClick = (href) => {
    onClose();
    const elem = document.querySelector(href);
    if (elem) {
      setTimeout(() => {
        elem.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#080808] text-white animate-fadeIn">
      {/* Top bar inside menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#222222]">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-xs font-serif font-bold text-neutral-200">
            {SITE_CONFIG.monogram}
          </div>
          <span className="text-xs uppercase tracking-luxury-widest text-neutral-400 font-medium">
            NAVIGATION
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-neutral-500 rounded-none focus:outline-none focus:ring-1 focus:ring-white"
          aria-label="Close navigation menu"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main navigation links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between max-w-2xl mx-auto w-full">
        <nav className="space-y-4 sm:space-y-6">
          {SITE_CONFIG.allSections.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => handleNavClick(sec.href)}
              className="group w-full flex items-center justify-between py-2.5 border-b border-[#181818] hover:border-neutral-600 transition-colors text-left focus:outline-none"
            >
              <div className="flex items-baseline space-x-4">
                <span className="font-mono text-xs text-[#C98791] w-6">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="block text-lg sm:text-2xl font-serif tracking-wide text-neutral-200 group-hover:text-white group-hover:translate-x-1 transition-all">
                    {sec.title}
                  </span>
                  <span className="block text-[11px] sm:text-xs text-neutral-500 tracking-luxury-wide uppercase font-sans mt-0.5">
                    {sec.subtitle}
                  </span>
                </div>
              </div>
              <ArrowRight
                size={18}
                className="text-neutral-600 group-hover:text-white transform group-hover:translate-x-2 transition-transform"
              />
            </button>
          ))}
        </nav>

        {/* Footer inside menu */}
        <div className="pt-8 mt-6 border-t border-[#1e1e1e] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center space-x-2">
            <Heart size={14} className="text-[#C98791] fill-[#C98791]" />
            <span>Dedicated to {SITE_CONFIG.herShortName}</span>
          </div>
          <span className="font-mono text-[11px] text-neutral-600">
            {SITE_CONFIG.relationshipDateDisplay}
          </span>
        </div>
      </div>
    </div>
  );
}
