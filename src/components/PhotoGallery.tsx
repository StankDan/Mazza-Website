// Galerija fotografija (jednog vrtica ili kategorije): mreza slicica, a klik otvara veliku
// sliku preko ekrana (strelice i tastatura za listanje).

import { useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useI18n } from '../i18n';
import type { Photo } from '../data/photos';
import { BRAND } from '../theme';

interface PhotoGalleryProps {
  photos: Photo[];
  /** Naziv objekta ili kategorije - ulazi u opis slike (alt) zbog pretrage. */
  title: string;
  /** Broj kolona: na telefonu, tabletu i racunaru. */
  cols?: { xs: number; sm: number; md: number };
}

const DEFAULT_COLS = { xs: 1, sm: 2, md: 2 };

export default function PhotoGallery({ photos, title, cols = DEFAULT_COLS }: PhotoGalleryProps) {
  const { t } = useI18n();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + delta + photos.length) % photos.length;
      });
    },
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex, step]);

  if (!photos.length) return null;

  const altFor = (index: number) => `${t.ui.photoAlt} ${title} — ${index + 1}`;
  const counter =
    openIndex === null
      ? ''
      : t.ui.photoCounter
          .replace('{broj}', String(openIndex + 1))
          .replace('{ukupno}', String(photos.length));

  return (
    <Box>
      <ImageList
        variant="masonry"
        cols={isSmall ? cols.xs : isMedium ? cols.sm : cols.md}
        gap={isSmall && cols.xs > 1 ? 8 : 16}
      >
        {photos.map((photo, index) => (
          <ImageListItem key={photo.src}>
            <Box
              component="button"
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`${t.ui.openPhoto}: ${altFor(index)}`}
              sx={{
                display: 'block',
                width: '100%',
                p: 0,
                border: 0,
                borderRadius: 3,
                overflow: 'hidden',
                cursor: 'zoom-in',
                backgroundColor: BRAND.peachSoft,
                lineHeight: 0,
                '&:hover img': { transform: 'scale(1.03)' },
              }}
            >
              <Box
                component="img"
                src={photo.thumb}
                alt={altFor(index)}
                loading="lazy"
                width={photo.width}
                height={photo.height}
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 300ms ease',
                }}
              />
            </Box>
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={openIndex !== null}
        onClose={close}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: { backgroundColor: 'rgba(28, 18, 14, 0.96)', boxShadow: 'none', m: { xs: 1, md: 3 } },
        }}
      >
        {openIndex !== null && (
          <Box sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={photos[openIndex].src}
              alt={altFor(openIndex)}
              sx={{
                width: '100%',
                maxHeight: { xs: '76vh', md: '82vh' },
                objectFit: 'contain',
                display: 'block',
              }}
            />

            <IconButton
              onClick={close}
              aria-label={t.ui.closePhoto}
              sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', backgroundColor: 'rgba(0,0,0,0.35)' }}
            >
              <CloseRoundedIcon />
            </IconButton>

            {photos.length > 1 && (
              <>
                <IconButton
                  onClick={() => step(-1)}
                  aria-label={t.ui.previousPhoto}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 8,
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    backgroundColor: 'rgba(0,0,0,0.35)',
                  }}
                >
                  <ArrowBackIosNewRoundedIcon />
                </IconButton>
                <IconButton
                  onClick={() => step(1)}
                  aria-label={t.ui.nextPhoto}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 8,
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    backgroundColor: 'rgba(0,0,0,0.35)',
                  }}
                >
                  <ArrowForwardIosRoundedIcon />
                </IconButton>
              </>
            )}

            <Typography
              sx={{
                position: 'absolute',
                bottom: 8,
                left: 0,
                right: 0,
                textAlign: 'center',
                color: '#fff',
                fontSize: '0.9rem',
                textShadow: '0 1px 4px rgba(0,0,0,0.6)',
              }}
            >
              {counter}
            </Typography>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
