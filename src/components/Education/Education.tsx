import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import educationData from '../../data/education.json';
import profileData from '../../data/profile.json';
import type { Education as EducationType, ProfileData } from '../../types';
import { formatText } from '../../utils/formatText';
import './Education.scss';

const Education: React.FC = () => {
  const education = educationData as EducationType[];
  const profile = profileData as ProfileData;
  const headline = profile.sectionHeadings?.education.headline;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="ed-t section-title">{headline ? formatText(headline) : 'Education'}</h2>
        <div className="education-grid">
          {education.map(edu => (
            <div key={edu.id} className="education-card">

              <h3 className="ed-ct card-title">{edu.degree}</h3>
              <h4 className="ed-cs card-subtitle">{edu.institution}</h4>

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

              {/* Coursework tags */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="ed-coursework">
                  <p className="coursework-label">Relevant Coursework</p>
                  <div className="coursework-tags">
                    {edu.coursework.map(course => (
                      <span key={course} className="coursework-tag">{course}</span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;