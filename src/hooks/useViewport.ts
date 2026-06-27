import { useState, useEffect } from 'react';

export function useWindowWidth(): number {
  const [w, setW] = useState(() => window.innerWidth);
  useEffect(() => {
    let raf: number;
    const fn = () => { raf = requestAnimationFrame(() => setW(window.innerWidth)); };
    window.addEventListener('resize', fn);
    return () => {
      window.removeEventListener('resize', fn);
      cancelAnimationFrame(raf);
    };
  }, []);
  return w;
}

export function useWindowHeight(): number {
  const [h, setH] = useState(() => window.innerHeight);
  useEffect(() => {
    let raf: number;
    const fn = () => { raf = requestAnimationFrame(() => setH(window.innerHeight)); };
    window.addEventListener('resize', fn);
    return () => {
      window.removeEventListener('resize', fn);
      cancelAnimationFrame(raf);
    };
  }, []);
  return h;
}
