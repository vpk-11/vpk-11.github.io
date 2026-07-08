import React from 'react';
import { PATH_1, PATH_2, PATH_3, PATH_4, PATH_5 } from '../../../hooks/useDynamicFavicon';

interface VpkMarkProps {
  size?: number;
  className?: string;
}

// The VPK monogram, reusing the same letterform paths as the dynamic
// favicon (useDynamicFavicon.ts) instead of a duplicated asset — fill
// is currentColor so it follows whatever text color it's placed in.
const VpkMark: React.FC<VpkMarkProps> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1024 1024"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d={PATH_1} />
    <path d={PATH_2} />
    <path d={PATH_3} />
    <path d={PATH_4} />
    <path d={PATH_5} />
  </svg>
);

export default VpkMark;
