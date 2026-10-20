import React, { useState, useEffect } from 'react';
import PasswordGate from './components/PasswordGate';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import HeroPanels from './components/HeroPanels';
import SectionIntro from './components/SectionIntro';
import RelationshipClock from './components/RelationshipClock';
import TheWayISeeYou from './components/TheWayISeeYou';
import TheCraze from './components/TheCraze';
import HowMuchILoveYou from './components/HowMuchILoveYou';
import HerAbsence from './components/HerAbsence';
import YourKozhukattai from './components/YourKozhukattai';
import OurFuture from './components/OurFuture';
import OurMemories from './components/OurMemories';
import LoveLetter from './components/LoveLetter';
import Footer from './components/Footer';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('kozhukattai_auth');
    if (authStatus === 'unlocked') {
      setIsUnlocked(true);
    }
    setIsChecking(false);
  }, []);

  const handleLock = () => {
    sessionStorage.removeItem('kozhukattai_auth');
    setIsUnlocked(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isChecking) {
    return <div className="min-h-screen bg-[#080808]" />;
  }

  if (!isUnlocked) {
    return <PasswordGate onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-sans selection:bg-[#4B101D] selection:text-white animate-fadeIn">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Clean White Editorial Header */}
      <Header />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        {/* 1. Hero Section: 3-Panel Editorial Layout */}
        <HeroPanels />

        {/* 2. Transition Note from Aghil */}
        <SectionIntro />

        {/* 3. Live Elapsed Relationship Clock */}
        <RelationshipClock />

        {/* 4. Section 01: The Way I See You */}
        <TheWayISeeYou />

        {/* 5. Section 02: The Craze You Created */}
        <TheCraze />

        {/* 6. Section 03: How Much I Love You */}
        <HowMuchILoveYou />

        {/* 7. Section 04: Her Absence */}
        <HerAbsence />

        {/* 8. Section 05: Your Kozhukattai (With Interactive Hug) */}
        <YourKozhukattai />

        {/* 9. Section: The Future I Dream Of */}
        <OurFuture />

        {/* 10. Section: Our Memories & Archive (With Fullscreen Lightbox & Milestones) */}
        <OurMemories />

        {/* 11. Section: The Love Letter (Climax & Unfold) */}
        <LoveLetter />
      </main>

      {/* Footer with Lock Option */}
      <Footer onLock={handleLock} />
    </div>
  );
}
