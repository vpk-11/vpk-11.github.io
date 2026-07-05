import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import { formatText } from '../../utils/formatText';
import { sectionNumber } from '../../data/sectionOrder';
import './ClosingCTA.scss';

const ClosingCTA: React.FC = () => {
  const profile = profileData as ProfileData;
  const cta = profile.closingCta;

  if (!cta) return null;

  const headlineLines = cta.headline.split('\n');

  return (
    <section id="closing-cta" className="section closing-cta-section">
      <div className="container">

        {cta.eyebrow && (
          <div className="section-eyebrow">
            <span>{sectionNumber('closing-cta')} / {cta.eyebrow} &mdash; REF_{sectionNumber('closing-cta')}</span>
          </div>
        )}

        <h2 className="closing-cta-headline">
          {headlineLines.map((line, i) => (
            <span className="closing-cta-line" key={i}>{formatText(line)}</span>
          ))}
        </h2>

        <p className="closing-cta-tagline">{formatText(cta.tagline)}</p>

        {cta.channels.length > 0 && (
          <div className="closing-cta-channels">
            {cta.channels.map((channel, i) => (
              <div className="cta-channel-card" key={i}>
                <div className="cta-channel-label">// {channel.label}</div>
                <div className="cta-channel-value">{channel.value}</div>
                <div className="cta-channel-caption">{channel.caption}</div>
              </div>
            ))}
          </div>
        )}

        <div className="closing-cta-actions">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-icon-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-icon-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          {/* Book a Call — commented out, Cal.com integration deferred (see .claude/v5-todo.md) */}
          {/* <a href="#closing-cta" className="cta-pill">Book a Call</a> */}
        </div>

      </div>
    </section>
  );
};

export default ClosingCTA;
