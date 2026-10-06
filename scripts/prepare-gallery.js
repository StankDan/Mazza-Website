/**
 * Priprema fotografije za stranicu "Galerija" (izleti, predstave, aktivnosti...).
 *
 * Sve fotografije stoje zajedno u folderu GALLERY_DIR, bez podele po kategorijama.
 * Slike se smanjuju kao i fotografije vrtica, idu u public/images/galerija/,
 * a spisak se upisuje u src/data/galleryPhotos.ts.
 *
 * Pokretanje (posle dodavanja novih fotografija):
 *   npm run galerija
 */

const fs = require('fs');
const path = require('path');
const { listImages, resizePhoto, photoLine } = require('./photo-utils');

const ROOT = path.resolve(__dirname, '..');

/** Folder sa originalnim fotografijama - promeniti ako se slike presele. */
const GALLERY_DIR = 'D:/Danijel/Projects/Mazza/Pomocni Materijali/Galerija';

async function main() {
  if (!fs.existsSync(GALLERY_DIR)) {
    throw new Error(`Nema foldera ${GALLERY_DIR}`);
  }

  const outDir = path.join(ROOT, 'public', 'images', 'galerija');
  // Stare slike se brisu, da ne ostanu one koje su uklonjene iz originala.
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const files = listImages(GALLERY_DIR);
  const photos = [];

  for (let i = 0; i < files.length; i += 1) {
    const name = `galerija-${String(i + 1).padStart(3, '0')}`;
    // Namerno jedna po jedna - slike su velike, pa se stedi memorija.
    // eslint-disable-next-line no-await-in-loop
    photos.push(await resizePhoto(path.join(GALLERY_DIR, files[i]), outDir, name, '/images/galerija'));
  }

  const lines = [
    '// Fotografije za stranicu "Galerija". Ovaj fajl pravi skripta',
    '// scripts/prepare-gallery.js (npm run galerija) - ne menjati rucno.',
    '',
    "import type { Photo } from './photos';",
    '',
    'export const GALLERY_PHOTOS: Photo[] = [',
    ...photos.map((photo) => photoLine(photo).replace(/^ {2}/, '')),
    '];',
    '',
  ];

  fs.writeFileSync(path.join(ROOT, 'src', 'data', 'galleryPhotos.ts'), lines.join('\n'), 'utf8');
  process.stdout.write(`\nGotovo: ${photos.length} fotografija, spisak u src/data/galleryPhotos.ts\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack}\n`);
  process.exit(1);
});
