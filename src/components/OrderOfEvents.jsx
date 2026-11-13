import React from 'react';
import { GoldCorner, FloralDivider } from './GoldDecorations';

// Hand-drawn style gold SVG illustrations matching reference image
const RingsIllustration = () => (
  <svg viewBox="0 0 100 80" className="timeline-art-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="50" rx="25" ry="18" stroke="#D4AF62" strokeWidth="2" transform="rotate(-25 40 50)" />
    <ellipse cx="60" cy="38" rx="25" ry="18" stroke="#D4AF62" strokeWidth="2.5" strokeDasharray="3 3" transform="rotate(-15 60 38)" />
    <path d="M52 14L58 10L64 14L58 20Z" stroke="#FFF7E8" strokeWidth="1.8" fill="#FFF7E8" fillOpacity="0.4" />
  </svg>
);

const ConfettiIllustration = () => (
  <svg viewBox="0 0 100 80" className="timeline-art-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="3" fill="#D4AF62" />
    <circle cx="45" cy="15" r="2" fill="#FFF7E8" />
    <circle cx="70" cy="25" r="3" fill="#D4AF62" />
    <circle cx="35" cy="40" r="2.5" fill="#D4AF62" />
    <circle cx="60" cy="45" r="3" fill="#FFF7E8" />
    <circle cx="80" cy="50" r="2" fill="#D4AF62" />
    <circle cx="25" cy="65" r="2.5" fill="#FFF7E8" />
    <circle cx="50" cy="68" r="3" fill="#D4AF62" />
    <rect x="28" y="28" width="6" height="4" transform="rotate(25 28 28)" fill="#D4AF62" opacity="0.8" />
    <rect x="58" y="20" width="5" height="4" transform="rotate(-35 58 20)" fill="#FFF7E8" opacity="0.8" />
    <rect x="75" y="38" width="6" height="3" transform="rotate(45 75 38)" fill="#D4AF62" opacity="0.8" />
  </svg>
);

const DrinksIllustration = () => (
  <svg viewBox="0 0 100 80" className="timeline-art-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20L40 45H32V65H48V45H40" stroke="#D4AF62" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15 20H45" stroke="#D4AF62" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="28" r="2.5" fill="#FFF7E8" />
    <path d="M60 25C60 40 85 40 85 25Z" stroke="#D4AF62" strokeWidth="1.8" />
    <path d="M72.5 37V65M62 65H83" stroke="#D4AF62" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M58 25H87" stroke="#D4AF62" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DinnerPlateIllustration = () => (
  <svg viewBox="0 0 100 80" className="timeline-art-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="40" r="28" stroke="#D4AF62" strokeWidth="2" />
    <circle cx="50" cy="40" r="20" stroke="#D4AF62" strokeWidth="1" strokeDasharray="2 3" />
    <circle cx="50" cy="40" r="14" stroke="#D4AF62" strokeWidth="1.5" />
    <path d="M70 25C76 20 80 28 76 35C72 42 78 50 73 55" stroke="#D4AF62" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="73" cy="22" r="2" fill="#FFF7E8" />
    <circle cx="79" cy="32" r="2" fill="#D4AF62" />
  </svg>
);

// Only the 4 essential events (Speeches and Cake Cutting removed as requested)
const timelineSteps = [
  {
    step: '01',
    time: '4:00 PM',
    title: 'THE WEDDING CEREMONY',
    duration: '45 MINUTES',
    desc: 'Exchange of sacred vows & rings under Cornerstone Gospel Assembly.',
    illustration: <RingsIllustration />,
    align: 'left'
  },
  {
    step: '02',
    time: '5:00 PM',
    title: 'CONFETTI & BLESSINGS',
    duration: '20 MINUTES',
    desc: 'Shower of flower petals, confetti & group portraits with newlyweds.',
    illustration: <ConfettiIllustration />,
    align: 'right'
  },
  {
    step: '03',
    time: '5:30 PM',
    title: 'HIGH TEA & FELLOWSHIP',
    duration: '1 HOUR 30 MINS',
    desc: 'Welcome drinks, fine appetizers & mingling with friends and family.',
    illustration: <DrinksIllustration />,
    align: 'left'
  },
  {
    step: '04',
    time: '7:00 PM',
    title: 'GRAND RECEPTION DINNER',
    duration: 'FEAST & CELEBRATION',
    desc: 'A delicious culinary feast celebrating love and fellowship under the stars.',
    illustration: <DinnerPlateIllustration />,
    align: 'right'
  }
];

const OrderOfEvents = () => {
  return (
    <section id="timeline" className="order-of-events-section py-3 py-md-4 position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            {/* Compact Luxury Wine Card */}
            <div className="order-of-events-card p-3 p-sm-4 position-relative">
              {/* Ornate Gold Corners */}
              <GoldCorner className="corner-tl" />
              <GoldCorner className="corner-tr" style={{ transform: 'rotate(90deg)' }} />
              <GoldCorner className="corner-bl" style={{ transform: 'rotate(270deg)' }} />
              <GoldCorner className="corner-br" style={{ transform: 'rotate(180deg)' }} />

              {/* Compact Header */}
              <div className="timeline-header-wrap text-center mb-4">
                <p className="timeline-eyebrow text-gold-soft text-uppercase tracking-wider mb-1 small">
                  CEREMONY &amp; RECEPTION
                </p>
                <h2 className="timeline-script-title gold-shimmer-text mb-1">
                  Wedding Day Timeline
                </h2>
                <div className="golden-hairline mx-auto mb-2"></div>
                <p className="timeline-date-chip text-ivory small mb-0">
                  Saturday, 12 December 2026 • Eden Farms Bangalore
                </p>
              </div>

              {/* Compact Vertical Timeline */}
              <div className="timeline-flow-container position-relative">
                {/* Central vertical golden spine */}
                <div className="timeline-center-spine"></div>

                <div className="timeline-rows-wrapper d-flex flex-column gap-3 gap-md-4">
                  {timelineSteps.map((item) => (
                    <div
                      key={item.step}
                      className={`timeline-row-item d-flex align-items-center ${
                        item.align === 'left' ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      {/* Illustration Column */}
                      <div className={`timeline-col-art w-50 px-2 px-md-3 text-${item.align === 'left' ? 'end' : 'start'}`}>
                        <div className="art-hover-wrapper d-inline-block">
                          {item.illustration}
                        </div>
                      </div>

                      {/* Center Numbered Circle Step */}
                      <div className="timeline-col-node d-flex flex-column align-items-center justify-content-center flex-shrink-0">
                        <div className="step-circle-badge">
                          <span className="step-number">{item.step}</span>
                        </div>
                      </div>

                      {/* Text Description Column */}
                      <div className={`timeline-col-text w-50 px-2 px-md-3 text-${item.align === 'left' ? 'start' : 'end'}`}>
                        <div className="timeline-time-badge text-gold-champagne fw-bold mb-0">
                          {item.time}
                        </div>
                        <h4 className="timeline-event-name text-gold-metallic mb-1">
                          {item.title}
                        </h4>
                        <span className="timeline-duration-tag text-gold-soft text-uppercase tracking-wider small d-block mb-1">
                          {item.duration}
                        </span>
                        <p className="timeline-event-desc text-ivory small mb-0 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Decorative Divider */}
              <FloralDivider className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderOfEvents;
