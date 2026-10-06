// SEO i AEO: naslov, opis, kanonski URL i strukturirani podaci (JSON-LD)
// koje citaju Google i AI pretrage.

import { Helmet } from 'react-helmet-async';
import { useI18n } from '../i18n';
import { HTML_LANG, OG_LOCALE, absoluteUrl, breadcrumbFor } from '../routes';
import type { PageKey } from '../routes';
import {
  ALLOW_INDEXING,
  LOCATIONS,
  OPENING_HOURS,
  PRIMARY_EMAIL,
  SITE_URL,
  SOCIAL_LINKS,
  fullAddress,
} from '../data/site';

const OG_IMAGE = `${SITE_URL}/images/og-mazza.png`;
const LOGO_IMAGE = `${SITE_URL}/images/logo-mazza.png`;

interface SeoProps {
  pageKey: PageKey;
  /** Dodatni strukturirani podaci specificni za stranicu. */
  extraJsonLd?: Record<string, unknown>[];
}

function organizationJsonLd(legalName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['ChildCare', 'EducationalOrganization'],
    '@id': `${SITE_URL}/#organizacija`,
    name: legalName,
    alternateName: ['Vrtić Mazza', 'Vrtić Mazza Niš', 'PU Mazza Niš'],
    description,
    url: SITE_URL,
    logo: LOGO_IMAGE,
    image: OG_IMAGE,
    foundingDate: '1990',
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
    email: PRIMARY_EMAIL,
    telephone: LOCATIONS[0].phoneHref.replace('tel:', ''),
    priceRange: '$$',
    areaServed: [
      { '@type': 'City', name: 'Niš' },
      { '@type': 'AdministrativeArea', name: 'Nišavski okrug' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: LOCATIONS[0].street,
      addressLocality: 'Niš',
      postalCode: LOCATIONS[0].postalCode,
      addressCountry: 'RS',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: OPENING_HOURS.opens,
        closes: OPENING_HOURS.closes,
      },
    ],
    department: LOCATIONS.map((location) => ({
      '@type': 'ChildCare',
      '@id': `${SITE_URL}/#${location.id}`,
      name: `${legalName} - ${location.name}`,
      telephone: location.phoneHref.replace('tel:', ''),
      address: {
        '@type': 'PostalAddress',
        streetAddress: location.street,
        addressLocality: 'Niš',
        postalCode: location.postalCode,
        addressCountry: 'RS',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.geo.lat,
        longitude: location.geo.lng,
      },
    })),
  };
}

export default function Seo({ pageKey, extraJsonLd = [] }: SeoProps) {
  const { t } = useI18n();
  const page = t.pages[pageKey];
  const canonical = absoluteUrl(pageKey, SITE_URL);

  const breadcrumb = breadcrumbFor(pageKey);
  const jsonLd: Record<string, unknown>[] = [
    organizationJsonLd(t.legalName, t.pages.home.metaDescription),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonical}#stranica`,
      url: canonical,
      name: page.metaTitle,
      description: page.metaDescription,
      inLanguage: HTML_LANG,
      isPartOf: { '@id': `${SITE_URL}/#organizacija` },
    },
  ];

  if (breadcrumb.length > 1) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumb.map((key, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: t.nav[key],
        item: absoluteUrl(key, SITE_URL),
      })),
    });
  }

  if (page.faq && page.faq.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  extraJsonLd.forEach((item) => jsonLd.push(item));

  return (
    <Helmet prioritizeSeoTags>
      <html lang={HTML_LANG} />
      <title>{page.metaTitle}</title>
      <meta name="description" content={page.metaDescription} />
      <link rel="canonical" href={canonical} />

      {/* Dok sajt nije spreman za objavu, pretrazivacima je zabranjeno indeksiranje. */}
      <meta
        name="robots"
        content={ALLOW_INDEXING ? 'index, follow, max-image-preview:large' : 'noindex, nofollow'}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={t.legalName} />
      <meta property="og:title" content={page.metaTitle} />
      <meta property="og:description" content={page.metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={OG_LOCALE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.metaTitle} />
      <meta name="twitter:description" content={page.metaDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <meta name="geo.region" content="RS-NIS" />
      <meta name="geo.placename" content="Niš" />
      <meta name="geo.position" content={`${LOCATIONS[0].geo.lat};${LOCATIONS[0].geo.lng}`} />
      <meta name="ICBM" content={`${LOCATIONS[0].geo.lat}, ${LOCATIONS[0].geo.lng}`} />
      <meta
        name="keywords"
        content={[
          'vrtić Niš',
          'privatni vrtić Niš',
          'jasle Niš',
          'predškolska ustanova Niš',
          'pripremni predškolski program Niš',
          'vrtić Mazza',
          ...LOCATIONS.map((location) => `${location.name} ${fullAddress(location)}`),
        ].join(', ')}
      />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
