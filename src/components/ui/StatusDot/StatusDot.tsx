import React from 'react';
import './StatusDot.scss';

interface StatusDotProps {
  color?: 'primary' | 'secondary';   // secondary = genuine status indicators (default), primary = decorative use (e.g. Hero's ticker)
}

const StatusDot: React.FC<StatusDotProps> = ({ color = 'secondary' }) => {
  const classes = color === 'primary' ? 'status-pulse-dot status-pulse-dot--primary' : 'status-pulse-dot';
  return <span className={classes} aria-hidden="true" />;
};

export default StatusDot;
