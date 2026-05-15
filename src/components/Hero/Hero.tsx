import React from 'react';
import { Github, Linkedin, FileText, MapPin } from 'lucide-react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
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

      <div className="hero-watermark" aria-hidden="true">VPK</div>

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
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
