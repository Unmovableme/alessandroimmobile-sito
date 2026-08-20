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

## Backlog / note aperte (dal documento)
- P1: sostituire email provvisoria alessandro.immobile@gmail.com con indirizzo su dominio proprio quando disponibile.
- P2: sezione "Alcuni esempi" per criterio Processi/Finanza/Startup quando disponibile materiale autorizzato.
- P2: configurazione dominio alessandroimmobile.com in fase di deploy.
