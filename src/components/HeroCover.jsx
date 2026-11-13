import React from 'react';
import { GoldCorner, FloralDivider } from './GoldDecorations';
import { ChevronDown, MapPin } from 'lucide-react';

const HeroCover = () => {
  return (
    <section id="cover" className="hero-cover-section d-flex align-items-center justify-content-center position-relative py-3 py-md-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            {/* Luxury Invitation Card Frame with Uniform Width */}
            <div className="invitation-card-frame position-relative text-center p-3 p-sm-4">
              {/* Ornate Gold Corners */}
              <GoldCorner className="corner-tl" />
              <GoldCorner className="corner-tr" style={{ transform: 'rotate(90deg)' }} />
              <GoldCorner className="corner-bl" style={{ transform: 'rotate(270deg)' }} />
              <GoldCorner className="corner-br" style={{ transform: 'rotate(180deg)' }} />

              {/* Inner Double Gold Border */}
              <div className="inner-gold-border"></div>

              {/* Official KS Monogram Crest */}
              <div className="official-logo-crest-badge mx-auto mb-2">
                <img
                  src="/images/ks_logo_circle.png"
                  alt="Kevin &amp; Sahana Official Wedding Monogram"
                  className="official-logo-crest-img"
                />
              </div>

              {/* Invitation Heading */}
              <div className="invitation-intro mb-2">
                <p className="invite-eyebrow text-gold-champagne mb-1 small">
                  TOGETHER WITH THEIR FAMILIES
                </p>
                <p className="invite-subtext text-gold-soft mb-1 small">
                  JOYFULLY INVITE YOU TO CELEBRATE THE WEDDING OF
                </p>
              </div>

              {/* Botanical Floral Ornament */}
              <FloralDivider className="my-2" />

              {/* Couple's Names in Large Gold Calligraphy with Shimmer */}
              <div className="couple-names-wrapper my-2 my-md-3">
                <h1 className="couple-names-calligraphy gold-shimmer-text mb-0">
                  <span className="groom-name">Kevin</span>
                  <span className="ampersand">&amp;</span>
                  <span className="bride-name">Sahana</span>
                </h1>
              </div>

              {/* Floral Divider */}
              <FloralDivider className="my-2" />

              {/* Date & Time */}
              <div className="wedding-date-block my-2">
                <div className="date-number text-gold-champagne">
                  12 DECEMBER 2026
                </div>
                <div className="day-time-pill text-gold-soft mt-1">
                  <span className="day-name">SATURDAY</span>
                  <span className="separator">•</span>
                  <span className="time-val">4:00 PM</span>
                </div>
              </div>

              {/* Location teaser */}
              <div className="venue-teaser mt-2 text-ivory-dim">
                <p className="mb-0 small">
                  <MapPin size={13} className="me-1 text-gold-champagne" />
                  Eden Farms • Bangalore
                </p>
              </div>

              {/* Scroll down prompt */}
              <a href="#verse" className="scroll-indicator-link text-decoration-none mt-2 d-inline-block">
                <span className="scroll-text text-gold-soft small">Explore</span>
                <ChevronDown size={14} className="scroll-chevron text-gold-champagne" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
