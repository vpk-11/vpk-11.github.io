import React from 'react';
import { Github, Linkedin, FileText, MapPin } from 'lucide-react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import Button from '../../components/ui/Button/Button';
import StatusDot from '../../components/ui/StatusDot/StatusDot';
import './Hero.scss';

const Hero: React.FC = () => {
  const profile = profileData as ProfileData;
  const [firstName, ...rest] = profile.name.split(' ');
  const lastName = rest.join(' ');
  const shortWorkAuth = profile.workAuthorization
    .split('·')
    .slice(0, 2)
    .map(s => s.trim())
    .join(' · ');
  return (
    <section id="hero" className="section hero-section">

      <div className="container">
        <div className="hero-content">

          <h1 className="hero-name">
            <span className="hero-fn">{firstName}</span>
            <span className="hero-ln">{lastName}</span>
          </h1>

          <div className="hero-divider" aria-hidden="true" />

          <p className="hero-role">{profile.title}</p>

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
