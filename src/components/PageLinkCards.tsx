// Mreza kartica koje vode na podstranice (koristi se na stranicama
// "Program" i "Kutak za roditelje").

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Link as RouterLink } from 'react-router-dom';
import { useI18n } from '../i18n';
import type { PageKey } from '../routes';

interface PageLinkCardsProps {
  keys: PageKey[];
  columns?: number;
}

export default function PageLinkCards({ keys, columns = 3 }: PageLinkCardsProps) {
  const { t, path } = useI18n();
  const md = Math.max(3, Math.round(12 / columns));

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {keys.map((key) => (
          <Grid item xs={12} sm={6} md={md} key={key}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                  {t.pages[key].title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t.pages[key].metaDescription}
                </Typography>
                <Button
                  component={RouterLink}
                  to={path(key)}
                  variant="text"
                  sx={{ mt: 2, px: 0 }}
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  {t.pages[key].cta || t.ui.readMore}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
