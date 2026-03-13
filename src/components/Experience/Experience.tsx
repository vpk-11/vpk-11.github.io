import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Calendar, MapPin } from 'lucide-react';
import { setAccent } from '../../store/accentSlice';
import experiencesData from '../../data/experiences.json';
import { formatText } from '../../utils/formatText';
import type { Experience as ExperienceType } from '../../types';
import './Experience.scss';

function useWindowHeight() {
  const [h, setH] = useState(window.innerHeight);
  useEffect(() => {
    const fn = () => setH(window.innerHeight);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return h;
}

function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return w;
}

// ─── Single card ─────────────────────────────────────────────────────────────

const ExpCard: React.FC<{ exp: ExperienceType }> = ({ exp }) => (
  <div className="experience-card enter">
    <h3 className="ex-ct card-title">{exp.role}</h3>
    <h4 className="card-subtitle">{exp.company}</h4>
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
            <span className="ex-bullet" aria-hidden="true" />
            <span>{formatText(item)}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// ─── Main ─────────────────────────────────────────────────────────────────────

const Experience: React.FC = () => {
  const dispatch    = useDispatch();
  const experiences = experiencesData as ExperienceType[];
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) dispatch(setAccent('blue')); }),
      { threshold: 0.3 }
    );
    const el = document.getElementById('experience');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [dispatch]);

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
    <section id="experience" className="section experience-section" data-accent="blue">
      <div className="container">
        <h2 className="ex-t section-title">Experience</h2>

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