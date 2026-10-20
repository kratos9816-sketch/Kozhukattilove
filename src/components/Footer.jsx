import React from 'react';
import { ArrowUp, Heart, Lock } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Footer({ onLock }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080808] text-white border-t border-[#222222] py-16 px-6 sm:px-12 lg:px-20 select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-[#1c1c1c] pb-12">
          
          {/* Brand & Monogram */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-none border border-neutral-700 bg-neutral-900 flex items-center justify-center font-serif font-bold text-sm tracking-tight text-white shadow-lg">
              <span>A</span>
              <span className="text-xs text-[#C98791] mx-[1px]">♡</span>
              <span>K</span>
            </div>
            <div>
              <span className="text-sm font-serif font-bold uppercase tracking-widest text-white block">
                {SITE_CONFIG.siteTitle}
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                One girl. One boy. One little universe.
              </span>
            </div>
          </div>

          {/* Quick Section Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-[11px] font-mono uppercase tracking-luxury-wide text-neutral-400">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-luxury-wide text-neutral-300 hover:text-white bg-[#141414] hover:bg-neutral-800 border border-neutral-700 px-5 py-3 transition-colors rounded-none focus:outline-none focus:ring-1 focus:ring-white"
            >
              <span>BACK TO THE BEGINNING</span>
              <ArrowUp size={13} />
            </button>
          </div>

        </div>

        {/* Sub-footer Attribution & Dedication */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-500 text-center sm:text-left">
          <p className="flex items-center justify-center sm:justify-start gap-1.5 font-light">
            <span>Created with love by {SITE_CONFIG.hisName}, for {SITE_CONFIG.herName}.</span>
            <Heart size={12} className="text-[#C98791] fill-[#C98791] inline" />
          </p>

          <div className="flex items-center space-x-4">
            <span className="font-mono text-[11px] text-neutral-600">
              Kozhukattai's Love Universe • Always & Forever
            </span>
            {onLock && (
              <button
                onClick={onLock}
                className="flex items-center space-x-1 text-[10px] font-mono uppercase tracking-widest text-neutral-600 hover:text-neutral-300 transition-colors border border-neutral-800 hover:border-neutral-600 px-2 py-0.5"
                title="Lock website"
              >
                <Lock size={10} />
                <span>Lock</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
