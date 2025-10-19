import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Calendar, MapPin, Award } from 'lucide-react';
import { setAccent } from '../../store/accentSlice';
import educationData from '../../data/education.json';
import type { Education as EducationType } from '../../types';
import './Education.scss';

const Education: React.FC = () => {
  const dispatch = useDispatch();
  const education = educationData as EducationType[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            dispatch(setAccent('purple'));
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <section id="education" className="section education-section" data-accent="purple">
      <div className="container">
        <h2 className="ed-t section-title">Education</h2>
        <div className="education-grid">
          {education.map(edu => (
            <div key={edu.id} className="education-card">
              <h3 className="ed-ct card-title">{edu.degree}</h3>
              <h4 className="card-subtitle">{edu.institution}</h4>
              
              <div className="card-meta">
                <div className="meta-item">
                  <Calendar size={16} className="ed-mi meta-icon" />
                  <span className="card-duration">{edu.duration}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} className="ed-mi meta-icon" />
                  <span className="card-location">{edu.location}</span>
                </div>
              </div>
              
              {edu.gpa && (
                <div className="ed-gpa card-gpa">
                  <Award size={16} className="gpa-icon" />
                  <span className="gpa-text">GPA: {edu.gpa}</span>
                </div>
              )}
              
              <p className="card-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;