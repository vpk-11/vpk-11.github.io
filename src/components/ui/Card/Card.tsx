import React from 'react';
import './Card.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;   // page's own card class, e.g. "education-card" — carries any hover-transform override
  as?: 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

// card-base + accent-bar-left, shared by Education, Experience,
// Certifications, and Projects. Each page adds its own hover transform
// (or none) and can override the accent bar's shape as a page-level
// override — see pages/Education/Education.scss and pages/Skills/Skills.scss
// for the translateX distances, pages/Projects/Projects.scss for the
// left-bar-to-top-bar override.
const Card: React.FC<CardProps> = ({ children, className, as = 'div', href, target, rel, onClick }) => {
  const classes = className ? `card ${className}` : 'card';

  if (as === 'a') {
    return <a href={href} target={target} rel={rel} className={classes} onClick={onClick}>{children}</a>;
  }

  return <div className={classes} onClick={onClick}>{children}</div>;
};

interface CardMetaItem {
  icon: React.ReactNode;
  text: string;
  textClassName?: string;
}

interface CardMetaProps {
  items: CardMetaItem[];
}

// Icon + text row (duration, location, ...), shared by Education and Experience.
export const CardMeta: React.FC<CardMetaProps> = ({ items }) => (
  <div className="card-meta">
    {items.map((item, i) => (
      <div className="meta-item" key={i}>
        {item.icon}
        <span className={item.textClassName}>{item.text}</span>
      </div>
    ))}
  </div>
);

export default Card;
