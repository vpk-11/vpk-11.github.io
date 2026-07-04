import React from 'react';
import { Linkedin, Github, FileText } from 'lucide-react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import './Footer.scss';

const MINI_NAV = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Resume', id: 'resume' },
  { name: 'Contact', id: 'contact' },
];

const Footer: React.FC = () => {
  const profile = profileData as ProfileData;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">

        <nav className="footer-nav" aria-label="Footer">
          {MINI_NAV.map(item => (
            <a key={item.id} href={`#${item.id}`} className="footer-nav-link">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="footer-channels">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Resume"
          >
            <FileText size={18} />
          </a>
        </div>

        <p className="footer-signature">
          &copy; {year} {profile.name}. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
