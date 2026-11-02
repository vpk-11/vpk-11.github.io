import React from 'react';
import './SectionHeader.scss';

interface SectionHeaderProps {
  headline: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ headline }) => (
  <h2 className="section-headline">{headline}</h2>
);

export default SectionHeader;
