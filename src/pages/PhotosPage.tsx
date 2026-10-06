// Galerija: fotografije sa izleta, predstava, aktivnosti i iz vrtica, sve
// zajedno. Klik na fotografiju otvara veliki prikaz.

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useI18n } from '../i18n';
import { GALLERY_PHOTOS } from '../data/galleryPhotos';
import { SOCIAL_LINKS } from '../data/site';
import ContentPage from '../components/ContentPage';
import PhotoGallery from '../components/PhotoGallery';
import { BRAND } from '../theme';

const GALLERY_COLS = { xs: 2, sm: 2, md: 3 };

export default function PhotosPage() {
  const { t } = useI18n();

  return (
    <ContentPage pageKey="photos" maxWidth="100%">
      {GALLERY_PHOTOS.length ? (
        <PhotoGallery photos={GALLERY_PHOTOS} title={t.pages.photos.title} cols={GALLERY_COLS} />
      ) : (
        <Alert severity="info" sx={{ borderRadius: 3, backgroundColor: BRAND.peachSoft }}>
          {t.ui.galleryComingSoon}
          <Stack direction="row" sx={{ mt: 1.5, flexWrap: 'wrap', gap: 1 }}>
            <Button
              size="small"
              variant="outlined"
              startIcon={<FacebookRoundedIcon />}
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Button>
            <Button
              size="small"
              variant="outlined"
              startIcon={<InstagramIcon />}
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Button>
          </Stack>
        </Alert>
      )}
    </ContentPage>
  );
}
