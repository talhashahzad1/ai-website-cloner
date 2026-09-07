import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const SITE = 'rea-co';
const PAGE = 'root-00000000';
const BASE = `https://rea.co`;
const OUT = join(process.cwd(), 'public', 'sites', SITE, PAGE, 'images');
const SHARED = join(process.cwd(), 'public', 'sites', SITE, 'shared');

mkdirSync(OUT, { recursive: true });
mkdirSync(SHARED, { recursive: true });

const assets = [
  // Logo (shared)
  { url: `${BASE}/images/rea-logo.png`, out: join(SHARED, 'rea-logo.png') },
  // Hero
  { url: `${BASE}/images/skyline-dusk.webp`, out: join(OUT, 'skyline-dusk.webp') },
  // About
  { url: `${BASE}/images/founders-adam-mark.webp`, out: join(OUT, 'founders-adam-mark.webp') },
  // Software logos
  { url: `${BASE}/images/appfolio.webp`, out: join(OUT, 'appfolio.webp') },
  { url: `${BASE}/images/buildium.webp`, out: join(OUT, 'buildium.webp') },
  { url: `${BASE}/images/rent-manager.webp`, out: join(OUT, 'rent-manager.webp') },
  { url: `${BASE}/images/entrata.png`, out: join(OUT, 'entrata.png') },
  { url: `${BASE}/images/quickbooks.png`, out: join(OUT, 'quickbooks.png') },
  { url: `${BASE}/images/mri.webp`, out: join(OUT, 'mri.webp') },
  // Services
  { url: `${BASE}/images/residential-street.webp`, out: join(OUT, 'residential-street.webp') },
  // Industries
  { url: `${BASE}/images/commercial-aerial.webp`, out: join(OUT, 'commercial-aerial.webp') },
  // Team
  { url: `${BASE}/images/mark-kappelman-avatar.png`, out: join(OUT, 'mark-kappelman-avatar.png') },
  { url: `${BASE}/images/adam-eatros.png`, out: join(OUT, 'adam-eatros.png') },
  { url: `${BASE}/images/sharifa.png`, out: join(OUT, 'sharifa.png') },
  { url: `${BASE}/images/will.png`, out: join(OUT, 'will.png') },
  // Media logos
  { url: `${BASE}/images/fox-business.webp`, out: join(OUT, 'fox-business.webp') },
  { url: `${BASE}/images/bloomberg-logo.webp`, out: join(OUT, 'bloomberg-logo.webp') },
];

async function download(url, outPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(outPath, buf);
    console.log(`✓ ${url.split('/').pop()} (${buf.length} bytes)`);
  } catch (e) {
    console.error(`✗ ${url.split('/').pop()}: ${e.message}`);
  }
}

// Download 4 at a time
async function downloadAll() {
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    await Promise.all(batch.map(a => download(a.url, a.out)));
  }
}

downloadAll().then(() => console.log('\nDone!'));
