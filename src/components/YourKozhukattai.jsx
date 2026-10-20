import React, { useState } from 'react';
import { Heart, X, Sparkles, Smile } from 'lucide-react';
import { SECTION_PHOTOS } from '../data/romanticPhotos';
import { SITE_CONFIG } from '../data/config';

export default function YourKozhukattai() {
  const [isHugOpen, setIsHugOpen] = useState(false);
  const { primary, secondary } = SECTION_PHOTOS.yourKozhukattai;

  return (
    <section id="your-kozhukattai" className="w-full bg-[#F6F3EE] text-[#080808] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-b border-neutral-300 relative overflow-hidden">
      
      {/* Playful background decorative letters */}
      <div className="absolute left-4 top-10 pointer-events-none select-none text-[80px] sm:text-[140px] font-serif font-black text-black/[0.03] leading-none">
        KOZHUKATTAI
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-luxury-widest uppercase text-[#4B101D] font-bold">
            <Smile size={14} className="text-[#C98791]" />
            <span>05 — YOUR BOY, YOUR BABY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-tight text-[#080808] leading-tight">
            YOUR KOZHUKATTAI, FOREVER YOUR IDIOT
          </h2>

          <p className="text-base sm:text-lg font-serif italic text-neutral-600">
            Ambitions to conquer the world, but with you, I'm just your boy.
          </p>
        </div>

        {/* Narrative & Photos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos side */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative group overflow-hidden bg-white border border-neutral-300 shadow-xl">
              <img
                src={`/photos/${encodeURIComponent(primary)}`}
                alt="Kirithikha & Kozhukattai - Playful moments"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="p-4 bg-white border-t border-neutral-200">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
                  CANDID COMFORT
                </span>
                <p className="text-xs font-serif italic text-neutral-700 mt-1">
                  When I'm with you, I can just be your little Kozhukattai.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative text side */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base font-serif text-neutral-800 leading-relaxed">
            <p className="text-lg font-medium text-black">
              Baby, you know the funny thing?
            </p>
            <p>
              The world might see me as {SITE_CONFIG.hisName}, a boy with ambitions, plans, responsibilities, and a thousand things to figure out.
            </p>
            <p className="text-base sm:text-lg text-[#4B101D] italic font-medium bg-white/70 p-4 border-l-2 border-[#4B101D]">
              But when I am with you, sometimes all I want is to forget about being serious for a while and become your little Kozhukattai.
            </p>
            <p>
              I want to be silly with you. I want to make you laugh over the dumbest things. I want to tell you stories that make no sense, tease you until you smile, and share those little moments that nobody else would understand.
            </p>
            <p>
              I love the idea of being the person around whom you can be completely yourself, too.
            </p>
            <p>
              Because the love I dream of is not just about looking perfect together. It is about feeling comfortable enough to be imperfect together.
            </p>
            <p>
              I can be ambitious and strong out in the world, chase my dreams, and work towards my goals. And with you, I also want the freedom to be playful, vulnerable, and affectionate.
            </p>
            <p>
              I hope we can keep building that kind of comfort with each other, where we can be honest, childish, serious, and completely ourselves while always treating each other with kindness.
            </p>

            {/* Hug Action Button */}
            <div className="pt-4">
              <button
                onClick={() => setIsHugOpen(true)}
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-luxury-wide font-sans font-semibold text-white bg-[#4B101D] hover:bg-[#681728] px-8 py-4 transition-colors duration-200 shadow-lg group"
              >
                <Heart size={15} className="text-[#C98791] fill-[#C98791] group-hover:scale-110 transition-transform" />
                <span>OPEN A HUG FROM YOUR KOZHUKATTAI →</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Hug Modal */}
      {isHugOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-lg bg-[#FAF8F5] text-neutral-900 border-2 border-[#4B101D] shadow-2xl p-8 sm:p-10 text-center space-y-6"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setIsHugOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black p-1 focus:outline-none"
              aria-label="Close hug"
            >
              <X size={20} />
            </button>

            {/* Animated Warm Heart / Hug Visual */}
            <div className="mx-auto w-20 h-20 rounded-full bg-[#F4E8EB] border-2 border-[#C98791] flex items-center justify-center relative animate-pulse">
              <Heart size={36} className="text-[#4B101D] fill-[#4B101D]" />
              <Sparkles size={18} className="absolute -top-1 -right-1 text-[#D6B77A]" />
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-luxury-widest text-[#4B101D] font-bold block">
                WARM TENDER EMBRACE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
                A Hug From Kozhukattai
              </h3>
            </div>

            <p className="text-base sm:text-lg font-serif italic text-neutral-800 leading-relaxed bg-white p-6 border border-neutral-200 shadow-inner">
              “Come here, baby. Imagine the warmest hug from your Kozhukattai. No big speeches, no pressure, just a little reminder that you deserve tenderness, comfort, and love. ♡”
            </p>

            <div>
              <button
                onClick={() => setIsHugOpen(false)}
                className="w-full text-xs uppercase tracking-luxury-wide font-sans font-semibold text-white bg-[#080808] hover:bg-[#4B101D] py-3.5 transition-colors"
              >
                KEEP THIS WARMTH CLOSE ♡
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
