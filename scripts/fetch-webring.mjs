// Fetches UMass Web Ring neighbor data at build time and writes it to
// src/data/webring-fallback.json. Runs as `prebuild` so the build never
// depends on the ring endpoint being reachable or the members.json PR
// having merged upstream.
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const WEBRING_URL = 'https://umaring.github.io/kaushikp.json';
const OUTPUT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/data/webring-fallback.json'
);

const PLACEHOLDER = {
  prev: { id: 'placeholder', name: 'TBD', url: '#' },
  member: { id: 'kaushikp', name: 'Kaushik Parthasarathy', url: 'https://vpk-11.github.io' },
  next: { id: 'placeholder', name: 'TBD', url: '#' },
};

async function fetchWebring() {
  try {
    const res = await fetch(WEBRING_URL);
    if (!res.ok) throw new Error(`Webring endpoint returned ${res.status}`);
    const data = await res.json();
    await writeFile(OUTPUT_PATH, JSON.stringify(data, null, 2) + '\n');
    console.log('Webring data fetched.');
  } catch (err) {
    console.warn(`Webring fetch failed, using placeholder: ${err.message}`);
    await writeFile(OUTPUT_PATH, JSON.stringify(PLACEHOLDER, null, 2) + '\n');
  }
}

fetchWebring();
