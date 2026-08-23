import React from 'react';
import { ExternalLink } from 'lucide-react';
import skillsData from '../../data/skills.json';
import certificationsData from '../../data/certifications.json';
import generalData from '../../data/general.json';
import type { Skill, Certification, GeneralData } from '../../types';
import { formatText } from '../../utils/formatText';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import Tag from '../../components/ui/Tag/Tag';
import Card from '../../components/ui/Card/Card';
import './Skills.scss';

// Certifications continue the same numbered-row dossier as skills — no tab
// switch, no second header. The cert grid sits in the row's right-hand
// column same as a skill category's pill wrap.
const Skills: React.FC = () => {
  const skills = skillsData as Skill[];
  const certifications = certificationsData as Certification[];
  const general = generalData as GeneralData;
  const heading = general.sectionHeadings.skills;

  const certRemainder = certifications.length % 3;
  const getCertSpanClass = (i: number) => {
    if (certRemainder === 0 || i >= certRemainder) return '';
    return certRemainder === 1 ? 'cert-span-full' : 'cert-span-half';
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeader
          sectionId="skills"
          label="STACK"
          headline={heading ? formatText(heading.headline) : 'Skills'}
        />

        <div className="skill-stack">
          {skills.map((skillGroup, i) => (
            <div className="skill-row" key={skillGroup.category}>
              <div>
                <span className="skill-row-index">/ {String(i + 1).padStart(2, '0')}</span>
                <h3 className="skill-row-name">{skillGroup.category}</h3>
              </div>
              <div className="skill-pills-wrap">
                {skillGroup.items.map(item => (
                  <Tag key={item.name} variant="tiered" level={item.level ?? 1}>
                    {item.name}
                  </Tag>
                ))}
              </div>
            </div>
          ))}

          <div className="skill-row cert-row">
            <div>
              <span className="skill-row-index">/ {String(skills.length + 1).padStart(2, '0')}</span>
              <h3 className="skill-row-name">Certifications</h3>
            </div>
            <div className="certifications-list">
              {certifications.map((cert, i) => (
                <Card
                  key={cert.id}
                  as="a"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`certification-item ${getCertSpanClass(i)}`}
                >
                  <div className="cert-content">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.issueDate}</p>
                  </div>
                  <ExternalLink size={20} className="cert-icon" />
                </Card>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
