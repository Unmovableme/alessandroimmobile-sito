# PRD — Sito personale Alessandro Immobile

## Problem statement (originale)
Sito web personale in italiano per Alessandro Immobile, aziendalista e dottore commercialista, fondatore di una società che lavora con startup. Autorevolezza sobria, stile ispirato ad Apple: minimale, pulito, lineare. Nessun elemento SaaS/hype, nessuna icona decorativa, nessuna immagine stock. Multi-pagina, mobile-first.

## User choices (confermate)
- Colore d'accento: Blu navy profondo (#0A192F)
- Font: system font stack (nessun font esterno)
- Cookie banner: nessuno
- Solo front-end statico (React), nessun backend
- Collegamenti pagine fuori menù:
  - /quando-il-problema-arriva ← Home ("In evidenza") e /assetti-societari
  - /metriche-e-statuto ← Home ("In evidenza")
  - /ai-senza-governance ← /processi
  - /prima-che-manchi-la-liquidita ← /finanza

## Architettura
- React + react-router-dom (BrowserRouter), react-helmet-async per SEO per-pagina.
- Layout condiviso: Header fisso (nav desktop + menu mobile), Footer fisso identico su ogni pagina con riga credenziali + link mailto "Scrivimi".
- Componenti editoriali riutilizzabili (`Editorial.jsx`): PageTitle, Lead, Body, SectionTitle, Descriptor, DeepLink, FadeIn (framer-motion, animazioni discrete).
- Nessun backend usato. Contatti: solo mailto + link LinkedIn.
- Tailwind: colore `navy` aggiunto in config; system font stack di default.

## Pagine implementate (14/06/2026)
Menu: Home (/), Assetti societari, Processi, Finanza, Percorso, Contatti.
Fuori menu: /quando-il-problema-arriva, /metriche-e-statuto, /ai-senza-governance, /prima-che-manchi-la-liquidita. + NotFound.
Tutto il testo è preso verbatim dal documento contenuti approvato. Footer credenziali identico ovunque.

## SEO
Title + meta description coerenti per ogni pagina via Helmet. lang="it".

## Prototipo /template-a (aggiornamenti 15/08/2026)
- Hero della Home prototipo con ritratto (foto 2 scelta dall'utente), trattamento bianco e nero elegante (grayscale + contrasto lieve), angoli morbidi e ombra discreta.
- Layout a due colonne allineato a max-w-3xl (testo a sinistra, ritratto compatto 15rem a destra), impilato su mobile — griglia rigorosa mantenuta.
- File immagine: /app/frontend/public/portrait-hero.png.
- SEO: allineate le meta-description delle pagine criterio ("Dove sta il lavoro" -> "Dove sta il valore") in MetricheEStatuto.jsx e QuandoIlProblemaArriva.jsx.
- In attesa: approvazione utente sul prototipo; se ok, migrare hero+card sulla Home principale.

## Migrazione Home + ritratto/firma (15/08/2026)
- Home principale: hero a due colonne (testo + firma a sinistra, ritratto B&N 15rem a destra), allineata a max-w-3xl, impilata su mobile.
- Contatti: aggiunto lo stesso ritratto B&N accanto a email/LinkedIn.
- Firma visiva: font manoscritto "Caveat" (font-signature in Tailwind + Google Fonts), nome sotto il titolo, colore navy. Componente riutilizzabile `Signature` in Editorial.jsx.
- Componente `Portrait` in Editorial.jsx con varianti: `bw` (bianco e nero, usata su Home/Contatti) e `navy` (duotone navy, usata sul prototipo /template-a per confronto colore).
- Immagine: /app/frontend/public/portrait-hero.png.

## Backlog / note aperte (dal documento)
- P1: sostituire email provvisoria alessandro.immobile@gmail.com con indirizzo su dominio proprio quando disponibile.
- P2: sezione "Alcuni esempi" per criterio Processi/Finanza/Startup quando disponibile materiale autorizzato.
- P2: configurazione dominio alessandroimmobile.com in fase di deploy.
