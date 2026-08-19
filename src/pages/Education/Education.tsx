import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import educationData from '../../data/education.json';
import generalData from '../../data/general.json';
import type { Education as EducationType, GeneralData } from '../../types';
import { formatText } from '../../utils/formatText';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import Tag from '../../components/ui/Tag/Tag';
import { CardMeta } from '../../components/ui/Card/Card';
import './Education.scss';

const Education: React.FC = () => {
  const education = educationData as EducationType[];
  const general = generalData as GeneralData;
  const headline = general.sectionHeadings.education.headline;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <SectionHeader
          sectionId="education"
          label="EDUCATION"
          headline={headline ? formatText(headline) : 'Education'}
        />
        <div className="education-stack">
          {education.map(edu => (
            <div className="edu-row" key={edu.id}>

              <h3 className="ed-ct edu-degree">{edu.degree}</h3>
              <h4 className="ed-cs edu-institution">{edu.institution}</h4>

              <CardMeta
                items={[
                  { icon: <Calendar size={14} className="edu-meta-icon" />, text: edu.duration, textClassName: 'edu-meta-text' },
                  { icon: <MapPin size={14} className="edu-meta-icon" />, text: edu.location, textClassName: 'edu-meta-text' },
                ]}
              />

              {edu.gpa && (
                <div className="edu-gpa">
                  <Award size={16} className="edu-gpa-icon" />
                  <span className="edu-gpa-text">GPA: {edu.gpa}</span>
                </div>
              )}

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="edu-coursework">
                  <p className="edu-coursework-label">Relevant Coursework</p>
                  <div className="edu-coursework-tags">
                    {edu.coursework.map(course => (
                      <Tag key={course} className="edu-coursework-tag">{course}</Tag>
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
