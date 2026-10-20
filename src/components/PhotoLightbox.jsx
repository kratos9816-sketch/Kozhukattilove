import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function PhotoLightbox({ photos, currentIndex, onClose, onNavigate }) {
  const currentPhoto = photos[currentIndex];

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + photos.length) % photos.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % photos.length);
    },
    [currentIndex, photos.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!currentPhoto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg select-none"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs uppercase tracking-luxury-widest text-neutral-400">
            FRAME {String(currentIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </span>
          <span className="hidden sm:inline-block w-1 h-1 bg-neutral-600 rounded-full" />
          <span className="flex items-center gap-1 text-xs font-mono text-[#C98791] uppercase tracking-wider">
            <ImageIcon size={13} />
            <span>{currentPhoto.category}</span>
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-neutral-500 rounded-none focus:outline-none focus:ring-1 focus:ring-white"
          aria-label="Close Lightbox"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + photos.length) % photos.length)}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-neutral-400 hover:text-white bg-black/50 hover:bg-black/90 border border-neutral-800 transition-all z-20 focus:outline-none"
        aria-label="Previous Photo"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => onNavigate((currentIndex + 1) % photos.length)}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-neutral-400 hover:text-white bg-black/50 hover:bg-black/90 border border-neutral-800 transition-all z-20 focus:outline-none"
        aria-label="Next Photo"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Photo Container */}
      <div className="relative max-w-5xl max-h-[82vh] w-full px-4 sm:px-16 flex flex-col items-center justify-center">
        <img
          src={currentPhoto.src}
          alt={currentPhoto.caption || "Kirithikha & Aghil memory"}
          className="max-h-[72vh] max-w-full object-contain rounded-none shadow-2xl border border-neutral-800"
        />

        {/* Caption & Metadata Strip */}
        <div className="mt-4 text-center max-w-xl space-y-1">
          <p className="text-sm sm:text-base font-serif italic text-neutral-200">
            “{currentPhoto.caption}”
          </p>
          <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            {currentPhoto.filename}
          </p>
        </div>
      </div>
    </div>
  );
}
