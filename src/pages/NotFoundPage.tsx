// Stranica za nepostojecu adresu.

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { useI18n } from '../i18n';
import { HTML_LANG } from '../routes';
import PlaceholderImage from '../components/PlaceholderImage';

export default function NotFoundPage() {
  const { t, path } = useI18n();

  return (
    <Container sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
      <Helmet>
        <html lang={HTML_LANG} />
        <title>{`${t.ui.notFoundTitle} | ${t.siteName}`}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Box sx={{ maxWidth: 420, mx: 'auto', mb: 4 }}>
        <PlaceholderImage label="404" variant="sun" ratio="4 / 3" />
      </Box>

      <Typography variant="h1" component="h1">
        {t.ui.notFoundTitle}
      </Typography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>{t.ui.notFoundText}</Typography>

      <Button component={RouterLink} to={path('home')} variant="contained" size="large" sx={{ mt: 4 }}>
        {t.ui.notFoundCta}
      </Button>
    </Container>
  );
}
