import React from 'react';
import { Download } from 'lucide-react';
import profileData from '../../data/profile.json';
import generalData from '../../data/general.json';
import type { ProfileData, GeneralData } from '../../types';
import { formatText } from '../../utils/formatText';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import Button from '../../components/ui/Button/Button';
import Panel from '../../components/ui/Panel/Panel';
import './Resume.scss';

function toPreviewUrl(url: string): string {
  return url.replace(/\/view.*$/, '/preview');
}

const Resume: React.FC = () => {
  const profile = profileData as ProfileData;
  const general = generalData as GeneralData;
  const heading = general.sectionHeadings.resume;
  const meta = general.resumeMeta;
  const shortTitle = profile.title.split('|')[0].trim();

  return (
    <section id="resume" className="section resume-section">
      <div className="container">

        <SectionHeader
          sectionId="resume"
          label={heading?.eyebrow ?? ''}
          show={!!heading?.eyebrow}
          headline={heading ? formatText(heading.headline) : 'Resume'}
        />

        <div className="resume-grid">
          <Panel className="resume-card">
            <div className="resume-card-label">// resume · PDF</div>
            <div className="resume-name">
              {profile.name} <span className="role">{shortTitle}</span>
            </div>
            <p className="resume-desc">{profile.tagline}</p>

            <Button
              variant="primary"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download"
              icon={<Download size={16} />}
            >
              Download PDF
            </Button>

            {meta && (
              <>
                <div className="resume-meta-row"><span>Updated</span><span>{meta.updated}</span></div>
                <div className="resume-meta-row"><span>Format</span><span>{meta.format}</span></div>
                <div className="resume-meta-row"><span>Best for</span><span>{meta.bestFor}</span></div>
              </>
            )}
          </Panel>

          <Panel className="resume-preview-panel">
            <span className="resume-preview-tag">// live preview</span>
            <iframe
              src={toPreviewUrl(profile.resume)}
              title={`${profile.name} resume preview`}
              className="resume-preview-frame"
              loading="lazy"
              tabIndex={-1}
            />
          </Panel>
        </div>

      </div>
    </section>
  );
};

export default Resume;
