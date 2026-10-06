// MUI tema izvedena iz logotipa vrtica: topla narandzasta, krem podloga
// i mekani zaobljeni oblici.

import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

export const BRAND = {
  orange: '#F04E23', // tacna boja iz logotipa
  orangeDark: '#C2410C',
  peach: '#FBDFCE',
  peachSoft: '#FDEFE6',
  cream: '#FFF7F2',
  ink: '#3B2A22',
  inkSoft: '#6B564B',
  green: '#7BAE7F',
  sky: '#7FB5D5',
  sun: '#F3C13A',
};

const FONT = '"Baloo 2", "Segoe UI", system-ui, -apple-system, sans-serif';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: BRAND.orange,
      dark: BRAND.orangeDark,
      light: BRAND.peach,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: BRAND.green,
      contrastText: '#FFFFFF',
    },
    background: {
      default: BRAND.cream,
      paper: '#FFFFFF',
    },
    text: {
      primary: BRAND.ink,
      secondary: BRAND.inkSoft,
    },
  },

  shape: { borderRadius: 16 },

  typography: {
    fontFamily: FONT,
    h1: {
      fontFamily: FONT,
      fontWeight: 700,
      fontSize: 'clamp(2rem, 1.4rem + 2.4vw, 3.2rem)',
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: FONT,
      fontWeight: 700,
      fontSize: 'clamp(1.6rem, 1.2rem + 1.4vw, 2.3rem)',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: FONT,
      fontWeight: 600,
      fontSize: 'clamp(1.25rem, 1.05rem + 0.8vw, 1.7rem)',
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: FONT,
      fontWeight: 600,
      fontSize: '1.2rem',
    },
    h5: { fontFamily: FONT, fontWeight: 600 },
    h6: { fontFamily: FONT, fontWeight: 600 },
    subtitle1: { fontSize: '1.1rem', lineHeight: 1.7 },
    body1: { fontSize: '1.0625rem', lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
    button: { fontWeight: 700, textTransform: 'none', letterSpacing: 0 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': { height: '100%' },
        body: { backgroundColor: BRAND.cream, overflowX: 'hidden' },
        '#root': { display: 'flex', flexDirection: 'column' },
        a: { color: BRAND.orangeDark },
        ':focus-visible': { outline: `3px solid ${BRAND.orange}`, outlineOffset: '2px' },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 22, paddingBlock: 10 },
        containedPrimary: {
          boxShadow: '0 8px 20px rgba(240, 90, 40, 0.28)',
          '&:hover': { boxShadow: '0 10px 24px rgba(240, 90, 40, 0.34)' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: 20 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: `1px solid ${BRAND.peach}`,
          boxShadow: '0 12px 30px rgba(59, 42, 34, 0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 700 },
      },
    },
    MuiLink: {
      defaultProps: { underline: 'hover' },
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
    },
  },
});

export default theme;
