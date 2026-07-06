import React from 'react';
import './Marquee.scss';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speedSeconds: number;    // full loop duration
  pauseOnHover?: boolean;
  className?: string;
}

// Seamless infinite scroller: render the content block exactly twice,
// side by side, then animate the pair by exactly -50%. Because both
// halves are identical, the loop point is invisible regardless of
// content width or viewport size — no need to guess a repeat count.
const Marquee: React.FC<MarqueeProps> = ({
  children, direction = 'left', speedSeconds, pauseOnHover = false, className,
}) => {
  const trackClasses = [
    'marquee-track',
    direction === 'right' && 'marquee-track--reverse',
    pauseOnHover && 'marquee-track--pause-on-hover',
  ].filter(Boolean).join(' ');

  return (
    <div className={className ? `marquee ${className}` : 'marquee'}>
      <div
        className={trackClasses}
        style={{ '--marquee-duration': `${speedSeconds}s` } as React.CSSProperties}
      >
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
