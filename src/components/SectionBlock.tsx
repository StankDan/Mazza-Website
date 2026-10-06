// Prikaz jednog dela teksta sa stranice: naslov, pasusi, lista, numerisani
// koraci i istaknuta recenica.

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import type { Section } from '../i18n/types';
import { BRAND } from '../theme';

export function Highlight({ text }: { text: string }) {
  return (
    <Box
      sx={{
        mt: 3,
        p: { xs: 2.5, md: 3 },
        borderRadius: 4,
        backgroundColor: BRAND.peachSoft,
        borderLeft: `6px solid ${BRAND.orange}`,
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: BRAND.ink }}>{text}</Typography>
    </Box>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', p: 0, m: 0, mt: 2 }}>
      {items.map((item) => (
        <Stack key={item} component="li" direction="row" spacing={1.5} alignItems="flex-start">
          <Box
            sx={{
              mt: '3px',
              flexShrink: 0,
              width: 24,
              height: 24,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              backgroundColor: BRAND.peach,
              color: BRAND.orangeDark,
            }}
          >
            <CheckRoundedIcon sx={{ fontSize: 16 }} />
          </Box>
          <Typography component="span">{item}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default function SectionBlock({ section }: { section: Section }) {
  return (
    <Box component="section" sx={{ mt: section.heading ? 5 : 3 }}>
      {section.heading && (
        <Typography variant="h2" component="h2" sx={{ mb: 2, color: BRAND.orangeDark }}>
          {section.heading}
        </Typography>
      )}

      {section.paragraphs?.map((paragraph) => (
        <Typography key={paragraph.slice(0, 40)} paragraph sx={{ color: 'text.secondary' }}>
          {paragraph}
        </Typography>
      ))}

      {section.bullets && <BulletList items={section.bullets} />}

      {section.link && (
        <Typography sx={{ mt: 2.5, color: 'text.secondary' }}>
          {section.link.before}
          <Link
            href={section.link.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: 700, color: BRAND.orangeDark }}
          >
            {section.link.text}
          </Link>
          {section.link.after}
        </Typography>
      )}

      {section.numbered && (
        <Stack component="ol" spacing={2.5} sx={{ listStyle: 'none', p: 0, m: 0, mt: 2 }}>
          {section.numbered.map((group, index) => (
            <Box component="li" key={group.title}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: BRAND.orange,
                    color: '#fff',
                    fontWeight: 700,
                  }}
                >
                  {index + 1}
                </Box>
                <Typography variant="h4" component="h3">
                  {group.title}
                </Typography>
              </Stack>
              <Stack component="ul" spacing={1} sx={{ pl: 6, m: 0, listStyle: 'disc' }}>
                {group.items.map((item) => (
                  <Typography key={item.slice(0, 40)} component="li" sx={{ color: 'text.secondary' }}>
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      )}

      {section.highlight && <Highlight text={section.highlight} />}
    </Box>
  );
}
