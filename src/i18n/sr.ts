// Srpski (latinica) - izvorni tekst sajta. Cirilicna verzija se dobija
// automatskim preslovljavanjem ovog fajla (vidi cyrillic.ts).

import type { Content } from "./types";

const sr: Content = {
  siteName: "Vrtić Mazza",
  legalName: "Predškolska ustanova „Mazza“",
  tagline: "Prvi privatni porodični vrtić u Nišu",
  splashFounded: "Osnovano 1990.",

  nav: {
    home: "Početna",
    about: "O nama",
    team: "Naš tim",
    program: "Program",
    programNursery: "Program rada sa decom jaslenog uzrasta",
    programKindergarten: "Program rada sa decom vrtićkih grupa",
    programPreschool: "Pripremni predškolski program",
    programExtra: "Dodatne aktivnosti",
    programOutside: "Aktivnosti van ustanove",
    nutrition: "Ishrana",
    parents: "Kutak za roditelje",
    adaptation: "Adaptacija deteta",
    questionnaire: "Upitnik za roditelje",
    gallery: "Izgled vrtića",
    gallery1: "Mazza 1",
    gallery2: "Mazza 2",
    gallery3: "Mazza 3",
    photos: "Galerija",
    enrollment: "Upis",
    contact: "Kontakt",
  },

  ui: {
    skipToContent: "Pređi na sadržaj",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    languageLabel: "Jezik",
    breadcrumbLabel: "Putanja kroz sajt",
    home: "Početna",
    callLabel: "Telefon",
    emailLabel: "E-mail",
    addressLabel: "Adresa",
    mobileLabel: "Mobilni telefoni",
    openInMaps: "Otvorite na Google mapama",
    callNow: "Pozovite nas",
    sendEmail: "Pošaljite e-mail",
    workingHours: "Radno vreme",
    workingHoursValue: "Radnim danima 06:00 – 17:00",
    downloadPdf: "Preuzmite PDF",
    readMore: "Saznajte više",
    backToTop: "Nazad na vrh",
    faqTitle: "Česta pitanja",
    photoPlaceholder: "Fotografija uskoro",
    galleryTitle: "Fotografije vrtića",
    photoAlt: "Fotografija vrtića",
    openPhoto: "Otvori fotografiju",
    closePhoto: "Zatvori fotografiju",
    previousPhoto: "Prethodna fotografija",
    nextPhoto: "Sledeća fotografija",
    photoCounter: "Fotografija {broj} od {ukupno}",
    photosComingSoon: "Fotografije vrtića su u pripremi",
    galleryComingSoon:
      "Fotografije sa izleta, predstava i aktivnosti uskoro stižu. Do tada nas pratite na Facebook-u i Instagramu.",
    gallerySoonNote:
      "Fotografije naših objekata možete pogledati na stranici svakog vrtića. Za sve ostalo pozovite nas telefonom.",
    quickLinks: "Brzi linkovi",
    enrollmentFormsTitle: "Obrazac za upis deteta",
    contactTitle: "Kontakt",
    enrollCta: "Upišite dete",
    contactCta: "Pozovite nas",
    callForInfo:
      "Sve informacije o upisu, dokumentaciji i obilasku vrtića dobijate pozivom na broj najbližeg objekta.",
    documentsNote:
      "Dokumenta se preuzimaju u PDF formatu, a popunjena se donose u vrtić.",
    notFoundTitle: "Stranica nije pronađena",
    notFoundText:
      "Izgleda da je ova stranica odlutala u igri. Vratite se na početnu i nastavite dalje.",
    notFoundCta: "Nazad na početnu",
    footerRights: "Sva prava zadržana.",
    footerNote: "Predškolska ustanova „Mazza“ - Niš, Srbija",
    followUs: "Pratite nas",
    loading: "Učitavanje…",
  },

  home: {
    heroBadge: "Osnovano 1990.",
    heroTitle: "Vrtić u kome se deca osećaju kao kod kuće",
    heroSubtitle:
      "Predškolska ustanova „Mazza“ je prvi privatni porodični vrtić u Nišu. Već više od tri decenije čuvamo toplinu porodičnog doma, uz stručan vaspitni rad, jasle, vrtićke grupe i pripremni predškolski program na tri lokacije u gradu.",
    heroCtaPrimary: "Upišite dete",
    heroCtaSecondary: "Pogledajte program",
    statsFounded: "godina tradicije",
    statsLocations: "vrtića u Nišu",
    statsGroups: "uzrasne grupe",
    valuesTitle: "Zašto roditelji biraju Mazzu",
    values: [
      {
        title: "Toplina porodičnog doma",
        text: "Vrtić je nastao u porodičnoj kući i zadržao njen mir, sigurnost i osmeh. Deca se kod nas osećaju prihvaćeno od prvog dana.",
      },
      {
        title: "Male vaspitne grupe",
        text: "Radimo u malim grupama, pa svako dete dobija pažnju, podršku i vreme koje mu je potrebno.",
      },
      {
        title: "Stručni tim",
        text: "Medicinske sestre-vaspitači, vaspitači sa visokim strukovnim obrazovanjem, pedagog, logoped i nutricionista.",
      },
      {
        title: "Program „Godine uzleta“",
        text: "Učenje kroz tematske projekte koji polaze od interesovanja dece i razvijaju samostalnost, radoznalost i kreativnost.",
      },
      {
        title: "Zdrava ishrana",
        text: "Četiri obroka dnevno po jelovniku nutricioniste, uz poštovanje alergija i posebnih dijetetskih zahteva.",
      },
      {
        title: "Subvencija grada",
        text: "U svim našim vrtićima moguće je ostvariti subvencionisani boravak od strane grada Niša.",
      },
    ],
    aboutTitle: "Naša priča traje od 1990. godine",
    aboutText:
      "Počeli smo sa željom da stvorimo mesto u kome će se deca osećati ispunjeno i srećno. Kuću u kojoj su odrastala naša deca, rođaci, prijatelji i deca iz komšiluka pretvorili smo u vrtić koji je zadržao toplinu, radost i sigurnost porodičnog doma.",
    aboutCta: "Pročitajte o nama",
    ageGroupsTitle: "Uzrasne grupe",
    ageGroupsLead:
      "Vaspitno-obrazovni rad organizovan je po uzrastu, od jaslenih grupa do pripremnog predškolskog programa.",
    locationsTitle: "Naši vrtići u Nišu",
    locationsLead:
      "Tri objekta u Nišu - pozovite nas ili kliknite na adresu da biste otvorili lokaciju na Google mapama.",
    parentsTitle: "Kutak za roditelje",
    parentsLead:
      "Sve što je potrebno pre polaska u vrtić - adaptacija deteta i upitnik za roditelje.",
    ctaTitle: "Upis traje tokom cele godine",
    ctaText:
      "Upis dece u jasle, vrtić i pripremni predškolski program vrši se tokom cele godine, do popune kapaciteta. Pozovite nas i zakažite obilazak vrtića.",
  },

  ageGroups: [
    {
      id: "nursery",
      name: "Jaslena grupa",
      ages: "1–3 godine",
      description:
        "Nega i vaspitanje najmlađih uz medicinske sestre-vaspitače i pažljivo vođenu adaptaciju.",
    },
    {
      id: "kindergarten",
      name: "Vrtićka grupa",
      ages: "3–5 godina",
      description:
        "Igra, istraživanje i tematski projekti uz saradnju sa vršnjacima i razvoj samostalnosti.",
    },
    {
      id: "preschool",
      name: "Pripremna predškolska grupa",
      ages: "5–6 godina",
      description:
        "Priprema za školu kroz radne navike, samostalnost i bogat projektni rad.",
    },
  ],

  // Pitanja prate papirni upitnik ustanove. `name` je naziv polja u e-mailu -
  // ako se menja, promeniti ga i u skrivenoj formi u public/index.html.
  survey: {
    anonymousNote:
      "Upitnik je anoniman - ne tražimo ime, e-mail ni telefon. Podaci se koriste isključivo za unapređenje rada ustanove. U upitniku se nalazi 13 pitanja.",
    ageLabel: "Uzrast Vašeg deteta",
    agePlaceholder: "npr. 4 godine",
    locationLabel: "Objekat koji pohađa Vaše dete",
    locations: ["Mazza 1 - Durlan", "Mazza 2 - Centar", "Mazza 3 - Ledena stena"],
    yes: "Da",
    no: "Ne",
    questions: [
      {
        name: "01-zadovoljstvo-radom-vrtica",
        label: "Da li ste zadovoljni radom vrtića?",
        kind: "yesNo",
      },
      {
        name: "02-radno-vreme",
        label: "Da li vrtić radnim vremenom zadovoljava Vaše potrebe kao roditelja?",
        kind: "yesNo",
        reasonLabel: "Navedite razloge",
      },
      {
        name: "03-potrebe-deteta",
        label:
          "Da li smatrate da su u vrtiću zadovoljene sve detetove potrebe (za igrom, hranom, snom, socijalizacijom...)?",
        kind: "yesNo",
        reasonLabel: "Navedite razloge",
      },
      {
        name: "04-ishrana",
        label: "Da li ste zadovoljni kvalitetom ishrane u vrtiću?",
        kind: "yesNo",
        reasonLabel: "Navedite razloge",
      },
      {
        name: "05-rad-zaposlenih",
        label: "Da li ste zadovoljni radom zaposlenih u vrtiću?",
        kind: "yesNo",
        reasonLabel: "Navedite razloge",
      },
      {
        name: "06-odnosi-sa-decom-i-roditeljima",
        label: "Da li zaposleni neguju dobre odnose sa decom i roditeljima?",
        kind: "yesNo",
      },
      {
        name: "07-posebni-programi",
        label:
          "Da li ste zadovoljni ponudom posebnih programa u vrtiću (škola engleskog jezika, škola glume, školica sporta, školica muzike, logopedske usluge)?",
        kind: "yesNo",
      },
      {
        name: "08-predlog-aktivnosti",
        label: "Da li imate predlog dodatnih aktivnosti koje biste želeli da Vaše dete pohađa?",
        kind: "text",
      },
      {
        name: "09-informisanost",
        label:
          "Da li od zaposlenih dobijate sve neophodne informacije koje su od značaja za rast i razvoj Vašeg deteta?",
        kind: "yesNo",
        reasonLabel: "Navedite na koji način biste želeli da ubuduće budete informisani",
      },
      {
        name: "10-ucestalost-informacija",
        label: "Informacije o aktivnostima i projektima želite da dobijate:",
        kind: "single",
        options: ["Svakog dana", "Na kraju radne nedelje", "Kao i do sada"],
      },
      {
        name: "11-ukljucenost-roditelja",
        label: "Da li smatrate da ste dovoljno uključeni/angažovani u rad vrtića?",
        kind: "yesNo",
      },
      {
        name: "12-radionice-za-roditelje",
        label:
          "Da li ste zainteresovani za održavanje edukativnih radionica za roditelje u okviru vaspitne grupe u kojoj boravi Vaše dete?",
        kind: "yesNo",
        reasonLabel: "Navedite razloge",
      },
      {
        name: "13-kvaliteti-vrtica",
        label: "Šta biste istakli kao značajan kvalitet vrtića u celini? (možete izabrati više odgovora)",
        kind: "multi",
        options: [
          "Stručan rad sa decom",
          "Raznolikost sadržaja rada",
          "Obogaćenost programa vaspitnim, zdravstvenim i kulturnim programima (posete, izleti, predstave)",
          "Opremljenost vrtića (količina opreme, kvalitet, funkcionalnost)",
          "Zdravstveno-higijenski uslovi",
          "Pristup i način saradnje zaposlenih",
        ],
      },
    ],
    requiredError: "Molimo Vas da odgovorite na ovo pitanje.",
    formError: "Neka pitanja su ostala bez odgovora - označili smo ih crvenom bojom.",
    submit: "Pošaljite upitnik",
    sending: "Slanje…",
    successTitle: "Hvala na saradnji!",
    successText:
      "Vaši odgovori su uspešno poslati. Vaše mišljenje nam pomaže u stvaranju još kvalitetnijeg rada i programa u ustanovi.",
    sendError:
      "Upitnik trenutno nije moguće poslati. Pokušajte ponovo za nekoliko minuta ili nas pozovite telefonom.",
  },

  documents: {
    enrollmentForm: "Obrazac prijave za upis",
    admissionSheet: "Prijemni list - podaci o detetu i roditeljima",
    healthCertificate:
      "Zdravstvena potvrda za prijem deteta (bris grla i nosa)",
  },

  pages: {
    home: {
      title: "Vrtić Mazza Niš",
      metaTitle: "Vrtić Mazza Niš | Privatni vrtić i jasle od 1990.",
      metaDescription:
        "Predškolska ustanova Mazza - prvi privatni porodični vrtić u Nišu, osnovan 1990. Jasle, vrtić i pripremni predškolski program na tri lokacije, uz subvenciju grada.",
      faq: [
        {
          question: "Gde se nalazi vrtić Mazza u Nišu?",
          answer:
            "Mazza ima tri objekta u Nišu: Despota Đurđa 65 (Mazza 1), Orlovića Pavla 3 (Mazza 2) i Stojana Andrića 33 (Mazza 3).",
        },
        {
          question: "Koliko dugo postoji vrtić Mazza?",
          answer:
            "Vrtić radi od 1990. godine i prvi je privatni porodični vrtić u Nišu, sa tradicijom koja traje do danas.",
        },
        {
          question: "Kog uzrasta decu primate?",
          answer:
            "Primamo decu od 12 meseci do polaska u školu - jaslene grupe, vrtićke grupe i pripremnu predškolsku grupu.",
        },
        {
          question: "Kada se vrši upis?",
          answer:
            "Upis dece za jasle, vrtić i pripremni predškolski program vrši se tokom cele godine do popune kapaciteta, a u svim vrtićima moguć je subvencionisani boravak od strane grada.",
        },
      ],
    },

    about: {
      title: "O nama",
      metaTitle: "O nama | Privatni porodični vrtić Mazza Niš",
      metaDescription:
        "Priča o vrtiću Mazza počinje 1990. godine u porodičnoj kući u Nišu. Saznajte kako smo postali prvi privatni porodični vrtić u Nišu.",
      lead: "Naša priča počinje davne 1990. godine sa željom da stvorimo mesto u kome će se deca osećati ispunjeno i srećno.",
      sections: [
        {
          paragraphs: [
            "Kuća u kojoj kreću naši prvi koraci bila je oduvek mesto dečije radosti i osmeha. Tu su odrastala naša deca, rođaci, prijatelji i deca iz komšiluka. Tako smo došli na ideju da porodičnu kuću pretvorimo u vrtić koji će zadržati toplinu, osmehe, radost i sigurnost porodičnog doma.",
            "Obezbedili smo prijatan ambijent, podsticajnu i motivišuću sredinu za rast i razvoj dece, kvalitetan program koji realizuju visoko kvalifikovani vaspitači i medicinske sestre-vaspitači. Tako postajemo i prvi privatni porodični vrtić u Nišu sa dugom tradicijom koja traje sve do danas.",
          ],
          highlight:
            "Prvi privatni porodični vrtić u Nišu - od 1990. godine do danas, na tri lokacije u gradu.",
        },
        {
          heading: "Šta nas izdvaja",
          bullets: [
            "Male vaspitne grupe u kojima svako dete ima svoje mesto",
            "Visoko kvalifikovani vaspitači i medicinske sestre-vaspitači",
            "Stručni saradnici: pedagog, logoped i nutricionista",
            "Program učenja „Godine uzleta“ kroz tematske projekte",
            "Prijatan porodični ambijent u tri objekta u Nišu",
            "Mogućnost subvencionisanog boravka od strane grada",
          ],
        },
      ],
      faq: [
        {
          question: "Koje godine je osnovan vrtić Mazza?",
          answer:
            "Vrtić Mazza osnovan je 1990. godine, kada je porodična kuća pretvorena u prvi privatni porodični vrtić u Nišu.",
        },
        {
          question: "Koliko vrtića Mazza ima u Nišu?",
          answer:
            "Ustanova danas radi u tri objekta u Nišu - Mazza 1, Mazza 2 i Mazza 3.",
        },
      ],
    },

    team: {
      title: "Naš tim",
      metaTitle: "Naš tim | Vaspitači, pedagog i logoped - Vrtić Mazza Niš",
      metaDescription:
        "Tim vrtića Mazza u Nišu čine medicinske sestre-vaspitači, vaspitači sa visokim strukovnim obrazovanjem, pedagog, logoped i nutricionista.",
      lead: "Naš tim čine visoko kvalifikovani i stručno osposobljeni kadar za realizaciju svih aktivnosti u okviru tematskih projekata.",
      sections: [
        {
          paragraphs: [
            "Na uzrastu od 1. do 3. godine rade medicinske sestre-vaspitači sa srednjom medicinskom školom, a sa decom od 3 godine do polaska u školu vaspitači sa visokim strukovnim obrazovanjem.",
            "Tim stručnih saradnika čine pedagog i logoped. Pedagog prati ostvarivanje plana i programa i način rada vaspitača sa decom, a logoped pomaže deci sa govornim smetnjama kroz logopedske radionice. O ishrani dece se stara nutricionista.",
          ],
        },
        {
          heading: "Ko brine o deci",
          bullets: [
            "Medicinske sestre-vaspitači - uzrast od 1 do 3 godine",
            "Vaspitači sa visokim strukovnim obrazovanjem - od 3 godine do polaska u školu",
            "Pedagog - praćenje plana i programa i rada vaspitača",
            "Logoped - logopedske radionice i podrška deci sa govornim smetnjama",
            "Nutricionista - planiranje jelovnika i ishrane",
          ],
        },
      ],
      faq: [
        {
          question: "Ko radi sa decom u jaslenim grupama?",
          answer:
            "Sa decom uzrasta od 1 do 3 godine rade kvalifikovane medicinske sestre-vaspitači sa srednjom medicinskom školom.",
        },
        {
          question: "Da li vrtić ima logopeda?",
          answer:
            "Da. U timu stručnih saradnika su pedagog i logoped, a logoped kroz radionice pomaže deci sa govornim smetnjama.",
        },
      ],
    },

    program: {
      title: "Programi",
      metaTitle: "Programi i uzrasne grupe | Vrtić Mazza Niš",
      metaDescription:
        "Jaslene grupe, vrtićke grupe i pripremni predškolski program po programu „Godine uzleta“ u vrtiću Mazza u Nišu.",
      lead: "U našoj ustanovi vaspitno-obrazovni rad je organizovan po sledećim uzrasnim grupama:",
      sections: [
        {
          paragraphs: [
            "Sve vaspitne grupe su male i sa njima radi visoko kvalifikovani stručni kadar. Aktivnosti se realizuju prema novom programu učenja „Godine uzleta“ - specijalizovanom programu za koji je naš stručni tim obučen.",
            "Programska orijentacija Predškolske ustanove „Mazza“ je sagledavanje deteta kao jedinstvenog i celovitog bića, koje je kompetentno i svoje mnogobrojne potencijale realizuje kroz raznovrsne projektne aktivnosti tokom cele godine, u saradnji sa porodicom i društvenom sredinom.",
          ],
        },
      ],
      faq: [
        {
          question: "Po kom programu radi vrtić Mazza?",
          answer:
            "Rad se odvija po novim osnovama predškolskog vaspitanja i obrazovanja „Godine uzleta“, kroz tematske projekte koji polaze od interesovanja dece.",
        },
        {
          question: "Koje uzrasne grupe postoje u vrtiću?",
          answer:
            "Jaslena grupa (1–3 godine), vrtićka grupa (3–5 godina) i pripremna predškolska grupa (5–6 godina).",
        },
      ],
    },

    programNursery: {
      title: "Program rada sa decom jaslenog uzrasta",
      metaTitle:
        "Jasle u Nišu | Program rada sa decom jaslenog uzrasta - Mazza",
      metaDescription:
        "Jaslene grupe vrtića Mazza u Nišu: nega i vaspitanje dece od 12 meseci do tri godine uz kvalifikovane medicinske sestre-vaspitače i blagu adaptaciju.",
      sections: [
        {
          paragraphs: [
            "Odvija se prema „Opštim osnovama programa nege i vaspitanja dece uzrasta od deset meseci do tri godine“, gde se ističe da se vaspitanje i nega dece uzrasta do tri godine vrši, pre svega, stvaranjem povoljne vaspitne sredine u kojoj će dete sticati iskustva po programu otkrivajući sebe i svoju okolinu, u kojoj će biti aktivno u skladu sa svojim potrebama i mogućnostima.",
            "Od procesa vaspitanja na ovom uzrastu neodvojiva je nega dece, kojom se održava njihova higijena i zadovoljavaju potrebe za snom, ishranom i boravkom na vazduhu, dok se interakcijom u procesu nege doprinosi socijalizaciji i opštem razvoju deteta.",
            "Posebna pažnja se posvećuje organizaciji strukture prostora koji je inspirativan i provokativan za dete i gde ono može slobodno da istražuje, da se igra, da promišlja, da sarađuje sa drugima, isprobava i upoznaje svet oko sebe.",
          ],
          highlight:
            "Sa decom jaslenog uzrasta (od dvanaest meseci do tri godine) rade kvalifikovane medicinske sestre-vaspitači koje doprinose što bezbolnijoj i brzoj adaptaciji svakog deteta.",
        },
      ],
      faq: [
        {
          question: "Od kog uzrasta primate decu u jasle?",
          answer:
            "U jaslene grupe primamo decu od dvanaest meseci do tri godine, a sa njima rade kvalifikovane medicinske sestre-vaspitači.",
        },
      ],
    },

    programKindergarten: {
      title: "Program rada sa decom vrtićkih vaspitnih grupa",
      metaTitle: "Vrtićke grupe | Program „Godine uzleta“ - Vrtić Mazza Niš",
      metaDescription:
        "Rad sa decom od 3 do 5 godina u vrtiću Mazza u Nišu odvija se po programu „Godine uzleta“, kroz tematske projekte i učenje iz svakodnevnih primera.",
      sections: [
        {
          paragraphs: [
            "Odvija se po novom programu „Godine uzleta“, koji za cilj ima razvoj i podršku dobrobiti deteta. Godine uzleta su ujedno i nove osnove programa predškolskog vaspitanja i obrazovanja, gde je prepoznat značaj predškolskog doba u razvijanju sposobnosti za celoživotno učenje, kao što su samopouzdanje, otvorenost, radoznalost, istrajnost, otpornost i kreativnost.",
            "Godine uzleta promovišu programe koji se realizuju putem tematskih projekata, omogućavajući deci da slobodno istražuju, eksperimentišu, sarađuju sa vršnjacima i upoznaju svoju okolinu.",
            "Učenje putem projekata polazi od interesovanja dece. Projekat započinje provokacijom i prerasta u ideju koja za cilj ima razvoj svih pozitivnih osobina volje i karaktera kod dece, a sve zajedno u saradnji sa vaspitačima i porodicom. Na ovaj način deca uče iz svakodnevnih primera. Ideja za projekte proizilazi iz iskustava dece, njihove igre i njihovih interesovanja.",
          ],
          highlight:
            "Sa decom vrtićkih grupa (od 3 do 5 godina) rade visoko kvalifikovane vaspitačice.",
        },
      ],
      faq: [
        {
          question: "Kako izgleda učenje kroz projekte?",
          answer:
            "Projekat počinje provokacijom i temom koja proizilazi iz interesovanja dece, a traje onoliko koliko deci treba - od nekoliko nedelja do nekoliko meseci.",
        },
      ],
    },

    programPreschool: {
      title: "Pripremni predškolski program",
      metaTitle: "Pripremni predškolski program u Nišu | Vrtić Mazza",
      metaDescription:
        "Pripremni predškolski program za decu od 5 do 6 godina u vrtiću Mazza u Nišu - priprema za školu kroz projekte, radne navike i samostalnost.",
      sections: [
        {
          paragraphs: [
            "Pripremni predškolski program je ključna faza u obrazovanju dece, namenjen deci uzrasta od 5 do 6 godina, koja su pred polaskom u osnovnu školu. Cilj ovog programa je da deca steknu osnovne veštine i znanja koja će im omogućiti lakši prelazak u školski sistem. Fokus programa je na razvoju kognitivnih, socijalnih, emocionalnih i fizičkih veština, ali i na stvaranju radnih navika i samostalnosti.",
            "Pripremni predškolski program odvija se po novom programu „Godine uzleta“. Putem tematskih projekata deca stiču znanja, usvajaju nove veštine i grade zdrave odnose sa vršnjacima. Trajanje učenja određeno je napredovanjem projekata - projekat može trajati nekoliko nedelja ili čak i meseci.",
            "Teme se dogovaraju između dece i vaspitača i povezuju sa ciljevima programa. Glavni kriterijum za izbor teme projekata su dečija interesovanja, pri čemu dete razvija svoje kognitivne, emocionalne, socijalne i fizičke sposobnosti. Ovakav pristup učenju obezbeđuje trajna znanja kod dece koja će im biti potrebna za dalje školovanje.",
          ],
        },
      ],
      faq: [
        {
          question: "Za koji uzrast je pripremni predškolski program?",
          answer:
            "Program je namenjen deci uzrasta od 5 do 6 godina, koja se pripremaju za polazak u osnovnu školu.",
        },
      ],
    },

    programExtra: {
      title: "Dodatne aktivnosti",
      metaTitle:
        "Dodatne aktivnosti | Sport, engleski, gluma i muzika - Vrtić Mazza Niš",
      metaDescription:
        "Školica sporta, engleski jezik, škola glume i muzičke radionice u vrtiću Mazza u Nišu - dodatne aktivnosti prilagođene deci svih uzrasta.",
      sections: [
        {
          paragraphs: [
            "Pored svakodnevnih tematskih i projektnih aktivnosti, u našoj ustanovi nudimo i dodatne aktivnosti koje realizuju spoljni saradnici. Aktivnosti su namenjene deci svih uzrasta i prilagođene individualnim karakteristikama svakog deteta, a organizuju se u zavisnosti od prijave roditelja.",
          ],
          bullets: [
            "Školica sporta",
            "Engleski jezik",
            "Škola glume",
            "Muzičke radionice",
          ],
        },
      ],
      faq: [
        {
          question: "Koje dodatne aktivnosti nudi vrtić Mazza?",
          answer:
            "Školicu sporta, engleski jezik, školu glume i muzičke radionice, uz spoljne saradnike. Aktivnosti se organizuju u zavisnosti od prijave roditelja.",
        },
      ],
    },

    programOutside: {
      title: "Aktivnosti van ustanove",
      metaTitle: "Izleti i predstave | Aktivnosti van vrtića - Mazza Niš",
      metaDescription:
        "Izleti, pozorišne predstave i odlasci u bioskop - aktivnosti van ustanove za decu vrtića Mazza u Nišu.",
      sections: [
        {
          bullets: [
            "Izleti (poznata izletišta izvan grada, muzeji, ustanove…)",
            "Pozorišne predstave",
            "Odlazak u bioskop",
          ],
        },
      ],
    },

    nutrition: {
      title: "Ishrana",
      metaTitle: "Ishrana u vrtiću | Četiri obroka dnevno - Mazza Niš",
      metaDescription:
        "Ishrana u vrtiću Mazza u Nišu planirana je po jelovniku nutricioniste: četiri obroka dnevno, uz poštovanje alergija i posebnih dijetetskih zahteva.",
      lead: "Ishrana dece u vrtićima igra ključnu ulogu u njihovom zdravlju, rastu i razvoju.",
      sections: [
        {
          paragraphs: [
            "Naš vrtić ima organizovanu ishranu koja se planira uzimajući u obzir nutritivne potrebe dece, njihove energetske potrebe, ali i eventualne alergije ili posebne dijetetske zahteve, po pažljivo odabranom jelovniku nutricioniste sa kojom sarađujemo.",
            "Deca u sklopu celodnevnog boravka imaju četiri obroka koji pored doručka i ručka uključuju i užine (povrće, voće, žitarice, mlečne proizvode - kako bi se osigurali svi potrebni vitamini i minerali za decu).",
            "Deca se kroz obroke uče zdravim navikama u ishrani - kako pravilno jesti, važnosti doručka, uživanja u zdravim namirnicama i konzumiranja voća i povrća. Deca se često podstiču da budu samostalna u obrocima - uče kako da koriste pribor za jelo, kako da samostalno serviraju hranu i koliko hrane je optimalno pojesti.",
          ],
          highlight:
            "Hrana se priprema u skladu sa higijenskim i sanitarnim standardima, a redovne kontrole kvaliteta hrane su obavezne.",
        },
      ],
      faq: [
        {
          question: "Koliko obroka deca imaju u vrtiću?",
          answer:
            "U celodnevnom boravku deca imaju četiri obroka: doručak, ručak i dve užine, po jelovniku koji priprema nutricionista.",
        },
        {
          question: "Da li vodite računa o alergijama?",
          answer:
            "Da. Jelovnik se planira uzimajući u obzir alergije i posebne dijetetske zahteve svakog deteta.",
        },
      ],
    },

    parents: {
      title: "Kutak za roditelje",
      metaTitle: "Kutak za roditelje | Adaptacija i upitnik - Vrtić Mazza Niš",
      metaDescription:
        "Sve što roditeljima treba pre polaska u vrtić Mazza u Nišu: adaptacija deteta i upitnik za roditelje.",
      lead: "Na jednom mestu smo sakupili sve što Vam je potrebno pre nego što dete krene u vrtić i tokom prvih nedelja boravka.",
    },

    adaptation: {
      title: "Adaptacija deteta",
      metaTitle: "Adaptacija deteta na vrtić | Saveti - Vrtić Mazza Niš",
      metaDescription:
        "Kako teče adaptacija deteta na vrtić u ustanovi Mazza u Nišu: postepeno prilagođavanje, individualni pristup i praktični saveti za roditelje.",
      lead: "Adaptacija deteta u vrtić je važan proces, koji se odnosi na prilagođavanje deteta novoj sredini, novim ljudima i rutini u vrtiću.",
      sections: [
        {
          paragraphs: [
            "Ovaj proces može biti izazovan za dete, roditelje i vaspitače, jer podrazumeva promene u detetovom okruženju, odvajanje od roditelja i ulazak u novu društvenu zajednicu. Pravilna adaptacija doprinosi tome da dete razvije osećaj sigurnosti, poverenja i pripadnosti u novom okruženju.",
            "Period adaptacije je vreme koje je potrebno detetu da se prilagodi na novonastalu situaciju, ali i da prevaziđe strah od odvajanja od roditelja.",
            "Adaptacija u našem vrtiću se odvija postepeno i podrazumeva individualni pristup. Vaspitač u saradnji sa stručnim saradnikom svakodnevno prati i procenjuje ponašanje deteta i u dogovoru sa roditeljima postepeno produžava vreme boravka u vrtiću. Važno je da znate da je sasvim normalna pojava da dete plače, negoduje, ne želi da se odvoji od roditelja i uđe u vrtić.",
          ],
        },
        {
          heading: "Strategije za olakšavanje adaptacije",
          numbered: [
            {
              title: "Postepena adaptacija",
              items: [
                "Pre početka adaptacije prošetajte sa detetom do vrtića kako bi se dete upoznalo sa okolinom.",
                "Preporučuje se postepeni proces prilagođavanja, gde dete u početku provodi samo nekoliko sati u vrtiću, a zatim se vreme boravka postepeno produžava.",
              ],
            },
            {
              title: "Prilagođavanje rutine kod kuće",
              items: [
                "Pomaže ako roditelji postepeno prilagode dnevni ritam deteta kućnim rutinama sličnim onima u vrtiću, kao što su ustajanje, obroci, vreme za spavanje i igre.",
              ],
            },
            {
              title: "Rutina pri dolasku i odlasku",
              items: [
                "Važno je uspostaviti pozitivnu i doslednu rutinu pri dolasku u vrtić. Kratko i srdačno opraštanje, uz obećanje povratka, može pomoći detetu da se oseća sigurno.",
              ],
            },
            {
              title: "Komunikacija sa vaspitačima",
              items: [
                "Otvorena komunikacija sa vaspitačima je ključna kako bi roditelji bili informisani o napretku deteta i mogli da sarađuju u pružanju emocionalne podrške.",
              ],
            },
            {
              title: "Donošenje omiljene igračke ili predmeta",
              items: [
                "Dopuštanje detetu da ponese omiljenu igračku, ćebe ili predmet iz kuće može mu pomoći da se oseća sigurnije u novom okruženju.",
              ],
            },
          ],
          highlight:
            "Proces adaptacije može trajati različito za svako dete, ali uz strpljenje, podršku roditelja i vaspitača, većina dece uspešno prolazi kroz ovu fazu i razvija pozitivan odnos prema vrtiću.",
        },
        {
          heading: "Potrebno je poneti",
          bullets: ["Patofnice", "Ranac sa rezervnom sezonskom garderobom"],
        },
      ],
      faq: [
        {
          question: "Koliko traje adaptacija deteta na vrtić?",
          answer:
            "Adaptacija traje različito za svako dete. Odvija se postepeno - dete u početku ostaje nekoliko sati, a vreme boravka se produžava u dogovoru sa roditeljima.",
        },
        {
          question: "Šta dete treba da ponese u vrtić?",
          answer:
            "Potrebno je poneti patofnice i ranac sa rezervnom sezonskom garderobom.",
        },
        {
          question: "Da li je normalno da dete plače pri odvajanju?",
          answer:
            "Da, sasvim je normalno da dete plače i negoduje pri odvajanju od roditelja. Uz strpljenje i podršku, većina dece uspešno prolazi kroz ovu fazu.",
        },
      ],
    },

    questionnaire: {
      title: "Upitnik za roditelje",
      metaTitle: "Upitnik za roditelje | Vrtić Mazza Niš",
      metaDescription:
        "Anonimni upitnik o zadovoljstvu radom Predškolske ustanove Mazza u Nišu - popunite ga online za par minuta.",
      lead: "Poštovani roditelji, Vašim odgovorima, predlozima i sugestijama pomažete nam u stvaranju još kvalitetnijeg rada i programa u ustanovi.",
      cta: "Popunite upitnik",
    },

    gallery: {
      title: "Izgled vrtića",
      metaTitle: "Izgled vrtića | Mazza 1, Mazza 2 i Mazza 3 - Niš",
      metaDescription:
        "Pogledajte objekte vrtića Mazza u Nišu: Mazza 1 u Despota Đurđa 65, Mazza 2 u Orlovića Pavla 3 i Mazza 3 u Stojana Andrića 33.",
      lead: "Tri objekta u Nišu, svaki sa svojim dvorištem i prostorom prilagođenim deci.",
    },

    gallery1: {
      title: "Mazza 1",
      metaTitle: "Mazza 1, Despota Đurđa 65 | Vrtić u Nišu",
      metaDescription:
        "Vrtić Mazza 1 u Nišu, Despota Đurđa 65. Pogledajte prostor, kontakt telefon i lokaciju na mapi.",
    },
    gallery2: {
      title: "Mazza 2",
      metaTitle: "Mazza 2, Orlovića Pavla 3 | Vrtić u Nišu",
      metaDescription:
        "Vrtić Mazza 2 u Nišu, Orlovića Pavla 3. Pogledajte prostor, kontakt telefon i lokaciju na mapi.",
    },
    gallery3: {
      title: "Mazza 3",
      metaTitle: "Mazza 3, Stojana Andrića 33 | Vrtić u Nišu",
      metaDescription:
        "Vrtić Mazza 3 u Nišu, Stojana Andrića 33. Pogledajte prostor, kontakt telefon i lokaciju na mapi.",
    },

    photos: {
      title: "Galerija",
      metaTitle: "Galerija | Izleti, predstave i aktivnosti - Vrtić Mazza Niš",
      metaDescription:
        "Fotografije iz vrtića Mazza u Nišu: izleti, pozorišne predstave, priredbe, radionice i svakodnevne aktivnosti dece u jaslama i vrtiću.",
      lead: "Trenuci iz našeg vrtića - izleti, predstave, radionice i svakodnevna igra.",
    },

    enrollment: {
      title: "Upis",
      metaTitle: "Upis dece u vrtić | Dokumentacija i subvencije - Mazza Niš",
      metaDescription:
        "Upis u vrtić Mazza u Nišu traje tokom cele godine, do popune kapaciteta. Pogledajte potrebnu dokumentaciju za upis i za ostvarivanje subvencije grada.",
      lead: "Zahvaljujemo Vam se na Vašem interesovanju za upis u Predškolsku ustanovu „MAZZA“.",
      sections: [
        {
          paragraphs: [
            "Drago nam je da ste prepoznali kvalitet i odabrali naš vrtić u kome će dete u prijatnom i podsticajnom okruženju moći da provede najlepši period svog detinjstva. Upis dece za jasle i vrtić, kao i u pripremni predškolski program, vrši se tokom cele godine, do popune kapaciteta.",
          ],
          highlight:
            "U svim našim vrtićima imate mogućnost ostvarivanja subvencionisanog boravka od strane grada.",
        },
        {
          heading:
            "Dokumentacija za ostvarivanje subvencija (predaje se Upravi za društvene delatnosti)",
          bullets: [
            "Očitana lična karta oba roditelja",
            "Izvod iz matične knjige rođenih za dete (kopija izvoda)",
            "Uverenje o državljanstvu za roditelja podnosioca zahteva (original)",
            "Potvrda iz Pčelice da je dete na listi čekanja",
            "Dokaz o radnom statusu - da li ste zaposleni na određeno ili neodređeno vreme",
            "Tekući račun",
            "Ugovor sa privatnom predškolskom ustanovom (ugovor se potpisuje u vrtiću)",
          ],
          link: {
            before:
              "Zahtev za subvenciju i zahtev za obnovu subvencije možete preuzeti na ",
            text: "sajtu Grada Niša",
            href: "https://www.ni.rs/gradska-uprava-za-socijalnu-i-porodicnu-zastitu-obrazovanje-kulturu-i-sport/",
            after: ".",
          },
        },
        {
          heading: "Dokumentacija za upis deteta (predaje se u vrtiću)",
          bullets: [
            "Očitana lična karta roditelja potpisnika Ugovora",
            "Izvod iz matične knjige rođenih za dete koje upisujete (original)",
            "Kopija kartona vakcinacije",
            "Zdravstvena potvrda za prijem deteta u vrtić - bris grla i bris nosa",
          ],
        },
        {
          heading: "Ostala dokumentacija",
          bullets: [
            "Prijemni list - podaci o detetu i roditeljima",
            "Obaveštenje o prikupljanju i obradi podataka o ličnosti",
            "Ugovor sa predškolskom ustanovom",
            "Saglasnost",
          ],
        },
      ],
      faq: [
        {
          question: "Kada se vrši upis u vrtić Mazza?",
          answer:
            "Upis dece za jasle, vrtić i pripremni predškolski program vrši se tokom cele godine, do popune kapaciteta.",
        },
        {
          question: "Da li mogu da ostvarim subvenciju grada?",
          answer:
            "Da, u svim vrtićima Mazza moguće je ostvariti subvencionisani boravak od strane grada. Dokumentacija se predaje Upravi za društvene delatnosti.",
        },
        {
          question: "Koja dokumenta su potrebna za upis?",
          answer:
            "Očitana lična karta roditelja potpisnika ugovora, original izvoda iz matične knjige rođenih za dete, kopija kartona vakcinacije i zdravstvena potvrda sa brisom grla i nosa.",
        },
      ],
    },

    contact: {
      title: "Kontakt",
      metaTitle: "Kontakt | Vrtić Mazza Niš - tri lokacije i telefoni",
      metaDescription:
        "Kontakt vrtića Mazza u Nišu: telefoni 018/217-619, 018/510-116 i 018/523-622, e-mail mazza_nis@hotmail.com i adrese sva tri objekta.",
      lead: "Pozovite nas - rado ćemo Vam odgovoriti na sva pitanja i pokazati vrtić.",
      faq: [
        {
          question: "Koji je telefon vrtića Mazza u Nišu?",
          answer:
            "Mazza 1: 018/217-619, Mazza 2: 018/510-116, Mazza 3: 018/523-622. Dostupni smo i na mobilnim telefonima 065/920-0255, 064/131-5267 i 064/221-4590.",
        },
        {
          question: "Koje je radno vreme vrtića?",
          answer: "Vrtić radi radnim danima od 06:00 do 17:00 časova.",
        },
      ],
    },
  },
};

export default sr;
