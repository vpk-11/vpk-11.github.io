// Section render order, used by the Navbar's active-section tracking.
// Must match the order in App.tsx: reorder both together.
export const SECTION_ORDER = [
  'hero',
  'about',
  'education',
  'experience',
  'projects',
  'skills',
  'resume',
  'beyond-the-code',
  'closing-cta',
] as const;
