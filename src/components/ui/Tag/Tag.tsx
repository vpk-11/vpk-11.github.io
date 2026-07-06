import React from 'react';
import './Tag.scss';

interface TagProps {
  children: React.ReactNode;
  className?: string;   // page's BEM modifier, e.g. "pr-tech-tag"
}

const Tag: React.FC<TagProps> = ({ children, className }) => (
  <span className={className ? `tag ${className}` : 'tag'}>{children}</span>
);

export default Tag;
