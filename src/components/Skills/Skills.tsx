import React, { useState } from 'react';
import { ExternalLink, Award, Wrench } from 'lucide-react';
import skillsData from '../../data/skills.json';
import certificationsData from '../../data/certifications.json';
import profileData from '../../data/profile.json';
import type { Skill, Certification, ProfileData } from '../../types';
import { formatText } from '../../utils/formatText';
import './Skills.scss';

const Skills: React.FC = () => {
  const skills = skillsData as Skill[];
  const certifications = certificationsData as Certification[];
  const profile = profileData as ProfileData;
  const [tab, setTab] = useState<'skills' | 'certifications'>('skills');

  const heading = tab === 'skills'
    ? profile.sectionHeadings?.skills
    : profile.sectionHeadings?.certifications;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-eyebrow">
          <span>05 / STACK</span>
        </div>
        <h2 className="section-headline">
          {heading ? formatText(heading.headline) : 'Skills & Certifications'}
        </h2>

        {/* Toggle — same pill style as project tabs */}
        <div className="sk-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={tab === 'skills'}
            className={`sk-tab ${tab === 'skills' ? 'active' : ''}`}
            onClick={() => setTab('skills')}
          >
            <Wrench size={15} />
            Skills
          </button>
          <button
            role="tab"
            aria-selected={tab === 'certifications'}
            className={`sk-tab ${tab === 'certifications' ? 'active' : ''}`}
            onClick={() => setTab('certifications')}
          >
            <Award size={15} />
            Certifications
          </button>
        </div>

        {/* Skills panel — numbered category rows, tiered pills */}
        {tab === 'skills' && (
          <div className="skill-stack sk-panel">
            {skills.map((skillGroup, i) => (
              <div className="skill-row" key={skillGroup.category}>
                <div>
                  <span className="skill-row-index">/ {String(i + 1).padStart(2, '0')}</span>
                  <div className="skill-row-name">{skillGroup.category}</div>
                </div>
                <div className="skill-pills-wrap">
                  {skillGroup.items.map(item => (
                    <span
                      key={item.name}
                      className={`skill-pill sk-tier-${item.tier ?? 'exposure'}`}
                    >
                      <span className="dot" aria-hidden="true" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications panel — 3-col grid, first row spans remainder */}
        {tab === 'certifications' && (() => {
          const total = certifications.length;
          const remainder = total % 3;
          const getSpanClass = (i: number) => {
            if (remainder === 0 || i >= remainder) return '';
            if (remainder === 1) return 'cert-span-full';
            return 'cert-span-half';
          };
          return (
            <div className="certifications-list sk-panel">
              {certifications.map((cert, i) => (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`certification-item ${getSpanClass(i)}`}
                >
                  <div className="cert-content">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.issueDate}</p>
                  </div>
                  <ExternalLink size={20} className="cert-icon" />
                </a>
              ))}
            </div>
          );
        })()}

      </div>
    </section>
  );
};

export default Skills;
