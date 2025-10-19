import React, { useEffect } from 'react';
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            dispatch(setAccent('yellow'));
          }
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
        
        <div className="skills-certifications-wrapper">
          {/* Skills Grid - 2 columns */}
          <div className="skills-container">
            <h3 className="sk-st subsection-title">
              <Wrench size={24} />
              Skills
            </h3>
            <div className="skills-grid">
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
          </div>

          {/* Certifications - 1 column */}
          <div className="certifications-container">
            <h3 className="sk-st subsection-title">
              <Award size={24} />
              Certifications
            </h3>
            <div className="certifications-list">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;