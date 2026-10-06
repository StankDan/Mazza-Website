// Centralni podaci o ustanovi. Menjati samo ovde - koriste ih sve stranice,
// strukturirani podaci (JSON-LD) i sitemap.

import type { PageKey } from '../routes';

/**
 * Adresa sajta (ulazi u canonical oznake i strukturirane podatke). Moze da se
 * promeni bez diranja koda, preko REACT_APP_SITE_URL u netlify.toml.
 */
export const SITE_URL = process.env.REACT_APP_SITE_URL || 'https://www.vrticmazza.rs';

/**
 * Da li sajt sme da se pojavljuje u pretrazivacima.
 *
 * Dok je `false`, svaka stranica salje oznaku "noindex, nofollow" i sajt se ne
 * pojavljuje u Google-u i ostalim pretrazivacima. Kada sajt bude spreman za
 * objavu, ovde upisati `true` i promeniti jos dva mesta (pise u README-u):
 * public/robots.txt i zaglavlje X-Robots-Tag u netlify.toml.
 */
export const ALLOW_INDEXING = false;

export const FOUNDED = 1990;

export interface Location {
  id: string;
  /** Kljuc stranice galerije koja prikazuje ovaj objekat. */
  galleryKey: Extract<PageKey, 'gallery1' | 'gallery2' | 'gallery3'>;
  name: string;
  street: string;
  postalCode: string;
  city: string;
  phone: string;
  phoneHref: string;
  geo: { lat: number; lng: number };
}

export const LOCATIONS: Location[] = [
  {
    id: 'mazza-1',
    galleryKey: 'gallery1',
    name: 'MAZZA 1',
    street: 'Despota Đurđa 65',
    postalCode: '18000',
    city: 'Niš',
    phone: '018/217-619',
    phoneHref: 'tel:+38118217619',
    geo: { lat: 43.33486443732268, lng: 21.926804525693548 },
  },
  {
    id: 'mazza-2',
    galleryKey: 'gallery2',
    name: 'MAZZA 2',
    street: 'Orlovića Pavla 3',
    postalCode: '18000',
    city: 'Niš',
    phone: '018/510-116',
    phoneHref: 'tel:+38118510116',
    geo: { lat: 43.32177187298051, lng: 21.89837139685652 },
  },
  {
    id: 'mazza-3',
    galleryKey: 'gallery3',
    name: 'MAZZA 3',
    street: 'Stojana Andrića 33',
    postalCode: '18000',
    city: 'Niš',
    phone: '018/523-622',
    phoneHref: 'tel:+38118523622',
    geo: { lat: 43.31094001972886, lng: 21.859379168019753 },
  },
];

export interface ContactLinkData {
  label: string;
  href: string;
}

export const MOBILE_PHONES: ContactLinkData[] = [
  { label: '065/920-0255', href: 'tel:+381659200255' },
  { label: '064/131-5267', href: 'tel:+381641315267' },
  { label: '064/221-4590', href: 'tel:+381642214590' },
];

/** Jedina zvanicna e-mail adresa ustanove. */
export const PRIMARY_EMAIL = 'mazza_nis@hotmail.com';

export const EMAIL: ContactLinkData = {
  label: PRIMARY_EMAIL,
  href: `mailto:${PRIMARY_EMAIL}`,
};

/** Drustvene mreze - koriste se u futeru i u JSON-LD (sameAs). */
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/ustanovamazza/',
  instagram: 'https://www.instagram.com/vrticmazza/',
};

/** Radno vreme - koristi se i u JSON-LD (openingHours). */
export const OPENING_HOURS = {
  days: 'Mo-Fr',
  opens: '06:00',
  closes: '17:00',
};

/** Dokumenti za preuzimanje. Fajlovi stoje u public/dokumenti. */
export interface DocumentFile {
  id: string;
  file: string;
}

export const DOCUMENTS: DocumentFile[] = [
  { id: 'enrollmentForm', file: '/dokumenti/obrazac-prijave-za-upis.pdf' },
  { id: 'admissionSheet', file: '/dokumenti/podaci-o-detetu-i-roditeljima.pdf' },
  { id: 'healthCertificate', file: '/dokumenti/zdravstvena-potvrda-za-prijem-deteta.pdf' },
];

export function documentHref(id: string): string {
  const doc = DOCUMENTS.find((d) => d.id === id);
  return doc ? doc.file : '#';
}

/**
 * Adresa u jednom redu. Bez postanskog broja - sa njim Google mape otvaraju
 * pogresnu lokaciju. Postanski broj i dalje stoji u strukturiranim podacima.
 */
export function fullAddress(location: Location): string {
  return `${location.street}, ${location.city}`;
}

/**
 * Link koji otvara tacnu lokaciju na Google mapama. Koriste se koordinate
 * objekta, jer pretraga po adresi ume da otvori pogresno mesto.
 */
export function mapsHref(location: Location): string {
  return `https://www.google.com/maps/search/?api=1&query=${location.geo.lat},${location.geo.lng}`;
}
