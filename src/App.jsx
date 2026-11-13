import React, { useState, useEffect } from 'react';
import GoldParticles from './components/GoldParticles';
import AudioPlayer from './components/AudioPlayer';
import EnvelopeOpening from './components/EnvelopeOpening';
import Navbar from './components/Navbar';
import HeroCover from './components/HeroCover';
import BibleVerse from './components/BibleVerse';
import FamilyDetails from './components/FamilyDetails';
import Countdown from './components/Countdown';
import OrderOfEvents from './components/OrderOfEvents';
import VenueSection from './components/VenueSection';
import DressCode from './components/DressCode';
import ThankYouSection from './components/ThankYouSection';
import { Mail, ArrowUp } from 'lucide-react';

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Prevent unwanted URL hash jumping on page load
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // When envelope opens or audio is triggered
  const handleEnvelopeStartAudio = () => {
    setIsPlayingMusic(true);
  };

  const handleEnvelopeComplete = () => {
    setEnvelopeOpened(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleReopenEnvelope = () => {
    setEnvelopeOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="wedding-app-root">
      {/* Golden Floating Stardust Particles */}
      <GoldParticles />

      {/* Background Audio Player with Persistent Floating Control */}
      <AudioPlayer
        isPlaying={isPlayingMusic}
        setIsPlaying={setIsPlayingMusic}
      />

      {/* Section 01: Full-Screen 3D Animated Luxury Envelope */}
      {!envelopeOpened && (
        <EnvelopeOpening
          onOpenComplete={handleEnvelopeComplete}
          onStartAudio={handleEnvelopeStartAudio}
        />
      )}

      {/* Main Luxury Wedding Website Content */}
      <main className="wedding-main-content">
        {/* Navigation Bar */}
        <Navbar />

        {/* Section 02: Main Wedding Invitation Cover */}
        <HeroCover />

        {/* Section 03: Bible Verse & Welcome Message */}
        <BibleVerse />

        {/* Section 04: Family Details */}
        <FamilyDetails />

        {/* Section 05: Wedding Countdown & Calendar */}
        <Countdown />

        {/* Section 06: Order of Events / Wedding Day Timeline */}
        <OrderOfEvents />

        {/* Section 07: Venue & Google Maps (With Replaced Eden Farms Photo) */}
        <VenueSection />

        {/* Section 08: Luxury Dress Code (Wardrobe Planner styled after reference) */}
        <DressCode />

        {/* Section 09: Final Thank You Section with Official Logo (At last) */}
        <ThankYouSection />

        {/* Footer / Replay Envelope Button */}
        <footer className="wedding-footer py-4 text-center">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
              <button
                onClick={handleReopenEnvelope}
                className="btn btn-gold-sm d-inline-flex align-items-center gap-2"
                title="Re-experience the 3D envelope animation"
              >
                <Mail size={14} />
                <span>View Envelope Again</span>
              </button>
            </div>
            <p className="footer-credits text-wine-accent small mt-3 mb-0">
              Kevin &amp; Sahana • 12 December 2026 • Eden Farms Bangalore
            </p>
          </div>
        </footer>
      </main>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="btn-scroll-top"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18} color="#D4AF62" />
        </button>
      )}
    </div>
  );
}

export default App;
