// Pregled programa: uzrasne grupe i veze ka detaljnim opisima programa.

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useI18n } from '../i18n';
import ContentPage from '../components/ContentPage';
import PageLinkCards from '../components/PageLinkCards';
import PlaceholderImage from '../components/PlaceholderImage';
import { AGE_GROUP_PHOTOS } from '../data/programPhotos';
import { photosFor } from '../data/photos';
import { BRAND } from '../theme';
import type { PageKey } from '../routes';

const SUBPAGES: PageKey[] = [
  'programNursery',
  'programKindergarten',
  'programPreschool',
  'programExtra',
  'programOutside',
];

const VARIANTS = ['sun', 'play', 'yard', 'house'] as const;

export default function ProgramPage() {
  const { t } = useI18n();

  return (
    <ContentPage
      pageKey="program"
      maxWidth="100%"
      beforeSections={
        <Grid container spacing={3}>
          {t.ageGroups.map((group, index) => {
            const pick = AGE_GROUP_PHOTOS[group.id];
            const photo = pick ? photosFor(pick.locationId)[pick.index - 1] : undefined;
            return (
            <Grid item xs={12} md={4} key={group.id}>
              <Card sx={{ height: '100%' }}>
                <Box sx={{ p: 2, pb: 0 }}>
                  {photo ? (
                    <Box
                      component="img"
                      src={photo.thumb}
                      alt={`${t.ui.photoAlt} — ${group.name}`}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        aspectRatio: '4 / 3',
                        objectFit: 'cover',
                        display: 'block',
                        borderRadius: '16px',
                      }}
                    />
                  ) : (
                    <PlaceholderImage
                      label={t.ui.photoPlaceholder}
                      variant={VARIANTS[index % VARIANTS.length]}
                      ratio="4 / 3"
                      rounded={16}
                    />
                  )}
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Chip label={group.ages} size="small" sx={{ mb: 1.5, backgroundColor: BRAND.peach }} />
                  <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                    {group.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {group.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            );
          })}
        </Grid>
      }
    >
      <Box sx={{ mt: 6 }}>
        <Typography variant="h2" component="h2" sx={{ color: BRAND.orangeDark }}>
          {t.nav.program}
        </Typography>
        <PageLinkCards keys={SUBPAGES} />
      </Box>
    </ContentPage>
  );
}
