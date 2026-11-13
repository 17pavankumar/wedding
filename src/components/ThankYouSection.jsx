import React, { useState } from 'react';
import { FloralDivider, GoldCorner } from './GoldDecorations';
import { Share2, Check, Navigation, Calendar } from 'lucide-react';

const ThankYouSection = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Kevin & Sahana – Wedding Invitation',
        text: 'Together with their families, Kevin & Sahana invite you to celebrate their wedding on 12 December 2026 at Eden Farms, Bangalore.',
        url: window.location.href
      }).catch((err) => console.log('Share dismissed:', err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Eden Farms, Dasanayakanahalli, Hennur-Bagalur Road, Bangalore, Karnataka")}`;

  return (
    <section id="thank-you" className="thank-you-section py-3 py-md-4 position-relative text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <div className="final-closing-card p-3 p-sm-4 position-relative">
              {/* Ornate Gold Corners */}
              <GoldCorner className="corner-tl" />
              <GoldCorner className="corner-tr" style={{ transform: 'rotate(90deg)' }} />
              <GoldCorner className="corner-bl" style={{ transform: 'rotate(270deg)' }} />
              <GoldCorner className="corner-br" style={{ transform: 'rotate(180deg)' }} />

              {/* Compact KS Monogram */}
              <div className="closing-monogram-glow mx-auto mb-2">
                <div className="monogram-official-logo-wrap">
                  <img
                    src="/images/ks_logo_circle.png"
                    alt="Kevin &amp; Sahana Official Wedding Logo"
                    className="monogram-official-logo-img"
                    style={{ width: '56px', height: '56px' }}
                  />
                </div>
              </div>

              <p className="closing-eyebrow text-gold-soft text-uppercase tracking-wider mb-1 small" style={{ fontSize: '0.75rem' }}>
                WITH LOVE AND GRATITUDE
              </p>

              <h3 className="closing-main-text text-gold-champagne mb-2" style={{ fontSize: '1.25rem' }}>
                We Look Forward to Celebrating With You!
              </h3>

              <div className="golden-hairline mx-auto mb-2"></div>

              <div className="closing-couple-names gold-shimmer-text my-2" style={{ fontSize: '2rem' }}>
                Kevin &amp; Sahana
              </div>

              <div className="closing-date text-gold-soft fw-semibold tracking-wider mb-3 small">
                12 . 12 . 2026 • EDEN FARMS
              </div>

              <div className="closing-actions mt-2 pt-1 d-flex justify-content-center gap-2 flex-wrap">
                <a
                  href="#timeline"
                  className="btn btn-gold-solid btn-sm d-inline-flex align-items-center gap-1"
                >
                  <Calendar size={14} />
                  <span>Timeline</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold-outline btn-sm d-inline-flex align-items-center gap-1"
                >
                  <Navigation size={14} />
                  <span>Directions</span>
                </a>

                <button
                  onClick={handleShare}
                  className="btn btn-gold-outline btn-sm d-inline-flex align-items-center gap-1"
                  title="Share invitation link"
                >
                  {copiedLink ? <Check size={14} color="#D4AF62" /> : <Share2 size={14} />}
                  <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                </button>
              </div>

              <p className="blessing-footer text-ivory-dim small mt-3 mb-0" style={{ fontSize: '0.78rem' }}>
                &ldquo;Love never fails.&rdquo; • 1 Corinthians 13:8
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
