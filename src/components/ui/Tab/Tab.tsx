import React from 'react';
import './Tab.scss';

interface TabProps {
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  count?: number;
  children: React.ReactNode;
  className?: string;   // page's own tab class, e.g. "sk-tab" — carries any color overrides
}

// Pill-shaped toggle button, shared by Skills' skills/certifications switch
// and Projects' category tabs. `count` renders an optional numeric badge
// (Projects only — Skills just omits the prop).
const Tab: React.FC<TabProps> = ({ active, onClick, icon, count, children, className }) => {
  const classes = ['tab', active && 'active', className].filter(Boolean).join(' ');

  return (
    <button
      role="tab"
      aria-selected={active}
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
