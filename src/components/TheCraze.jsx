import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SECTION_PHOTOS } from '../data/romanticPhotos';

export default function TheCraze() {
  const { background, strip } = SECTION_PHOTOS.myCraze;

  const scrollToLove = () => {
    const elem = document.querySelector('#my-love');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="my-craze" className="w-full bg-[#080808] text-white py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-b border-[#222222] relative overflow-hidden">
      {/* Subtle background photo overlay with heavy luxury vignette */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src={`/photos/${encodeURIComponent(background)}`}
          alt="Aesthetic background"
          className="w-full h-full object-cover object-center filter grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-4">
          <span className="text-xs font-mono tracking-luxury-widest uppercase text-[#C98791] font-semibold">
            02 — THE DREAM I NEVER KNEW HOW TO EXPLAIN
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-tight text-white leading-none">
            YOU ARE THE GIRL I DREAMED OF
          </h2>
          <div className="w-16 h-[2px] bg-[#C98791]" />
        </div>

        {/* Narrative Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-sm sm:text-base font-serif text-neutral-300 leading-relaxed">
          <div className="space-y-4">
            <p>
              Baby, sometimes I wonder how you managed to become so much of everything I ever imagined.
            </p>
            <p>
              Since I was little, I used to dream about the girl I would love one day. The woman I would call my wife. The person I would care for, make laugh on difficult days, annoy with my childishness, and hold close when the world felt too heavy.
            </p>
            <p>
              I imagined a smile that could make my day better. Someone whose dreams I would want to support, whose happiness would genuinely matter to me, and whose hand I would still want to hold when we were old.
            </p>
            <p>
              I imagined coming home to my favourite person. Making silly memories. Going on little dates. Sharing our smallest thoughts. Having deep conversations at midnight. Celebrating each other's victories. Building a home that felt safe, warm, and full of love.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white font-medium text-base sm:text-lg">
              And then there is you. The girl who makes those old dreams feel real.
            </p>
            <p>
              I don't just dream about having you beside me today. I dream about knowing you through every season of life. About growing together, learning each other, choosing each other, and building something beautiful with patience and loyalty.
            </p>
            <p className="border-l border-[#C98791] pl-4 italic text-neutral-200">
              And yes, baby, a part of me gets ridiculously excited imagining you looking at me and saying, <span className="text-white font-semibold">‘I only want you, my love.’</span>
            </p>
            <p>
              Not because I want to be your entire world or take you away from everyone else, but because being loved by you, freely and genuinely, would mean more to me than I could explain.
            </p>
            <p className="text-white font-semibold">
              You are the girl I dreamed of before I knew how to describe her. And now that I know you, my dreams have your smile.
            </p>
          </div>
        </div>

        {/* Horizontal Photo Strip of 3 Photographs */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 uppercase tracking-luxury-wide">
            <span>EDITORIAL VISUALS</span>
            <span>THREE PERSPECTIVES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {strip.map((item, idx) => (
              <div
                key={item.filename}
                className="group relative overflow-hidden bg-[#141414] border border-[#222222] h-72 sm:h-80"
              >
                <img
                  src={`/photos/${encodeURIComponent(item.filename)}`}
                  alt={item.caption}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] font-mono text-[#D6B77A] uppercase tracking-widest block mb-1">
                    FRAME 0{idx + 1}
                  </span>
                  <p className="text-xs font-serif italic text-neutral-200 leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Section Button */}
        <div className="pt-6 text-center sm:text-left">
          <button
            onClick={scrollToLove}
            className="inline-flex items-center space-x-3 text-xs uppercase tracking-luxury-wide font-sans font-semibold text-black bg-white hover:bg-neutral-200 px-8 py-4 transition-colors duration-200 shadow-md group"
          >
            <span>A LITTLE MORE ABOUT MY LOVE</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
