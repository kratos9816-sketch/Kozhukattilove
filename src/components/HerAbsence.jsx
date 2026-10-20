import React from 'react';
import { SECTION_PHOTOS } from '../data/romanticPhotos';

export default function HerAbsence() {
  const photo = SECTION_PHOTOS.herAbsence;

  return (
    <section id="her-absence" className="w-full bg-[#121212] text-neutral-200 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-b border-[#222222] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Reflective Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-luxury-widest uppercase text-[#C98791] font-semibold">
              04 — EVEN WHEN YOU AREN'T AROUND
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold uppercase tracking-tight text-white leading-tight">
              EVEN MY THOUGHTS LOOK FOR YOU
            </h2>

            <div className="space-y-4 text-sm sm:text-base font-serif text-neutral-300 leading-relaxed max-w-2xl">
              <p className="text-base sm:text-lg text-neutral-100 font-medium">
                Baby, have you ever wondered how much space one person can occupy in another person's mind?
              </p>
              <p>
                Sometimes you haven't been around for even twenty minutes, and I already find myself wondering what you're doing, how your day is going, whether you've eaten, whether something made you smile, or whether something is bothering you.
              </p>
              <p>
                My heart starts feeling restless, and my thoughts quietly wander towards you before I even notice.
              </p>
              <p>
                It is as if my mind has developed its own little habit of searching for you.
              </p>
              <p>
                I hear something funny and want to tell you. I see something beautiful and wish you could see it too. Something happens in my day, and a part of me automatically thinks, <span className="text-white italic">‘I need to tell my girl about this.’</span>
              </p>
              <p>
                Your absence reminds me of how naturally you have become a part of my routine.
              </p>
              
              <div className="p-5 bg-[#1a1a1a] border-l-2 border-[#C98791] my-4 text-neutral-200 italic space-y-2">
                <p>
                  But baby, I also want you to have peaceful days, your own space, your own dreams, and moments when you can simply breathe and be yourself.
                </p>
                <p>
                  I may miss you terribly, but I want you to feel loved without feeling pressured to reply every moment.
                </p>
              </div>

              <p>
                I want us to miss each other with affection, talk honestly when something is wrong, and find our way back to each other through understanding.
              </p>
              <p>
                Because missing you is one thing. Making you feel guilty for needing space is something I never want love to become.
              </p>
              <p>
                I want to be the person you look forward to talking to, the person you trust with your thoughts, and the person whose presence makes your heart feel a little lighter.
              </p>

              <div className="pt-4">
                <p className="text-base sm:text-lg font-serif italic text-white font-medium">
                  “Even when we're not talking, baby, I hope you never have to question whether you matter to me.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mood Photograph */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
              <img
                src={`/photos/${encodeURIComponent(photo.primary)}`}
                alt="Kirithikha - Soft reflections"
                className="w-full h-[520px] sm:h-[620px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-xs font-mono uppercase tracking-luxury-wide text-neutral-300">
                  {photo.caption}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
