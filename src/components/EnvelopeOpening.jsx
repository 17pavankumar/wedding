import React, { useState } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

const EnvelopeOpening = ({ onOpenComplete, onStartAudio }) => {
  const [animationStage, setAnimationStage] = useState('initial'); // 'initial' | 'opening' | 'dissolving' | 'completed'

  const handleEnvelopeClick = () => {
    if (animationStage !== 'initial') return;

    // Start background audio immediately upon guest interaction
    if (onStartAudio) onStartAudio();

    // Sequence 1: Wax seal fades out, top flap folds upward in 3D
    setAnimationStage('opening');

    // Sequence 2: Warm light blooms, envelope gracefully cross-fades into the invitation
    setTimeout(() => {
      setAnimationStage('dissolving');
    }, 1100);

    // Sequence 3: Complete transition smoothly without any sudden jump or unmounting pop
    setTimeout(() => {
      setAnimationStage('completed');
      if (onOpenComplete) onOpenComplete();
    }, 2200);
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    if (onStartAudio) onStartAudio();
    setAnimationStage('dissolving');
    setTimeout(() => {
      setAnimationStage('completed');
      if (onOpenComplete) onOpenComplete();
    }, 300);
  };

  if (animationStage === 'completed') {
    return null;
  }

  return (
    <div
      className={`envelope-screen-overlay stage-${animationStage}`}
      onClick={handleEnvelopeClick}
      role="button"
      tabIndex={0}
      aria-label="Tap to open luxury wedding invitation"
    >
      {/* Skip to Invitation button */}
      <button
        onClick={handleSkip}
        className="btn-skip-animation"
        aria-label="Skip to invitation"
      >
        <span>Skip to Invitation</span>
        <ChevronRight size={16} />
      </button>

      {/* Floating Sparkles & Light Shimmer around envelope */}
      <div className="envelope-ambient-glow-circle"></div>

      <div className="envelope-outer-container">
        {/* Header Invitation Text */}
        <div className={`envelope-header text-center ${animationStage !== 'initial' ? 'fade-away' : ''}`}>
          <div className="header-tagline-wrap">
            <span className="header-monogram-text">K&amp;S</span>
            <p className="invite-tagline mb-1">YOU ARE CORDIALLY INVITED</p>
            <div className="golden-hairline"></div>
          </div>
        </div>

        {/* 3D Vertical Envelope Box (Matches Reference Video Ratio) */}
        <div className={`envelope-portrait-card ${animationStage}`}>
          {/* Internal Envelope Base / Lining */}
          <div className="envelope-interior-lining">
            {/* Radiant Golden Light Column that beams when flap opens */}
            <div className={`golden-light-column ${animationStage !== 'initial' ? 'beam-active' : ''}`}></div>
          </div>

          {/* Left Flap with Embossed Gold Rose Damask */}
          <div className="flap-left-polygon">
            <img
              src="/images/envelope_floral_left.svg"
              alt="Gold Floral Embossing"
              className="flap-floral-svg flap-floral-left"
            />
            <div className="flap-diagonal-edge flap-edge-left"></div>
          </div>

          {/* Right Flap with Embossed Gold Rose Damask */}
          <div className="flap-right-polygon">
            <img
              src="/images/envelope_floral_right.svg"
              alt="Gold Floral Embossing"
              className="flap-floral-svg flap-floral-right"
            />
            <div className="flap-diagonal-edge flap-edge-right"></div>
          </div>

          {/* Bottom Flap */}
          <div className="flap-bottom-polygon">
            <div className="flap-bottom-edge flap-bottom-edge-left"></div>
            <div className="flap-bottom-edge flap-bottom-edge-right"></div>
            <div className="bottom-flourish-crest">
              <svg viewBox="0 0 80 40" width="60" height="30" fill="none">
                <path d="M10 35 Q 40 10 70 35" stroke="url(#goldLineGrad)" strokeWidth="1.2" />
                <circle cx="40" cy="18" r="2.5" fill="#D4AF62" />
                <defs>
                  <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4A1028" stopOpacity="0" />
                    <stop offset="50%" stopColor="#D4AF62" />
                    <stop offset="100%" stopColor="#4A1028" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Top Flap (3D Flip Flap) */}
          <div className={`flap-top-3d ${animationStage !== 'initial' ? 'flap-opened' : ''}`}>
            <div className="flap-top-face flap-top-front">
              <div className="flap-top-edge flap-top-edge-left"></div>
              <div className="flap-top-edge flap-top-edge-right"></div>
              <div className="top-flap-accent">
                <svg viewBox="0 0 80 40" width="50" height="25" fill="none">
                  <path d="M15 5 Q 40 30 65 5" stroke="#D4AF62" strokeWidth="1.2" opacity="0.8" />
                  <circle cx="40" cy="22" r="2.5" fill="#D4AF62" />
                </svg>
              </div>
            </div>
            {/* Underside of top flap when flipped */}
            <div className="flap-top-face flap-top-back"></div>
          </div>

          {/* Official K&S Golden Wax Seal Centerpiece */}
          <div className={`center-seal-wrapper ${animationStage !== 'initial' ? 'seal-break' : ''}`}>
            <div className="official-wax-seal-container">
              <img
                src="/images/ks_wax_seal.png"
                alt="Kevin &amp; Sahana Official Wax Seal"
                className="seal-image-asset"
              />
            </div>
          </div>
        </div>

        {/* Action Prompt */}
        <div className={`envelope-footer text-center ${animationStage !== 'initial' ? 'fade-away' : ''}`}>
          <div className="tap-to-open-badge">
            <span className="pulsing-gold-dot"></span>
            <span className="badge-text">TAP TO OPEN</span>
            <Sparkles size={14} className="badge-sparkle-icon" />
          </div>
          <p className="touch-sub-hint">Experience Kevin &amp; Sahana&rsquo;s Wedding Invitation</p>
        </div>
      </div>
    </div>
  );
};

export default EnvelopeOpening;
