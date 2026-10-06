// Spisak dokumenata za preuzimanje. Fajlovi se nalaze u public/dokumenti
// i zamenjuju se pravim obrascima kada stignu od ustanove.

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import { useI18n } from '../i18n';
import { documentHref } from '../data/site';
import { BRAND } from '../theme';

interface DocumentListProps {
  ids: string[];
  columns?: number;
}

export default function DocumentList({ ids, columns = 2 }: DocumentListProps) {
  const { t } = useI18n();
  const md = Math.max(3, Math.round(12 / columns));

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2.5}>
        {ids.map((id) => (
          <Grid item xs={12} md={md} key={id}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <PictureAsPdfRoundedIcon sx={{ color: BRAND.orange }} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 700 }}>{t.documents[id]}</Typography>
                    <Button
                      href={documentHref(id)}
                      download
                      startIcon={<DownloadRoundedIcon />}
                      sx={{ mt: 1, px: 0 }}
                    >
                      {t.ui.downloadPdf}
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
        {t.ui.documentsNote}
      </Typography>
    </Box>
  );
}
