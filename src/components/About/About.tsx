import React from 'react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import './About.scss';

const About: React.FC = () => {
  const profile = profileData as ProfileData;
  const bioParagraphs = profile.bio.split('\n\n');

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="ab-t section-title">About Me</h2>
        <div className="about-grid">

          {/* Left — bio */}
          <div className="about-bio">
            {bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Right — engineering principles */}
          <div className="about-principles">
            <p className="principles-label">// ENGINEERING PRINCIPLES</p>
            <ul className="principles-list">
              {profile.principles.map((p, i) => (
                <li key={i} className="principle-item">
                  <span className="principle-chevron" aria-hidden="true">{'>'}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
