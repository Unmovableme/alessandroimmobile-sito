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

## IBAN reale + LinkedIn + evidenza aggiornata (15/08/2026)
- IBAN reale impostato in PrenotaCall.jsx (IT73 D032 9601 6010 0006 4413 394).
- Referenze in evidenza cambiate: Claudio Grimoldi, Matteo Moccia, Marta Nappo.
- Aggiunti link LinkedIn ("LinkedIn →") sotto ogni referenza (elenco completo + schede evidenza, sia in Referenze sia nel blocco compatto in Contatti). URL centralizzati in `linkedinByName` (Evidenza.jsx), aperti in nuova scheda.

## Rotazione evidenza + footer aggiornato (15/08/2026)
- Evidenza a rotazione: pool completo delle 10 referenze in Evidenza.jsx + funzione getFeatured() che, in base al giorno, mostra un trio diverso ciclando su tutte e dieci (stesso trio su Referenze e Contatti nello stesso giorno).
- Footer (componente condiviso, aggiornato ovunque): "Dottore commercialista e revisore legale, iscritto all'Ordine di Torino. Dal 1996 lavoro su bilanci, finanza e assetti societari. Dal 2019 affianco startup e founder come advisor, business angel e investor, dalla costituzione alla raccolta di capitali fino alla governance."
- Notifica Netlify (form "prenota-call" → alessandro.immobile@gmail.com): passo MANUALE da impostare nel pannello Netlify al deploy (Forms > Settings > Form notifications > Email notification).

## Aggiornamenti testo /processi (15/08/2026)
- Aggiunto un secondo paragrafo di apertura (dopo il primo, prima del blocco Aziende) sul "processo fatto bene" che sposta il valore nel metodo.
- Riscritto il blocco Startup (Descriptor invariato + due paragrafi nuovi, dalla crescita governata a "piani di incentivazione in equity e vesting"). Resto della pagina invariato.

## CHECKPOINT prototipo (15/08/2026)
- Backup "punto di partenza" del prototipo salvato in /app/memory/checkpoints/ (TemplateA.baseline.jsx, Editorial.baseline.jsx). Commit di riferimento: 12c18d8.
- Comando utente per ripristinare SOLO il prototipo: "ripristina il prototipo" → copiare i file baseline su src/pages/TemplateA.jsx e src/components/Editorial.jsx.
- Direzione approvata per l'evoluzione: Opzione A (editoriale con ritratto) + rifiniture di B (tipografia più decisa, indici numerati, pull-quote grafiche). Lavorare SOLO su /template-a.

## Rifinitura prototipo /template-a (15/08/2026 · A + B)
- Home prototipo evoluta in direzione A (editoriale con ritratto) + tocchi di B (tipografia più decisa):
  - Hero: eyebrow "ASSETTI SOCIETARI · PROCESSI · FINANZA", H1 serif, lead in serif corsivo, hairline navy, ritratto tinta navy.
  - Le tre aree: card numerate 01/02/03.
  - Pull-quote editoriale (serif corsivo navy + barra navy) tra aree e "In evidenza".
  - "In evidenza": articoli con indice numerato.
- In attesa approvazione utente: se ok, migrare su Home reale; se no, comando "ripristina il prototipo" (baseline in /app/memory/checkpoints/).

## Migrazione impostazione prototipo su Home reale (15/08/2026)
- Home reale (Home.jsx) aggiornata con l'impostazione del prototipo A+B: hero a due colonne con eyebrow tipografico, H1 serif, lead in serif corsivo, hairline navy e ritratto in tinta navy (Portrait variant="navy", 15rem). Bio completa e link Referenze preservati.
- Aggiunta pull-quote editoriale (serif corsivo navy + barra navy) tra "Le tre aree" e "In evidenza".
- "Le tre aree" (layout a colonne) e "In evidenza" (TintBand) invariati.
- Ritratto: tinta navy come nel prototipo; commutabile in bianco e nero (Portrait variant="bw") se richiesto.

## Ritratto B&N Home + hero su Contatti/Percorso (15/08/2026)
- Home: ritratto passato a variant="bw" (bianco e nero).
- Contatti: intestazione (titolo, hint referenze, lead, email, LinkedIn) in colonna sinistra + ritratto B&N a destra; blocco Prenota/Evidenza invariati.
- Percorso: intestazione (titolo + lead) a due colonne con ritratto B&N a destra; timeline e Pubblicazioni invariate.
- Continuità hero con ritratto ora su Home, Contatti, Percorso.

## Prototipo hero full-bleed (opzione 5) — 15/08/2026
- /template-a: hero ridisegnato "full-bleed asimmetrico": ritratto B&N che occupa la metà destra e tocca il bordo schermo (object-cover object-top), testo su colonna stretta a sinistra (eyebrow, H1, lead corsivo, hairline, bio). Su mobile: immagine a tutta larghezza sopra, testo sotto.
- Portrait component non più usato nel prototipo (img raw full-bleed). In attesa approvazione per migrare su Home reale.

## Variante prototipo B — banda orizzontale (opz.2) — 15/08/2026
- Estratte le sezioni sotto-hero in componente `HomeSections` (riusato da TemplateAHome e TemplateBHome).
- Nuova rotta /template-a-banda (TemplateBHome): intestazione testuale (eyebrow, H1, lead) + banda orizzontale full-bleed (img h-72/26rem object-cover object-[center_26%] grayscale) + bio + HomeSections.
- Confronto disponibile: /template-a (opz.5 full-bleed) vs /template-a-banda (opz.2). In attesa scelta utente per migrazione su Home.

## Variante prototipo C — hero immersivo overlay (opz.3) — 15/08/2026
- Nuova rotta /template-a-immersivo (TemplateCHome): hero full-bleed con foto di sfondo (object-cover), overlay navy in gradiente (from #0d1526 via #1B2A4A/70 to #1B2A4A/25), eyebrow/H1/lead in bianco in basso a sinistra; poi bio + HomeSections.
- Confronto completo: /template-a (opz.5), /template-a-banda (opz.2), /template-a-immersivo (opz.3). In attesa scelta utente per migrazione su Home reale.

## Variante prototipo D — reveal/parallax (opz.4) — 15/08/2026
- Nuova rotta /template-a-reveal (TemplateDHome): hero tipografico + ritratto full-width che compare con dissolvenza e parallasse allo scroll (framer-motion useScroll/useTransform, y ±8%, opacity 0→1). Poi bio + HomeSections.
- Import aggiunti in TemplateA.jsx: useRef, motion/useScroll/useTransform.
- Confronto completo 4 opzioni: /template-a (5), /template-a-banda (2), /template-a-immersivo (3), /template-a-reveal (4). In attesa scelta utente.

## Variante prototipo E — byline discreto (opz.1) — 15/08/2026
- Nuova rotta /template-a-byline (TemplateEHome): mini-ritratto tondo (64px, B&N) accanto a nome + ruolo (firma d'autore) + enunciato tipografico grande in serif corsivo; poi bio + HomeSections.
- Confronto completo 5 opzioni: /template-a-byline (1), /template-a-banda (2), /template-a-immersivo (3), /template-a-reveal (4), /template-a (5). In attesa scelta utente per migrazione su Home reale.

## Pull-quote Home + metriche-e-statuto (15/08/2026)
- Home: pull-quote grande aggiornata in "Il lavoro che conta si fa prima che un investitore, una banca o un socio facciano la prima domanda."
- /metriche-e-statuto: aggiunta pull-quote (via prop `intro` di CriterioPage, stessa formattazione della Home) dopo il lead e prima della sezione 01; nella sezione 06 rimossa la frase iniziale ripetuta (il paragrafo ora parte da "Statuto pensato per i round che verranno...").

## Rename slug quanto-vali (15/08/2026)
- Slug pagina criterio Finanza/Startup: /quanto-vali-quanto-attrai -> /quanto-vali-quanto-raccogli (file rinominato QuantoValiQuantoRaccogli.jsx, componente e rotta aggiornati).
- H1 e SEO title: "...quanto puoi raccogliere". Link su /finanza aggiornato (to + testo). Corpo (occorrenze "attrarre investimenti") invariato.

## Variante prototipo 3b — immersivo a colori (16/08/2026)
- Nuova rotta /template-a-immersivo-colore (TemplateCColorHome): come opz.3 ma foto a colori naturali (no grayscale), overlay navy in gradiente più leggero (from #0d1526/90 via /35 to transparent) e drop-shadow sul testo bianco per leggibilità.
- Confronto immersivo: /template-a-immersivo (B&N) vs /template-a-immersivo-colore (colori).

## Variante prototipo 3a — immersivo velo chiaro (16/08/2026)
- Nuova rotta /template-a-immersivo-chiaro (TemplateCLightHome): come opz.3 B&N ma overlay navy piu' leggero (from #0d1526/75 via #1B2A4A/30 to transparent) + drop-shadow sul testo per leggibilita'.
- Confronto immersivo: /template-a-immersivo (velo std B&N), /template-a-immersivo-chiaro (velo chiaro B&N), /template-a-immersivo-colore (colori).

## Variante prototipo 3m — immersivo velo intermedio (16/08/2026)
- Nuova rotta /template-a-immersivo-medio (TemplateCMedHome): overlay navy intermedio tra opz.3 e 3a (from #0d1526/88 via #1B2A4A/50 to #1B2A4A/12) + drop-shadow testo.
- Set immersivo completo: /template-a-immersivo (std), /template-a-immersivo-medio (intermedio), /template-a-immersivo-chiaro (chiaro), /template-a-immersivo-colore (colori).

## Applicata 3b immersivo colori alla Home reale (16/08/2026)
- Home.jsx ristrutturata: rimosso PageContainer, hero full-bleed immersivo a colori naturali (img object-cover object-[center_20%] + gradiente navy from #0d1526/90 via /35 to transparent), eyebrow/H1/lead bianchi con drop-shadow. Contenuti sotto (bio, link Referenze, Le tre aree, pull-quote, In evidenza) in wrapper max-w-3xl. Rimossi import inutilizzati (PageContainer, PageTitle, Portrait).
- Prototipi /template-a* restano disponibili per riferimento.

## Pulizia prototipi (16/08/2026)
- Rimosso il file pages/TemplateA.jsx, l'import in App.js e tutte le rotte /template-a* (banda, immersivo/-colore/-chiaro/-medio, reveal, byline, criterio, home). Le vecchie URL ora mostrano NotFound. Home reale confermata con hero immersivo 3b.
- NOTA deploy Netlify: impostare notifica email del form "prenota-call" verso alessandro.immobile@gmail.com nel pannello (Forms > Settings > Form notifications > Email notification).

## Indicatore "scorri" + verifica rotazione Evidenza (17/07/2026)
- Home.jsx: aggiunto indicatore "scorri" all'hero immersivo = linea verticale sottile animata (data-testid="home-hero-scroll", .scroll-line-track in index.css con @keyframes scroll-line, segmento luminoso che scende, 2.4s loop, fallback prefers-reduced-motion). Nascosto sotto md (hidden md:block) per evitare sovrapposizione col sottotitolo su mobile.
- Verificata la logica di rotazione in Evidenza.jsx (getFeatured): start=(dayIndex*3)%10 su pool di 10 → trio deterministico per giorno, cicla tutte e 10 le referenze in 10 giorni, nessun duplicato nel trio. Confermata corretta dal testing agent (iteration_9.json).
- Estetica immersiva su Contatti/Percorso: RIMANDATA su richiesta utente (per ora solo Home).

## Footer + hero immersivo Contatti/Percorso (17/07/2026)
- Footer.jsx: testo aggiornato → "Dottore commercialista e revisore legale, iscritto all'Ordine di Torino. Dal 1996 lavoro su bilanci, finanza e assetti societari. Dal 2019 affianco startup e founder come advisor, business angel e investor, su raccolta di capitali, assetti statutari e governance." (condiviso su tutte le pagine via Layout).
- Nuovo componente condiviso components/ImmersiveHero.jsx (occhiello + titolo + lead su ritratto full-bleed con velo navy, banner ridotto min-h ~58vh, objectPosition configurabile, titleTestId prop).
- Contatti.jsx e Percorso.jsx ristrutturate: rimosso PageContainer/PageTitle/Lead/Portrait a due colonne, sostituiti con ImmersiveHero; contenuti sotto in wrapper max-w-3xl. objectPosition="center 22%" (miglior inquadratura volto). Testid preservati (contatti-title, percorso-title).
- Estetica immersiva Contatti/Percorso: COMPLETATA.

## Hero immersivo Referenze (17/07/2026)
- Referenze.jsx: applicato ImmersiveHero (eyebrow "Founder · Manager · Professionisti", title "Referenze", lead esistente, objectPosition center 20%). Rimosso PageContainer/PageTitle/Lead; Evidenza + elenco completo ora in wrapper max-w-3xl. Testid referenze-title preservato. Tutte e 4 le pagine principali (Home, Contatti, Percorso, Referenze) hanno ora lo stesso hero immersivo.

## Rotazione casuale referenze in evidenza (17/07/2026)
- Evidenza.jsx: sostituita la rotazione deterministica per-giorno con estrazione CASUALE (Fisher-Yates shuffle su tutto il pool, useMemo per montaggio). Ad ogni caricamento della pagina compare un trio diverso, senza ripetizioni interne. Verificato: trio cambia ad ogni refresh.

## Correzioni multiple (17/07/2026)
- Editorial.jsx SectionTitle: spaziatura ridotta da mt-28/md:mt-40 a mt-16/md:mt-24 (impatta Home "Le tre aree" e sezioni "Aziende"/"Startup" di Assetti/Processi/Finanza).
- Percorso "Oggi": "amministratore delegato" → "CEO" di Imment S.r.l. (uniformato a Home/footer).
- Footer: nuovo testo "...Dal 2019 affianco i founder come advisor, business angel e investor, su nascita, raccolta di capitali e governance delle startup."
- Contatti: email resa DEFINITIVA (rimossa nota "provvisoria"), mostrata come bottone pill navy cliccabile (mailto); rimosso interamente il blocco "Cosa dicono di me" (Evidenza compact) sotto "Prenota una call" e relativo import. Resta il link in cima alla pagina verso /referenze.

## Hero navy pieno su pagine interne (17/07/2026)
- ImmersiveHero.jsx: rimossi foto ritratto + gradiente; sfondo navy pieno #1B2A4A (tinta unita) su Contatti, Percorso, Referenze. Testo bianco/off-white, stessa gerarchia e altezza (~58vh). La foto resta solo sulla Home (hero inline, non usa ImmersiveHero).

## Correzioni testuali (17/07/2026)
- Home hero sottotitolo: "Dal 1996 affianco aziende e startup su struttura, processi e capitale."
- Percorso lead: "...in uno studio di commercialisti..." (era "a Napoli").
- Contatti: bottone email etichetta "Scrivimi" (mailto invariato verso alessandro.immobile@gmail.com).

## Hero interne: allineamento in alto (17/07/2026)
- ImmersiveHero.jsx: blocco testo da bottom-aligned a top-aligned (items-start + pt-28 md:pt-36), offset fisso identico su Contatti/Percorso/Referenze indipendentemente dalla lunghezza del sottotitolo. Occhiello sempre allo stesso punto di partenza.

## Uniformata pull quote di pagina su Assetti/Processi/Finanza (17/07/2026)
- Struttura allineata ad Assetti: intro → pull quote di pagina → Aziende → Startup.
- Processi: spostata la pull quote "Il layer informativo si progetta a valle dei processi..." da metà pagina (tra Aziende e Startup) a subito dopo l'intro.
- Finanza: aggiunta pull quote di pagina "Va misurata prima che manchi." dopo l'intro (+ import PullQuote).

## Nuova pagina /case-study (17/07/2026)
- CaseStudy.jsx: pagina fuori menu con hero navy pieno (occhiello "Assetti societari · Processi · Finanza", H1 "Case study", lead "Sei situazioni reali, per le tre aree in cui lavoro."). Tre gruppi (Assetti/Processi/Finanza), ciascuno con H2 + 2 casi (Aziende/Startup).
- Ogni caso è un accordion (titolo + teaser in vista d'insieme; espanso mostra Situazione/Intervento/Risultato). Ancore #caso-01..#caso-06: aprendo da altra pagina il caso si apre espanso con scroll (gestito in useEffect su location.hash). Toggle multiplo (Set di openIds), icona Plus/Minus (lucide-react).
- Rotta aggiunta in App.js: /case-study.
- Deep link aggiunti su Assetti/Processi/Finanza sotto i DeepLink esistenti (fine blocchi Aziende/Startup) verso #caso-01..#caso-06. testId: {pagina}-casestudy-{aziende|startup}. Import ArrowLink/FadeIn aggiunti alle tre pagine.
- Verificato: accordion apre/chiude, ancora apre+scrolla, deep link con href corretti.

## Case study: etichetta link + filtro per area (17/07/2026)
- Pagine competenza: aggiunta etichetta "CASE STUDY" (uppercase, text-gray-400, tracking) sopra il solo link verso il case study (6 link). Il link di criterio soprastante resta senza etichetta.
- CaseStudy.jsx: filtro per area. Arrivando via #caso-0N si mostra SOLO il gruppo dell'area di quel caso (altri gruppi non renderizzati), col caso già aperto e scroll. Link "Vedi anche gli altri case study" (testId case-study-reveal-all) in fondo che rivela gli altri gruppi (casi collassati, gruppo focalizzato in cima). Senza hash: tutti e 3 i gruppi, nessun link reveal. Verificato.

## Etichetta APPROFONDIMENTO + inquadratura Home (17/07/2026)
- Editorial.jsx DeepLink: aggiunto prop opzionale `label` (stessa resa di CASE STUDY: uppercase text-gray-400 tracking). Applicato label="Approfondimento" ai 6 link di criterio su Assetti/Processi/Finanza (non al link pubblicazioni). Ora ogni blocco mostra APPROFONDIMENTO+link criterio e CASE STUDY+link case study.
- Home.jsx: hero object-position da center 20% a center 8% per mostrare la testa intera (fronte non più tagliata). Contenitore/altezza invariati.

## Aggiornamento Caso 06 (24/08/2026)
- CaseStudy.jsx caso-06 (Toothfy): rimosso nome founder nella Situazione (regola sito: no nomi persona nei case study); Investment Readiness Level corretto da 5 a 3 nel Risultato. Verificato.

## Coerenza pagine interne + ritmo apertura (24/08/2026)
- Processi: rimosso il paragrafo intermedio in apertura (Titolo → Descrizione → Affermazione, come Assetti/Finanza).
- Editorial.jsx: PullQuote e SectionTitle con prop `tight` (spaziatura ridotta); SectionTitle con prop `id` (+scroll-mt). Nuovo componente SectionJump ("Aziende · Startup", link di salto con scroll smooth agli id aziende/startup).
- Assetti/Processi/Finanza: pull quote di pagina resa tight + SectionJump sotto; SectionTitle Aziende id="aziende" tight, Startup id="startup". Spazio apertura molto più compatto, con segnale che "Startup" esiste.
- Contatti: pulsante "Scrivimi" ora rounded-md, bg #1B2A4A esatto, niente ombra, transition-colors; link LinkedIn con freccia e spaziatura regolare (mt-6); sezione "Prenota una call" con separatore border-navy/15 e spazio sopra ridotto (mt-16/pt-12).
- ImmersiveHero: da sfondo navy pieno a SFONDO BIANCO (occhiello grigio tenue, H1 navy serif, lead corsivo navy), allineato in alto. Applicato a Contatti/Percorso/Referenze. Home invariata (unica con foto + velo navy).

## Ottimizzazione mobile 1+2+3 (26/08/2026)
- (1) Ridotto padding-top mobile: PageContainer pt-28→pt-20, ImmersiveHero pt-28→pt-20 (md invariati). Titoli pagine interne più in alto.
- (2) Titoli scalati su mobile: PageTitle e ImmersiveHero H1 text-5xl→text-4xl (sm+ invariati); Home H1 text-5xl→text-4xl (ora sta su una riga); SectionTitle/BandTitle e i due h2 one-off (CaseStudy gruppi, Contatti "Prenota una call") text-3xl→text-2xl sm:text-3xl md:text-4xl.
- (3) Home hero mobile: sottotitolo text-2xl→text-xl; velo navy rinforzato su mobile (from-90/via-55) mantenendo desktop invariato (md:from-90/via-35).

## Ottimizzazione mobile 4+5+6 (27/08/2026)
- (4) Ritmo verticale mobile: PullQuote non-tight my-16→my-12, SectionTitle non-tight mt-16→mt-12, TintBand mt-20→mt-14 e py-16→py-12, Rule mt-20→mt-14, stacco hero→contenuto mt-16→mt-10 (Contatti/Percorso/Referenze/CaseStudy). md invariati.
- (5) Aree di tocco: ArrowLink +py-1; link SectionJump (Aziende/Startup) inline-block +py-1.5.
- (6) Menu hamburger: nuovo mobileLinkClass (block py-3 text-lg), nav con divide-y divide-gray-100, voci più grandi/tappabili e separatori sottili.

## Introduzione sezione M&A (30/08/2026)
- Nuova pagina fuori menu `/m-a` (MeA.jsx) su template CriterioPage: sezioni Sell side, Buy side, Con chi lavoro (sotto-blocchi Obiettivo/Come lavoro/Cosa serve/Dove sta il valore via SubTitle+Body). Rotta aggiunta in App.js.
- Home "In evidenza": terzo articolo "M&A: acquisire, vendere, valutare." → /m-a (highlights[]).
- Footer: aggiunto "e operazioni di M&A" alla riga del 1996.
- Assetti "Come lavoro" e Finanza "Come lavoro": testo compattato + accenno a cessioni/acquisizioni (testi esatti da prompt MA).
- Percorso tappa 3 "Ruoli esecutivi e di governo": testo aggiornato con "operazioni di cessione e acquisizione come advisor indipendente".

## Addendum M&A (30/08/2026)
- Home bio par.1: aggiunto "...in società, e su operazioni di acquisizione e cessione."
- Home bio par.2: rimossa la frase GIOYA dalla coda; ora chiude con "associazione di business angel."
- Home bio: nuova riga autonoma "Docente di finanziamento aziendale alla GIOYA Higher Education Institution, a Malta." (tra par.2019 e riga dottore commercialista). Nessuna riga inline M&A nella bio.
- Assetti "Aziende": voce cessioni/acquisizioni ora termina con "...coordinamento fino all'atto, sell side e buy side."

## M&A quarta area + Caso 07 (30/08/2026)
- Home: "Le tre aree" → "Le quattro aree", griglia da md:grid-cols-3 a md:grid-cols-2 (2×2, divisore verticale sulla colonna destra); quarta card M&A → /m-a. Eyebrow hero già con "· M&A".
- Header NAV: voce "M&A" → /m-a presente (desktop + mobile). /m-a passa da fuori menu a nel menu.
- CaseStudy.jsx: aggiunto caso-07 "Valutazione come base della trattativa" (gruppo Finanza, kind Aziende, anonimo permanente, due mandati sell+buy side). Componente Part ora accetta array di paragrafi. Eyebrow → "…· M&A", lead → "Sette situazioni reali, per le quattro aree in cui lavoro.", SEO description aggiornata.
- Finanza.jsx: secondo link CASE STUDY nel blocco Aziende → /case-study#caso-07 (accanto a #caso-05).
- Contatti.jsx: "oltre alle tre aree del sito" → "oltre alle quattro aree del sito".
- Docs aggiornati: CLAUDE.md e memory/SITEMAP_CONTENUTI.md (4 aree, /m-a nel menu, 7 casi, caso-07, corretto duplicato bio nel SITEMAP).
- Verificato con screenshot: Home 4 aree 2×2, /case-study#caso-07 si apre espanso con filtro gruppo Finanza, link visibile su /finanza, menu con M&A.
- Decisione utente: il box M&A in "In evidenza" resta OLTRE alla card nella griglia aree (doppio trattamento voluto).

## Consolidato 6 punti (30/08/2026)
- Percorso.jsx: tappa 3 "Ruoli esecutivi e di governo" arricchita ("fractional CFO e temporary management, in passaggi generazionali e a supporto della direzione generale e del CEO, per diverse aziende"; rimossa la clausola cessioni/acquisizioni); NUOVA tappa 4 "Operazioni di M&A" ("Dal 2015 affianco imprenditori e gruppi… sia sell side, sia buy side.") → timeline ora 5 tappe.
- QuandoIlProblemaArriva.jsx: rimosso il paragrafo sulle "boutique M&A" (in contraddizione con M&A come attività propria).
- SEO: Home description → "Assetti societari, processi, finanza e M&A…"; Referenze description → "…assetti societari, finanza, M&A e raccolta di capitale."
- Home bio par.1: "…e su operazioni di acquisizione e cessione." → "…e su operazioni di M&A."
- Home griglia "Le quattro aree": divisore orizzontale tra le due righe (border-t border-navy/15 sulle celle della 2ª riga, gap-y azzerato su md), celle flex-col h-full con link "Scopri di più" ancorato in basso (mt-auto pt-5) → CTA allineate per riga.
- Home pull-quote: "…un investitore, una banca, un socio o una controparte facciano la prima domanda."
- File modificati: Percorso.jsx, QuandoIlProblemaArriva.jsx, Referenze.jsx, Home.jsx.

## Social Preview / Open Graph (30/08/2026)
- `public/og-image.png`: card 1200×630 brandizzata (navy #1B2A4A, Source Serif 4, occhiello 4 aree, nome, tagline corsiva, dominio) generata via rendering HTML del componente tipografico.
- `public/index.html`: set Open Graph statico completo (og:type/site_name/locale it_IT/url/title/description/image+width/height) + Twitter card (summary_large_image + title/description/image). Rimossa la vecchia og:image stock della piattaforma. Meta description base aggiornata con M&A.
- Scelta consapevole (utente): SPA senza prerendering → stessi tag OG per tutte le pagine. Differenziazione per pagina richiede prerendering statico (tema in coda separatamente).
- og:url/og:image puntano a https://alessandroimmobile.com/ (dominio finale); funzioneranno appena il dominio è attivo su Netlify. In preview l'immagine è servita da /og-image.png sul dominio preview.
- NOTA tecnica: modifiche a public/index.html richiedono riavvio del dev server (template cachato).

## Backlog / note aperte (dal documento)
- P1: sostituire email provvisoria alessandro.immobile@gmail.com con indirizzo su dominio proprio quando disponibile.
- P2: sezione "Alcuni esempi" per criterio Processi/Finanza/Startup quando disponibile materiale autorizzato.
- P2: configurazione dominio alessandroimmobile.com in fase di deploy.
- P2: rifare la cover LinkedIn (sottotitolo ancora a 3 aree, sito ora a 4) — lavoro separato, dopo il completamento del sito.
- P2: meta tag Open Graph + og:image per anteprima condivisione social (proposto, in attesa conferma).
