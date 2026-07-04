import React from 'react';
import extracurricularsData from '../../data/extracurriculars.json';
import type { BeyondTheCode as BeyondTheCodeType } from '../../types';
import { formatText } from '../../utils/formatText';
import { sectionNumber } from '../../data/sectionOrder';
import './BeyondTheCode.scss';

const BeyondTheCode: React.FC = () => {
  const data = extracurricularsData as BeyondTheCodeType;

  return (
    <section id="beyond-the-code" className="section beyond-section">
      <div className="container">

        <div className="section-eyebrow">
          <span>{sectionNumber('beyond-the-code')} / BEYOND THE CODE</span>
        </div>

        <h2 className="section-headline">{formatText(data.headline)}</h2>
        <p className="beyond-tagline">{data.tagline}</p>

        <div className="leadership-stack">
          {data.blocks.map((block, i) => (
            <div className="leadership-row" key={i}>
              <div>
                <div className="leadership-role">{block.role}</div>
                <div className="leadership-org">{block.org}</div>
                <div className="leadership-dates">{block.dates}</div>
                <ul className="leadership-bullets">
                  {block.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="leadership-metrics">
                {block.metrics.map((metric, k) => (
                  <div className="lmetric" key={k}>
                    <div className="lmetric-num">{metric.value}</div>
                    <div className="lmetric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BeyondTheCode;
