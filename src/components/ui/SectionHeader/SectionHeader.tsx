import React from 'react';
import { sectionNumber } from '../../../data/sectionOrder';
import type { SectionId } from '../../../data/sectionOrder';
import './SectionHeader.scss';

interface SectionHeaderProps {
  sectionId: SectionId;
  label: string;
  suffix?: React.ReactNode;
  decoration?: React.ReactNode;
  show?: boolean;
  headline?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionId, label, suffix, decoration, show = true, headline,
}) => (
  <>
    {show && (
      <div className="section-eyebrow">
        <span>{sectionNumber(sectionId)} / {label}{decoration}</span>
        {suffix}
      </div>
    )}
    {headline !== undefined && <h2 className="section-headline">{headline}</h2>}
  </>
);

export default SectionHeader;
