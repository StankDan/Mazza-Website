// Pitanja i odgovori. Vidljiva su na stranici, a ista pitanja idu i u
// JSON-LD (FAQPage), sto pomaze da se odgovori pojave u pretrazi i AI odgovorima.

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import type { FaqItem } from '../i18n/types';
import { BRAND } from '../theme';

interface FaqSectionProps {
  title: string;
  items: FaqItem[];
}

export default function FaqSection({ title, items }: FaqSectionProps) {
  if (!items.length) return null;

  return (
    <Box component="section" sx={{ mt: 6 }}>
      <Typography variant="h2" component="h2" sx={{ mb: 2, color: BRAND.orangeDark }}>
        {title}
      </Typography>

      {items.map((item, index) => (
        <Accordion
          key={item.question}
          defaultExpanded={index === 0}
          disableGutters
          elevation={0}
          sx={{
            mb: 1.5,
            border: `1px solid ${BRAND.peach}`,
            borderRadius: '16px !important',
            backgroundColor: '#fff',
            '&::before': { display: 'none' },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
            <Typography component="h3" sx={{ fontWeight: 700 }}>
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary' }}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
