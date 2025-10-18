import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map(edu => (
            <div key={edu.id} className="education-card">
              <h3 className="card-title">{edu.degree}</h3>
              <h4 className="card-subtitle">{edu.institution}</h4>
              <p className="card-duration">{edu.duration}</p>
              <p className="card-description"><span style={{ fontWeight: 'bold' }}>Relevant Coursework: </span>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;