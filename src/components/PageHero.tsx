// Zaglavlje stranice: putanja kroz sajt (breadcrumb), naslov i uvodna recenica.

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Link as RouterLink } from 'react-router-dom';
import { useI18n } from '../i18n';
import { breadcrumbFor } from '../routes';
import type { PageKey } from '../routes';
import { BRAND } from '../theme';

interface PageHeroProps {
  pageKey: PageKey;
  title: string;
  lead?: string;
}

export default function PageHero({ pageKey, title, lead }: PageHeroProps) {
  const { t, path } = useI18n();
  const chain = breadcrumbFor(pageKey);
  const parents = chain.slice(0, -1);

  return (
    <Box
      component="header"
      sx={{
        pt: { xs: 4, md: 6 },
        pb: { xs: 4, md: 5 },
        background: `linear-gradient(180deg, ${BRAND.peachSoft} 0%, ${BRAND.cream} 100%)`,
        borderBottom: `1px solid ${BRAND.peach}`,
      }}
    >
      <Container>
        <Breadcrumbs
          aria-label={t.ui.breadcrumbLabel}
          separator={<NavigateNextRoundedIcon fontSize="small" />}
          sx={{ mb: 2, fontSize: '0.9rem' }}
        >
          {parents.map((key) => (
            <Link key={key} component={RouterLink} to={path(key)} color="inherit">
              {t.nav[key]}
            </Link>
          ))}
          <Typography component="span" sx={{ fontWeight: 700, color: BRAND.orangeDark }}>
            {t.nav[pageKey]}
          </Typography>
        </Breadcrumbs>

        <Typography variant="h1" component="h1" sx={{ maxWidth: 900 }}>
          {title}
        </Typography>

        {lead && (
          <Typography
            variant="subtitle1"
            sx={{ mt: 2, maxWidth: 820, color: 'text.secondary', fontWeight: 600 }}
          >
            {lead}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
