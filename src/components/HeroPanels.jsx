import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_PHOTOS } from '../data/romanticPhotos';
import { SITE_CONFIG } from '../data/config';

export default function HeroPanels() {
  const { left, center, right } = HERO_PHOTOS;

  const scrollTo = (target) => {
    const elem = document.querySelector(target);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full bg-[#080808] text-white">
      {/* Three Panel Grid: Edge to edge on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 min-h-[85vh] lg:h-[88vh] w-full">
        
        {/* LEFT PANEL */}
        <div className="relative group lg:col-span-3 h-[60vh] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-neutral-900 flex flex-col justify-end p-6 sm:p-8">
          <div className="absolute inset-0 z-0">
            <img
              src={`/photos/${encodeURIComponent(left.filename)}`}
              alt="Kirithikha - My Angel"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          </div>

          <div className="relative z-10 space-y-3">
            <span className="inline-block text-[10px] tracking-luxury-widest uppercase font-mono text-neutral-300 bg-black/40 backdrop-blur-sm px-2.5 py-1 border border-neutral-700/60">
              {left.label}
            </span>
            <p className="text-sm sm:text-base font-serif italic text-neutral-200 leading-snug">
              {left.supporting}
            </p>
            <div>
              <button
                onClick={() => scrollTo(left.target)}
                className="inline-flex items-center space-x-2 text-[11px] font-sans uppercase tracking-luxury-wide text-white bg-black/70 hover:bg-white hover:text-black border border-white/80 px-4 py-2.5 transition-all duration-200 group/btn"
              >
                <span>{left.buttonText}</span>
              </button>
            </div>
          </div>
        </div>

        {/* CENTER PANEL (Visual emphasis) */}
        <div className="relative group lg:col-span-6 h-[70vh] md:h-full overflow-hidden border-b md:border-b-0 lg:border-r border-neutral-900 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 z-0">
            <img
              src={`/photos/${encodeURIComponent(center.filename)}`}
              alt="Kirithikha Aghil Vikhraman - Only You. Always You."
              className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Luxury Editorial Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30" />
          </div>

          <div className="relative z-10 space-y-4 max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-[1px] bg-[#C98791]" />
              <span className="text-[11px] tracking-luxury-widest uppercase font-mono text-[#D6B77A]">
                {center.label}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold uppercase tracking-wider text-white leading-tight">
              {center.heading}
            </h1>

            <p className="text-sm sm:text-lg text-neutral-300 font-serif italic tracking-wide">
              {center.supporting}
            </p>

            <div className="pt-2">
              <button
                onClick={() => scrollTo(center.target)}
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-luxury-wide font-sans font-semibold text-black bg-white hover:bg-neutral-200 px-6 py-3.5 transition-all duration-200 shadow-xl"
              >
                <span>{center.buttonText}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative group lg:col-span-3 h-[60vh] md:h-full overflow-hidden flex flex-col justify-end p-6 sm:p-8">
          <div className="absolute inset-0 z-0">
            <img
              src={`/photos/${encodeURIComponent(right.filename)}`}
              alt="Kirithikha - My Favourite Person"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          </div>

          <div className="relative z-10 space-y-3">
            <span className="inline-block text-[10px] tracking-luxury-widest uppercase font-mono text-neutral-300 bg-black/40 backdrop-blur-sm px-2.5 py-1 border border-neutral-700/60">
              {right.label}
            </span>
            <p className="text-sm sm:text-base font-serif italic text-neutral-200 leading-snug">
              {right.supporting}
            </p>
            <div>
              <button
                onClick={() => scrollTo(right.target)}
                className="inline-flex items-center space-x-2 text-[11px] font-sans uppercase tracking-luxury-wide text-white bg-black/70 hover:bg-white hover:text-black border border-white/80 px-4 py-2.5 transition-all duration-200 group/btn"
              >
                <span>{right.buttonText}</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Editorial Quote Ribbon */}
      <div className="bg-[#0e0e0e] border-y border-[#202020] py-8 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-base sm:text-xl lg:text-2xl font-serif text-neutral-200 tracking-wide leading-relaxed">
            “To the girl who made my entire universe feel like home.”
          </p>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans tracking-wide max-w-2xl mx-auto leading-relaxed">
            Somewhere between the day you entered this world and the day you entered my life, my heart found someone it never expected to love this deeply.
          </p>
        </div>
      </div>
    </section>
  );
}
