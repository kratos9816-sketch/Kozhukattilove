import React, { useState } from 'react';
import { Heart, Mail, Sparkles, Feather } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { SECTION_PHOTOS } from '../data/romanticPhotos';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const photo = SECTION_PHOTOS.loveLetter;

  return (
    <section
      id="love-letter"
      className="w-full bg-[#4B101D] text-white py-28 sm:py-36 px-6 sm:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Background ambient texture / subtle photo overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src={`/photos/${encodeURIComponent(photo.background)}`}
          alt="Atmospheric texture"
          className="w-full h-full object-cover object-center filter grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#4B101D]/90" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
        
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-luxury-widest text-[#D6B77A]">
            <Sparkles size={14} />
            <span>THE CLIMAX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-tight text-white leading-none">
            ONE LAST THING, MY LOVE…
          </h2>

          <div className="w-16 h-[2px] bg-[#D6B77A] mx-auto" />
        </div>

        {/* Envelope Teaser (Before opening) */}
        {!isOpen ? (
          <div className="bg-[#380b15] border border-[#681728] p-8 sm:p-14 max-w-xl mx-auto shadow-2xl space-y-6 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#4B101D] border border-[#D6B77A] flex items-center justify-center text-[#D6B77A]">
              <Mail size={28} />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-luxury-wide text-[#C98791] block">
                CONFIDENTIAL & TENDER
              </span>
              <p className="text-lg sm:text-xl font-serif italic text-neutral-200">
                To {SITE_CONFIG.herName},<br />from your {SITE_CONFIG.hisName}.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-md mx-auto leading-relaxed">
              Words written not for the world to evaluate, but for your heart to rest in.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-luxury-wide font-sans font-semibold text-black bg-white hover:bg-neutral-200 px-8 py-4 transition-all duration-200 shadow-xl group"
              >
                <Heart size={14} className="text-[#4B101D] fill-[#4B101D] group-hover:scale-110 transition-transform" />
                <span>OPEN MY HEART →</span>
              </button>
            </div>
          </div>
        ) : (
          /* The Letter Unfolded */
          <div className="bg-[#FAF8F5] text-neutral-900 border-4 border-[#380b15] shadow-2xl p-8 sm:p-16 max-w-3xl mx-auto text-left space-y-8 animate-fadeIn relative">
            
            {/* Top Seal */}
            <div className="flex items-center justify-between border-b border-neutral-300 pb-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
              <span>FOR KIRITHIKHA</span>
              <div className="flex items-center space-x-1 text-[#4B101D]">
                <Feather size={14} />
                <span>FROM AGHIL</span>
              </div>
            </div>

            {/* Salutation */}
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black tracking-tight">
              My dearest Kirithikha,
            </h3>

            {/* Letter Body */}
            <div className="space-y-5 text-sm sm:text-base font-serif text-neutral-800 leading-relaxed">
              <p>
                If you have reached this part of the website, I hope you have felt even a tiny part of what I have been trying to tell you.
              </p>
              <p>
                I made this little universe because sometimes a simple ‘I love you’ feels too small for everything I want to express.
              </p>
              <p>
                I want you to know how I see you, how deeply I admire you, how ridiculously happy the thought of you can make me, and how beautiful the idea of sharing a future with you feels to me.
              </p>
              <p className="text-base sm:text-lg font-medium text-black border-l-2 border-[#4B101D] pl-4 py-1 italic bg-neutral-100/60">
                You are not just a girl I happen to love.
              </p>
              <p>
                You are someone I want to keep discovering. Someone whose thoughts I want to understand. Someone whose dreams I want to hear about. Someone whose happiness I want to celebrate, whose worries I want to listen to, and whose heart I want to treat with care.
              </p>
              <p>
                I know I am not perfect. I have things to learn, ways to grow, and moments when I might not express myself as well as I wish I could.
              </p>
              <p>
                But I want my love to keep becoming more patient, more thoughtful, more understanding, and more real.
              </p>
              <p>
                I don't want you to stay with me because you are afraid of losing me, because you feel guilty, or because you think you owe me something.
              </p>
              <p className="font-semibold text-black">
                I want you to be with me because your heart genuinely wants to be here. Because we bring happiness into each other's lives. Because we respect each other, trust each other, and continue choosing the relationship we are building together.
              </p>
              <p>
                Baby, I dream of being the person you can laugh with, dream with, grow with, and come home to emotionally.
              </p>
              <p>
                And if we are fortunate enough to grow old together, I hope there will be a day when we look at our younger selves and laugh at how much we worried about everything.
              </p>
              <p>
                I hope I will still look at you with admiration.
              </p>
              <p>
                I hope you will still find reasons to smile at me.
              </p>
              <p>
                And I hope we will have a thousand ordinary little memories that turn out to be the most extraordinary parts of our lives.
              </p>
              <p className="italic text-neutral-900 font-medium">
                You are my angel in the way I see you, my favourite person in the way I think of you, and the girl who has given so many of my dreams a face and a smile.
              </p>
              <p>
                Happy little universe, my love.
              </p>
              <p>
                Whatever tomorrow brings, I am grateful that our paths crossed, and I hope we keep writing this story together.
              </p>
            </div>

            {/* Sign-off */}
            <div className="pt-8 border-t border-neutral-300 space-y-1 text-right">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                With all the love my words can hold,
              </p>
              <p className="text-xl sm:text-2xl font-serif font-bold text-black">
                Your Aghil Vikhraman,
              </p>
              <p className="text-base sm:text-lg font-serif italic text-[#4B101D]">
                Your Kozhukattai. ♡
              </p>
            </div>

            {/* Fold back button */}
            <div className="pt-4 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-black transition-colors"
              >
                [ Fold letter back into envelope ]
              </button>
            </div>

          </div>
        )}

        {/* Footer line below letter */}
        <div className="pt-8">
          <p className="text-xs sm:text-sm font-serif italic text-neutral-300 tracking-wide">
            “Made with a heart that keeps finding its way back to you.”
          </p>
        </div>

      </div>
    </section>
  );
}
