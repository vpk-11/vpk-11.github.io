import React from 'react';
import './Button.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  as?: 'a' | 'button';
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant, as = 'a', href, icon, className, children, onClick, ariaLabel, target, rel,
}) => {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ');

  if (as === 'button') {
    return (
      <button type="button" className={classes} onClick={onClick} aria-label={ariaLabel}>
        {icon}
        {children}
      </button>
    );
  }

  return (
    <a href={href} target={target} rel={rel} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {icon}
      {children}
      {target === '_blank' && <span className="sr-only"> (opens in new tab)</span>}
    </a>
  );
};

export default Button;
