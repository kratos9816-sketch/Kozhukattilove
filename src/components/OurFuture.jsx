import React from 'react';
import { Compass, Moon, Utensils, HeartHandshake, Sun, Home, Award, Calendar, Coffee, Users } from 'lucide-react';
import { ALL_PHOTOS_GALLERY } from '../data/romanticPhotos';

export default function OurFuture() {
  const photoOnlyGallery = ALL_PHOTOS_GALLERY.filter(item => item.type === 'image');

  const futureCards = [
    {
      num: "01",
      title: "Late-night conversations",
      desc: "Midnight phone calls, deep secrets, whispers about everything and nothing.",
      icon: Moon,
      photoSrc: photoOnlyGallery[0]?.src
    },
    {
      num: "02",
      title: "Little dates & silly adventures",
      desc: "Spontaneous tea stalls, random drives, sharing food, making ordinary streets extraordinary.",
      icon: Coffee,
      photoSrc: photoOnlyGallery[1]?.src
    },
    {
      num: "03",
      title: "Travelling to places we dream about",
      desc: "Exploring new cities together, holding your hand in airports, seeing mountains and oceans with you.",
      icon: Compass,
      photoSrc: photoOnlyGallery[2]?.src
    },
    {
      num: "04",
      title: "Supporting each other's careers & ambitions",
      desc: "Being your loudest cheerleader in your achievements, believing in you when work gets tough.",
      icon: Award,
      photoSrc: photoOnlyGallery[3]?.src
    },
    {
      num: "05",
      title: "Celebrating birthdays & anniversaries",
      desc: "Every 21st of April, every 22nd of June, every 10th of August, made into a cherished celebration.",
      icon: Calendar,
      photoSrc: photoOnlyGallery[4]?.src
    },
    {
      num: "06",
      title: "Cooking together & making a mess",
      desc: "Laughing over burnt toast, messy kitchens, stolen bites, and playful arguments over salt.",
      icon: Utensils,
      photoSrc: photoOnlyGallery[5]?.src
    },
    {
      num: "07",
      title: "Being there on difficult days",
      desc: "Never letting you face sadness alone. A shoulder to lean on, silence that feels safe, unconditional warmth.",
      icon: HeartHandshake,
      photoSrc: photoOnlyGallery[6]?.src
    },
    {
      num: "08",
      title: "Watching sunsets together",
      desc: "Golden hour skies, quiet breezes, leaning your head against my shoulder as the evening fades.",
      icon: Sun,
      photoSrc: photoOnlyGallery[7]?.src
    },
    {
      num: "09",
      title: "Building a peaceful home",
      desc: "A sanctuary where we leave the world outside. Warm lights, quiet mornings, soft blankets, and peace.",
      icon: Home,
      photoSrc: photoOnlyGallery[8]?.src
    },
    {
      num: "10",
      title: "Growing older, still choosing you",
      desc: "Learning new chapters of each other in every season of life, wrinkles with laughter, love that never fades.",
      icon: Users,
      photoSrc: photoOnlyGallery[9]?.src
    }
  ];

  return (
    <section id="our-future" className="w-full bg-[#080808] text-white py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-luxury-widest uppercase text-[#D6B77A] font-semibold">
            FOREVER & BEYOND
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-tight text-white leading-tight">
            THE LIFE I IMAGINE WITH YOU
          </h2>
          <p className="text-base sm:text-lg font-serif italic text-neutral-400">
            “I don't know every detail of what the future holds, baby. But I know the kind of love I hope we build together.”
          </p>
        </div>

        {/* 10 Future Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {futureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="group relative overflow-hidden bg-[#121212] border border-[#222222] hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between min-h-[260px] p-6"
              >
                {/* Background image */}
                {card.photoSrc && (
                  <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-40 transition-opacity">
                    <img
                      src={card.photoSrc}
                      alt={card.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
                  </div>
                )}

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#D6B77A]">
                      {card.num}
                    </span>
                    <Icon size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif font-medium text-lg text-white leading-snug">
                    {card.title}
                  </h3>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#222222]/80">
                  <p className="text-xs font-sans text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cinematic Promise Banner */}
        <div className="bg-[#141414] border border-[#262626] p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto space-y-6 text-center">
          <div className="w-8 h-[2px] bg-[#D6B77A] mx-auto" />
          
          <p className="text-base sm:text-xl font-serif text-neutral-200 leading-relaxed max-w-2xl mx-auto">
            “I dream of a future where we celebrate each other's wins, help each other through the hard days, laugh about our old memories, and continue finding new reasons to love the people we become.
          </p>

          <p className="text-sm sm:text-base font-serif italic text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            And if marriage becomes the beautiful chapter we both choose, I want to be the husband who never stops dating his wife, never stops appreciating her, and never assumes that being loved by her is something he is automatically entitled to.
          </p>

          <div className="pt-2 text-xs sm:text-sm font-sans uppercase tracking-luxury-wide text-[#D6B77A] font-semibold">
            I CANNOT PROMISE LIFE WILL ALWAYS BE EASY. BUT I CAN PROMISE A LOVE WE PRACTISE EVERY DAY.
          </div>
        </div>

      </div>
    </section>
  );
}
