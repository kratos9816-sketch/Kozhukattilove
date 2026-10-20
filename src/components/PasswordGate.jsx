import React, { useState, useEffect } from 'react';
import { Heart, Lock, KeyRound, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const clean = password.trim().toLowerCase();

    if (clean === 'wife') {
      sessionStorage.setItem('kozhukattai_auth', 'unlocked');
      onUnlock();
    } else {
      setError(true);
      setErrorMessage("This universe is reserved for one girl only. Try again, baby ♡");
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808] text-white p-6 select-none overflow-hidden">
      {/* Background ambient editorial texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4B101D] rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D6B77A] rounded-full blur-[160px] opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto text-center space-y-8 animate-fadeIn">
        
        {/* Monogram Badge */}
        <div className="mx-auto w-16 h-16 rounded-none border border-neutral-700 bg-black/60 backdrop-blur-md flex items-center justify-center font-serif font-bold text-lg text-white shadow-2xl">
          <span>A</span>
          <span className="text-sm text-[#C98791] mx-[2px]">♡</span>
          <span>K</span>
        </div>

        {/* Title & Editorial Subheading */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-luxury-widest uppercase text-[#D6B77A]">
            <Lock size={12} />
            <span>CONFIDENTIAL & PROTECTED</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold uppercase tracking-tight text-white leading-tight">
            ONLY YOU, ALWAYS YOU
          </h1>

          <p className="text-xs sm:text-sm font-serif italic text-neutral-400 max-w-sm mx-auto">
            A private universe crafted by Aghil Vikhraman, reserved solely for Kirithikha.
          </p>
        </div>

        {/* Password Form Box */}
        <div
          className={`bg-[#121212]/90 border border-neutral-800 p-8 shadow-2xl backdrop-blur-lg transition-transform duration-200 ${
            shake ? 'translate-x-2 animate-bounce' : ''
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <label
                htmlFor="passcode"
                className="block text-[11px] font-mono uppercase tracking-luxury-wide text-neutral-400"
              >
                Enter Passcode
              </label>

              <div className="relative">
                <input
                  id="passcode"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Enter passcode..."
                  autoFocus
                  autoComplete="off"
                  className="w-full bg-[#181818] border border-neutral-700 focus:border-white text-white px-4 py-3 text-sm font-mono tracking-widest placeholder:text-neutral-600 focus:outline-none transition-colors"
                />
                <KeyRound
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
                />
              </div>

              {error && (
                <p className="text-xs font-serif italic text-[#C98791] pt-1">
                  {errorMessage}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-luxury-wide font-sans font-semibold text-black bg-white hover:bg-neutral-200 py-3.5 transition-all duration-200 shadow-md group"
            >
              <span>ENTER OUR UNIVERSE</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* Romantic Subtle Hint */}
          <div className="pt-6 border-t border-neutral-800/80 mt-6">
            <p className="text-[11px] font-serif italic text-neutral-500 flex items-center justify-center gap-1.5">
              <Heart size={11} className="text-[#4B101D] fill-[#4B101D]" />
              <span>Hint: What you are to me forever</span>
            </p>
          </div>
        </div>

        {/* Footer Monogram Note */}
        <p className="text-[10px] font-mono uppercase tracking-luxury-widest text-neutral-600">
          Kozhukattai & Kirithikha • All Rights Reserved
        </p>

      </div>
    </div>
  );
}
