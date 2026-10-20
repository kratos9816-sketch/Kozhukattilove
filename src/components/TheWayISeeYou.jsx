import React from 'react';
import { SECTION_PHOTOS } from '../data/romanticPhotos';
import { SITE_CONFIG } from '../data/config';

export default function TheWayISeeYou() {
  const photo = SECTION_PHOTOS.theWayISeeYou;

  return (
    <section id="the-way-i-see-you" className="w-full bg-[#FFFFFF] text-[#080808] py-20 lg:py-32 px-6 sm:px-12 lg:px-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group overflow-hidden bg-neutral-100 shadow-xl border border-neutral-200">
              <img
                src={`/photos/${encodeURIComponent(photo.primary)}`}
                alt="Kirithikha - The Way I See You"
                className="w-full h-[550px] sm:h-[650px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="p-4 bg-white border-t border-neutral-200 flex justify-between items-center text-xs font-mono text-neutral-500">
                <span className="uppercase tracking-wider">Fig. 01 — My Angel</span>
                <span className="italic font-serif text-neutral-700">{photo.caption}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Block */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-luxury-widest uppercase text-[#4B101D] font-bold">
                01 — MY ANGEL
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-tight text-[#080808] leading-none">
                THE WAY I SEE YOU
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-neutral-600 pt-1">
                To the world, you may be one person. To me, you are an entire heaven.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base font-serif text-neutral-700 leading-relaxed max-w-2xl">
              <p>
                My beautiful {SITE_CONFIG.herShortName},
              </p>
              <p>
                No matter what the world says or how anyone else sees you, there is something my heart will always hold close: the way I see you.
              </p>
              <p>
                To me, you are an angel. Not because you have to be perfect or because you will never make mistakes, but because there is something about you that reaches the softest part of my heart.
              </p>
              <p>
                Sometimes I look at you and wonder how one person can carry so much beauty, warmth, and magic in a single existence.
              </p>
              <p>
                You are the girl my eyes search for without being told. The smile my heart remembers even when you are not around. The person whose smallest gestures can stay in my mind for hours.
              </p>
              <p className="border-l-2 border-[#4B101D] pl-4 italic text-neutral-800 my-4 bg-neutral-50 py-2">
                I was born on 22 June 2006, and you were born on 21 April 2006. I love imagining that before I knew your name, the girl my heart would one day call its soulmate was already somewhere in this world.
              </p>
              <p>
                Maybe the universe knew something I didn't.
              </p>
              <p>
                Maybe my heart was always going to recognize you in its own way.
              </p>
              <p>
                And if someone asks me what an angel looks like, I won't need to search the sky.
              </p>
              <p className="font-semibold text-black">
                I'll think of you.
              </p>
            </div>

            {/* Editorial Highlight Quote Card */}
            <div className="pt-4">
              <div className="p-6 bg-[#F6F3EE] border border-neutral-300 relative">
                <div className="w-6 h-[2px] bg-[#4B101D] mb-3" />
                <p className="text-base sm:text-lg font-serif italic text-neutral-900 leading-snug">
                  “You don't have to be heaven to everyone, baby. You will always have a heaven-shaped place in my heart.”
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
