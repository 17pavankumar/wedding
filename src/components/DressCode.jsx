import React from 'react';
import { Sparkles } from 'lucide-react';
import { GoldCorner, FloralDivider } from './GoldDecorations';

const dressCodeCategories = [
  {
    id: 'formal',
    title: 'FORMAL',
    subtitle: 'Black Tie & Evening Glamour',
    image: '/images/dress_formal.png',
    men: 'Suits, Tuxedos & Blazers',
    women: 'Evening Gowns & Formal Dresses'
  },
  {
    id: 'semi-formal',
    title: 'SEMI-FORMAL',
    subtitle: 'Refined Modern Chic',
    image: '/images/dress_ethnic_chic.png',
    men: 'Smart Shirts, Trousers & Blazers',
    women: 'Chic Midi Dresses & Co-ords'
  },
  {
    id: 'indian-festive',
    title: 'INDIAN FESTIVE',
    subtitle: 'Traditional Splendour',
    image: '/images/dress_indian_festive.png',
    men: 'Kurtas & Royal Nehru Jackets',
    women: 'Graceful Sarees & Lehengas'
  }
];

const DressCode = () => {
  return (
    <section id="dress-code" className="dress-code-section py-3 py-md-4 position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            {/* Compact Luxury Wine Card */}
            <div className="dress-code-card-main p-3 p-sm-4 position-relative">
              {/* Ornate Gold Corners */}
              <GoldCorner className="corner-tl" />
              <GoldCorner className="corner-tr" style={{ transform: 'rotate(90deg)' }} />
              <GoldCorner className="corner-bl" style={{ transform: 'rotate(270deg)' }} />
              <GoldCorner className="corner-br" style={{ transform: 'rotate(180deg)' }} />

              {/* Compact Header */}
              <div className="text-center mb-3">
                <p className="dress-eyebrow text-gold-soft text-uppercase tracking-wider mb-1 small">
                  WARDROBE PLANNER
                </p>
                <h2 className="dress-main-title gold-shimmer-text mb-1">
                  Dress to Celebrate
                </h2>
                <div className="golden-hairline mx-auto mb-2"></div>
                <p className="dress-quote-line text-ivory fst-italic small mb-0">
                  Dress comfortably and celebrate in elegance with us.
                </p>
              </div>

              {/* Minimal Palette Color Dots (One compact line) */}
              <div className="palette-inline-wrap text-center py-2 mb-3">
                <span className="text-gold-soft small text-uppercase tracking-wider me-2 d-inline-block">
                  Color Inspiration:
                </span>
                <span className="d-inline-flex align-items-center gap-2 flex-wrap justify-content-center">
                  <span className="color-chip-mini" title="Deep Wine" style={{ backgroundColor: '#4A1028' }}></span>
                  <span className="color-chip-mini" title="Burgundy" style={{ backgroundColor: '#641B38' }}></span>
                  <span className="color-chip-mini" title="Champagne Gold" style={{ backgroundColor: '#D4AF62' }}></span>
                  <span className="color-chip-mini" title="Soft Ivory" style={{ backgroundColor: '#FFF7E8' }}></span>
                  <span className="color-chip-mini" title="Midnight Jewel" style={{ backgroundColor: '#1A0B2E' }}></span>
                </span>
              </div>

              {/* Minimal Suggestion Grid (3 Compact Columns) */}
              <div className="row g-2 g-md-3">
                {dressCodeCategories.map((item) => (
                  <div key={item.id} className="col-12 col-md-4">
                    <div className="dress-compact-card text-center p-3 h-100 position-relative">
                      {/* Compact Illustrated Couple Badge */}
                      <div className="illustrated-couple-frame mx-auto mb-2">
                        <img
                          src={item.image}
                          alt={`${item.title} Attire`}
                          className="illustrated-couple-img"
                        />
                      </div>

                      <h4 className="dress-col-title text-gold-champagne mb-0">
                        {item.title}
                      </h4>
                      <p className="dress-col-sub text-gold-soft small mb-2">
                        {item.subtitle}
                      </p>

                      {/* Minimal Concise Attire Suggestions */}
                      <div className="minimal-attire-lines text-start small">
                        <div className="attire-line mb-1">
                          <span className="badge-gender-pill me-1">MEN</span>
                          <span className="text-ivory">{item.men}</span>
                        </div>
                        <div className="attire-line">
                          <span className="badge-gender-pill me-1">WOMEN</span>
                          <span className="text-ivory">{item.women}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Subtle Note */}
              <div className="dress-code-friendly-note text-center pt-3 mt-3">
                <Sparkles size={14} className="text-gold-champagne me-1" />
                <span className="friendly-note-text text-ivory small">
                  Your presence is our greatest joy!
                </span>
              </div>

              <FloralDivider className="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
