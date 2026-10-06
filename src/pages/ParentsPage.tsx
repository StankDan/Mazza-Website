// Kutak za roditelje: adaptacija deteta i upitnik za roditelje.

import ContentPage from '../components/ContentPage';
import PageLinkCards from '../components/PageLinkCards';
import type { PageKey } from '../routes';

const SUBPAGES: PageKey[] = ['adaptation', 'questionnaire'];

export default function ParentsPage() {
  return (
    <ContentPage pageKey="parents" maxWidth="100%">
      <PageLinkCards keys={SUBPAGES} columns={2} />
    </ContentPage>
  );
}
