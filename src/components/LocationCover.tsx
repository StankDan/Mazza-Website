// Naslovna slika jednog vrtica za kartice. Ako fotografija jos nema,
// prikazuje se privremena ilustracija, pa raspored ostaje isti.

import Box from '@mui/material/Box';
import { useI18n } from '../i18n';
import { photosFor } from '../data/photos';
import PlaceholderImage from './PlaceholderImage';

type PlaceholderVariant = 'house' | 'yard' | 'play' | 'sun';

interface LocationCoverProps {
  locationId: string;
  name: string;
  ratio?: string;
  rounded?: number;
  placeholderVariant?: PlaceholderVariant;
}

export default function LocationCover({
  locationId,
  name,
  ratio = '16 / 10',
  rounded = 16,
  placeholderVariant = 'house',
}: LocationCoverProps) {
  const { t } = useI18n();
  const photo = photosFor(locationId)[0];

  if (!photo) {
    return (
      <PlaceholderImage
        label={t.ui.photoPlaceholder}
        variant={placeholderVariant}
        ratio={ratio}
        rounded={rounded}
      />
    );
  }

  return (
    <Box
      component="img"
      src={photo.thumb}
      alt={`${t.ui.photoAlt} ${name}`}
      loading="lazy"
      sx={{
        width: '100%',
        aspectRatio: ratio,
        objectFit: 'cover',
        display: 'block',
        borderRadius: `${rounded}px`,
      }}
    />
  );
}
