import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function SectionSearch({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
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

  const filteredSections = SITE_CONFIG.allSections.filter((section) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      section.title.toLowerCase().includes(q) ||
      section.subtitle.toLowerCase().includes(q) ||
      section.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  const handleSelect = (href) => {
    onClose();
    const elem = document.querySelector(href);
    if (elem) {
      setTimeout(() => {
        elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#121212] border border-[#2b2b2b] shadow-2xl text-white overflow-hidden rounded-none"
        role="dialog"
        aria-modal="true"
        aria-label="Section Search"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#262626]">
          <Search size={18} className="text-neutral-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters... (e.g. Angel, Craze, Love, Kozhukattai, Letter)"
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-neutral-500 hover:text-white mr-2 p-1"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white"
            aria-label="Close search"
          >
            <span className="text-[11px] uppercase tracking-wider font-mono px-1.5 py-0.5 border border-neutral-700 rounded-none hidden sm:inline">ESC</span>
            <span className="sm:hidden"><X size={18} /></span>
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#1e1e1e] p-2">
          {filteredSections.length > 0 ? (
            filteredSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleSelect(sec.href)}
                className="w-full text-left px-4 py-3 flex items-center justify-between group hover:bg-[#1a1a1a] transition-all duration-150 focus:outline-none focus:bg-[#1a1a1a]"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs uppercase tracking-luxury-wide text-[#C98791] font-medium">
                      {sec.subtitle}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-serif font-medium text-neutral-100 group-hover:text-white mt-0.5">
                    {sec.title}
                  </h4>
                </div>
                <div className="flex items-center text-neutral-500 group-hover:text-white transition-colors">
                  <span className="text-[11px] uppercase tracking-wider mr-2 hidden sm:inline text-neutral-400 group-hover:text-neutral-200">
                    Jump to section
                  </span>
                  <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))
          ) : (
            <div className="py-12 text-center text-neutral-400">
              <p className="text-sm font-light">No chapters found for "{query}"</p>
              <p className="text-xs text-neutral-600 mt-1">Try searching for "Angel", "Love", "Future", or "Kozhukattai"</p>
            </div>
          )}
        </div>

        {/* Modal Footer info */}
        <div className="px-4 py-2 bg-[#0c0c0c] border-t border-[#202020] flex items-center justify-between text-[11px] text-neutral-500 font-mono">
          <span>Navigate our little universe</span>
          <span className="flex items-center gap-1">
            Press <CornerDownLeft size={11} /> to jump
          </span>
        </div>
      </div>
    </div>
  );
}
