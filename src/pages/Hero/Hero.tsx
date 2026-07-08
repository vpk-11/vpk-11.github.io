import React from 'react';
import { Github, Linkedin, FileText, MapPin } from 'lucide-react';
import profileData from '../../data/profile.json';
import generalData from '../../data/general.json';
import type { ProfileData, GeneralData } from '../../types';
import { RIPPLE_CYCLE_SECONDS, RIPPLE_DIRECTION } from '../../utils/rippleMotion';
import Button from '../../components/ui/Button/Button';
import Marquee from '../../components/ui/Marquee/Marquee';
import StatusDot from '../../components/ui/StatusDot/StatusDot';
import './Hero.scss';

// Marquee duplicates whatever it's given exactly once for a seamless loop,
// but that only fills wide viewports if each half is already wider than the
// screen. The phrase list is short, so pad it out before handing it to
// Marquee — otherwise wide screens see a blank gap once both copies have
// scrolled past.
const HERO_TICKER_REPEAT = 6;

// RIPPLE_CYCLE_SECONDS times the background wave's own motion, which is
// much faster than a comfortable reading pace for this much repeated text —
// slow the ticker down to a fraction of that cycle instead of matching it 1:1.
const HERO_TICKER_SPEED_MULTIPLIER = 6;

const Hero: React.FC = () => {
  const profile = profileData as ProfileData;
  const general = generalData as GeneralData;
  const [firstName, ...rest] = profile.name.split(' ');
  const lastName = rest.join(' ');
  const shortWorkAuth = profile.workAuthorization
    .split('·')
    .slice(0, 2)
    .map(s => s.trim())
    .join(' · ');
  const tickerPhrases = general.sectionHeadings.hero.ticker;
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
              <Marquee speedSeconds={RIPPLE_CYCLE_SECONDS * HERO_TICKER_SPEED_MULTIPLIER} direction={RIPPLE_DIRECTION}>
                {Array.from({ length: HERO_TICKER_REPEAT * tickerPhrases.length }, (_, i) => tickerPhrases[i % tickerPhrases.length]).map((phrase, i) => (
                  <span className="ticker-item" key={i}>
                    <StatusDot color="primary" />
                    {phrase}
                  </span>
                ))}
              </Marquee>
            </div>
          )}

          <div className="hero-status-bar">
            {profile.availability && (
              <span className="hero-avail-badge">
                <StatusDot />
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
            <Button
              variant="secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
              icon={<Linkedin size={18} />}
            >
              LinkedIn
            </Button>
            <Button
              variant="secondary"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
              icon={<Github size={18} />}
            >
              GitHub
            </Button>
            <Button
              variant="secondary"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
              icon={<FileText size={18} />}
            >
              Resume
            </Button>
            {/* Book a Call — commented out, Cal.com integration deferred (see .claude/v5-todo.md) */}
            {/* <Button variant="secondary" href="#contact" className="hero-link" icon={<CalendarClock size={18} />}>Book a Call</Button> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
