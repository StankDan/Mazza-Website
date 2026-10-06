// Upitnik za roditelje: anonimni online upitnik o zadovoljstvu radom ustanove.

import ContentPage from '../components/ContentPage';
import ParentSurvey from '../components/ParentSurvey';

export default function QuestionnairePage() {
  return (
    <ContentPage pageKey="questionnaire" maxWidth={900}>
      <ParentSurvey />
    </ContentPage>
  );
}
