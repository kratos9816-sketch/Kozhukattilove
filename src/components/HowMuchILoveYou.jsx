import React from 'react';
import { SECTION_PHOTOS } from '../data/romanticPhotos';

export default function HowMuchILoveYou() {
  const { primary, secondary } = SECTION_PHOTOS.myLove;

  return (
    <section id="my-love" className="w-full bg-[#FFFFFF] text-[#080808] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-luxury-widest uppercase text-[#4B101D] font-bold">
            03 — MORE THAN WORDS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-tight text-[#080808] leading-tight">
            THE UNIVERSE IS TOO SMALL A MEASUREMENT
          </h2>
          <p className="text-base sm:text-lg font-serif italic text-neutral-600">
            How much do I love you? More than I know how to explain.
          </p>
        </div>

        {/* Dynamic Editorial Layout: Left Story + Right Visual Diptych */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base font-serif text-neutral-700 leading-relaxed">
            <p className="text-lg sm:text-xl font-medium text-black">
              If someone asked me to measure my love for you, I wouldn't know where to begin.
            </p>
            <p>
              Would I count the times you cross my mind? The little moments I replay because they make me smile? The way I remember your voice, your expressions, your laughter, and the smallest things you probably don't even realize I notice?
            </p>
            <p>
              How could I count something that keeps finding new ways to grow?
            </p>
            
            {/* 86,400 Seconds Inset */}
            <div className="my-6 p-6 bg-[#FAF8F5] border-l-4 border-black space-y-2">
              <span className="font-mono text-2xl sm:text-3xl font-light text-black block tracking-tight">
                86,400 SECONDS
              </span>
              <p className="italic text-neutral-800">
                There are 86,400 seconds in a day. And in the middle of studying, working, laughing, resting, and doing all the ordinary things life asks of me, my heart still finds its way back to you.
              </p>
            </div>

            <p>
              Sometimes you appear in my thoughts without warning. Sometimes a random song reminds me of you. Sometimes I imagine telling you something before I even realize that you are the first person I wanted to share it with.
            </p>
            <p>
              You have become such a beautiful part of my everyday world.
            </p>
            <p>
              I love the girl you are today. I love learning the things that make you who you are. I love the possibility of discovering new things about you years from now.
            </p>
            <p>
              I don't want my love to be just big words or promises that sound beautiful.
            </p>
            <p className="font-medium text-black">
              I want it to be in the way I listen. The way I respect you. The way I show up. The way I apologize when I am wrong. The way I celebrate your happiness and support you when things are difficult.
            </p>
            <p>
              Baby, I don't know how many years the universe has planned for us.
            </p>
            <p>
              But if we keep choosing each other, I want to spend those years showing you that you are loved in ways that words alone could never finish explaining.
            </p>

            {/* Editorial Highlight Quote */}
            <div className="pt-6">
              <div className="bg-[#4B101D] text-white p-6 sm:p-8 shadow-lg">
                <span className="text-[10px] uppercase font-mono tracking-luxury-widest text-[#D6B77A] block mb-2">
                  A QUIET CERTAINTY
                </span>
                <p className="text-lg sm:text-2xl font-serif italic leading-relaxed">
                  “If forever had a face in my dreams, I think it would look a little like you.”
                </p>
              </div>
            </div>
          </div>

          {/* Photographic Column (Diptych) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group overflow-hidden border border-neutral-300 shadow-md bg-neutral-100">
              <img
                src={`/photos/${encodeURIComponent(primary)}`}
                alt="Kirithikha - Forever in my thoughts"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="p-3 bg-white text-[11px] font-mono text-neutral-500 uppercase tracking-wider flex justify-between border-t border-neutral-200">
                <span>PORTRAIT A</span>
                <span>EVERY SECOND</span>
              </div>
            </div>

            <div className="relative group overflow-hidden border border-neutral-300 shadow-md bg-neutral-100">
              <img
                src={`/photos/${encodeURIComponent(secondary)}`}
                alt="Kirithikha - The one I choose"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="p-3 bg-white text-[11px] font-mono text-neutral-500 uppercase tracking-wider flex justify-between border-t border-neutral-200">
                <span>PORTRAIT B</span>
                <span>IN REALITY</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
