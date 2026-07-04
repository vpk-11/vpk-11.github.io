import React from 'react';
import { Github, Linkedin, FileText, MapPin, CalendarClock } from 'lucide-react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import { RIPPLE_CYCLE_SECONDS } from '../../utils/rippleMotion';
import './Hero.scss';

// Repeats per half of the ticker track — keeps the loop seamless on
// ultra-wide screens where a single pass of the phrase list is
// narrower than the viewport.
const TICKER_REPEAT = 6;

const Hero: React.FC = () => {
  const profile = profileData as ProfileData;
  const [firstName, ...rest] = profile.name.split(' ');
  const lastName = rest.join(' ');
  const shortWorkAuth = profile.workAuthorization
    .split('·')
    .slice(0, 2)
    .map(s => s.trim())
    .join(' · ');
  const tickerPhrases = profile.sectionHeadings?.hero.ticker ?? [];
  return (
    <section id="hero" className="section hero-section">

      <div className="hero-watermark" aria-hidden="true">VPK</div>

      <div className="container">
        <div className="hero-content">

          <h1 className="hero-name">
            <span className="hero-fn">{firstName}</span>
            <span className="hero-ln">{lastName}</span>
          </h1>

          <div className="hero-divider" aria-hidden="true" />

          <p className="hero-role">{profile.title}</p>

          {tickerPhrases.length > 0 && (
            <div className="hero-ticker" aria-hidden="true">
              <div
                className="ticker-track"
                style={{ animationDuration: `${RIPPLE_CYCLE_SECONDS}s` }}
              >
                {/* repeated enough times that one half never runs out of width on wide screens */}
                {Array.from({ length: TICKER_REPEAT * 2 }, (_, i) => tickerPhrases[i % tickerPhrases.length]).map((phrase, i) => (
                  <span className="ticker-item" key={`${phrase}-${i}`}>
                    <span className="pulse" />
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="hero-status-bar">
            {profile.availability && (
              <span className="hero-avail-badge">
                <span className="status-dot" aria-hidden="true" />
                {profile.availability.toLowerCase()}
              </span>
            )}
            <span className="hero-meta-sep" aria-hidden="true">·</span>
            <span className="hero-meta">
              <MapPin size={16} />
              {profile.location}
            </span>
            <span className="hero-meta-sep" aria-hidden="true">·</span>
            <span className="hero-meta">{shortWorkAuth}</span>
          </div>

          <div className="hero-links">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link hero-link-primary"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link hero-link-secondary"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link hero-link-secondary"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="hero-link hero-link-secondary"
            >
              <CalendarClock size={18} />
              <span>Book a Call</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
