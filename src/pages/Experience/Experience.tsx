import React, { useState, useRef, useCallback } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import experiencesData from '../../data/experiences.json';
import generalData from '../../data/general.json';
import { formatText } from '../../utils/formatText';
import { sectionNumber } from '../../data/sectionOrder';
import type { Experience as ExperienceType, GeneralData } from '../../types';
import { useWindowWidth, useWindowHeight } from '../../hooks/useViewport';
import './Experience.scss';

// ─── Single card ─────────────────────────────────────────────────────────────

const ExpCard: React.FC<{ exp: ExperienceType }> = ({ exp }) => (
  <div className="experience-card">
    <h3 className="ex-ct card-title">{exp.role}</h3>
    <h4 className="ex-cs card-subtitle">{exp.company}</h4>
    <div className="card-meta">
      <div className="meta-item">
        <Calendar size={14} className="ex-mi meta-icon" />
        <span className="card-duration">{exp.duration}</span>
      </div>
      <div className="meta-item">
        <MapPin size={14} className="ex-mi meta-icon" />
        <span className="card-location">{exp.location}</span>
      </div>
    </div>
    <p className="ex-description">{formatText(exp.description)}</p>
    {exp.achievements && exp.achievements.length > 0 && (
      <ul className="ex-achievements">
        {exp.achievements.map((item, i) => (
          <li key={i} className="ex-achievement-item">
            <span className="ex-bullet" aria-hidden="true">—</span>
            <span>{formatText(item)}</span>
          </li>
        ))}
      </ul>
    )}
    {exp.tech && exp.tech.length > 0 && (
      <div className="ex-tech-stack">
        {exp.tech.map(t => (
          <span key={t} className="ex-tech-tag">{t}</span>
        ))}
      </div>
    )}
  </div>
);

// ─── Main ─────────────────────────────────────────────────────────────────────

const Experience: React.FC = () => {
  const experiences = experiencesData as ExperienceType[];
  const general     = generalData as GeneralData;
  const headline    = general.sectionHeadings.experience.headline;
  const total       = experiences.length;
  const viewH       = useWindowHeight();
  const viewW       = useWindowWidth();

  const isMobile   = viewW <= 768;
  // Show 2 cards when viewport is tall enough (>= 800px) and not mobile
  const showTwo    = !isMobile && viewH >= 800;
  const cardsShown = showTwo ? 2 : 1;

  // windowStart: top of the visible window of cards
  const [windowStart, setWindowStart] = useState(0);
  // mobile: independent single index
  const [mobileIdx, setMobileIdx] = useState(0);

  const touchStartX = useRef<number | null>(null);

  const handleTimelineClick = useCallback((i: number) => {
    if (isMobile) { setMobileIdx(i); return; }
    // already visible → no-op
    if (i >= windowStart && i < windowStart + cardsShown) return;
    // shift window so clicked item is at top, but don't exceed bounds
    setWindowStart(Math.min(i, Math.max(0, total - cardsShown)));
  }, [isMobile, windowStart, cardsShown, total]);

  const isVisible = (i: number) =>
    isMobile ? i === mobileIdx : (i >= windowStart && i < windowStart + cardsShown);

  // Mobile swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 44)
      setMobileIdx(p => delta > 0 ? Math.min(p + 1, total - 1) : Math.max(p - 1, 0));
    touchStartX.current = null;
  };

  // Visible card indices for desktop
  const visibleIndices = Array.from({ length: cardsShown }, (_, k) => windowStart + k)
    .filter(i => i < total);

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-eyebrow">
          <span>{sectionNumber('experience')} / EXPERIENCE</span>
        </div>
        <h2 className="section-headline">{headline ? formatText(headline) : 'Experience'}</h2>

        <div className="exp-layout">

          {/* ── Timeline (desktop + tablet) ── */}
          {!isMobile && (
            <nav className="exp-timeline" aria-label="Experience list">
              <div className="etl-rail" />
              {experiences.map((e, i) => (
                <button
                  key={e.id}
                  className={`exp-tl-item ${isVisible(i) ? 'active' : ''}`}
                  onClick={() => handleTimelineClick(i)}
                  aria-pressed={isVisible(i)}
                >
                  <span className="etl-dot" />
                  <span className="etl-text">
                    <span className="etl-company">{e.company}</span>
                    <span className="etl-role">{e.role}</span>
                    <span className="etl-dur">{e.duration}</span>
                  </span>
                </button>
              ))}
            </nav>
          )}

          {/* ── Cards ── */}
          {isMobile ? (
            <div className="exp-mobile" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div className="exp-mobile-slide" key={mobileIdx}>
                <ExpCard exp={experiences[mobileIdx]} />
              </div>
              {total > 1 && (
                <div className="exp-mobile-dots">
                  {experiences.map((_, i) => (
                    <button
                      key={i}
                      className={`exp-mdot ${i === mobileIdx ? 'active' : ''}`}
                      onClick={() => setMobileIdx(i)}
                      aria-label={`Experience ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="exp-cards" key={windowStart}>
              {visibleIndices.map((i, k) => (
                <div
                  key={i}
                  className="exp-card-wrap"
                  style={{ animationDelay: `${k * 60}ms` }}
                >
                  <ExpCard exp={experiences[i]} />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Experience;