import React from 'react';
import './InlineAction.scss';

interface InlineActionProps {
  as?: 'a' | 'button';   // 'a' for real navigation, 'button' for an in-page action (e.g. opening a modal)
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

// Boxless icon+text clickable — no border, no background. Renders <a> or
// <button> depending on whether it navigates or triggers an in-page action;
// the tag differs but the look doesn't, so this isn't called "Link" (it
// isn't always one) or "Button" (it has no box/shape — use ui/Button for that).
const InlineAction: React.FC<InlineActionProps> = ({
  as = 'a', href, icon, className, children, onClick, ariaLabel, target, rel,
}) => {
  const classes = className ? `inline-action ${className}` : 'inline-action';

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
    </a>
  );
};

export default InlineAction;
