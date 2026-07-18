import React from 'react';
import './Tab.scss';

interface TabProps {
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  count?: number;
  children: React.ReactNode;
  className?: string;   // page's own tab class, e.g. "sk-tab" — carries any color overrides
  id?: string;           // wired to aria-controls on the associated tabpanel
  controls?: string;     // id of the tabpanel this tab controls
}

// Pill-shaped toggle button, shared by Skills' skills/certifications switch
// and Projects' category tabs. `count` renders an optional numeric badge
// (Projects only — Skills just omits the prop). Roving tabindex (only the
// active tab is in the normal tab order) is part of the ARIA tabs pattern —
// arrow-key movement between tabs is handled by the parent's tablist
// onKeyDown, since only it knows the full set of sibling tabs.
const Tab: React.FC<TabProps> = ({ active, onClick, icon, count, children, className, id, controls }) => {
  const classes = ['tab', active && 'active', className].filter(Boolean).join(' ');

  return (
    <button
      id={id}
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      tabIndex={active ? 0 : -1}
      className={classes}
      onClick={onClick}
    >
      {icon}
      {children}
      {count !== undefined && <span className="tab-count">{count}</span>}
    </button>
  );
};

export default Tab;
