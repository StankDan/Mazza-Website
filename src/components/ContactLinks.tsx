// Kontakt linkovi: telefon poziva, e-mail otvara poštu, adresa vodi na
// Google mape u novom tabu.

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import type { ReactNode } from 'react';
import type { Location } from '../data/site';
import { fullAddress, mapsHref } from '../data/site';

type IconKind = 'phone' | 'email' | 'address' | 'hours';

const ICONS: Record<IconKind, ReactNode> = {
  phone: <CallRoundedIcon fontSize="small" />,
  email: <EmailRoundedIcon fontSize="small" />,
  address: <PlaceRoundedIcon fontSize="small" />,
  hours: <ScheduleRoundedIcon fontSize="small" />,
};

interface ContactLineProps {
  kind: IconKind;
  label: string;
  href?: string;
  external?: boolean;
  title?: string;
  color?: string;
}

export function ContactLine({ kind, label, href, external, title, color }: ContactLineProps) {
  const content = (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: color || 'inherit' }}>
      <Box sx={{ display: 'flex', color: 'primary.main' }}>{ICONS[kind]}</Box>
      <Typography component="span" sx={{ fontWeight: 600, textAlign: 'left' }}>
        {label}
      </Typography>
    </Stack>
  );

  if (!href) {
    return <Box sx={{ py: 0.5 }}>{content}</Box>;
  }

  return (
    <Link
      href={href}
      title={title}
      aria-label={title}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      sx={{
        display: 'block',
        py: 0.5,
        color: 'inherit',
        textDecorationColor: 'currentColor',
        '&:hover': { color: 'primary.dark' },
      }}
    >
      {content}
    </Link>
  );
}

interface PhoneLinkProps {
  label: string;
  href: string;
  title?: string;
}

export function PhoneLink({ label, href, title }: PhoneLinkProps) {
  return <ContactLine kind="phone" label={label} href={href} title={title} />;
}

export function EmailLink({ label, href, title }: PhoneLinkProps) {
  return <ContactLine kind="email" label={label} href={href} title={title} />;
}

interface AddressLinkProps {
  location: Location;
  title?: string;
}

export function AddressLink({ location, title }: AddressLinkProps) {
  return (
    <ContactLine
      kind="address"
      label={fullAddress(location)}
      href={mapsHref(location)}
      external
      title={title}
    />
  );
}
