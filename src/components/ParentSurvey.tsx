// Anonimni online upitnik za roditelje. Odgovori se salju preko Netlify Forms
// (forma SURVEY_FORM_NAME), a Netlify ih prosledjuje na e-mail koji se podesava
// u Netlify panelu (vidi README). Skrivena kopija forme stoji u
// public/index.html - po njoj Netlify prepoznaje polja pri objavljivanju.

import { useState } from 'react';
import type { FormEvent } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useI18n } from '../i18n';
import type { SurveyQuestion } from '../i18n/types';
import { BRAND } from '../theme';

export const SURVEY_FORM_NAME = 'upitnik-za-roditelje';
export const AGE_FIELD = 'uzrast-deteta';
export const LOCATION_FIELD = 'objekat';

/** Naziv polja za obrazlozenje uz odgovor "Ne". */
export const reasonField = (question: SurveyQuestion) => `${question.name}-obrazlozenje`;

type Answers = Record<string, string | string[]>;
type Status = 'idle' | 'sending' | 'sent' | 'error';

const cardSx = { borderRadius: 4, boxShadow: 'none', border: `1px solid ${BRAND.peach}` };

export default function ParentSurvey() {
  const { t } = useI18n();
  const s = t.survey;
  const [answers, setAnswers] = useState<Answers>({});
  const [missing, setMissing] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');

  const value = (name: string) => (answers[name] as string) || '';
  const set = (name: string, next: string | string[]) => {
    setAnswers((current) => ({ ...current, [name]: next }));
    setMissing((current) => current.filter((item) => item !== name));
  };

  const toggle = (name: string, option: string) => {
    const current = (answers[name] as string[]) || [];
    set(name, current.includes(option) ? current.filter((o) => o !== option) : [...current, option]);
  };

  // Obavezni su uzrast, objekat i sva pitanja sa ponudjenim odgovorom.
  const requiredFields = [
    AGE_FIELD,
    LOCATION_FIELD,
    ...s.questions.filter((q) => q.kind === 'yesNo' || q.kind === 'single').map((q) => q.name),
  ];

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const empty = requiredFields.filter((name) => !value(name).trim());
    setMissing(empty);
    if (empty.length) {
      document.getElementById(`polje-${empty[0]}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const body = new URLSearchParams({ 'form-name': SURVEY_FORM_NAME });
    body.append(AGE_FIELD, value(AGE_FIELD).trim());
    body.append(LOCATION_FIELD, value(LOCATION_FIELD));
    s.questions.forEach((q) => {
      const answer = answers[q.name];
      body.append(q.name, Array.isArray(answer) ? answer.join('; ') : (answer || '').trim());
      if (q.reasonLabel) {
        body.append(reasonField(q), answer === s.no ? value(reasonField(q)).trim() : '');
      }
    });

    setStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus('sent');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <Card sx={{ ...cardSx, maxWidth: 820, textAlign: 'center', backgroundColor: BRAND.peachSoft }}>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <CheckCircleRoundedIcon sx={{ fontSize: 56, color: BRAND.orange }} />
          <Typography variant="h3" component="h2" sx={{ mt: 1, color: BRAND.orangeDark }}>
            {s.successTitle}
          </Typography>
          <Typography sx={{ mt: 1.5, color: 'text.secondary' }}>{s.successText}</Typography>
        </CardContent>
      </Card>
    );
  }

  const errorFor = (name: string) => missing.includes(name);
  let number = 0;

  return (
    <Box component="form" noValidate onSubmit={submit} name={SURVEY_FORM_NAME} sx={{ maxWidth: 820 }}>
      <Alert
        icon={<LockRoundedIcon fontSize="inherit" />}
        severity="info"
        sx={{ mb: 3, borderRadius: 3, backgroundColor: BRAND.peachSoft, color: 'text.primary' }}
      >
        {s.anonymousNote}
      </Alert>

      <Stack spacing={2.5}>
        <Card sx={cardSx} id={`polje-${AGE_FIELD}`}>
          <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
            <Stack spacing={3}>
              <TextField
                label={s.ageLabel}
                placeholder={s.agePlaceholder}
                required
                value={value(AGE_FIELD)}
                onChange={(e) => set(AGE_FIELD, e.target.value)}
                error={errorFor(AGE_FIELD)}
                helperText={errorFor(AGE_FIELD) ? s.requiredError : ' '}
                sx={{ maxWidth: 360 }}
              />
              <FormControl error={errorFor(LOCATION_FIELD)} required id={`polje-${LOCATION_FIELD}`}>
                <FormLabel sx={{ fontWeight: 700, color: 'text.primary' }}>{s.locationLabel}</FormLabel>
                <RadioGroup value={value(LOCATION_FIELD)} onChange={(e) => set(LOCATION_FIELD, e.target.value)}>
                  {s.locations.map((location) => (
                    <FormControlLabel key={location} value={location} control={<Radio />} label={location} />
                  ))}
                </RadioGroup>
                {errorFor(LOCATION_FIELD) && <FormHelperText>{s.requiredError}</FormHelperText>}
              </FormControl>
            </Stack>
          </CardContent>
        </Card>

        {s.questions.map((q) => {
          number += 1;
          const label = `${number}. ${q.label}`;
          const isRequired = q.kind === 'yesNo' || q.kind === 'single';
          const options = q.kind === 'yesNo' ? [s.yes, s.no] : q.options || [];

          return (
            <Card sx={cardSx} key={q.name} id={`polje-${q.name}`}>
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                {q.kind === 'text' ? (
                  <FormControl fullWidth>
                    <FormLabel htmlFor={`odgovor-${q.name}`} sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.4 }}>
                      {label}
                    </FormLabel>
                    <TextField
                      id={`odgovor-${q.name}`}
                      multiline
                      minRows={2}
                      fullWidth
                      value={value(q.name)}
                      onChange={(e) => set(q.name, e.target.value)}
                      sx={{ mt: 1.5 }}
                    />
                  </FormControl>
                ) : (
                  <FormControl error={errorFor(q.name)} required={isRequired} fullWidth>
                    <FormLabel sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.4 }}>{label}</FormLabel>

                    {q.kind === 'multi' ? (
                      <FormGroup sx={{ mt: 1 }}>
                        {options.map((option) => (
                          <FormControlLabel
                            key={option}
                            control={
                              <Checkbox
                                checked={((answers[q.name] as string[]) || []).includes(option)}
                                onChange={() => toggle(q.name, option)}
                              />
                            }
                            label={option}
                            sx={{ alignItems: 'flex-start', mb: 0.5, '& .MuiCheckbox-root': { pt: 0.5 } }}
                          />
                        ))}
                      </FormGroup>
                    ) : (
                      <RadioGroup
                        row={q.kind === 'yesNo'}
                        value={value(q.name)}
                        onChange={(e) => set(q.name, e.target.value)}
                        sx={{ mt: 1 }}
                      >
                        {options.map((option) => (
                          <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                        ))}
                      </RadioGroup>
                    )}

                    {errorFor(q.name) && <FormHelperText sx={{ mx: 0 }}>{s.requiredError}</FormHelperText>}
                  </FormControl>
                )}

                {q.reasonLabel && (
                  <Collapse in={value(q.name) === s.no} unmountOnExit>
                    <TextField
                      label={q.reasonLabel}
                      multiline
                      minRows={2}
                      fullWidth
                      value={value(reasonField(q))}
                      onChange={(e) => set(reasonField(q), e.target.value)}
                      sx={{ mt: 2 }}
                    />
                  </Collapse>
                )}
              </CardContent>
            </Card>
          );
        })}
      </Stack>

      {missing.length > 0 && (
        <Alert severity="warning" sx={{ mt: 3, borderRadius: 3 }}>
          {s.formError}
        </Alert>
      )}
      {status === 'error' && (
        <Alert severity="error" sx={{ mt: 3, borderRadius: 3 }}>
          {s.sendError}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={status === 'sending'}
        endIcon={<SendRoundedIcon />}
        sx={{ mt: 3 }}
      >
        {status === 'sending' ? s.sending : s.submit}
      </Button>
    </Box>
  );
}
