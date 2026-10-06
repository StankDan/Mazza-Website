// Stranica jednog objekta (Mazza 1, 2 ili 3): fotografije vrtica,
// kontakt podaci i lokacija na mapi.

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import { useI18n } from '../i18n';
import { LOCATIONS, SITE_URL, fullAddress, mapsHref } from '../data/site';
import { photosFor } from '../data/photos';
import type { PageKey } from '../routes';
import ContentPage from '../components/ContentPage';
import PhotoGallery from '../components/PhotoGallery';
import PlaceholderImage from '../components/PlaceholderImage';
import { AddressLink, ContactLine, PhoneLink } from '../components/ContactLinks';
import { BRAND } from '../theme';

const PLACEHOLDER_VARIANTS = ['house', 'yard', 'play', 'sun'] as const;

interface LocationPageProps {
  locationId: string;
  pageKey: PageKey;
}

export default function LocationPage({ locationId, pageKey }: LocationPageProps) {
  const { t } = useI18n();
  const location = LOCATIONS.find((item) => item.id === locationId) || LOCATIONS[0];
  const photos = photosFor(location.id);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ChildCare',
      '@id': `${SITE_URL}/#${location.id}`,
      name: `${t.legalName} - ${location.name}`,
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
      hasMap: mapsHref(location),
      ...(photos.length ? { photo: photos.map((photo) => `${SITE_URL}${photo.src}`) } : {}),
    },
  ];

  return (
    <ContentPage
      pageKey={pageKey}
      maxWidth="100%"
      extraJsonLd={jsonLd}
      beforeSections={
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            {photos.length > 0 ? (
              <PhotoGallery photos={photos} title={location.name} />
            ) : (
              <>
                <Grid container spacing={2}>
                  {PLACEHOLDER_VARIANTS.map((variant) => (
                    <Grid item xs={12} sm={6} key={variant}>
                      <PlaceholderImage
                        label={t.ui.photoPlaceholder}
                        variant={variant}
                        ratio="4 / 3"
                        rounded={18}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Alert severity="info" sx={{ mt: 3, borderRadius: 3, backgroundColor: BRAND.peachSoft }}>
                  {t.ui.photosComingSoon}
                </Alert>
              </>
            )}
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{ position: { md: 'sticky' }, top: { md: 104 } }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h4" component="h2" sx={{ color: BRAND.orangeDark, mb: 1.5 }}>
                  {location.name}
                </Typography>

                <AddressLink location={location} title={t.ui.openInMaps} />
                <PhoneLink
                  label={location.phone}
                  href={location.phoneHref}
                  title={`${t.ui.callNow}: ${location.phone}`}
                />
                <ContactLine kind="hours" label={t.ui.workingHoursValue} />

                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Button variant="contained" startIcon={<CallRoundedIcon />} href={location.phoneHref}>
                    {t.ui.callNow}
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<PlaceRoundedIcon />}
                    href={mapsHref(location)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.ui.openInMaps}
                  </Button>
                </Box>

                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                  {fullAddress(location)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      }
    />
  );
}
