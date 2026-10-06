// Uvodni ekran: logo i "Osnovano 1990." stoje dve sekunde, zatim se
// blago rastapaju i otkrivaju sajt.

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { BRAND } from '../theme';
import Logo from './Logo';

export const SPLASH_VISIBLE_MS = 2000;
export const SPLASH_FADE_MS = 700;

interface SplashScreenProps {
  founded: string;
  siteName: string;
  onFinish: () => void;
}

export default function SplashScreen({ founded, siteName, onFinish }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const hide = window.setTimeout(() => {
      setVisible(false);
      onFinish();
    }, SPLASH_VISIBLE_MS);

    const unmount = window.setTimeout(() => {
      setMounted(false);
    }, SPLASH_VISIBLE_MS + SPLASH_FADE_MS + 100);

    return () => {
      window.clearTimeout(hide);
      window.clearTimeout(unmount);
    };
  }, [onFinish]);

  if (!mounted) return null;

  return (
    <Fade in={visible} timeout={{ enter: 0, exit: SPLASH_FADE_MS }} appear={false}>
      <Box
        aria-hidden={!visible}
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: (theme) => theme.zIndex.modal + 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          px: 3,
          textAlign: 'center',
          backgroundColor: BRAND.cream,
          backgroundImage: `radial-gradient(circle at 50% 35%, ${BRAND.peachSoft} 0%, ${BRAND.cream} 60%)`,
        }}
      >
        <Logo
          alt={siteName}
          height={{ xs: 168, sm: 208, md: 248 }}
          sx={{
            maxWidth: '86vw',
            animation: 'mazzaSplashIn 900ms ease-out both',
            '@keyframes mazzaSplashIn': {
              from: { opacity: 0, transform: 'scale(0.92)' },
              to: { opacity: 1, transform: 'scale(1)' },
            },
          }}
        />
        <Typography
          component="p"
          sx={{
            fontSize: 'clamp(4.4rem, 3.2rem + 4.4vw, 6.4rem)',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: BRAND.orange,
            animation: 'mazzaSplashText 900ms 250ms ease-out both',
            '@keyframes mazzaSplashText': {
              from: { opacity: 0, transform: 'translateY(10px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          {founded}
        </Typography>
      </Box>
    </Fade>
  );
}
