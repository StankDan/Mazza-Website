// Glavna navigacija. Levo samo logotip, desno stavke menija u jednom redu i
// broj telefona. Na telefonu i tabletu - fioka sa istim redosledom stranica.

import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n';
import type { PageKey } from '../routes';
import { LOCATIONS } from '../data/site';
import { BRAND } from '../theme';
import Logo from './Logo';

interface NavItem {
  key: PageKey;
  children?: PageKey[];
}

const NAV: NavItem[] = [
  { key: 'about' },
  { key: 'team' },
  {
    key: 'program',
    children: [
      'programNursery',
      'programKindergarten',
      'programPreschool',
      'programExtra',
      'programOutside',
    ],
  },
  { key: 'nutrition' },
  { key: 'parents', children: ['adaptation', 'questionnaire'] },
  { key: 'gallery', children: ['gallery1', 'gallery2', 'gallery3'] },
  { key: 'photos' },
  { key: 'enrollment' },
  { key: 'contact' },
];

// Stavke menija stoje u jednom redu i nikad se ne prelamaju.
const navButtonSx = {
  px: 1,
  minWidth: 'auto',
  whiteSpace: 'nowrap',
  fontSize: '1rem',
  lineHeight: 1.2,
  '& .MuiButton-endIcon': { ml: 0.25, '& svg': { fontSize: '1.05em' } },
} as const;

export default function Header() {
  const { t, path } = useI18n();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<PageKey | null>(null);
  const [menuAnchor, setMenuAnchor] = useState<{ key: PageKey; el: HTMLElement } | null>(null);

  useEffect(() => {
    setDrawerOpen(false);
    setMenuAnchor(null);
  }, [location.pathname]);

  const openMenu = (key: PageKey) => (event: MouseEvent<HTMLElement>) =>
    setMenuAnchor({ key, el: event.currentTarget });

  const isActive = (key: PageKey, children?: PageKey[]) => {
    if (location.pathname === path(key)) return true;
    return (children || []).some((child) => location.pathname === path(child));
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 247, 242, 0.94)',
        backdropFilter: 'blur(8px)',
        color: 'text.primary',
        borderBottom: `1px solid ${BRAND.peach}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ gap: { lg: 1, xl: 2 }, minHeight: { xs: 64, md: 84 }, flexWrap: 'nowrap' }}
        >
          <Box
            component={RouterLink}
            to={path('home')}
            aria-label={t.siteName}
            sx={{ display: 'flex', alignItems: 'center', mr: 'auto', py: 1, flexShrink: 0 }}
          >
            <Logo alt={t.legalName} height={{ xs: 38, md: 48 }} />
          </Box>

          <Stack
            direction="row"
            spacing={0}
            sx={{ display: { xs: 'none', lg: 'flex' }, flexWrap: 'nowrap', alignItems: 'center' }}
          >
            {NAV.map((item) => {
              const active = isActive(item.key, item.children);
              const sx = {
                ...navButtonSx,
                fontWeight: active ? 800 : 600,
                color: active ? BRAND.orangeDark : 'inherit',
              };

              if (!item.children) {
                return (
                  <Button key={item.key} component={RouterLink} to={path(item.key)} color="inherit" sx={sx}>
                    {t.nav[item.key]}
                  </Button>
                );
              }

              return (
                <Box key={item.key} sx={{ flexShrink: 0 }}>
                  <Button
                    color="inherit"
                    onClick={openMenu(item.key)}
                    endIcon={<ExpandMoreRoundedIcon />}
                    aria-haspopup="menu"
                    aria-expanded={menuAnchor?.key === item.key ? 'true' : undefined}
                    sx={sx}
                  >
                    {t.nav[item.key]}
                  </Button>
                  <Menu
                    anchorEl={menuAnchor?.key === item.key ? menuAnchor.el : null}
                    open={menuAnchor?.key === item.key}
                    onClose={() => setMenuAnchor(null)}
                    MenuListProps={{ sx: { minWidth: 280 } }}
                  >
                    <MenuItem component={RouterLink} to={path(item.key)} sx={{ fontWeight: 700 }}>
                      {t.nav[item.key]}
                    </MenuItem>
                    <Divider />
                    {item.children.map((child) => (
                      <MenuItem key={child} component={RouterLink} to={path(child)}>
                        {t.nav[child]}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              );
            })}
          </Stack>

          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', flexShrink: 0 }}>
            {/* Broj uvek stoji u jednom redu; na manjim ekranima ostaje samo ikonica. */}
            <Button
              variant="contained"
              startIcon={<CallRoundedIcon />}
              href={LOCATIONS[0].phoneHref}
              aria-label={`${t.ui.callNow}: ${LOCATIONS[0].phone}`}
              sx={{
                display: { xs: 'none', lg: 'inline-flex' },
                ml: 1,
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {LOCATIONS[0].phone}
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', lg: 'none' }, alignItems: 'center', gap: 0.5 }}>
            <IconButton
              color="primary"
              href={LOCATIONS[0].phoneHref}
              aria-label={`${t.ui.callNow}: ${LOCATIONS[0].phone}`}
            >
              <CallRoundedIcon />
            </IconButton>
            <IconButton onClick={() => setDrawerOpen(true)} aria-label={t.ui.openMenu} color="inherit">
              <MenuRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 'min(360px, 88vw)', backgroundColor: BRAND.cream } }}
      >
        <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ p: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label={t.ui.closeMenu}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider />

        <List component="nav" sx={{ pb: 4 }}>
          <ListItemButton component={RouterLink} to={path('home')}>
            <ListItemText primary={t.nav.home} primaryTypographyProps={{ fontWeight: 700 }} />
          </ListItemButton>

          {NAV.map((item) => (
            <Box key={item.key}>
              <Stack direction="row" alignItems="center">
                <ListItemButton component={RouterLink} to={path(item.key)} sx={{ flexGrow: 1 }}>
                  <ListItemText primary={t.nav[item.key]} primaryTypographyProps={{ fontWeight: 700 }} />
                </ListItemButton>
                {item.children && (
                  <IconButton
                    onClick={() => setOpenGroup(openGroup === item.key ? null : item.key)}
                    aria-label={t.nav[item.key]}
                    sx={{ mr: 1 }}
                  >
                    {openGroup === item.key ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                  </IconButton>
                )}
              </Stack>

              {item.children && (
                <Collapse in={openGroup === item.key} unmountOnExit>
                  <List disablePadding>
                    {item.children.map((child) => (
                      <ListItemButton key={child} component={RouterLink} to={path(child)} sx={{ pl: 4 }}>
                        <ListItemText
                          primary={t.nav[child]}
                          primaryTypographyProps={{ fontSize: '0.95rem' }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
