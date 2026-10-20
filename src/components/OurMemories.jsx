import React, { useState } from 'react';
import { ALL_PHOTOS_GALLERY } from '../data/romanticPhotos';
import PhotoLightbox from './PhotoLightbox';
import { Camera, Calendar, Sparkles, Heart } from 'lucide-react';

export default function OurMemories() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'ALL PHOTOS', count: ALL_PHOTOS_GALLERY.length },
    { id: 'favorite', label: 'FAVORITES', count: ALL_PHOTOS_GALLERY.filter(p => p.category === 'favorite').length },
    { id: 'portrait', label: 'PORTRAITS', count: ALL_PHOTOS_GALLERY.filter(p => p.category === 'portrait').length },
    { id: 'sweet', label: 'SWEET', count: ALL_PHOTOS_GALLERY.filter(p => p.category === 'sweet').length },
    { id: 'candid', label: 'CANDIDS', count: ALL_PHOTOS_GALLERY.filter(p => p.category === 'candid').length }
  ];

  const filteredPhotos = ALL_PHOTOS_GALLERY.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  // Timeline events
  const timelineEvents = [
    {
      date: "THE BEGINNING",
      title: "Our First Conversations",
      desc: "Before we had all the answers, two lives began sharing little pieces of their everyday world.",
      icon: Sparkles
    },
    {
      date: "AUGUST 10, 5:10 PM",
      title: "Our Relationship Began",
      desc: "A moment etched into my heart forever. The beginning of calling you my girl and choosing each other.",
      icon: Heart
    },
    {
      date: "EVERY LITTLE DATE",
      title: "A Favourite Memory",
      desc: "Midnight phone calls, shared secrets, quiet giggles, and knowing someone understands your soul.",
      icon: Calendar
    },
    {
      date: "SILLY COMFORT",
      title: "Moments That Made Us Laugh",
      desc: "Teasing you until you smile, your Kozhukattai being a total idiot, and the comfortable warmth between us.",
      icon: Camera
    },
    {
      date: "OUR FUTURE",
      title: "The Next Chapter",
      desc: "Every tomorrow waiting for us. Growing, dreaming, building a lifetime of memories together.",
      icon: Sparkles
    }
  ];

  return (
    <section id="our-memories" className="w-full bg-[#FFFFFF] text-[#080808] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-luxury-widest uppercase text-[#4B101D] font-bold">
              06 — THE ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-tight text-[#080808] leading-tight">
              LITTLE MOMENTS. INFINITE MEANING.
            </h2>
            <p className="text-base sm:text-lg font-serif italic text-neutral-600">
              Some memories last a few seconds. The feelings they leave behind can stay with us for years.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-[11px] font-mono uppercase tracking-wider px-3.5 py-1.5 transition-all duration-200 border flex items-center gap-1.5 ${
                  activeFilter === cat.id
                    ? 'bg-black text-white border-black font-semibold shadow-sm'
                    : 'bg-white text-neutral-600 border-neutral-300 hover:border-black'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative cursor-pointer overflow-hidden bg-neutral-100 border border-neutral-200 aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6B77A]">
                  FRAME {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-xs font-serif italic text-neutral-200 line-clamp-2 mt-0.5">
                  “{photo.caption}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="text-center text-xs font-mono text-neutral-500 uppercase tracking-widest">
          SHOWING ALL {filteredPhotos.length} CURATED PHOTOGRAPHS • CLICK ANY PHOTOGRAPH TO VIEW FULLSCREEN
        </div>

        {/* Relationship Timeline */}
        <div className="pt-16 border-t border-neutral-200 space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-luxury-widest text-[#4B101D] font-bold">
              THE CHRONOLOGY
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold uppercase tracking-tight text-black">
              Milestones of Our Heart
            </h3>
            <p className="text-xs sm:text-sm font-serif italic text-neutral-500">
              A timeline that continues to write itself with every passing day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {timelineEvents.map((ev, i) => {
              const Icon = ev.icon;
              return (
                <div
                  key={i}
                  className="bg-[#FAF8F5] border border-neutral-300 p-6 flex flex-col justify-between space-y-4 hover:border-black transition-colors"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[11px] text-[#4B101D] font-bold uppercase tracking-widest block">
                      {ev.date}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-black leading-snug">
                      {ev.title}
                    </h4>
                  </div>
                  <p className="text-xs font-serif text-neutral-600 leading-relaxed">
                    {ev.desc}
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-neutral-200">
                    <span className="text-[10px] font-mono text-neutral-400">STEP 0{i + 1}</span>
                    <Icon size={14} className="text-[#4B101D]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <PhotoLightbox
          photos={filteredPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
}
