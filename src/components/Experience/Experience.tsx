import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Calendar, MapPin } from 'lucide-react';
import { setAccent } from '../../store/accentSlice';
import experiencesData from '../../data/experiences.json';
import { formatText } from '../../utils/formatText';
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
              
              <div className="card-meta">
                <div className="meta-item">
                  <Calendar size={16} className="meta-icon" />
                  <span className="card-duration">{exp.duration}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} className="meta-icon" />
                  <span className="card-location">{exp.location}</span>
                </div>
              </div>
              
              <p className="card-description">{formatText(exp.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;