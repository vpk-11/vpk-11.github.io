import React, { useState } from 'react';
import { ExternalLink, Award, Wrench } from 'lucide-react';
import skillsData from '../../data/skills.json';
import certificationsData from '../../data/certifications.json';
import generalData from '../../data/general.json';
import type { Skill, Certification, GeneralData } from '../../types';
import { formatText } from '../../utils/formatText';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import Tag from '../../components/ui/Tag/Tag';
import Card from '../../components/ui/Card/Card';
import Tab from '../../components/ui/Tab/Tab';
import './Skills.scss';

const Skills: React.FC = () => {
  const skills = skillsData as Skill[];
  const certifications = certificationsData as Certification[];
  const general = generalData as GeneralData;
  const [tab, setTab] = useState<'skills' | 'certifications'>('skills');

  const heading = tab === 'skills'
    ? general.sectionHeadings.skills
    : general.sectionHeadings.certifications;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeader
          sectionId="skills"
          label="STACK"
          headline={heading ? formatText(heading.headline) : 'Skills & Certifications'}
        />

        {/* Toggle — same pill style as project tabs */}
        <div className="sk-tabs" role="tablist">
          <Tab active={tab === 'skills'} onClick={() => setTab('skills')} className="sk-tab" icon={<Wrench size={15} />}>
            Skills
          </Tab>
          <Tab active={tab === 'certifications'} onClick={() => setTab('certifications')} className="sk-tab" icon={<Award size={15} />}>
            Certifications
          </Tab>
        </div>

        {/* Skills panel — numbered category rows, tiered pills */}
        {tab === 'skills' && (
          <div className="skill-stack sk-panel">
            {skills.map((skillGroup, i) => (
              <div className="skill-row" key={skillGroup.category}>
                <div>
                  <span className="skill-row-index">/ {String(i + 1).padStart(2, '0')}</span>
                  <div className="skill-row-name">{skillGroup.category}</div>
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
          </div>
        )}

        {/* Certifications panel — 3-col grid, first row spans remainder */}
        {tab === 'certifications' && (() => {
          const total = certifications.length;
          const remainder = total % 3;
          const getSpanClass = (i: number) => {
            if (remainder === 0 || i >= remainder) return '';
            if (remainder === 1) return 'cert-span-full';
            return 'cert-span-half';
          };
          return (
            <div className="certifications-list sk-panel">
              {certifications.map((cert, i) => (
                <Card
                  key={cert.id}
                  as="a"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`certification-item ${getSpanClass(i)}`}
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
          );
        })()}

      </div>
    </section>
  );
};

export default Skills;
