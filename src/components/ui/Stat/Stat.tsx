import React from 'react';
import './Stat.scss';

interface StatProps {
  value: string | number;
  label: string;
  variant?: 'floating' | 'panel';
  className?: string;
}

const Stat: React.FC<StatProps> = ({ value, label, variant = 'floating', className = '' }) => {
  return (
    <div className={`stat stat--${variant} ${className}`.trim()}>
      <div className="stat-num">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default Stat;
