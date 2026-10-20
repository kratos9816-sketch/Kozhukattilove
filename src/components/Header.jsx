import React, { useState, useEffect } from 'react';
import { Search, Heart, Menu } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import SectionSearch from './SectionSearch';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToLoveLetter = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#love-letter');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200 py-3'
            : 'bg-white border-b border-neutral-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Original Minimalist Monogram Logo */}
          <a
            href="#hero"
            className="flex items-center space-x-2.5 text-black group focus:outline-none focus:ring-1 focus:ring-black"
            aria-label="Home - Only You, Always You"
          >
            {/* Minimalist Heart Monogram */}
            <div className="w-8 h-8 rounded-none border border-black flex items-center justify-center bg-black text-white group-hover:bg-white group-hover:text-black transition-colors duration-200">
              <span className="font-serif font-bold text-xs tracking-tight">A</span>
              <span className="text-[10px] text-[#C98791] leading-none mx-[1px]">♡</span>
              <span className="font-serif font-bold text-xs tracking-tight">K</span>
            </div>
            <span className="font-serif font-bold text-base sm:text-lg tracking-wider hidden sm:inline-block">
              ONLY YOU
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-luxury-wide font-medium text-neutral-800 hover:text-black relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-black hover:after:w-full after:transition-all after:duration-200 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions (Search, Heart, Hamburger) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-neutral-800 hover:text-black hover:bg-neutral-100 transition-colors rounded-none focus:outline-none focus:ring-1 focus:ring-black"
              aria-label="Search sections"
              title="Search chapters (Ctrl+K)"
            >
              <Search size={18} strokeWidth={1.8} />
            </button>

            {/* Heart Icon (Scrolls to Love Letter) */}
            <button
              onClick={scrollToLoveLetter}
              className="p-2 text-neutral-800 hover:text-[#4B101D] hover:bg-neutral-100 transition-colors rounded-none focus:outline-none focus:ring-1 focus:ring-black relative group"
              aria-label="Read Love Letter"
              title="Read Love Letter"
            >
              <Heart
                size={18}
                strokeWidth={1.8}
                className="group-hover:fill-[#4B101D] transition-colors"
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#C98791] rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#4B101D] rounded-full" />
            </button>

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-neutral-800 hover:text-black hover:bg-neutral-100 transition-colors rounded-none focus:outline-none focus:ring-1 focus:ring-black"
              aria-label="Open Navigation Menu"
            >
              <Menu size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlays */}
      <SectionSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
