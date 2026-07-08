import React from 'react';
import profileData from '../../data/profile.json';
import generalData from '../../data/general.json';
import type { ProfileData, GeneralData } from '../../types';
import { formatText } from '../../utils/formatText';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import Panel from '../../components/ui/Panel/Panel';
import Stat from '../../components/ui/Stat/Stat';
import './About.scss';

const About: React.FC = () => {
  const profile = profileData as ProfileData;
  const general = generalData as GeneralData;
  const bioParagraphs = profile.bio.split('\n\n');
  const heading = general.sectionHeadings.about;
  const sidebar = profile.aboutSidebar;
  const stats = profile.aboutStats ?? [];

  return (
    <section id="about" className="section about-section">
      <div className="container">

        <SectionHeader
          sectionId="about"
          label="ABOUT"
          headline={heading ? formatText(heading.headline) : 'About Me'}
        />

        <div className="about-grid">

          {/* Left — bio panel */}
          <div className="about-panel">
            {bioParagraphs.map((para, i) => (
              <React.Fragment key={i}>
                <p className={i === 0 ? 'dropcap-p' : 'about-body-p'}>{para}</p>
                {i === 0 && heading?.tagline && (
                  <div className="about-pullquote">&ldquo;{heading.tagline}&rdquo;</div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Right — sidebar cards */}
          {sidebar && (
            <div className="about-sidebar">
              <Panel className="side-card">
                <div className="side-card-title">Principles</div>
                <div className="side-list">
                  {sidebar.principles.map((p, i) => (
                    <div className="side-list-item" key={i}>
                      <span className="dot" aria-hidden="true" />
                      {p}
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel className="side-card">
                <div className="side-card-title">Currently Building</div>
                <div className="side-list">
                  {sidebar.currentlyBuilding.map((item, i) => (
                    <div className="side-list-item" key={i}>
                      <span className="dot" aria-hidden="true" />
                      {item.name} · {item.description}
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel className="side-card">
                <div className="side-card-title">Open To</div>
                <div className="side-list">
                  {sidebar.openTo.map((role, i) => (
                    <div className="side-list-item" key={i}>
                      <span className="dot" aria-hidden="true" />
                      {role}
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          )}

        </div>

        {stats.length > 0 && (
          <div className="stat-row">
            {stats.map((stat, i) => (
              <div className="stat-card" key={i}>
                <Stat value={stat.value} label={stat.label} variant="floating" />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default About;
