import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const BASE = 'https://rea.co';
const OUT = join(process.cwd(), 'public', 'sites', 'rea-co', 'shared', 'blog');
mkdirSync(OUT, { recursive: true });

const posts = [
  { file: 'outsourced-real-estate-accounting-in-denver-hero.webp', url: '/images/blog/outsourced-real-estate-accounting-in-denver-hero.webp' },
  { file: 'mri-vs-yardi-voyager-commercial-portfolios-hero.webp', url: '/images/blog/mri-vs-yardi-voyager-commercial-portfolios-hero.webp' },
  { file: 'critical-date-tracking-lease-abstraction-options-hero.webp', url: '/images/blog/critical-date-tracking-lease-abstraction-options-hero.webp' },
  { file: 'quickbooks-classes-vs-locations-rental-property-hero.webp', url: '/images/blog/quickbooks-classes-vs-locations-rental-property-hero.webp' },
  { file: 'commercial-real-estate-accounting-in-charlotte-hero.webp', url: '/images/blog/commercial-real-estate-accounting-in-charlotte-hero.webp' },
  { file: 'straight-line-rent-commercial-landlords-deferred-hero.webp', url: '/images/blog/straight-line-rent-commercial-landlords-deferred-hero.webp' },
  { file: 'outsourced-accounting-property-management-companies-seattle-hero.webp', url: '/images/blog/outsourced-accounting-property-management-companies-seattle-hero.webp' },
  { file: 'lihtc-compliance-accounting-income-certifications-hero.webp', url: '/images/blog/lihtc-compliance-accounting-income-certifications-hero.webp' },
  { file: 'outsourced-real-estate-accounting-in-orange-county-hero.webp', url: '/images/blog/outsourced-real-estate-accounting-in-orange-county-hero.webp' },
  { file: 'rubs-utility-billback-accounting-hero.webp', url: '/images/blog/rubs-utility-billback-accounting-hero.webp' },
  { file: 'commercial-real-estate-accounting-seattle-hero.webp', url: '/images/blog/commercial-real-estate-accounting-seattle-hero.webp' },
  { file: 'hoa-special-assessment-accounting-billing-hero.webp', url: '/images/blog/hoa-special-assessment-accounting-billing-hero.webp' },
];

async function download(p) {
  const url = BASE + p.url;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    });
    if (!res.ok) {
      console.error(`FAIL ${p.file}: ${res.status}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(join(OUT, p.file), buf);
    console.log(`OK ${p.file} (${(buf.length / 1024).toFixed(1)} KB)`);
  } catch (e) {
    console.error(`ERR ${p.file}: ${e.message}`);
  }
}

const batchSize = 4;
for (let i = 0; i < posts.length; i += batchSize) {
  await Promise.all(posts.slice(i, i + batchSize).map(download));
}
console.log('Done.');