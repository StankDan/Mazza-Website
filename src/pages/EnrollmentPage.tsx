// Upis: uslovi, potrebna dokumentacija i preuzimanje obrazaca.

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useI18n } from '../i18n';
import ContentPage from '../components/ContentPage';
import DocumentList from '../components/DocumentList';
import CallCta from '../components/CallCta';
import { BRAND } from '../theme';

const DOC_IDS = ['enrollmentForm', 'admissionSheet', 'healthCertificate'];

export default function EnrollmentPage() {
  const { t } = useI18n();

  return (
    <ContentPage pageKey="enrollment" maxWidth={900}>
      <Box sx={{ mt: 6, maxWidth: 1100 }}>
        <Typography variant="h2" component="h2" sx={{ color: BRAND.orangeDark }}>
          {t.ui.enrollmentFormsTitle}
        </Typography>
        <DocumentList ids={DOC_IDS} />
      </Box>

      <CallCta sx={{ mt: 6 }} />
    </ContentPage>
  );
}
