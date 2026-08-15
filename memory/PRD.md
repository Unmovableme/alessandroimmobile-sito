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

## Footer + Prenota una call (15/08/2026)
- Footer (componente condiviso, aggiornato ovunque): "Dottore commercialista e revisore legale, iscritto all'Ordine di Torino. Dal 1996 lavoro su bilanci, finanza e assetti societari. Dal 2019 affianco le startup come advisor e business angel: costituzione, raccolta di capitali e governance."
- Nuovo blocco "Prenota una call" in /contatti (sotto "Scrivimi", invariato). Componente `src/components/PrenotaCall.jsx`.
  - Campi: azienda, ruolo, tema, problema (textarea max 500 con contatore), risultato, urgenza (select), categoria (select), email. Poi 3 card formato (radio): 10 min gratuita / 30 min 300€ / Sprint 900€.
  - Logica condizionale: opzioni a pagamento mostrano box IBAN + causale ("{azienda} — {formato}"); l'opzione gratuita no.
  - Netlify Forms: form statico nascosto in public/index.html (name="prenota-call", data-netlify) per il rilevamento; submit via fetch POST "/" x-www-form-urlencoded; honeypot bot-field; success message in-page.
  - DA FARE PRIMA DEL DEPLOY: sostituire IBAN placeholder (IBAN in PrenotaCall.jsx) con quello reale. Le notifiche email arrivano solo su deploy Netlify.

## Ripristino veste + note prenotazione (15/08/2026 · agg.)
- Home e Contatti riportate alla versione PRECEDENTE alle prove foto: nessun ritratto. Il componente `Portrait` resta usato SOLO nel prototipo /template-a (foto non mischiate col progetto reale).
- Email di conferma automatica al cliente: NON implementata (scelta utente). Resta la conferma manuale via email (già indicata nel testo del blocco). Nome mittente confermato dall'utente: "Alessandro Immobile" (per eventuale futura attivazione).
- Netlify Forms "prenota-call": la notifica al titolare va impostata nel pannello Netlify verso alessandro.immobile@gmail.com. IBAN placeholder da sostituire prima del go-live (fornito dall'utente).

## Riepilogo formati + pagina Grazie (15/08/2026)
- Aggiunta riga di riepilogo in cima al blocco "Prenota una call" (/contatti): 3 formati con prezzi in evidenza (gratuita / 300 € / 900 €), griglia a 3 colonne.
- Nuova pagina /grazie (`src/pages/Grazie.jsx`, rotta in App.js): ringraziamento post-prenotazione, con box promemoria bonifico visibile solo per i formati a pagamento (via location.state { paid, formato }).
- PrenotaCall: al submit riuscito naviga a /grazie (useNavigate) invece del messaggio inline. In preview il POST a "/" non è gestito (mostra errore di fallback); il flusso completo funziona su Netlify.

## Referenze + Pubblicazioni + richiamo Contatti (15/08/2026)
- Nuova pagina fuori menu /referenze (`src/pages/Referenze.jsx`, rotta in App.js): H1 "Referenze", apertura e 10 schede testuali (nome grassetto serif, ruolo corsivo grigio, citazione, separatori navy). Contenuto verbatim fornito dall'utente.
- /contatti: aggiunta riga-richiamo sotto l'H1, prima del blocco Scrivimi, con link a /referenze. Nient'altro modificato.
- /percorso: nuova sezione H2 "Pubblicazioni" dopo il blocco "Oggi", con testo capitolo Zanichelli e link esterno "Il volume".

## Referenze nel menu + evidenza + richiamo Finanza (15/08/2026)
- Header: aggiunta voce "Referenze" (desktop + mobile), tra Percorso e Contatti.
- Referenze: nuovo blocco "In evidenza" in cima con 3 schede chiave (estratti verbatim, virgolette serif navy, corsivo, nome+ruolo) sopra l'elenco completo.
- Finanza: aggiunto richiamo in fondo (DeepLink) a /percorso#pubblicazioni.
- Percorso: sezione Pubblicazioni con id="pubblicazioni" + scroll all'hash (useEffect su location.hash) per l'ancora dalla pagina Finanza.

## Aggiornamento qualifiche referenze + richiamo Home (15/08/2026)
- Referenze: aggiunte/corrette le qualifiche di Fabrizio Gallante (Managing Partner Enzima12, CEO 12Venture), Matteo Fornaca (Founder e CEO, The Spiritual Machine), Barbara Rizzi (Commercialista); Federico Gasparini rinominato "Federico Chigbuh Gasparini" con ruolo COO @MarshYellow, Business Designer, Startup Mentor (aggiornato anche nella scheda In evidenza).
- Home: aggiunta riga discreta "Cosa dicono di me →" verso /referenze, dopo la bio.

## Evidenza condivisa in Contatti (15/08/2026)
- Estratto il blocco "In evidenza" in componente condiviso `src/components/Evidenza.jsx` (array `featured` + componente `Evidenza` con variant "full"/"compact").
- Referenze usa `Evidenza variant="full"`; Contatti mostra `Evidenza variant="compact"` (miniatura) vicino al form di prenotazione, con titolo "Cosa dicono di me" e link "Tutte le referenze" → /referenze.

## Backlog / note aperte (dal documento)
- P1: sostituire email provvisoria alessandro.immobile@gmail.com con indirizzo su dominio proprio quando disponibile.
- P2: sezione "Alcuni esempi" per criterio Processi/Finanza/Startup quando disponibile materiale autorizzato.
- P2: configurazione dominio alessandroimmobile.com in fase di deploy.
