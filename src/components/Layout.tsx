// Okvir svake stranice: preskakanje na sadrzaj, zaglavlje, sadrzaj i podnozje.
// Pri promeni stranice vraca se na vrh.

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Outlet, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n';
import { BRAND } from '../theme';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const { t } = useI18n();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%', flexGrow: 1 }}>
      <Box
        component="a"
        href="#sadrzaj"
        sx={{
          position: 'absolute',
          left: -9999,
          top: 0,
          zIndex: 2000,
          p: 2,
          backgroundColor: BRAND.orange,
          color: '#fff',
          fontWeight: 700,
          '&:focus': { left: 0 },
        }}
      >
        {t.ui.skipToContent}
      </Box>

      <Header />

      <Box component="main" id="sadrzaj" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
