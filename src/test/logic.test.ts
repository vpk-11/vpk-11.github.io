import { describe, it, expect } from 'vitest';

// ─── Experience timeline window bounds ────────────────────────────────────────
// Extracted from Experience.tsx handleTimelineClick:
// setWindowStart(Math.min(i, Math.max(0, total - cardsShown)));

function computeWindowStart(i: number, total: number, cardsShown: number): number {
  return Math.min(i, Math.max(0, total - cardsShown));
}

describe('Experience timeline window bounds', () => {
  it('clicking first item → windowStart 0', () => {
    expect(computeWindowStart(0, 5, 2)).toBe(0);
  });

  it('clicking last item clamps to total - cardsShown', () => {
    expect(computeWindowStart(4, 5, 2)).toBe(3);
  });

  it('clicking middle item shifts window to that index', () => {
    expect(computeWindowStart(2, 5, 2)).toBe(2);
  });

  it('never goes below 0 when total <= cardsShown', () => {
    expect(computeWindowStart(0, 2, 2)).toBe(0);
    expect(computeWindowStart(1, 2, 2)).toBe(0);
  });

  it('single card shown — window always equals clicked index clamped', () => {
    expect(computeWindowStart(3, 5, 1)).toBe(3);
    expect(computeWindowStart(4, 5, 1)).toBe(4);
  });
});

// ─── Skills cert grid span logic ─────────────────────────────────────────────
// Extracted from Skills.tsx getSpanClass:
// remainder = total % 3
// i < remainder → span class; else ''

function getSpanClass(i: number, total: number): string {
  const remainder = total % 3;
  if (remainder === 0 || i >= remainder) return '';
  if (remainder === 1) return 'cert-span-full';
  return 'cert-span-half';
}

describe('Skills cert grid span logic', () => {
  it('total divisible by 3 → all cards normal (no span class)', () => {
    expect(getSpanClass(0, 3)).toBe('');
    expect(getSpanClass(1, 6)).toBe('');
    expect(getSpanClass(2, 9)).toBe('');
  });

  it('total % 3 === 1 → first card is cert-span-full, rest normal', () => {
    expect(getSpanClass(0, 4)).toBe('cert-span-full');
    expect(getSpanClass(1, 4)).toBe('');
    expect(getSpanClass(3, 4)).toBe('');
  });

  it('total % 3 === 2 → first two cards are cert-span-half, rest normal', () => {
    expect(getSpanClass(0, 5)).toBe('cert-span-half');
    expect(getSpanClass(1, 5)).toBe('cert-span-half');
    expect(getSpanClass(2, 5)).toBe('');
  });

  it('single cert → cert-span-full', () => {
    expect(getSpanClass(0, 1)).toBe('cert-span-full');
  });

  it('two certs → both cert-span-half', () => {
    expect(getSpanClass(0, 2)).toBe('cert-span-half');
    expect(getSpanClass(1, 2)).toBe('cert-span-half');
  });
});
