# CLAUDE.md — Guida completa al sito Alessandro Immobile

> Documento di riferimento per lavorare su questo repository (analisi + arricchimento contenuti).
> Aggiornato: 27/08/2026. Contiene architettura tecnica, design system, API dei componenti,
> modello dei contenuti, regole editoriali e mappa di ogni pagina.
> **Per il testo integrale verbatim di ogni pagina vedi anche `/app/memory/SITEMAP_CONTENUTI.md`.**
> Fonte di verità del contenuto = i file sorgente in `/app/frontend/src`. Leggili sempre prima di editare.

---

## 1. Cos'è il sito e a chi si rivolge
Sito personale multi-pagina di **Alessandro Immobile**, dottore commercialista e revisore legale, advisor/business angel per aziende e startup. Obiettivo: presentare competenze, percorso, referenze e casi reali; convertire in contatto/prenotazione call. Nessun e-commerce, nessuna area riservata.

- **Lingua:** italiano (tutti i testi in italiano; `<html lang="it">`).
- **Tono:** sobrio, editoriale, concreto, prima persona ("Dal 1996 lavoro…"). Niente hype da SaaS, niente superlativi vuoti, niente emoji. Frasi asciutte, spesso nominali.
- **Estetica:** minimale ispirata ad Apple. Molto spazio bianco, griglia rigorosa, una sola immagine (il ritratto), un solo accento colore (navy).

## 2. REGOLE EDITORIALI E DI CONTENUTO (leggere prima di scrivere testi)
Queste regole non sono deducibili dal codice: rispettarle sempre.

1. **Nessuna foto stock, nessuna illustrazione.** Unica immagine ammessa: il ritratto `/portrait-hero.png` (usato SOLO nella Home).
2. **Nessun nome di persona nei case study** (scelta del 24/08/2026). Si citano i nomi di progetto/azienda (es. Toothfy, Awentia, Lài Srl) ma non i founder.
3. **Niente nomi di prodotti di terzi** nei case study (es. rimossi XDENT, OrisLine) e **niente nomi di prodotto interni** non autorizzati.
4. **Quattro aree tematiche** (dal 30/08/2026) attorno a cui ruota tutto: **Assetti societari · Processi · Finanza · M&A**. Le prime tre distinguono due pubblici: **Aziende** e **Startup**; M&A ha struttura propria (Sell side / Buy side / Con chi lavoro).
5. **Struttura fissa delle pagine di competenza:** Titolo (H1) → Descrizione (UN paragrafo) → Affermazione in corsivo (pull quote di pagina) → blocco "Aziende" → blocco "Startup" → banda "Come lavoro". Mantenere questa struttura a tre elementi in apertura, identica su Assetti/Processi/Finanza.
6. **Ogni blocco Aziende/Startup** finisce con due link etichettati: `APPROFONDIMENTO` → pagina di criterio; `CASE STUDY` → caso in `/case-study#caso-0N`.
7. **Referenze:** testi verbatim dei testimonial, con link al profilo LinkedIn. Non inventare/parafrasare citazioni.
8. **Email definitiva:** `alessandro.immobile@gmail.com`. **Niente moduli di contatto** oltre al form di prenotazione call e ai link mailto/LinkedIn. Nessun cookie banner, nessun pop-up.
9. **La Home è l'unica pagina con trattamento speciale** (ritratto full-bleed + velo navy + indicatore "scorri"). Tutte le altre pagine interne hanno sfondo bianco.
10. **Palette:** bianco / grigi / navy. Navy accento = vedi §6. Non introdurre altri colori.

## 3. Stack tecnico e comandi
- **Frontend:** React 18 (Create React App / CRACO), React Router DOM v6, Tailwind CSS, Framer Motion (animazioni), react-helmet-async (SEO per pagina), lucide-react (icone). Componenti UI shadcn presenti in `src/components/ui/` (poco usati qui).
- **Backend:** nessuno. Sito **statico** (SPA). Nessun database.
- **Form:** **Netlify Forms** (attributi HTML `data-netlify`); l'invio fa POST a `/` e reindirizza a `/grazie`. Le notifiche email si configurano nella dashboard Netlify (non nel codice).
- **Alias import:** `@/` → `src/` (configurato in CRACO/jsconfig).
- **Dev:** `yarn start` (porta 3000). **Build:** `yarn build`. Usare **yarn**, non npm.
- **Deploy previsto:** Netlify. Dominio proprio in configurazione.

## 4. Struttura cartelle (`/app/frontend/src`)
```
src/
├── App.js                     # Router: definisce tutte le rotte
├── index.js, index.css        # bootstrap + CSS globale (keyframe "scorri", variabili)
├── components/
│   ├── Layout.jsx             # Header + <Outlet/> + Footer; scroll-to-top su cambio pagina
│   ├── Header.jsx             # nav desktop + menu hamburger mobile (NAV array qui)
│   ├── Footer.jsx            # testo bio + link Scrivimi; ESPORTA EMAIL e LINKEDIN
│   ├── Seo.jsx               # <Helmet>: title, description, og:*
│   ├── Editorial.jsx         # DESIGN SYSTEM: tutti i blocchi tipografici riutilizzabili
│   ├── ImmersiveHero.jsx     # hero pagine interne (Contatti/Percorso/Referenze)
│   ├── Criterio.jsx          # template pagine di approfondimento (TOC + sezioni numerate)
│   ├── Evidenza.jsx          # referenze in evidenza (rotazione casuale) + dati testimonial
│   └── PrenotaCall.jsx       # form Netlify prenotazione call (+ IBAN placeholder)
└── pages/
    ├── Home.jsx
    ├── AssettiSocietari.jsx, Processi.jsx, Finanza.jsx   # pagine di competenza
    ├── Percorso.jsx, Referenze.jsx, Contatti.jsx, Grazie.jsx
    ├── CaseStudy.jsx                                     # /case-study (accordion + filtro area)
    ├── MeA.jsx                                           # /m-a (CriterioPage: Sell side / Buy side / Con chi lavoro)
    ├── QuandoIlProblemaArriva.jsx, MetricheEStatuto.jsx  # criterio (Assetti)
    ├── AiSenzaGovernance.jsx, FounderEAgenti.jsx         # criterio (Processi)
    ├── PrimaCheManchiLaLiquidita.jsx, QuantoValiQuantoRaccogli.jsx  # criterio (Finanza)
    └── NotFound.jsx
```
File statici: `/app/frontend/public/portrait-hero.png` (ritratto), `index.html`, eventuali `_redirects`/`netlify.toml` per il deploy.

## 5. Routing completo (`App.js`)
Tutte le rotte sono figlie di `<Layout/>`.

**Nel menu principale (Header):**
`/` Home · `/assetti-societari` · `/processi` · `/finanza` · `/percorso` · `/referenze` · `/contatti`

**Fuori menu (raggiunte solo da link interni):**
`/quando-il-problema-arriva`, `/metriche-e-statuto`, `/ai-senza-governance`, `/founder-e-agenti`, `/prima-che-manchi-la-liquidita`, `/quanto-vali-quanto-raccogli`, `/case-study`, `/m-a`, `/grazie`, e `*` → NotFound.

**Grafo dei link interni:**
- Home → `/referenze`; Home "In evidenza" → `/quando-il-problema-arriva`, `/metriche-e-statuto`.
- Assetti → APPROFONDIMENTO `/quando-il-problema-arriva` (Aziende), `/metriche-e-statuto` (Startup); CASE STUDY `/case-study#caso-01` (Aziende), `#caso-02` (Startup).
- Processi → APPROF. `/ai-senza-governance` (Aziende), `/founder-e-agenti` (Startup); CASE STUDY `#caso-03` (Aziende), `#caso-04` (Startup).
- Finanza → APPROF. `/prima-che-manchi-la-liquidita` (Aziende), `/quanto-vali-quanto-raccogli` (Startup); CASE STUDY `#caso-05` e `#caso-07` (Aziende), `#caso-06` (Startup); inoltre link a `/percorso#pubblicazioni`.
- Contatti → `/referenze`; form → `/grazie`.

## 6. Design system
### Colori (`tailwind.config.js`)
- `navy.DEFAULT = #1E3A6B` (accento: titoli `text-navy`, bordi, link).
- `navy.soft = rgba(30,58,107,0.32)`.
- **Navy scuro `#1B2A4A`** usato per: pulsante "Scrivimi" (Contatti) e testo/hover in vari punti. Il velo hero Home usa `#0d1526`.
- Tinte chiare di sfondo: `#F4F6FA` (band/quote card), bordo `#E5EAF3`.
- Grigi testo: `text-gray-900/700/600/500/400`.
> Nota: coesistono due tonalità di navy (#1E3A6B da config e #1B2A4A hardcoded). Se si vuole uniformare, decidere una sola tonalità. (vedi §13)

### Tipografia
- **Heading (h1,h2):** `Source Serif 4` (serif) — impostata in `index.css` per h1,h2 e via classe `font-serif`.
- **Body:** system font stack (`-apple-system, ...`).
- **Gerarchia (con scala mobile aggiunta il 26–27/08/2026):**
  - H1 pagina: `text-4xl sm:text-6xl lg:text-7xl` (mobile 36px → desktop grande).
  - H2 sezione: `text-2xl sm:text-3xl md:text-4xl`.
  - Lead: `text-xl md:text-2xl`.
  - Body: `text-lg`.
  - Pull quote: serif italic `text-[1.75rem] md:text-[2rem]`.
  - Etichette/eyebrow: `text-xs uppercase tracking-[0.2em]/[0.24em] text-gray-400`.

### Spaziatura / ritmo
- Contenuto incolonnato in `max-w-3xl px-6` (hero larghi in `max-w-6xl`).
- Padding-top pagine interne: `pt-20 md:pt-40` (ridotto su mobile).
- Margini verticali ridotti su mobile (PullQuote `my-12 md:my-24`, SectionTitle non-tight `mt-12 md:mt-24`, TintBand `mt-14 md:mt-28`).

### Animazioni
- `FadeIn` (Framer Motion): fade + slide-up all'entrata in viewport; rispetta `prefers-reduced-motion`.
- Indicatore "scorri" (solo Home, solo desktop): keyframe `scroll-draw` in `index.css` (la linea verticale si disegna dall'alto verso il basso, poi svanisce; classe `.scroll-line-track`).

## 7. Componenti condivisi — API (props)
**`Editorial.jsx`** (il cuore del design system):
- `FadeIn({children, delay, className, as, y})` — wrapper animato.
- `PageContainer({children, testId})` — `<main>` incolonnato con padding standard.
- `PageTitle({children, testId})` — H1 navy serif.
- `Lead({children})` — paragrafo introduttivo grande.
- `Body({children, className})` — paragrafo corrente.
- `SectionTitle({children, id, tight})` — H2. `id` per ancore (`aziende`/`startup`); `tight` = margine ridotto sopra.
- `SubTitle({children})` — H3.
- `Descriptor({children})` — blockquote corsivo con barra navy a sinistra (i "descriptor" di Aziende/Startup).
- `PullQuote({children, testId, tight})` — affermazione di pagina, serif italic navy.
- `SectionJump({testIdPrefix})` — i due link "Aziende · Startup" con scroll smooth agli id di sezione.
- `DeepLink({to, children, testId, label})` — link a freccia con etichetta opzionale (`label="Approfondimento"`).
- `ArrowLink({to|href, children, testId, className, labelClassName, target, rel})` — link a freccia (underline animato + "→").
- `Rule()` — linea orizzontale sottile.
- `TintBand({children, testId})` + `BandTitle({children})` — banda full-bleed a sfondo `#F4F6FA` (usata per "Come lavoro" e "In evidenza" Home).
- `Portrait({variant, className, testId})` — ritratto in card (variant "bw"/"navy"); attualmente non usato nelle pagine interne (solo la Home usa l'immagine full-bleed inline).

**`ImmersiveHero.jsx`** `({eyebrow, title, lead, testId, titleTestId})` — apertura pagine interne su **sfondo bianco**: eyebrow grigio uppercase, H1 navy serif, lead corsivo navy, allineata in alto. (NB: prop `objectPosition` eventualmente passata è ignorata, retaggio della vecchia versione navy.)

**`Criterio.jsx`** `CriterioPage({testId, titleTestId, title, lead, intro, sections})` — template delle pagine di approfondimento: H1 + lead + `intro` opzionale + `sections[]`. Ogni `section = {id, title, content}`; le sezioni pari hanno sfondo tinta; numerazione automatica "01, 02…"; **TOC fisso a sinistra** (solo ≥xl) con evidenziazione via IntersectionObserver; scroll smooth.

**`Header.jsx`** — `NAV[]` (array voci menu). Nav desktop (`≥md`) + pannello mobile hamburger (voci `text-lg py-3`, separatori `divide-gray-100`).

**`Footer.jsx`** — testo bio + `ArrowLink` "Scrivimi". **Esporta le costanti `EMAIL` e `LINKEDIN`** riusate altrove.

**`Seo.jsx`** — Helmet con `title`, `description`, `og:title/description/type`. (Non c'è ancora `og:image` — vedi §13.)

**`Layout.jsx`** — Header + `<Outlet/>` + Footer; effettua `window.scrollTo(0,0)` a ogni cambio `pathname`.

## 8. Le pagine (mappa + contenuti chiave)
> Testo integrale verbatim: leggere il file sorgente indicato. Qui: struttura + testi brevi che definiscono la voce.

### Home — `pages/Home.jsx`
Hero immersivo (unico con foto): eyebrow "Assetti societari · Processi · Finanza"; H1 "Alessandro Immobile"; sottotitolo corsivo: *"Financial advisor per le aziende. Business angel per le startup. Lo stesso metodo, applicato a modelli di crescita diversi."* + indicatore "scorri".
Poi: bio in 4 paragrafi; link "Cosa dicono di me" → /referenze; blocco "Le quattro aree" (4 card in griglia 2×2 → /assetti-societari, /processi, /finanza, /m-a); pull-quote; banda "In evidenza" con 3 articoli (→ /quando-il-problema-arriva, /metriche-e-statuto, /m-a).
Eyebrow hero: "Assetti societari · Processi · Finanza · M&A".

### Assetti societari — `pages/AssettiSocietari.jsx`
Lead sulla struttura societaria; pull quote **"Va progettata prima che serva."**; blocco Aziende (descriptor: *"Strutture scelte anni fa, per un'impresa che nel frattempo è diventata un'altra cosa."*) + Startup (descriptor: *"Strutture da costruire adesso…"*); banda "Come lavoro".

### Processi — `pages/Processi.jsx`
Lead sugli strumenti informatici stratificati; pull quote **"Il layer informativo si progetta a valle dei processi. Chi salta l'analisi ottiene un archivio ordinato che non cambia come l'impresa lavora."**; Aziende (descriptor: *"Processi cresciuti per sedimentazione, mai ridisegnati."*; concetto "company brain") + Startup (*"Processi da disegnare e costruire prima che sia tardi."*); "Come lavoro".

### Finanza — `pages/Finanza.jsx`
Lead sulle tre domande (contabilità/controllo/tesoreria); pull quote **"Va misurata prima che manchi."**; Aziende (*"Contabilità che arriva quando l'anno è già chiuso."*) + Startup (*"Capitale da raccogliere prima che il fatturato lo giustifichi."*); "Come lavoro"; link a `/percorso#pubblicazioni`.

### Percorso — `pages/Percorso.jsx`
Hero bianco: eyebrow "Dal 1996 a oggi"; H1 "Percorso"; lead *"Il percorso comincia nel 1996, in uno studio di commercialisti, con la contabilità ordinaria e i bilanci delle prime imprese clienti."* Timeline 4 tappe (Studio e prime esperienze → Consulenza gruppi bancari/industriali → Ruoli esecutivi e di governo → Oggi: fondatore e **CEO** di Imment S.r.l., partner P3 Ventures, co-fondatore Business Angel Club, ODCEC Torino, docente GIOYA HEI Malta). Sezione `#pubblicazioni` (capitolo "La finanza alternativa, dalla startup alla quotazione", Zanichelli).

### Referenze — `pages/Referenze.jsx`
Hero bianco: eyebrow "Founder · Manager · Professionisti"; H1 "Referenze"; lead *"Quello che dicono di me le persone con cui ho lavorato."* Blocco `<Evidenza variant="full"/>` (3 referenze casuali) + elenco completo delle 10 referenze (citazione + ruolo + LinkedIn). Dati in `Evidenza.jsx` (vedi §9).

### Contatti — `pages/Contatti.jsx`
Hero bianco: eyebrow "Un confronto diretto"; H1 "Contatti"; lead *"Scrivimi direttamente, senza moduli da compilare. Rispondo io."* Riga → /referenze. **Pulsante "Scrivimi →"** (mailto, `rounded-md bg-[#1B2A4A]`, no ombra). Link **"LinkedIn →"**. Poi sezione **"Prenota una call"** (separata da linea `border-navy/15`): riepilogo 3 formati, testi, `<PrenotaCall/>`.

### Case study — `pages/CaseStudy.jsx`
Hero bianco: eyebrow "Assetti societari · Processi · Finanza · M&A"; H1 "Case study"; lead *"Sette situazioni reali, per le quattro aree in cui lavoro."*
- 3 gruppi (Assetti/Processi/Finanza), 7 casi totali in accordion (titolo + teaser → apre Situazione/Intervento/Risultato).
- **Ancore** `#caso-01`…`#caso-07`: arrivando da un altro link il caso si apre già espanso con scroll.
- **Filtro per area:** con hash mostra SOLO il gruppo di quel caso; link "Vedi anche gli altri case study" (`case-study-reveal-all`) rivela gli altri. Senza hash mostra tutti e 3 i gruppi.
- Dati dei 7 casi (Situazione/Intervento/Risultato) nell'array `groups` dentro il file. Casi: 01 Riorganizzazione gruppo industriale; 02 Round senza perdere il controllo; 03 Chiusura mensile gruppo bancario; 04 Un'unica architettura (Awentia); 05 Primo budget strutturato (Lài Srl); 06 Validazione pre-costituzione (Toothfy, IRL 3); 07 Valutazione come base della trattativa (M&A sell+buy side, anonimo permanente, gruppo Finanza/Aziende).

### Grazie — `pages/Grazie.jsx`
Conferma post-form: H1 "Grazie" + messaggio; se formato a pagamento, promemoria bonifico. Legge lo `state` passato dalla navigazione (`paid`, `formato`).

### Pagine di approfondimento (criterio) — usano `CriterioPage`
Ognuna ha `title`, `lead`, `intro` opzionale e `sections[]` (leggere il file per titoli/testi esatti):
- `QuandoIlProblemaArriva.jsx` — "Quando il problema arriva, le opzioni sono già finite" (contiene la sezione "Alcuni esempi").
- `MetricheEStatuto.jsx` — "Metriche e statuto: la posizione da cui si negozia."
- `AiSenzaGovernance.jsx` — "L'intelligenza artificiale è già in azienda. Nessuno la governa." (cita dati WalkMe/SAP, McKinsey, IBM).
- `FounderEAgenti.jsx` — "Un founder, gli agenti come squadra".
- `PrimaCheManchiLaLiquidita.jsx` — "La crisi finanziaria inizia prima che manchi la liquidità".
- `QuantoValiQuantoRaccogli.jsx` — "Prima del round: sapere quanto vali e quanto puoi raccogliere" (Investment Readiness Level di Steve Blank, burn rate/runway).

### NotFound — `pages/NotFound.jsx`
404 con link alla Home.

### M&A — `pages/MeA.jsx` (`/m-a`, nel menu, quarta area)
Template `CriterioPage`. H1 "M&A: due lati dello stesso tavolo"; lead sui due lati (chi vende / chi compra) con la stessa base di lavoro; intro. Sezioni: **Sell side** e **Buy side** (ciascuna con sotto-blocchi `SubTitle` Obiettivo / Come lavoro / Cosa serve / Dove sta il valore + `Body`), **Con chi lavoro**. Nel menu principale (`Header.jsx` NAV) e quarta card di "Le quattro aree" in Home; anche terzo articolo della banda "In evidenza" ("M&A: acquisire, vendere, valutare." → `/m-a`). Tema M&A citato anche nel footer e nella tappa 3 del Percorso.

## 9. Modelli dati / contenuti strutturati
### Referenze (`components/Evidenza.jsx`)
- `linkedinByName`: mappa nome → URL LinkedIn.
- `evidenzaPool`: 10 oggetti `{name, role, excerpt}` (estratti brevi verbatim).
- `getFeatured(3)`: shuffle Fisher-Yates → 3 referenze **casuali** per montaggio (nuovo trio a ogni refresh). L'elenco completo delle citazioni lunghe è in `pages/Referenze.jsx`.
- **Per aggiungere una referenza:** aggiungere l'estratto in `evidenzaPool` + l'URL in `linkedinByName` (Evidenza.jsx) e la citazione completa nell'elenco in `Referenze.jsx`.

### Case study (`pages/CaseStudy.jsx`)
- `groups[]` → `{area, id, cases[]}`; ogni `case = {id: "caso-0N", kind: "Aziende"|"Startup", title, teaser, situazione, intervento, risultato}`. `situazione`/`intervento`/`risultato` possono essere stringa singola o array di paragrafi (es. caso-07).
- **Per aggiungere un caso:** nuovo oggetto nel gruppo giusto con `id` progressivo; poi aggiungere il DeepLink CASE STUDY nella relativa pagina di competenza (→ `/case-study#caso-0N`).

### Prenotazione call (`components/PrenotaCall.jsx`)
- `FORMATS`: intro (gratuita), executive (300 €, paid), sprint (900 €, paid).
- `CATEGORIES`: Finance, Amministrazione-Finanza-Controllo, Organizzazione, AI, Innovation, Startup, Open Innovation, Governance, Fundraising, Altro.
- `URGENCIES`: Entro un mese / Entro tre mesi / Non urgente.
- Campi form: azienda, ruolo, tema, problema (max 500), risultato, urgenza, categoria, email, formato. Honeypot `bot-field`. Netlify form name = `prenota-call`. **`IBAN` è un placeholder** da sostituire prima del go-live (riga 6).

## 10. Convenzioni `data-testid`
Ogni elemento interattivo/informativo ha un `data-testid` kebab-case descrittivo. Esempi: `home-hero`, `home-title`, `contatti-email-link`, `contatti-linkedin-link`, `prenota-form`, `pc-azienda`…`pc-submit`, `pc-iban-box`, `referenze-evidenza`, `referenze-evidenza-1..3`, `case-caso-04-toggle/-body`, `gruppo-assetti/processi/finanza`, `case-study-reveal-all`, `jump-aziende/jump-startup`, `assetti-deeplink-quando`, `assetti-casestudy-aziende`, `mobile-menu-toggle`, `mobile-nav`. Mantenere questa convenzione quando si aggiungono elementi.

## 11. Come modificare/arricchire i contenuti (guida operativa)
- **Testi di pagina:** editare il relativo file in `pages/`. Rispettare la struttura (§2.5) e la voce (§1).
- **Nuova pagina di criterio:** creare `pages/NuovaPagina.jsx` che usa `CriterioPage` con `sections[]`; registrare la rotta in `App.js`; collegarla con un `DeepLink label="Approfondimento"` dalla pagina di competenza.
- **Nuova sezione "Come lavoro"/banda:** usare `TintBand` + `BandTitle`.
- **Pull quote di pagina:** usare `<PullQuote tight>` subito dopo il Lead (poi `<SectionJump/>`).
- **Immagini:** non aggiungere foto stock. Se serve un'immagine, chiedere/usare solo asset autorizzati.
- **SEO:** ogni pagina deve montare `<Seo title description />` con testi specifici.
- Dopo modifiche, verificare che il build giri (`yarn build`) e che i `data-testid` restino coerenti.

## 12. SEO
`Seo.jsx` imposta `title`, `description`, `og:title/description/type`. Ogni pagina passa i propri. **Manca `og:image`** e i meta Twitter/canonical (miglioria consigliata, §13).

## 13. Backlog / note aperte / incongruenze note
- **IBAN placeholder** in `PrenotaCall.jsx` (riga 6) da sostituire prima del deploy.
- **Sezione "Alcuni esempi"** presente solo in `/quando-il-problema-arriva`; sulle altre pagine di criterio è da valutare/aggiungere con materiale autorizzato.
- **Due tonalità di navy** (`#1E3A6B` config vs `#1B2A4A` hardcoded): valutare uniformazione.
- **Pulsante submit del form** (`PrenotaCall.jsx`) è ancora `rounded-full bg-navy`; il pulsante "Scrivimi" di Contatti è invece `rounded-md bg-[#1B2A4A]`. Uniformare se si vuole coerenza.
- **`og:image`/anteprima social** non ancora impostata.
- **Dominio proprio** ed email su dominio: in configurazione (oggi gmail).
- Prop `objectPosition` ancora passata a `ImmersiveHero` da alcune pagine ma inutilizzata: si può rimuovere.

## 14. File di memoria correlati (in `/app/memory`)
- `PRD.md` — problema, requisiti, changelog cronologico delle modifiche.
- `SITEMAP_CONTENUTI.md` — **contenuti verbatim** di tutte le pagine (riferimento per la copy).
- `test_credentials.md` — n/a (sito statico, nessun login).

---
Per qualsiasi modifica di contenuto: leggere il file sorgente, rispettare §2 (regole editoriali) e §6 (design system), mantenere i `data-testid`.
