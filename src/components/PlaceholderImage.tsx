// Privremena "slika" dok ne stignu fotografije vrtica. Crta se kao SVG,
// pa je lagana i uvek ostra, a zamenjuje se pravom slikom bez promene rasporeda.

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BRAND } from '../theme';

type Variant = 'house' | 'yard' | 'play' | 'sun';

interface PlaceholderImageProps {
  label: string;
  caption?: string;
  variant?: Variant;
  /** Odnos stranica, npr. '4 / 3' ili '16 / 9'. */
  ratio?: string;
  rounded?: number;
}

const PALETTE: Record<Variant, { sky: string; ground: string; accent: string }> = {
  house: { sky: BRAND.peachSoft, ground: BRAND.peach, accent: BRAND.orange },
  yard: { sky: '#EAF4EC', ground: '#D6E9D9', accent: BRAND.green },
  play: { sky: '#EAF2F8', ground: '#D8E7F1', accent: BRAND.sky },
  sun: { sky: '#FDF3DC', ground: '#F8E5B8', accent: BRAND.sun },
};

function Artwork({ variant }: { variant: Variant }) {
  const colors = PALETTE[variant];
  return (
    <Box
      component="svg"
      viewBox="0 0 400 300"
      role="presentation"
      focusable="false"
      sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <rect width="400" height="300" fill={colors.sky} />
      <circle cx="330" cy="62" r="34" fill={colors.accent} opacity="0.35" />
      <path d="M0 214 Q 100 178 200 214 T 400 210 L400 300 L0 300 Z" fill={colors.ground} />
      <path d="M118 210 L118 138 L200 92 L282 138 L282 210 Z" fill="#FFFFFF" opacity="0.85" />
      <path d="M104 142 L200 82 L296 142 Z" fill={colors.accent} opacity="0.75" />
      <rect x="182" y="166" width="36" height="44" rx="6" fill={colors.accent} opacity="0.6" />
      <circle cx="146" cy="162" r="13" fill={colors.accent} opacity="0.4" />
      <circle cx="254" cy="162" r="13" fill={colors.accent} opacity="0.4" />
      <circle cx="58" cy="228" r="20" fill={colors.accent} opacity="0.25" />
      <circle cx="352" cy="240" r="26" fill={colors.accent} opacity="0.2" />
    </Box>
  );
}

export default function PlaceholderImage({
  label,
  caption,
  variant = 'house',
  ratio = '4 / 3',
  rounded = 24,
}: PlaceholderImageProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: ratio,
        borderRadius: `${rounded}px`,
        overflow: 'hidden',
        border: `1px dashed ${BRAND.orange}55`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Artwork variant={variant} />
      <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Typography
          component="span"
          sx={{
            display: 'inline-block',
            px: 1.75,
            py: 0.75,
            borderRadius: 999,
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            color: BRAND.inkSoft,
            fontSize: '0.8rem',
            fontWeight: 700,
          }}
        >
          {label}
        </Typography>
        {caption && (
          <Typography
            component="p"
            sx={{ mt: 1, color: BRAND.ink, fontWeight: 700, fontSize: '0.95rem' }}
          >
            {caption}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
