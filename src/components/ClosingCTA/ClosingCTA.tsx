import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import { formatText } from '../../utils/formatText';
import './ClosingCTA.scss';

const ClosingCTA: React.FC = () => {
  const profile = profileData as ProfileData;
  const cta = profile.closingCta;

  if (!cta) return null;

  return (
    <section id="closing-cta" className="section closing-cta-section">
      <div className="container closing-cta-inner">
        <h2 className="closing-cta-headline">{formatText(cta.headline)}</h2>
        <p className="closing-cta-tagline">{cta.tagline}</p>

        <div className="closing-cta-links">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="closing-cta-link closing-cta-link-primary"
          >
            <Linkedin size={18} />
            <span>Message on LinkedIn</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="closing-cta-link closing-cta-link-secondary"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
