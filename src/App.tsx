// Koren aplikacije: tema, rute i uvodni ekran sa logotipom.

import { useCallback, useState } from 'react';
import type { ReactElement } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from './theme';
import { content } from './i18n';
import { PAGE_KEYS, routePathFor } from './routes';
import type { PageKey } from './routes';
import Layout from './components/Layout';
import ContentPage from './components/ContentPage';
import SplashScreen, { SPLASH_FADE_MS } from './components/SplashScreen';
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';
import ParentsPage from './pages/ParentsPage';
import GalleryPage from './pages/GalleryPage';
import PhotosPage from './pages/PhotosPage';
import LocationPage from './pages/LocationPage';
import EnrollmentPage from './pages/EnrollmentPage';
import QuestionnairePage from './pages/QuestionnairePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

/** Stranice koje imaju svoj izgled; ostale koriste standardni prikaz teksta. */
const CUSTOM_PAGES: Partial<Record<PageKey, ReactElement>> = {
  program: <ProgramPage />,
  parents: <ParentsPage />,
  gallery: <GalleryPage />,
  gallery1: <LocationPage locationId="mazza-1" pageKey="gallery1" />,
  gallery2: <LocationPage locationId="mazza-2" pageKey="gallery2" />,
  gallery3: <LocationPage locationId="mazza-3" pageKey="gallery3" />,
  photos: <PhotosPage />,
  enrollment: <EnrollmentPage />,
  questionnaire: <QuestionnairePage />,
  contact: <ContactPage />,
};

export default function App() {
  // Posetiocima koji su iskljucili animacije odmah prikazujemo sajt, bez uvodnog ekrana.
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)', { noSsr: true });
  const [revealed, setRevealed] = useState(false);
  const reveal = useCallback(() => setRevealed(true), []);
  const visible = revealed || reducedMotion;

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {!reducedMotion && (
          <SplashScreen
            founded={content.splashFounded}
            siteName={content.siteName}
            onFinish={reveal}
          />
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(12px)',
            transition: reducedMotion
              ? "none"
              : `opacity ${SPLASH_FADE_MS}ms ease-out, transform ${SPLASH_FADE_MS}ms ease-out`,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />

                {PAGE_KEYS.filter((key) => key !== 'home').map((key) => (
                  <Route
                    key={key}
                    path={routePathFor(key)}
                    element={CUSTOM_PAGES[key] || <ContentPage pageKey={key} />}
                  />
                ))}

                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </HelmetProvider>
  );
}
