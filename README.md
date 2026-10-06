# Sajt Predškolske ustanove „Mazza“ — Niš

React (Create React App) + TypeScript + MUI. Sajt je na srpskom (latinica) i
pripremljen za SEO/AEO za tržište Srbije, posebno za Niš.

## Pokretanje

```bash
npm install
npm start          # razvojni server na http://localhost:3000
npm test           # dimni testovi (renderovanje stranica, kontakt linkovi, podnožje)
npm run build      # produkcijska verzija (pre build-a generiše sitemap.xml)
npm run sitemap    # samo ponovno generisanje public/sitemap.xml
npm run slike      # priprema fotografija vrtića (posle dodavanja novih)
npm run galerija   # priprema fotografija za stranicu „Galerija"
```

## Struktura

```
public/
  dokumenti/            PDF obrasci ustanove za preuzimanje
  images/vrtici/       fotografije vrtića (pravi ih npm run slike)
  images/logo-mazza.png logotip (izvučen iz Logo/logotip.psd)
  images/og-mazza.png   slika za deljenje linka na mrežama (1200×630)
  index.html            osnovni HTML (meta oznake postavlja aplikacija)
  robots.txt            + sitemap.xml (generiše se skriptom)
  _redirects, .htaccess  da sve adrese otvara React aplikacija
scripts/
  generate-sitemap.js           pravi sitemap.xml iz src/routes.ts
  prepare-gallery.js            priprema fotografije za stranicu „Galerija"
  prepare-photos.js             priprema fotografije vrtića za web
src/
  routes.ts        spisak stranica i njihove adrese (bez jezičkog prefiksa)
  theme.ts         MUI tema: boje iz logotipa i font Baloo 2 (jedan font svuda)
  data/site.ts     adrese, telefoni, e-mail adrese, radno vreme, dokumenti
  data/photos.ts   spisak fotografija (generiše ga skripta)
  i18n/sr.ts       sav tekst sajta — ovde se menjaju reči
  i18n/types.ts    oblik sadržaja (ako nekad zatreba drugi jezik, prati ovaj tip)
  components/      zaglavlje, podnožje, uvodni ekran, SEO, gradivni blokovi
  pages/           stranice sa posebnim izgledom (početna, program, upis…)
```

## Kako se menja sadržaj

- **Tekst:** `src/i18n/sr.ts` — naslovi, pasusi, liste, meta opisi i česta pitanja.
- **Telefoni, adrese, e-mail:** `src/data/site.ts`. Telefon se otvara pozivom
  (`tel:`), e-mail otvara poštu (`mailto:`), adresa otvara Google mape u novom tabu.
- **Nove stranice:** dodati ključ u `PAGES` u `src/routes.ts` (sa slug-om), tekst u
  `src/i18n/sr.ts` i, ako treba poseban izgled, komponentu u `src/pages` i unos u
  `CUSTOM_PAGES` u `src/App.tsx`.
- **Boje i font:** `src/theme.ts` (`BRAND.orange` je tačna boja iz logotipa,
  `#F04E23`). Font je Baloo 2 i učitava se u `public/index.html`.

## Slike i dokumenti

- **Fotografije vrtića** stoje u `public/images/vrtici/mazza-1|2|3`. Ne dodaju se
  ručno: originali (8000+ px, 15-30 MB) se pripremaju skriptom

  ```bash
  npm run slike     # smanji originale i osveži spisak slika
  ```

  Skripta (`scripts/prepare-photos.js`) pravi dve veličine — 1600 px za veliki
  prikaz i 800 px za mrežu — i upisuje spisak u `src/data/photos.ts`
  (taj fajl se ne menja ručno). Putanje do foldera sa originalima su na vrhu
  skripte, u `SOURCES`; za nove slike samo ubaciti fajlove u te foldere i
  ponovo pokrenuti `npm run slike`.
- **Galerija** (izleti, predstave, aktivnosti — sve zajedno, bez kategorija):
  originali idu u `Pomocni Materijali/Galerija`, pa `npm run galerija` pravi
  smanjene slike u `public/images/galerija/` i spisak u `src/data/galleryPhotos.ts`.
  Ne ubacivati originale direktno u `public/` (skripta taj folder briše i pravi iznova).
- Koja fotografija vrtića ide uz koju uzrasnu grupu na stranici „Programi" piše
  u `src/data/programPhotos.ts`.
- Stranice bez fotografija koriste SVG ilustracije iz
  `src/components/PlaceholderImage.tsx`.
- **PDF obrasci** stoje u `public/dokumenti`. Kada stigne nov ili izmenjen obrazac,
  fajl se ubaci u taj folder i doda u `DOCUMENTS` u `src/data/site.ts`, a naziv
  koji se vidi na sajtu u `documents` u `src/i18n/sr.ts`. Imena fajlova bez
  razmaka i bez ćirilice, da bi linkovi radili na svakom hostingu.
- Logotip je izvučen iz `Logo/logotip.psd` (providna pozadina, bez memoranduma) i
  koristi se u zaglavlju, podnožju i na uvodnom ekranu preko `src/components/Logo.tsx`.

## Upitnik za roditelje (slanje na e-mail)

Upitnik na `/kutak-za-roditelje/upitnik-za-roditelje` je anoniman i šalje se
preko **Netlify Forms** (forma `upitnik-za-roditelje`), bez servera i bez ključeva u kodu.

1. Netlify → sajt → **Forms** → *Enable form detection* (jednom), pa ponovo objaviti sajt.
2. **Site configuration → Notifications → Emails and webhooks → Form submission
   notifications → Add notification → Email notification**, forma
   `upitnik-za-roditelje`, upisati e-mail na koji stižu odgovori (prvo testni,
   kasnije pravi — menja se samo tu, kod se ne dira).
3. Svi odgovori se vide i u Netlify panelu (**Forms**), i mogu se izvesti u CSV.

Pitanja su u `survey` u `src/i18n/sr.ts`. Ako se doda pitanje ili promeni `name`,
isto polje treba dodati i u skrivenu formu u `public/index.html` (test to proverava).
Na lokalnom serveru (`npm start`) slanje ne radi — samo na Netlify-u.

## SEO i AEO

- Svaka stranica ima svoj `<title>`, opis i `canonical` — `src/components/Seo.tsx`.
- Strukturirani podaci (JSON-LD): `ChildCare` / `EducationalOrganization` sa sve tri
  lokacije i koordinatama, `WebPage`, `BreadcrumbList` i `FAQPage`.
- Pitanja i odgovori na stranicama („Česta pitanja“) su isti oni koji idu u
  `FAQPage`, što pomaže da se odgovori pojave u Google pretrazi i AI odgovorima.
- `public/sitemap.xml` (20 adresa) generiše se automatski pri `npm run build`.
- `public/llms.txt` je kratak opis ustanove za AI pretraživače (adrese, telefoni,
  spisak stranica, česta pitanja). Ažurirati ga kad se menjaju kontakti ili stranice.
- Lokalni signali za Niš: `geo.region RS-NIS`, koordinate objekata, adrese i
  telefoni u JSON-LD i u podnožju svake stranice.

## Sakrivanje sajta od pretraživača

Sajt je **trenutno sakriven** — ne sme da se pojavi u Google-u ni drugim
pretraživačima. To je namešteno na četiri mesta:

| Gde | Šta stoji sada |
| --- | --- |
| `src/data/site.ts` | `ALLOW_INDEXING = false` → svaka stranica šalje `noindex, nofollow` |
| `public/index.html` | `<meta name="robots" content="noindex, nofollow" />` |
| `public/robots.txt` | `User-agent: *` + `Disallow: /` |
| `netlify.toml` | zaglavlje `X-Robots-Tag: noindex, nofollow` (pokriva i PDF-ove i slike) |

**Kada sajt bude spreman za objavu**, sve četiri stavke treba promeniti:

1. `src/data/site.ts` → `export const ALLOW_INDEXING = true;`
2. `public/index.html` → obrisati liniju sa `<meta name="robots" ...>`
3. `netlify.toml` → obrisati blok sa `X-Robots-Tag`
4. `public/robots.txt` → zameniti sadržaj sa:

```
User-agent: *
Allow: /

Sitemap: https://www.vrticmazza.rs/sitemap.xml
```

Zatim `npm run build` i novi deploy. Ako je sajt već bio javan, u Google Search
Console-u zatražiti ponovno indeksiranje.

### Preporuka pre objave

1. U `src/data/site.ts` proveriti `SITE_URL` (može i preko `REACT_APP_SITE_URL`
   u `netlify.toml`, korisno dok se testira na `*.netlify.app` adresi).
2. Napraviti Google Business Profile za sva tri objekta i povezati ih sa sajtom.
3. Pošto je ovo Create React App (sadržaj se iscrtava u pregledaču), `build/index.html`
   nema teksta. Google izvršava JavaScript, ali GPTBot, ClaudeBot i PerplexityBot
   uglavnom ne — pa za pojavljivanje u AI odgovorima treba pre-rendering (statički
   HTML po stranici) ili prelazak na Next.js.

## Uvodni ekran

Pri otvaranju sajta prikazuje se logotip i „Osnovano 1990.“ dve sekunde, zatim se
blago rastapa i otkriva sajt (`src/components/SplashScreen.tsx`, konstante
`SPLASH_VISIBLE_MS` i `SPLASH_FADE_MS`). Posetiocima koji su u sistemu isključili
animacije (`prefers-reduced-motion`) sajt se prikazuje odmah, bez uvodnog ekrana.
