import React from 'react';
import './Panel.scss';

interface PanelProps {
  children: React.ReactNode;
  className?: string;   // page's own panel class, e.g. "resume-card" — carries padding/radius overrides
}

// Plain themed bordered box — no accent bar, no hover lift. Shared by
// About's side-card, Resume's resume-card/resume-preview-panel,
// ClosingCTA's cta-channel-card, and BeyondTheCode's lmetric. Content is
// arbitrary (bullets, number+label, form rows, an iframe) — that's what
// children is for.
const Panel: React.FC<PanelProps> = ({ children, className }) => (
  <div className={className ? `panel ${className}` : 'panel'}>{children}</div>
);

export default Panel;
