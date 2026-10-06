// Stranice sajta i njihove adrese. Sajt je na srpskom (latinica), pa nema
// jezickog prefiksa - adrese idu direktno iz korena, npr. /o-nama.

export type PageKey =
  | 'home'
  | 'about'
  | 'team'
  | 'program'
  | 'programNursery'
  | 'programKindergarten'
  | 'programPreschool'
  | 'programExtra'
  | 'programOutside'
  | 'nutrition'
  | 'parents'
  | 'adaptation'
  | 'questionnaire'
  | 'gallery'
  | 'gallery1'
  | 'gallery2'
  | 'gallery3'
  | 'photos'
  | 'enrollment'
  | 'contact';

interface PageDefinition {
  parent?: PageKey;
  slug: string;
  /** Prioritet u sitemap.xml */
  priority: number;
}

export const HTML_LANG = 'sr-Latn-RS';
export const OG_LOCALE = 'sr_RS';

export const PAGES: Record<PageKey, PageDefinition> = {
  home: { slug: '', priority: 1.0 },

  about: { slug: 'o-nama', priority: 0.9 },
  team: { slug: 'nas-tim', priority: 0.7 },
  program: { slug: 'program', priority: 0.9 },
  programNursery: { parent: 'program', slug: 'jaslene-grupe', priority: 0.8 },
  programKindergarten: { parent: 'program', slug: 'vrticke-grupe', priority: 0.8 },
  programPreschool: { parent: 'program', slug: 'pripremni-predskolski-program', priority: 0.8 },
  programExtra: { parent: 'program', slug: 'dodatne-aktivnosti', priority: 0.6 },
  programOutside: { parent: 'program', slug: 'aktivnosti-van-ustanove', priority: 0.6 },
  nutrition: { slug: 'ishrana', priority: 0.8 },
  parents: { slug: 'kutak-za-roditelje', priority: 0.7 },
  adaptation: { parent: 'parents', slug: 'adaptacija-deteta', priority: 0.7 },
  questionnaire: { parent: 'parents', slug: 'upitnik-za-roditelje', priority: 0.5 },
  gallery: { slug: 'izgled-vrtica', priority: 0.8 },
  gallery1: { parent: 'gallery', slug: 'mazza-1', priority: 0.7 },
  gallery2: { parent: 'gallery', slug: 'mazza-2', priority: 0.7 },
  gallery3: { parent: 'gallery', slug: 'mazza-3', priority: 0.7 },
  photos: { slug: 'galerija', priority: 0.8 },
  enrollment: { slug: 'upis', priority: 0.9 },
  contact: { slug: 'kontakt', priority: 0.9 },
};

export const PAGE_KEYS = Object.keys(PAGES) as PageKey[];

/** Puna putanja stranice, npr. pathFor('adaptation') -> /kutak-za-roditelje/adaptacija-deteta */
export function pathFor(key: PageKey): string {
  const segments: string[] = [];
  let current: PageKey | undefined = key;
  while (current) {
    const page: PageDefinition | undefined = PAGES[current];
    if (!page) break;
    if (page.slug) segments.unshift(page.slug);
    current = page.parent;
  }
  return `/${segments.join('/')}`;
}

/** Ruta za React Router (bez pocetne kose crte). */
export function routePathFor(key: PageKey): string {
  return pathFor(key).replace(/^\//, '');
}

/** Lanac stranica od pocetne do trazene - za "breadcrumb" navigaciju. */
export function breadcrumbFor(key: PageKey): PageKey[] {
  const chain: PageKey[] = [];
  let current: PageKey | undefined = key;
  while (current) {
    chain.unshift(current);
    current = PAGES[current].parent;
  }
  if (chain[0] !== 'home') chain.unshift('home');
  return chain;
}

/** Apsolutni URL - koristi se za canonical i JSON-LD. */
export function absoluteUrl(key: PageKey, siteUrl: string): string {
  const path = pathFor(key);
  return path === '/' ? siteUrl : `${siteUrl}${path}`;
}
