// Fotografije vrtica. Ovaj fajl pravi skripta scripts/prepare-photos.js
// (npm run slike) - ne menjati rucno.

export interface Photo {
  src: string;
  thumb: string;
  width: number;
  height: number;
}

export const PHOTOS: Record<string, Photo[]> = {
  'mazza-1': [
    { src: '/images/vrtici/mazza-1/mazza-1-01.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-01-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-02.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-02-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-03.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-03-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-04.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-04-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-05.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-05-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-06.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-06-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-07.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-07-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-08.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-08-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-09.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-09-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-10.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-10-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-11.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-11-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-12.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-12-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-13.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-13-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-14.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-14-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-1/mazza-1-15.jpg', thumb: '/images/vrtici/mazza-1/mazza-1-15-mala.jpg', width: 1600, height: 1067 },
  ],
  'mazza-2': [
    { src: '/images/vrtici/mazza-2/mazza-2-01.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-01-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-2/mazza-2-02.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-02-mala.jpg', width: 1600, height: 2399 },
    { src: '/images/vrtici/mazza-2/mazza-2-03.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-03-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-2/mazza-2-04.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-04-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-2/mazza-2-05.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-05-mala.jpg', width: 1600, height: 2399 },
    { src: '/images/vrtici/mazza-2/mazza-2-06.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-06-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-2/mazza-2-07.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-07-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-2/mazza-2-08.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-08-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-2/mazza-2-09.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-09-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-2/mazza-2-10.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-10-mala.jpg', width: 1600, height: 2399 },
    { src: '/images/vrtici/mazza-2/mazza-2-11.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-11-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-2/mazza-2-12.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-12-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-2/mazza-2-13.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-13-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-2/mazza-2-14.jpg', thumb: '/images/vrtici/mazza-2/mazza-2-14-mala.jpg', width: 1600, height: 1067 },
  ],
  'mazza-3': [
    { src: '/images/vrtici/mazza-3/mazza-3-01.jpg', thumb: '/images/vrtici/mazza-3/mazza-3-01-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-3/mazza-3-02.jpg', thumb: '/images/vrtici/mazza-3/mazza-3-02-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-3/mazza-3-03.jpg', thumb: '/images/vrtici/mazza-3/mazza-3-03-mala.jpg', width: 1600, height: 2399 },
    { src: '/images/vrtici/mazza-3/mazza-3-04.jpg', thumb: '/images/vrtici/mazza-3/mazza-3-04-mala.jpg', width: 1600, height: 2398 },
    { src: '/images/vrtici/mazza-3/mazza-3-05.jpg', thumb: '/images/vrtici/mazza-3/mazza-3-05-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-3/mazza-3-06.jpg', thumb: '/images/vrtici/mazza-3/mazza-3-06-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-3/mazza-3-07.jpg', thumb: '/images/vrtici/mazza-3/mazza-3-07-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-3/mazza-3-08.jpg', thumb: '/images/vrtici/mazza-3/mazza-3-08-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-3/mazza-3-09.jpg', thumb: '/images/vrtici/mazza-3/mazza-3-09-mala.jpg', width: 1600, height: 1067 },
    { src: '/images/vrtici/mazza-3/mazza-3-10.jpg', thumb: '/images/vrtici/mazza-3/mazza-3-10-mala.jpg', width: 1600, height: 1067 },
  ],
};

/** Fotografije jednog vrtica (prazna lista ako ih jos nema). */
export function photosFor(locationId: string): Photo[] {
  return PHOTOS[locationId] || [];
}
