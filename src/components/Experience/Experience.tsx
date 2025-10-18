import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAccent } from '../../store/accentSlice';
import experiencesData from '../../data/experiences.json';
import type { Experience as ExperienceType } from '../../types';
import './Experience.scss';

const Experience: React.FC = () => {
  const dispatch = useDispatch();
  const experiences = experiencesData as ExperienceType[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            dispatch(setAccent('blue'));
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <section id="experience" className="section experience-section" data-accent="blue">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card">
              <h3 className="card-title">{exp.role}</h3>
              <h4 className="card-subtitle">{exp.company}</h4>
              <p className="card-duration">{exp.duration} | {exp.location}</p>
              <p className="card-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;