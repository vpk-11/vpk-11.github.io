// Single source of truth for section position numbers shown in each
// section's eyebrow (e.g. "03 / EDUCATION"). Must match the actual
// render order in App.tsx — if you reorder sections there, reorder
// this array too and every number updates automatically.
export const SECTION_ORDER = [
  'hero',
  'about',
  'education',
  'experience',
  'projects',
  'skills',
  'resume',
  'contact',
] as const;

export type SectionId = typeof SECTION_ORDER[number];

export function sectionNumber(id: SectionId): string {
  const index = SECTION_ORDER.indexOf(id);
  return String(index + 1).padStart(2, '0');
}
