import React, { useEffect, useState } from 'react';
import webringFallback from '../../../data/webring-fallback.json';
import type { WebringData } from '../../../types';
import './WebringFooter.scss';

const WEBRING_URL = 'https://umaring.github.io/kaushikp.json';

const WebringFooter: React.FC = () => {
  const [webring, setWebring] = useState<WebringData>(webringFallback as WebringData);

  useEffect(() => {
    let cancelled = false;

    const fetchWebring = async (): Promise<void> => {
      try {
        const res = await fetch(WEBRING_URL);
        if (!res.ok) throw new Error(`Webring endpoint returned ${res.status}`);
        const data = (await res.json()) as WebringData;
        if (!cancelled) setWebring(data);
      } catch (err) {
        console.warn('Webring live fetch failed, keeping build-time fallback.', err);
      }
    };

    fetchWebring();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="webring-footer">
      <a href={webring.prev.url} className="webring-footer-neighbor">
        &larr; {webring.prev.name}
      </a>
      <a
        href="https://umaring.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="webring-footer-badge"
      >
        UMASS RING
      </a>
      <a href={webring.next.url} className="webring-footer-neighbor">
        {webring.next.name} &rarr;
      </a>
    </div>
  );
};

export default WebringFooter;
