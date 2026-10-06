// Pocetna strana: predstavljanje vrtica, uzrasne grupe, lokacije i poziv na upis.

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { Link as RouterLink } from 'react-router-dom';
import { useI18n } from '../i18n';
import { FOUNDED, LOCATIONS } from '../data/site';
import { BRAND } from '../theme';
import FaqSection from '../components/FaqSection';
import LocationCover from '../components/LocationCover';
import Seo from '../components/Seo';
import { AddressLink, PhoneLink } from '../components/ContactLinks';

export default function HomePage() {
  const { t, path } = useI18n();
  const years = new Date().getFullYear() - FOUNDED;

  return (
    <>
      <Seo pageKey="home" />

      {/* Uvodni deo */}
      <Box
        component="section"
        sx={{
          background: `linear-gradient(160deg, ${BRAND.peachSoft} 0%, ${BRAND.cream} 55%)`,
          borderBottom: `1px solid ${BRAND.peach}`,
        }}
      >
        <Container sx={{ py: { xs: 5, md: 9 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip
                label={t.home.heroBadge}
                color="primary"
                sx={{ mb: 2, px: 1, fontSize: '0.95rem', height: 34 }}
              />
              <Typography variant="h1" component="h1">
                {t.home.heroTitle}
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2.5, color: 'text.secondary', maxWidth: 640 }}>
                {t.home.heroSubtitle}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
                <Button
                  component={RouterLink}
                  to={path('enrollment')}
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  {t.home.heroCtaPrimary}
                </Button>
                <Button component={RouterLink} to={path('program')} variant="outlined" size="large">
                  {t.home.heroCtaSecondary}
                </Button>
              </Stack>

              <Stack direction="row" spacing={{ xs: 3, md: 5 }} sx={{ mt: 5, flexWrap: 'wrap' }}>
                {[
                  { value: `${years}+`, label: t.home.statsFounded },
                  { value: String(LOCATIONS.length), label: t.home.statsLocations },
                  { value: String(t.ageGroups.length), label: t.home.statsGroups },
                ].map((stat) => (
                  <Box key={stat.label}>
                    <Typography
                      component="p"
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: BRAND.orange,
                        lineHeight: 1.1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <LocationCover
                locationId="mazza-2"
                name={t.siteName}
                ratio="5 / 4"
                rounded={24}
                placeholderVariant="house"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Zasto Mazza */}
      <Container component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h2" component="h2" sx={{ mb: 4, color: BRAND.orangeDark }}>
          {t.home.valuesTitle}
        </Typography>
        <Grid container spacing={3}>
          {t.home.values.map((value) => (
            <Grid item xs={12} sm={6} md={4} key={value.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h4" component="h3" sx={{ mb: 1, color: BRAND.orangeDark }}>
                    {value.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{value.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* O nama - kratko */}
      <Box component="section" sx={{ backgroundColor: BRAND.peachSoft, py: { xs: 6, md: 8 } }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <LocationCover
                locationId="mazza-1"
                name={t.siteName}
                ratio="4 / 3"
                rounded={24}
                placeholderVariant="yard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h2" sx={{ color: BRAND.orangeDark }}>
                {t.home.aboutTitle}
              </Typography>
              <Typography sx={{ mt: 2, color: 'text.secondary' }}>{t.home.aboutText}</Typography>
              <Button
                component={RouterLink}
                to={path('about')}
                variant="outlined"
                sx={{ mt: 3 }}
                endIcon={<ArrowForwardRoundedIcon />}
              >
                {t.home.aboutCta}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Uzrasne grupe */}
      <Container component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h2" component="h2" sx={{ color: BRAND.orangeDark }}>
          {t.home.ageGroupsTitle}
        </Typography>
        <Typography sx={{ mt: 1.5, mb: 4, color: 'text.secondary', maxWidth: 760 }}>
          {t.home.ageGroupsLead}
        </Typography>

        <Grid container spacing={3}>
          {t.ageGroups.map((group) => (
            <Grid item xs={12} md={4} key={group.id}>
              <Card sx={{ height: '100%' }}>
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
          ))}
        </Grid>

        <Button
          component={RouterLink}
          to={path('program')}
          variant="text"
          sx={{ mt: 3 }}
          endIcon={<ArrowForwardRoundedIcon />}
        >
          {t.ui.readMore}
        </Button>
      </Container>

      {/* Lokacije */}
      <Box component="section" sx={{ backgroundColor: BRAND.peachSoft, py: { xs: 6, md: 8 } }}>
        <Container>
          <Typography variant="h2" component="h2" sx={{ color: BRAND.orangeDark }}>
            {t.home.locationsTitle}
          </Typography>
          <Typography sx={{ mt: 1.5, mb: 4, color: 'text.secondary', maxWidth: 760 }}>
            {t.home.locationsLead}
          </Typography>

          <Grid container spacing={3}>
            {LOCATIONS.map((location, index) => (
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
        </Container>
      </Box>

      {/* Kutak za roditelje */}
      <Container component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h2" component="h2" sx={{ color: BRAND.orangeDark }}>
          {t.home.parentsTitle}
        </Typography>
        <Typography sx={{ mt: 1.5, mb: 4, color: 'text.secondary', maxWidth: 760 }}>
          {t.home.parentsLead}
        </Typography>

        <Grid container spacing={3}>
          {(['adaptation', 'questionnaire'] as const).map((key) => (
            <Grid item xs={12} md={6} key={key}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                    {t.nav[key]}
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
      </Container>

      {/* Poziv na upis */}
      <Box component="section" sx={{ pb: { xs: 6, md: 9 } }}>
        <Container>
          <Box
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 6,
              textAlign: 'center',
              background: `linear-gradient(135deg, ${BRAND.orange} 0%, #F7844F 100%)`,
              color: '#fff',
            }}
          >
            <Typography variant="h2" component="h2">
              {t.home.ctaTitle}
            </Typography>
            <Typography sx={{ mt: 2, mx: 'auto', maxWidth: 680, opacity: 0.95 }}>
              {t.home.ctaText}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              justifyContent="center"
              sx={{ mt: 4 }}
            >
              <Button
                component={RouterLink}
                to={path('enrollment')}
                variant="contained"
                size="large"
                sx={{ backgroundColor: '#fff', color: BRAND.orangeDark, '&:hover': { backgroundColor: '#fff' } }}
              >
                {t.ui.enrollCta}
              </Button>
              <Button
                href={LOCATIONS[0].phoneHref}
                variant="outlined"
                size="large"
                startIcon={<CallRoundedIcon />}
                sx={{ borderColor: '#fff', color: '#fff', '&:hover': { borderColor: '#fff' } }}
              >
                {LOCATIONS[0].phone}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {t.pages.home.faq && (
        <Container sx={{ pb: { xs: 6, md: 9 } }}>
          <Box sx={{ maxWidth: 900 }}>
            <FaqSection title={t.ui.faqTitle} items={t.pages.home.faq} />
          </Box>
        </Container>
      )}
    </>
  );
}
