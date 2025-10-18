import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAccent } from '../../store/accentSlice';
import skillsData from '../../data/skills.json';
import type { Skill } from '../../types';
import './Skills.scss';

const Skills: React.FC = () => {
  const dispatch = useDispatch();
  const skills = skillsData as Skill[];

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
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map(skillGroup => (
            <div key={skillGroup.category} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;