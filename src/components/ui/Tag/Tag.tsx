import React from 'react';
import './Tag.scss';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'tiered';  // 'tiered' = dot indicator + level color (skill pills)
  level?: 1 | 2 | 3;                // only used when variant is 'tiered'
  className?: string;               // page's BEM modifier, e.g. "pr-tech-tag"
}

const Tag: React.FC<TagProps> = ({ children, variant = 'default', level = 1, className }) => {
  if (variant === 'tiered') {
    const classes = ['tag', 'tag--tiered', `tag--level-${level}`, className].filter(Boolean).join(' ');
    return (
      <span className={classes}>
        <span className="tag-dot" aria-hidden="true" />
        {children}
      </span>
    );
  }

  return <span className={className ? `tag ${className}` : 'tag'}>{children}</span>;
};

export default Tag;
