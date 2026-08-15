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

## Backlog / note aperte (dal documento)
- P1: sostituire email provvisoria alessandro.immobile@gmail.com con indirizzo su dominio proprio quando disponibile.
- P2: sezione "Alcuni esempi" per criterio Processi/Finanza/Startup quando disponibile materiale autorizzato.
- P2: configurazione dominio alessandroimmobile.com in fase di deploy.
