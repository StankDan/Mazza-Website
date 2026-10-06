// Izgled vrtica - pregled sva tri objekta.

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Link as RouterLink } from 'react-router-dom';
import { useI18n } from '../i18n';
import { LOCATIONS } from '../data/site';
import ContentPage from '../components/ContentPage';
import LocationCover from '../components/LocationCover';
import { AddressLink, PhoneLink } from '../components/ContactLinks';
import { BRAND } from '../theme';

export default function GalleryPage() {
  const { t, path } = useI18n();

  return (
    <ContentPage
      pageKey="gallery"
      maxWidth="100%"
    >
      <Grid container spacing={3}>
        {LOCATIONS.map((location) => (
          <Grid item xs={12} md={4} key={location.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, pb: 0 }}>
                <LocationCover locationId={location.id} name={location.name} />
              </Box>
              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                <Typography variant="h4" component="h3" sx={{ color: BRAND.orangeDark }}>
                  {location.name}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <AddressLink location={location} title={t.ui.openInMaps} />
                  <PhoneLink
                    label={location.phone}
                    href={location.phoneHref}
                    title={`${t.ui.callNow}: ${location.phone}`}
                  />
                </Box>
                <Button
                  component={RouterLink}
                  to={path(location.galleryKey)}
                  variant="text"
                  sx={{ mt: 1, px: 0 }}
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  {t.ui.readMore}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ContentPage>
  );
}
