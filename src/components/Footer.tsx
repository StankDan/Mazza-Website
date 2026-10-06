// Podnozje sajta u tri kolone:
// 1) logo, radno vreme, mobilni telefoni, e-mail adrese i drustvene mreze
// 2) vrtici, jedan ispod drugog
// 3) brzi linkovi

import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useI18n } from '../i18n';
import type { PageKey } from '../routes';
import { EMAIL, LOCATIONS, MOBILE_PHONES, SOCIAL_LINKS } from '../data/site';
import { BRAND } from '../theme';
import { AddressLink, ContactLine, EmailLink, PhoneLink } from './ContactLinks';
import Logo from './Logo';

const QUICK_LINKS: PageKey[] = [
  'about',
  'team',
  'program',
  'nutrition',
  'parents',
  'gallery',
  'photos',
  'enrollment',
  'contact',
];

const SOCIALS = [
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, Icon: FacebookRoundedIcon },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
];

function ColumnTitle({ children, sx }: { children: ReactNode; sx?: SxProps<Theme> }) {
  return (
    <Typography
      variant="h6"
      component="h3"
      sx={{ mb: 1.5, color: BRAND.orangeDark, fontSize: '1.05rem', ...sx }}
    >
      {children}
    </Typography>
  );
}

export default function Footer() {
  const { t, path } = useI18n();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        pt: { xs: 5, md: 7 },
        pb: 4,
        backgroundColor: BRAND.peachSoft,
        borderTop: `1px solid ${BRAND.peach}`,
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* 1. kolona: logo, radno vreme, telefoni i e-mail */}
          <Grid item xs={12} md={5}>
            <Logo alt={t.legalName} height={56} sx={{ mb: 2 }} />
            <Typography sx={{ color: 'text.secondary', maxWidth: 340 }}>{t.tagline}</Typography>

            <Box sx={{ mt: 2 }}>
              <ContactLine kind="hours" label={t.ui.workingHoursValue} />
            </Box>

            <ColumnTitle sx={{ mt: 3 }}>{t.ui.mobileLabel}</ColumnTitle>
            <Stack>
              {MOBILE_PHONES.map((phone) => (
                <PhoneLink
                  key={phone.href}
                  label={phone.label}
                  href={phone.href}
                  title={`${t.ui.callNow}: ${phone.label}`}
                />
              ))}
            </Stack>

            <ColumnTitle sx={{ mt: 3 }}>{t.ui.emailLabel}</ColumnTitle>
            <EmailLink
              label={EMAIL.label}
              href={EMAIL.href}
              title={`${t.ui.sendEmail}: ${EMAIL.label}`}
            />

            <ColumnTitle sx={{ mt: 3 }}>{t.ui.followUs}</ColumnTitle>
            <Stack direction="row" spacing={1.5}>
              {SOCIALS.map(({ label, href, Icon }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} - ${t.legalName}`}
                  title={label}
                  sx={{
                    width: 44,
                    height: 44,
                    color: BRAND.orange,
                    backgroundColor: '#fff',
                    border: `1px solid ${BRAND.peach}`,
                    transition: 'all 0.2s ease',
                    '&:hover, &:focus-visible': {
                      color: '#fff',
                      backgroundColor: BRAND.orange,
                      borderColor: BRAND.orange,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* 2. kolona: vrtici jedan ispod drugog */}
          <Grid item xs={12} sm={7} md={4}>
            <ColumnTitle>{t.home.locationsTitle}</ColumnTitle>
            <Stack spacing={2.5}>
              {LOCATIONS.map((location) => (
                <Box key={location.id}>
                  <Typography sx={{ fontWeight: 800 }}>{location.name}</Typography>
                  <AddressLink location={location} title={t.ui.openInMaps} />
                  <PhoneLink
                    label={location.phone}
                    href={location.phoneHref}
                    title={`${t.ui.callNow}: ${location.phone}`}
                  />
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* 3. kolona: brzi linkovi */}
          <Grid item xs={12} sm={5} md={3}>
            <ColumnTitle>{t.ui.quickLinks}</ColumnTitle>
            <Stack spacing={0.75}>
              {QUICK_LINKS.map((key) => (
                <Link key={key} component={RouterLink} to={path(key)} color="inherit">
                  {t.nav[key]}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: BRAND.peach }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          justifyContent="space-between"
          sx={{ color: 'text.secondary', fontSize: '0.9rem' }}
        >
          <Typography variant="body2">
            © {year} {t.legalName}. {t.ui.footerRights}
          </Typography>
          <Typography variant="body2">{t.ui.footerNote}</Typography>
        </Stack>
      </Container>
    </Box>
  );
}
