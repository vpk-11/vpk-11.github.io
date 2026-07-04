import React from 'react';
import { Download } from 'lucide-react';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import { formatText } from '../../utils/formatText';
import { sectionNumber } from '../../data/sectionOrder';
import './Resume.scss';

function toPreviewUrl(url: string): string {
  return url.replace(/\/view.*$/, '/preview');
}

const Resume: React.FC = () => {
  const profile = profileData as ProfileData;
  const heading = profile.sectionHeadings?.resume;
  const meta = profile.resumeMeta;
  const shortTitle = profile.title.split('|')[0].trim();

  return (
    <section id="resume" className="section resume-section">
      <div className="container">

        {heading?.eyebrow && (
          <div className="section-eyebrow">
            <span>{sectionNumber('resume')} / {heading.eyebrow}</span>
          </div>
        )}

        <h2 className="section-headline">
          {heading ? formatText(heading.headline) : 'Resume'}
        </h2>

        <div className="resume-grid">
          <div className="resume-card">
            <div className="resume-card-label">// resume · PDF</div>
            <div className="resume-name">
              {profile.name} <span className="role">{shortTitle}</span>
            </div>
            <p className="resume-desc">{profile.tagline}</p>

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download"
            >
              <Download size={16} />
              Download PDF
            </a>

            {meta && (
              <>
                <div className="resume-meta-row"><span>Updated</span><span>{meta.updated}</span></div>
                <div className="resume-meta-row"><span>Format</span><span>{meta.format}</span></div>
                <div className="resume-meta-row"><span>Best for</span><span>{meta.bestFor}</span></div>
              </>
            )}
          </div>

          <div className="resume-preview-panel">
            <span className="resume-preview-tag">// live preview</span>
            <iframe
              src={toPreviewUrl(profile.resume)}
              title={`${profile.name} resume preview`}
              className="resume-preview-frame"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
