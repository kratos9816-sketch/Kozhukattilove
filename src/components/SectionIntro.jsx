import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function SectionIntro() {
  const scrollToFirstSection = () => {
    const elem = document.querySelector('#the-way-i-see-you');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="note" className="w-full bg-[#F6F3EE] text-[#080808] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Subtle luxury editorial watermark */}
      <div className="absolute right-6 -bottom-10 pointer-events-none select-none text-[120px] sm:text-[180px] font-serif font-black text-black/[0.03] leading-none">
        A♡K
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 border-b border-neutral-300 pb-2">
          <Heart size={14} className="text-[#4B101D] fill-[#4B101D]" />
          <span className="text-xs uppercase tracking-luxury-widest font-mono text-[#4B101D] font-semibold">
            A LITTLE NOTE FOR MY GIRL
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#080808] leading-tight">
          {SITE_CONFIG.herShortName}, this is how I see you.
        </h2>

        <p className="text-base sm:text-xl font-serif text-neutral-700 leading-relaxed max-w-3xl">
          “Baby, I don't always know how to fit everything I feel into a message. Sometimes there is so much in my heart that a simple sentence feels too small. So I wanted to create something you could explore, something that holds a little piece of the way I see you, the way I dream about us, and the way you have become such a meaningful part of my life.”
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <button
            onClick={scrollToFirstSection}
            className="inline-flex items-center space-x-3 text-xs uppercase tracking-luxury-wide font-sans font-semibold text-white bg-[#080808] hover:bg-[#4B101D] px-8 py-4 transition-colors duration-200 shadow-md group"
          >
            <span>DISCOVER YOUR UNIVERSE</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <span className="text-xs font-mono text-neutral-500 self-center tracking-wider">
            Chapter 01 of our journey
          </span>
        </div>
      </div>
    </section>
  );
}
