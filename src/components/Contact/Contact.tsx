import React from 'react';
import { Linkedin } from 'lucide-react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import { formatText } from '../../utils/formatText';
import { sectionNumber } from '../../data/sectionOrder';
import './Contact.scss';

const Contact: React.FC = () => {
  const profile = profileData as ProfileData;
  const heading = profile.sectionHeadings?.contact;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        {/* Main contact content */}
        <div className="contact-main">
          {heading?.eyebrow && (
            <div className="section-eyebrow">
              <span>{sectionNumber('contact')} / {heading.eyebrow}</span>
            </div>
          )}
          <h2 className="section-headline">
            {heading ? formatText(heading.headline) : 'Get In Touch'}
          </h2>
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

      </div>
    </section>
  );
};

export default Contact;