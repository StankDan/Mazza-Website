// Standardna stranica sa tekstom: SEO oznake, zaglavlje, delovi teksta i
// cesta pitanja. Stranice sa dodacima ubacuju svoj sadrzaj preko `children`.

import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useI18n } from '../i18n';
import type { PageKey } from '../routes';
import FaqSection from './FaqSection';
import PageHero from './PageHero';
import SectionBlock from './SectionBlock';
import Seo from './Seo';

interface ContentPageProps {
  pageKey: PageKey;
  /** Sadrzaj koji ide odmah ispod uvodnog dela, pre tekstualnih sekcija. */
  beforeSections?: ReactNode;
  /** Sadrzaj koji ide posle tekstualnih sekcija, pre cestih pitanja. */
  children?: ReactNode;
  extraJsonLd?: Record<string, unknown>[];
  maxWidth?: number | string;
}

export default function ContentPage({
  pageKey,
  beforeSections,
  children,
  extraJsonLd,
  maxWidth = 900,
}: ContentPageProps) {
  const { t } = useI18n();
  const page = t.pages[pageKey];

  return (
    <>
      <Seo pageKey={pageKey} extraJsonLd={extraJsonLd} />
      <PageHero pageKey={pageKey} title={page.title} lead={page.lead} />

      <Container sx={{ py: { xs: 4, md: 6 } }}>

        {beforeSections}

        {page.sections && (
          <Box sx={{ maxWidth }}>
            {page.sections.map((section, index) => (
              <SectionBlock key={section.heading || `section-${index}`} section={section} />
            ))}
          </Box>
        )}

        {children}

        {page.faq && page.faq.length > 0 && (
          <Box sx={{ maxWidth }}>
            <FaqSection title={t.ui.faqTitle} items={page.faq} />
          </Box>
        )}
      </Container>
    </>
  );
}
