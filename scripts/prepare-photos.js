/**
 * Priprema fotografije vrtica za sajt.
 *
 * Originali su ogromni (8192 px, 15-30 MB po slici), pa se ovde smanjuju na
 * dve velicine: 1600 px za prikaz preko celog ekrana i 800 px za mrezu slicica.
 * Rezultat ide u public/images/vrtici/<vrtic>/, a spisak slika se upisuje u
 * src/data/photos.ts (odatle ih koriste stranice).
 *
 * Pokretanje (posle dodavanja novih fotografija):
 *   npm run slike
 */

const fs = require('fs');
const path = require('path');
const { listImages, resizePhoto, photoLine } = require('./photo-utils');

const ROOT = path.resolve(__dirname, '..');

/** Folderi sa originalnim fotografijama - promeniti ako se slike presele. */
const SOURCES = [
  { id: 'mazza-1', dir: 'D:/Danijel/Projects/Mazza/Pomocni Materijali/Slike Maza 1' },
  { id: 'mazza-2', dir: 'D:/Danijel/Projects/Mazza/Pomocni Materijali/Slike Maza 2' },
  { id: 'mazza-3', dir: 'D:/Danijel/Projects/Mazza/Pomocni Materijali/Slike Maza 3' },
];

async function processLocation(source) {
  const outDir = path.join(ROOT, 'public', 'images', 'vrtici', source.id);
  fs.mkdirSync(outDir, { recursive: true });

  if (!fs.existsSync(source.dir)) {
    process.stdout.write(`Preskacem ${source.id}: nema foldera ${source.dir}\n`);
    return [];
  }

  const files = listImages(source.dir);
  const photos = [];

  for (let i = 0; i < files.length; i += 1) {
    const name = `${source.id}-${String(i + 1).padStart(2, '0')}`;
    // Namerno jedna po jedna - slike su velike, pa se stedi memorija.
    // eslint-disable-next-line no-await-in-loop
    photos.push(await resizePhoto(path.join(source.dir, files[i]), outDir, name, `/images/vrtici/${source.id}`));
  }

  return photos;
}

async function main() {
  const result = {};

  for (const source of SOURCES) {
    // Namerno jedan po jedan - slike su velike, pa se stedi memorija.
    // eslint-disable-next-line no-await-in-loop
    result[source.id] = await processLocation(source);
  }

  const lines = [
    '// Fotografije vrtica. Ovaj fajl pravi skripta scripts/prepare-photos.js',
    '// (npm run slike) - ne menjati rucno.',
    '',
    'export interface Photo {',
    '  src: string;',
    '  thumb: string;',
    '  width: number;',
    '  height: number;',
    '}',
    '',
    'export const PHOTOS: Record<string, Photo[]> = {',
  ];

  Object.keys(result).forEach((id) => {
    lines.push(`  '${id}': [`);
    result[id].forEach((photo) => {
      lines.push(photoLine(photo));
    });
    lines.push('  ],');
  });

  lines.push('};', '', '/** Fotografije jednog vrtica (prazna lista ako ih jos nema). */');
  lines.push('export function photosFor(locationId: string): Photo[] {');
  lines.push('  return PHOTOS[locationId] || [];');
  lines.push('}');
  lines.push('');

  fs.writeFileSync(path.join(ROOT, 'src', 'data', 'photos.ts'), lines.join('\n'), 'utf8');

  const total = Object.values(result).reduce((sum, list) => sum + list.length, 0);
  process.stdout.write(`\nGotovo: ${total} fotografija, spisak u src/data/photos.ts\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack}\n`);
  process.exit(1);
});
