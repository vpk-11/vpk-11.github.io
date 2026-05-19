import React from 'react';
import { Linkedin, Github, FileText } from 'lucide-react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import './Contact.scss';

const Contact: React.FC = () => {
  const profile = profileData as ProfileData;
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        {/* Main contact content */}
        <div className="contact-main">
          <h2 className="co-t section-title">Get In Touch</h2>
          <p className="contact-text">
            {profile.txt}
          </p>

          {/* What I'm looking for */}
          <div className="contact-looking-for">
            <div className="looking-for-roles">
              <p className="looking-for-label">Open to</p>
              <div className="looking-for-tags">
                {profile.targetRoles.map(role => (
                  <span key={role} className="looking-for-tag">{role}</span>
                ))}
              </div>
            </div>
            <div className="looking-for-auth">
              <p className="looking-for-label">Work Authorization</p>
              <p className="auth-text">{profile.workAuthorization}</p>
            </div>
          </div>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <Linkedin size={24} />
            <span>Message on LinkedIn</span>
          </a>
        </div>

        {/* Footer pinned to bottom */}
        <div className="contact-footer">
          <p className="footer-copyright">
            © {year} Kaushik Parthasarathy. All rights reserved.
          </p>
          <div className="footer-links">
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
        </div>

      </div>
    </section>
  );
};

export default Contact;