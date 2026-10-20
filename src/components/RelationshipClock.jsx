import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { calculateTimeDifference, padZero } from '../utils/dateUtils';

export default function RelationshipClock() {
  const [timeState, setTimeState] = useState(() =>
    calculateTimeDifference(SITE_CONFIG.relationshipStartDate)
  );

  useEffect(() => {
    // Immediate calculation
    setTimeState(calculateTimeDifference(SITE_CONFIG.relationshipStartDate));

    // Update every 1000ms
    const interval = setInterval(() => {
      setTimeState(calculateTimeDifference(SITE_CONFIG.relationshipStartDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { isFuture, days, hours, minutes, seconds } = timeState;

  return (
    <section
      id="relationship-clock"
      className="w-full bg-[#080808] border-y border-[#1f1f1f] text-white py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-luxury-widest uppercase text-[#C98791]">
            <Sparkles size={13} />
            <span>OUR STORY, IN EVERY SECOND</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-neutral-100">
            Look how far our little story has come.
          </h2>

          <div className="pt-2">
            <span className="inline-block text-xs uppercase tracking-luxury-wide font-mono px-3 py-1 bg-[#141414] border border-[#262626] text-neutral-300">
              {isFuture ? 'COUNTDOWN TO' : 'SINCE'} {SITE_CONFIG.relationshipDateDisplay}
            </span>
          </div>
        </div>

        {/* Real-time Clock Counter: Editorial Minimalist Grid */}
        <div className="py-6 sm:py-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-y border-[#202020] py-8 sm:py-12 bg-[#0d0d0d]/40">
            
            {/* DAYS */}
            <div className="flex flex-col items-center justify-center p-2 sm:border-r border-[#202020]/70">
              <span className="text-4xl sm:text-6xl lg:text-7xl font-mono font-light tracking-tight text-white">
                {padZero(days, 3)}
              </span>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-luxury-wide text-neutral-400 mt-2">
                DAYS
              </span>
            </div>

            {/* HOURS */}
            <div className="flex flex-col items-center justify-center p-2 sm:border-r border-[#202020]/70">
              <span className="text-4xl sm:text-6xl lg:text-7xl font-mono font-light tracking-tight text-neutral-100">
                {padZero(hours, 2)}
              </span>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-luxury-wide text-neutral-400 mt-2">
                HOURS
              </span>
            </div>

            {/* MINUTES */}
            <div className="flex flex-col items-center justify-center p-2 sm:border-r border-[#202020]/70">
              <span className="text-4xl sm:text-6xl lg:text-7xl font-mono font-light tracking-tight text-neutral-100">
                {padZero(minutes, 2)}
              </span>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-luxury-wide text-neutral-400 mt-2">
                MINUTES
              </span>
            </div>

            {/* SECONDS */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-4xl sm:text-6xl lg:text-7xl font-mono font-light tracking-tight text-[#D6B77A]">
                {padZero(seconds, 2)}
              </span>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-luxury-wide text-neutral-400 mt-2">
                SECONDS
              </span>
            </div>

          </div>
        </div>

        {/* Message Below the Timer */}
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm sm:text-base font-serif italic text-neutral-300 leading-relaxed">
            “Every second on this clock is another little piece of our story. Time keeps moving, the world keeps changing, and we keep growing. But that moment will always have a special place in my heart because it became part of the story that brought us here.”
          </p>

          <div className="pt-4 flex items-center justify-center space-x-2 text-[11px] font-mono text-neutral-500">
            <Clock size={12} />
            <span>Timezone: {SITE_CONFIG.timeZone}</span>
            <span>•</span>
            <span className="text-neutral-400">Live Precision</span>
          </div>
        </div>

      </div>
    </section>
  );
}
