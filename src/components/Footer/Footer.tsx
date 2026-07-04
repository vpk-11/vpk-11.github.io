import React from 'react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import { sectionNumber } from '../../data/sectionOrder';
import './Footer.scss';

const SECTION_LABELS: Record<string, string> = {
  hero: 'Home',
  about: 'About',
  education: 'Education',
  experience: 'Experience',
  projects: 'Projects',
  skills: 'Skills',
  resume: 'Resume',
  'beyond-the-code': 'Beyond the Code',
};

const NAVIGATE_IDS = ['hero', 'about', 'education', 'experience', 'projects'] as const;
const MORE_IDS = ['skills', 'resume', 'beyond-the-code'] as const;

const Footer: React.FC = () => {
  const profile = profileData as ProfileData;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        <div className="footer-col footer-signature-col">
          <p className="footer-copyright">&copy; {year} {profile.name}</p>
          <div className="footer-brandmark">
            <span>&mdash; A VPK Product</span>
          </div>
          <p className="footer-meta">Portfolio &middot; v5</p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Navigate</div>
          <nav className="footer-nav" aria-label="Footer navigate">
            {NAVIGATE_IDS.map(id => (
              <a key={id} href={`#${id}`} className="footer-nav-link">
                {sectionNumber(id)} / {SECTION_LABELS[id].toUpperCase()}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">More</div>
          <nav className="footer-nav" aria-label="Footer more">
            {MORE_IDS.map(id => (
              <a key={id} href={`#${id}`} className="footer-nav-link">
                {sectionNumber(id)} / {SECTION_LABELS[id].toUpperCase()}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Channels</div>
          <div className="footer-channels">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
              GITHUB
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
              LINKEDIN
            </a>
            {profile.availability && (
              <span className="footer-status">
                <span className="footer-status-dot" aria-hidden="true" />
                {profile.availability.toUpperCase()}
              </span>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
