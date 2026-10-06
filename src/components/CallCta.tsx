// Poziv na akciju: sve informacije i prijave idu telefonom, pa su ovde
// brojevi sva tri vrtica.

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { useI18n } from '../i18n';
import { LOCATIONS } from '../data/site';
import { BRAND } from '../theme';

export default function CallCta({ sx }: { sx?: object }) {
  const { t } = useI18n();

  return (
    <Box
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 5,
        backgroundColor: BRAND.peachSoft,
        border: `1px solid ${BRAND.peach}`,
        ...sx,
      }}
    >
      <Typography variant="h3" component="h2" sx={{ color: BRAND.orangeDark }}>
        {t.ui.contactCta}
      </Typography>
      <Typography sx={{ mt: 1, color: 'text.secondary' }}>{t.ui.callForInfo}</Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2.5 }}>
        {LOCATIONS.map((location) => (
          <Button
            key={location.id}
            variant="contained"
            startIcon={<CallRoundedIcon />}
            href={location.phoneHref}
            aria-label={`${t.ui.callNow} ${location.name}: ${location.phone}`}
            sx={{ whiteSpace: 'nowrap' }}
          >
            {location.phone}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
