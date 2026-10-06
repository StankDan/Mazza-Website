// Kontakt: sve tri lokacije, mobilni telefoni i e-mail adrese.
// Telefon poziva, e-mail otvara poštu, adresa otvara Google mape.

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import { useI18n } from '../i18n';
import { EMAIL, LOCATIONS, MOBILE_PHONES, mapsHref } from '../data/site';
import ContentPage from '../components/ContentPage';
import { AddressLink, ContactLine, EmailLink, PhoneLink } from '../components/ContactLinks';
import { BRAND } from '../theme';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <ContentPage
      pageKey="contact"
      maxWidth="100%"
      beforeSections={
        <Grid container spacing={3}>
          {LOCATIONS.map((location) => (
            <Grid item xs={12} md={4} key={location.id}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h4" component="h2" sx={{ color: BRAND.orangeDark, mb: 1 }}>
                    {location.name}
                  </Typography>
                  <AddressLink location={location} title={t.ui.openInMaps} />
                  <PhoneLink
                    label={location.phone}
                    href={location.phoneHref}
                    title={`${t.ui.callNow}: ${location.phone}`}
                  />
                  <ContactLine kind="hours" label={t.ui.workingHoursValue} />

                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2.5 }}>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<CallRoundedIcon />}
                      href={location.phoneHref}
                    >
                      {t.ui.callNow}
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<PlaceRoundedIcon />}
                      href={mapsHref(location)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.ui.openInMaps}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      }
    >
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
                {t.ui.mobileLabel}
              </Typography>
              {MOBILE_PHONES.map((phone) => (
                <PhoneLink
                  key={phone.href}
                  label={phone.label}
                  href={phone.href}
                  title={`${t.ui.callNow}: ${phone.label}`}
                />
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
                {t.ui.emailLabel}
              </Typography>
              <EmailLink
                label={EMAIL.label}
                href={EMAIL.href}
                title={`${t.ui.sendEmail}: ${EMAIL.label}`}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {t.ui.workingHours}: {t.ui.workingHoursValue}
        </Typography>
      </Box>
    </ContentPage>
  );
}
