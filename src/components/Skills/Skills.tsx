import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ExternalLink, Award, Wrench } from 'lucide-react';
import { setAccent } from '../../store/accentSlice';
import skillsData from '../../data/skills.json';
import certificationsData from '../../data/certifications.json';
import type { Skill, Certification } from '../../types';
import './Skills.scss';

const Skills: React.FC = () => {
  const dispatch = useDispatch();
  const skills = skillsData as Skill[];
  const certifications = certificationsData as Certification[];
  const [tab, setTab] = useState<'skills' | 'certifications'>('skills');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) dispatch(setAccent('yellow'));
        });
      },
      { threshold: 0.5 }
    );
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <section id="skills" className="section skills-section" data-accent="yellow">
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

        {/* Skills panel — original layout unchanged */}
        {tab === 'skills' && (
          <div className="skills-grid sk-panel">
            {skills.map(skillGroup => (
              <div key={skillGroup.category} className="skill-category">
                <h4 className="category-title">{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications panel — original layout unchanged */}
        {tab === 'certifications' && (
          <div className="certifications-list sk-panel">
            {certifications.map(cert => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-item"
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
        )}

      </div>
    </section>
  );
};

export default Skills;