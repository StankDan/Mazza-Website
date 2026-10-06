/**
 * Zajednicko za skripte sa fotografijama: smanjivanje jedne slike na dve
 * velicine (1600 px za prikaz preko celog ekrana i 800 px za mrezu slicica).
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const LARGE_WIDTH = 1600;
const THUMB_WIDTH = 800;
const QUALITY = 80;

/** Fotografije iz foldera, poredjane po imenu fajla. */
function listImages(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png)$/i.test(file))
    .sort();
}

/**
 * Pravi <name>.jpg i <name>-mala.jpg u outDir i vraca zapis za spisak slika.
 * publicPath je adresa foldera na sajtu, npr. /images/galerija/izleti.
 */
async function resizePhoto(input, outDir, name, publicPath) {
  // .rotate() postuje EXIF orijentaciju, da slike ne budu naopako.
  const image = sharp(input).rotate();
  const meta = await image.metadata();

  const large = await image
    .clone()
    .resize({ width: LARGE_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toBuffer({ resolveWithObject: true });

  const thumb = await image
    .clone()
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toBuffer({ resolveWithObject: true });

  fs.writeFileSync(path.join(outDir, `${name}.jpg`), large.data);
  fs.writeFileSync(path.join(outDir, `${name}-mala.jpg`), thumb.data);

  const kb = (large.data.length / 1024).toFixed(0);
  process.stdout.write(`${name}: ${meta.width}x${meta.height} -> ${large.info.width}x${large.info.height} (${kb} kB)\n`);

  return {
    src: `${publicPath}/${name}.jpg`,
    thumb: `${publicPath}/${name}-mala.jpg`,
    width: large.info.width,
    height: large.info.height,
  };
}

function photoLine(photo) {
  return `    { src: '${photo.src}', thumb: '${photo.thumb}', width: ${photo.width}, height: ${photo.height} },`;
}

module.exports = { listImages, resizePhoto, photoLine };
