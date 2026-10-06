// Dimni test: proverava da se stranice otvaraju, da uvodni ekran nestaje
// i da telefon, e-mail i adresa imaju prave linkove.

import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';
import App from './App';
import { SPLASH_VISIBLE_MS } from './components/SplashScreen';
import { AGE_FIELD, LOCATION_FIELD, SURVEY_FORM_NAME, reasonField } from './components/ParentSurvey';
import { content } from './i18n';

let container: HTMLDivElement;
let root: Root;

function renderAt(pathname: string) {
  window.history.pushState({}, '', pathname);
  container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    root = createRoot(container);
    root.render(<App />);
  });
}

function unmount() {
  act(() => {
    root.unmount();
  });
  container.remove();
}

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test('pocetna strana se otvara na korenu sajta', () => {
  renderAt('/');
  expect(container.textContent).toContain('Vrtić u kome se deca osećaju kao kod kuće');
  expect(container.textContent).toContain('Osnovano 1990.');
  unmount();
});

test('unutrasnje stranice imaju svoje adrese bez jezickog prefiksa', () => {
  renderAt('/o-nama');
  expect(container.textContent).toContain('Naša priča počinje davne 1990. godine');
  unmount();

  renderAt('/kutak-za-roditelje/adaptacija-deteta');
  expect(container.textContent).toContain('Adaptacija deteta');
  unmount();
});

test('uvodni ekran nestaje posle dve sekunde', () => {
  renderAt('/');
  const splash = () => container.querySelector('img[alt="Vrtić Mazza"]');
  expect(splash()).not.toBeNull();

  act(() => {
    jest.advanceTimersByTime(SPLASH_VISIBLE_MS + 1000);
  });

  expect(splash()).toBeNull();
  unmount();
});

test('kontakt strana ima klikabilan telefon, e-mail i adresu', () => {
  renderAt('/kontakt');

  const tel = container.querySelector('a[href="tel:+38118217619"]');
  const mail = container.querySelector('a[href="mailto:mazza_nis@hotmail.com"]');
  const maps = container.querySelector('a[href^="https://www.google.com/maps/search/"]');

  expect(tel).not.toBeNull();
  expect(mail).not.toBeNull();
  expect(maps).not.toBeNull();
  expect(maps?.getAttribute('target')).toBe('_blank');
  unmount();
});

test('podnozje ima sva tri vrtica', () => {
  renderAt('/');
  const footer = container.querySelector('footer');

  expect(footer?.textContent).toContain('MAZZA 1');
  expect(footer?.textContent).toContain('MAZZA 2');
  expect(footer?.textContent).toContain('MAZZA 3');
  expect(footer?.querySelector('a[href="tel:+38118217619"]')).not.toBeNull();
  unmount();
});

test('podnozje odmah prikazuje mobilne telefone i e-mail', () => {
  renderAt('/');
  const footer = container.querySelector('footer') as HTMLElement;

  expect(footer.querySelector('a[href="tel:+381659200255"]')).not.toBeNull();
  expect(footer.querySelector('a[href="tel:+381641315267"]')).not.toBeNull();
  expect(footer.querySelector('a[href="tel:+381642214590"]')).not.toBeNull();
  expect(footer.querySelector('a[href="mailto:mazza_nis@hotmail.com"]')).not.toBeNull();
  unmount();
});

test('nepoznata adresa prikazuje stranicu 404', () => {
  renderAt('/ne-postoji');
  expect(container.textContent).toContain('Stranica nije pronađena');
  unmount();
});

test('galerija ima svoju stranicu i stavku u meniju', () => {
  renderAt('/galerija');
  expect(container.querySelector('h1')?.textContent).toBe('Galerija');
  expect(container.querySelector('header a[href="/galerija"]')).not.toBeNull();
  unmount();
});

test('upitnik za roditelje se popunjava na sajtu', () => {
  renderAt('/kutak-za-roditelje/upitnik-za-roditelje');
  expect(container.querySelector('form[name="upitnik-za-roditelje"]')).not.toBeNull();
  expect(container.textContent).toContain('Pošaljite upitnik');
  unmount();

  renderAt('/kutak-za-roditelje');
  const link = container.querySelector('a.MuiButton-root[href="/kutak-za-roditelje/upitnik-za-roditelje"]');
  expect(link?.textContent).toContain('Popunite upitnik');
  unmount();
});

test('skrivena Netlify forma ima sva polja upitnika', () => {
  // eslint-disable-next-line global-require
  const fs = require('fs');
  // eslint-disable-next-line global-require
  const path = require('path');
  const html: string = fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf8');
  const names = [AGE_FIELD, LOCATION_FIELD];
  content.survey.questions.forEach((q) => {
    names.push(q.name);
    if (q.reasonLabel) names.push(reasonField(q));
  });

  names.forEach((name) => expect(html).toContain(`name="${name}"`));
  expect(html).toContain(`form name="${SURVEY_FORM_NAME}" data-netlify="true"`);
});
