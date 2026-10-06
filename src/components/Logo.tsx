// Logotip ustanove (izvucen iz Logo/logotip.psd). Isti znak se koristi u
// zaglavlju, podnozju i na uvodnom ekranu, pa se menja samo na jednom mestu.

import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import logo from '../assets/logo-mazza.png';

interface LogoProps {
  /** Visina logotipa; prihvata i responzivnu vrednost, npr. { xs: 40, md: 56 }. */
  height?: number | Record<string, number>;
  alt: string;
  sx?: SxProps<Theme>;
}

export default function Logo({ height = 56, alt, sx }: LogoProps) {
  return (
    <Box
      component="img"
      src={logo}
      alt={alt}
      sx={{ height, width: 'auto', display: 'block', flexShrink: 0, ...sx }}
    />
  );
}
