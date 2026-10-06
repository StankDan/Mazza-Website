// Oblik sadrzaja koji svaki jezik mora da popuni. TypeScript garantuje da
// nijedan jezik ne ostane bez nekog teksta.

import type { PageKey } from '../routes';

export interface NumberedGroup {
  title: string;
  items: string[];
}

export interface Section {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: NumberedGroup[];
  /** Istaknuta recenica u narandzastom bloku. */
  highlight?: string;
  /** Recenica sa linkom na spoljni sajt: before + <a>text</a> + after. */
  link?: { before: string; text: string; href: string; after?: string };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageContent {
  /** H1 na stranici. */
  title: string;
  /** <title> u <head> - do ~60 znakova, sa kljucnim recima za Nis. */
  metaTitle: string;
  metaDescription: string;
  lead?: string;
  /** Tekst dugmeta na kartici koja vodi na stranicu (podrazumevano "Saznajte više"). */
  cta?: string;
  sections?: Section[];
  /** Pitanja i odgovori - hrana za AEO (Google/AI odgovori). */
  faq?: FaqItem[];
}

export interface AgeGroup {
  id: 'nursery' | 'kindergarten' | 'preschool';
  name: string;
  ages: string;
  description: string;
}

export interface SurveyQuestion {
  /** Naziv polja u e-mailu sa odgovorima. */
  name: string;
  label: string;
  /** Da/Ne, jedan od ponudjenih odgovora, vise odgovora ili slobodan tekst. */
  kind: 'yesNo' | 'single' | 'multi' | 'text';
  options?: string[];
  /** Polje za obrazlozenje koje se pojavi kad je odgovor "Ne". */
  reasonLabel?: string;
}

export interface SurveyContent {
  anonymousNote: string;
  ageLabel: string;
  agePlaceholder: string;
  locationLabel: string;
  locations: string[];
  yes: string;
  no: string;
  questions: SurveyQuestion[];
  requiredError: string;
  formError: string;
  submit: string;
  sending: string;
  successTitle: string;
  successText: string;
  sendError: string;
}

export interface ValueCard {
  title: string;
  text: string;
}

export interface HomeContent {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  statsFounded: string;
  statsLocations: string;
  statsGroups: string;
  valuesTitle: string;
  values: ValueCard[];
  aboutTitle: string;
  aboutText: string;
  aboutCta: string;
  ageGroupsTitle: string;
  ageGroupsLead: string;
  locationsTitle: string;
  locationsLead: string;
  parentsTitle: string;
  parentsLead: string;
  ctaTitle: string;
  ctaText: string;
}

export interface UiContent {
  skipToContent: string;
  openMenu: string;
  closeMenu: string;
  languageLabel: string;
  breadcrumbLabel: string;
  home: string;
  callLabel: string;
  emailLabel: string;
  addressLabel: string;
  mobileLabel: string;
  openInMaps: string;
  callNow: string;
  sendEmail: string;
  workingHours: string;
  workingHoursValue: string;
  downloadPdf: string;
  readMore: string;
  backToTop: string;
  faqTitle: string;
  photoPlaceholder: string;
  galleryTitle: string;
  photoAlt: string;
  openPhoto: string;
  closePhoto: string;
  previousPhoto: string;
  nextPhoto: string;
  photoCounter: string;
  photosComingSoon: string;
  galleryComingSoon: string;
  gallerySoonNote: string;
  quickLinks: string;
  enrollmentFormsTitle: string;
  contactTitle: string;
  enrollCta: string;
  contactCta: string;
  callForInfo: string;
  documentsNote: string;
  notFoundTitle: string;
  notFoundText: string;
  notFoundCta: string;
  footerRights: string;
  footerNote: string;
  followUs: string;
  loading: string;
}

export interface Content {
  siteName: string;
  legalName: string;
  tagline: string;
  splashFounded: string;
  nav: Record<PageKey, string>;
  ui: UiContent;
  home: HomeContent;
  ageGroups: AgeGroup[];
  /** Online upitnik za roditelje. */
  survey: SurveyContent;
  /** Nazivi dokumenata za preuzimanje; kljuc odgovara DOCUMENTS[].id */
  documents: Record<string, string>;
  pages: Record<PageKey, PageContent>;
}
