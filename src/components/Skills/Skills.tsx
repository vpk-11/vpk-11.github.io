import React, { useState } from 'react';
import { ExternalLink, Award, Wrench } from 'lucide-react';
import skillsData from '../../data/skills.json';
import certificationsData from '../../data/certifications.json';
import type { Skill, Certification } from '../../types';
import './Skills.scss';

const Skills: React.FC = () => {
  const skills = skillsData as Skill[];
  const certifications = certificationsData as Certification[];
  const [tab, setTab] = useState<'skills' | 'certifications'>('skills');

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="sk-t section-title">Skills & Certifications</h2>

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

        {/* Skills panel */}
        {tab === 'skills' && (() => {
          const n = skills.length;
          const colClass = n === 4 ? 'sk-cols-4' : `sk-cols-${Math.min(n, 3)}`;
          return (
          <div className={`skills-grid ${colClass} sk-panel`}>
            {skills.map(skillGroup => (
              <div key={skillGroup.category} className="skill-category">
                <h4 className="category-title">{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map(skill => (
                    <span key={skill.name} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          );
        })()}

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