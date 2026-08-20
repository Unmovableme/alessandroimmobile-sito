# Sito Alessandro Immobile — Specifica completa dei contenuti

> Documento di allineamento (fonte: codice reale del sito al 17/07/2026). Riproduce struttura, contenuti verbatim, link interni e scelte tecniche di tutte le pagine.

---

## 1. Natura e principi
- **Tipo**: sito personale multi-pagina, React SPA statica (nessun backend, nessun database).
- **Lingua**: italiano (`lang="it"`), testi verbatim da documento contenuti approvato.
- **Stile**: minimale, ispirato ad Apple. Molto spazio bianco, griglia rigorosa, nessuna illustrazione, nessuna foto stock (unica immagine: ritratto `/portrait-hero.png`).
- **Palette**: bianco/nero/grigio scuro + accento navy (`#0A192F`, gradienti hero `#0d1526`).
- **Tipografia**: heading in Source Serif 4 (serif), corpo in system font stack.
- **Tecnologie**: React, react-router-dom, Tailwind, Framer Motion (FadeIn), react-helmet-async (SEO per pagina). Form via Netlify Forms. Nessun cookie banner, nessun pop-up.

## 2. Elementi globali (ogni pagina)

**Header** (fisso, bianco con blur). Brand "Alessandro Immobile" + menu:
`Home · Assetti societari · Processi · Finanza · Percorso · Referenze · Contatti` (hamburger su mobile).

**Footer** (identico ovunque):
> Dottore commercialista e revisore legale, iscritto all'Ordine di Torino. Dal 1996 lavoro su bilanci, finanza e assetti societari. Dal 2019 affianco i founder come advisor, business angel e investor, su nascita, raccolta di capitali e governance delle startup.

+ link **Scrivimi** (mailto). Email attuale (provvisoria): `alessandro.immobile@gmail.com`. LinkedIn: `linkedin.com/in/alessandroimmobile/`.

**Hero immersivo condiviso** (`ImmersiveHero`): ritratto full-bleed + velo navy dal basso + occhiello/titolo/sottotitolo bianchi. Usato su Home, Contatti, Percorso, Referenze. Sulla Home è a piena altezza (88vh) con indicatore "scorri" (linea verticale animata); sulle altre è banner ridotto (~58vh).

---

## 3. HOMEPAGE (`/`)
**Hero** — occhiello: `Assetti societari · Processi · Finanza`; H1: **Alessandro Immobile**; sottotitolo (serif corsivo): *"Struttura societaria, processi e finanza, per aziende e startup."*

**Bio (3 paragrafi):**
1. Dal 1996 lavoro su bilanci, finanza, processi e assetti societari: in studio, per gruppi bancari e imprese industriali, poi con ruoli esecutivi e di governo in società.
2. Dal 2019 il campo si è esteso alle startup: validazione del modello, costituzione e statuto in chiave innovativa, raccolta di capitale di rischio e di debito, valutazione per i round di finanziamento. Sono fondatore e CEO di Imment S.r.l., dedicata ai modelli di crescita e di raccolta di capitale per startup e PMI. Sono partner di P3 Ventures, fondo che investe nelle fasi più giovani delle startup, co-fondatore di Business Angel Club, associazione di business angel, e docente di finanziamento aziendale alla GIOYA Higher Education Institution, a Malta.
3. Dottore commercialista, iscritto all'Ordine di Torino, e revisore legale.

+ link **Cosa dicono di me** → `/referenze`.

**"Le tre aree":**
- **Assetti societari.** La forma giuridica dell'impresa, la struttura di gruppo, i soci, i patti e le regole della compagine sociale nel tempo. → `/assetti-societari`
- **Processi.** Come funziona l'azienda, e cosa cambia quando entra l'intelligenza artificiale. → `/processi`
- **Finanza.** Come si misura l'impresa e come si sostiene, in azienda o in una raccolta di capitale. → `/finanza`

**Pull-quote:** *"Il lavoro che conta si fa prima che un investitore, una banca o un socio facciano la prima domanda."*

**"In evidenza":**
- **Quando il problema arriva, le opzioni sono già finite.** Cinque situazioni diverse, nate dalla stessa causa: una struttura societaria rimasta ferma mentre l'azienda si muoveva. → `/quando-il-problema-arriva`
- **Metriche e statuto: la posizione da cui si negozia.** Un investitore chiede le metriche che dimostrano che il problema è reale, e uno statuto pronto a reggere la trattativa. Arrivare senza l'uno o l'altro significa negoziare da una posizione più debole. → `/metriche-e-statuto`

---

## 4. LE TRE AREE
Schema comune: Titolo → Lead → sezione "Aziende" → sezione "Startup" (Descriptor corsivo + paragrafi + DeepLink) → banda "Come lavoro".

### 4a. ASSETTI SOCIETARI (`/assetti-societari`)
**Lead:** La struttura di un'impresa è una decisione che si prende una volta e condiziona tutto quello che viene dopo: chi comanda, chi rischia, chi guadagna, cosa si può vendere, chi può entrare e a quali condizioni.
**Pull-quote:** Va progettata prima che serva.

**Aziende** — descriptor: *Strutture scelte anni fa, per un'impresa che nel frattempo è diventata un'altra cosa.*
Temi: trasformazione da società di persone/ditta a società di capitali; separazione rami (scissione/conferimento: operativo vs immobiliare); costituzione holding e riordino di gruppo; ingresso/uscita soci (quote, aumenti riservati, clausole statutarie, patti parasociali, categorie di quote con diritti differenziati); passaggio generazionale; cessioni e acquisizioni (preparazione, valutazione, struttura, negoziazione, coordinamento fino all'atto).
→ DeepLink: **Quando il problema arriva, le opzioni sono già finite** (`/quando-il-problema-arriva`).

**Startup** — descriptor: *Strutture da costruire adesso, per un'impresa che dovrà reggere quello che ancora non è successo.*
Temi: costituzione + sezione speciale Registro Imprese; statuto/patti per i round futuri (categorie di quote, diritti amministrativi/patrimoniali, lock-up, drag/tag along, anti-diluizione); cap table (oggi/dopo aumenti e conversioni/controllo finale); piani di incentivazione in equity (soci d'opera, key people, advisor); governance.
→ DeepLink: **Metriche e statuto: la posizione da cui si negozia** (`/metriche-e-statuto`).

**Come lavoro:** ruolo di regia sopra i professionisti (notaio, avvocato, fiscalista, esperto, consulente del lavoro); definisce l'obiettivo con chi decide, sceglie la struttura, coordina, verifica coerenza fino all'atto; perizia di stima affidata a terzo indipendente.

### 4b. PROCESSI (`/processi`)
**Lead:** Molte aziende hanno strumenti informatici stratificati negli anni: un gestionale per la contabilità, un CRM per le vendite, fogli excel per il resto, nessuno che li fa parlare tra loro. Prima di introdurre l'intelligenza artificiale in un processo così, bisogna sapere come lavora davvero, non come dovrebbe lavorare secondo l'organigramma.
Paragrafo: Un processo fatto bene toglie valore alla componente individuale e lo sposta nel metodo. Il risultato smette di dipendere da chi lo esegue.

**Aziende** — descriptor: *Processi cresciuti per sedimentazione, mai ridisegnati.*
Temi: mappatura AS IS; ridisegno TO BE; company brain (memoria operativa: regole, processi, stato progetti, decisioni, conoscenza tacita, leggibile anche per assistenti AI); dati sparsi tra email/chat/drive/CRM; costruzione con fonte unica valida + regole di aggiornamento + collegamento ai tool; riorganizzazione ruoli.
**Pull-quote:** Il layer informativo si progetta a valle dei processi. Chi salta l'analisi ottiene un archivio ordinato che non cambia come l'impresa lavora.
→ DeepLink: **L'intelligenza artificiale è già in azienda. Nessuno la governa.** (`/ai-senza-governance`).

**Startup** — descriptor: *Processi da disegnare e costruire prima che sia tardi.*
Temi: estendere i processi nati in fretta; spostare la conoscenza dal founder al metodo; validare il modello, governare i soci, raccogliere capitale, pianificare i round, attrarre/trattenere talenti (equity + vesting).
→ DeepLink: **Un founder, gli agenti come squadra** (`/founder-e-agenti`).

**Come lavoro:** esperienza in società di consulenza internazionale su processi finance per banche/corporate; mappatura, reingegnerizzazione, riorganizzazione in gruppi bancari e aziende di produzione/logistica; founder e investitore in startup AI-native; lavoro recente su AI e processi nell'Osservatorio Intelligenza Artificiale e Trasformazione Digitale dell'ODCEC di Torino.

### 4c. FINANZA (`/finanza`)
**Lead:** La contabilità, il controllo di gestione e la tesoreria rispondono a tre domande diverse: cosa è successo, cosa sta succedendo, se domani si riesce a pagare. In molte imprese le tre risposte arrivano dalla stessa persona, con lo stesso gestionale, e spesso in ritardo.

**Aziende** — descriptor: *Contabilità che arriva quando l'anno è già chiuso.*
Temi: contabilità fuori/in ritardo presso il commercialista; fatturato per cliente/commessa/margine su piattaforma verticale; controllo e tempestività via progetti di revisione processi/AI/efficienza; budget e controllo di gestione mensile; cash flow e tesoreria con anticipo; bisogno che emerge dopo operazioni societarie (trasformazione, scissione, ingresso soci).
→ DeepLink: **La crisi finanziaria inizia prima che manchi la liquidità** (`/prima-che-manchi-la-liquidita`).

**Startup** — descriptor: *Capitale da raccogliere prima che il fatturato lo giustifichi.*
Temi: percorso di raccolta per fasi; strumenti convertibili/aumenti di capitale; misurare e costruire la capacità di attrarre investimenti; relazione con gli investitori (aggiornamenti regolari).
→ DeepLink: **Prima del round: sapere quanto vali e quanto puoi raccogliere** (`/quanto-vali-quanto-raccogli`).

**Come lavoro:** sistemi di reporting/controllo su gruppi multi-paese, ristrutturazioni con piani industriali e rinegoziazione debito, direzione finanziaria in società operative; affiancamento startup/PMI su struttura raccolta, strumenti, investitori.
+ DeepLink pubblicazioni: **Le pubblicazioni: la finanza alternativa, dalla startup alla quotazione** (`/percorso#pubblicazioni`).

---

## 5. PERCORSO (`/percorso`)
**Hero** — occhiello: `Dal 1996 a oggi`; H1: **Percorso**; lead: *"Il percorso comincia nel 1996, in uno studio a Napoli, con la contabilità ordinaria e i bilanci delle prime imprese clienti."*

**Timeline (4 tappe):**
1. **Studio e prime esperienze** — praticantato in studio commercialista, laurea, master in finanza; primi incarichi su processi finanziari per una società di servizi finanziari a Torino.
2. **Consulenza per gruppi bancari e imprese industriali** — dal 2000, consulenza internazionale poi studio a Torino: adeguamento a principi contabili internazionali, riorganizzazione processi creditizi, bilancio consolidato di gruppo multi-paese, ristrutturazione con piano industriale e rinegoziazione del debito.
3. **Ruoli esecutivi e di governo** — dal 2015: consulenza di direzione ambito bancario; presidenza Polo GGB (Genomica, Genetica e Biologia); presidenza e direzione finanziaria di Netgenomics S.r.l. (startup innovativa scienze della vita); direzione finanziaria di Guanxi S.r.l. (digital transformation, oggi advisor).
4. **Oggi** — fondatore e CEO di Imment S.r.l.; partner di P3 Ventures (pre-seed AI-native); co-fondatore, vicepresidente e tesoriere di Business Angel Club; due gruppi di lavoro ODCEC Torino (startup innovative e AI); docente di finanziamento aziendale alla GIOYA HEI, Malta.

**Pubblicazioni** (`#pubblicazioni`): capitolo «La finanza alternativa, dalla startup alla quotazione» in «Diritto dell'innovazione e P.M.I.» (a cura di Oreste Cagnasso e Angelo Mambriani, Zanichelli). Firmato Alessandro Immobile Molaro. + link al volume Zanichelli.

---

## 6. REFERENZE (`/referenze`)
**Hero** — occhiello: `Founder · Manager · Professionisti`; H1: **Referenze**; lead: *"Quello che dicono di me le persone con cui ho lavorato."*

**"In evidenza"** (`Evidenza`): 3 referenze a rotazione con estratto breve + ruolo + link LinkedIn. Selezione CASUALE (shuffle) ad ogni caricamento della pagina: trio diverso a ogni refresh, senza ripetizioni interne (stabile durante la navigazione della stessa pagina via useMemo).

**Elenco completo (10 referenze verbatim):**
1. **Marta Nappo** — CMO, Chief Sales Officer, Business Development Executive.
2. **Massimiliano Bosaro** — Founder & CEO, CentraleRisk SpA.
3. **Fabrizio Gallante** — Managing Partner di Enzima12, CEO di 12Venture.
4. **Matteo Fornaca** — Founder e CEO, The Spiritual Machine.
5. **Barbara Rizzi** — Commercialista.
6. **Angelo Marra** — Presidente Fondimpresa Calabria, Confindustria.
7. **Claudio Grimoldi** — Turbo Crowd.
8. **Federico Chigbuh Gasparini** — COO @MarshYellow, Business Designer, Startup Mentor.
9. **Matteo Moccia** — Commercialista.
10. **Giuseppe Virzì** — Founder, Tuduu.

Ciascuna con citazione integrale e link al profilo LinkedIn (mappa `linkedinByName` in `Evidenza.jsx`).

---

## 7. CONTATTI (`/contatti`)
**Hero** — occhiello: `Un confronto diretto`; H1: **Contatti**; lead: *"Scrivimi direttamente, senza moduli da compilare. Rispondo io."*
- Riga: *Prima di scrivere, leggi cosa dicono di me le persone con cui ho lavorato.* (→ `/referenze`)
- Email mostrata come **bottone pill navy cliccabile** (mailto). Email definitiva `alessandro.immobile@gmail.com`. + link LinkedIn.

**Sezione "Prenota una call":**
- 3 formati: **Intro & Focus Call** (10 min, gratuita) · **Executive Advisory** (30 min, 300 €) · **Corporate Strategic Sprint** (3×60 min in ~3 settimane, 900 €).
- Testi: il confronto può toccare organizzazione, innovazione e AI oltre alle tre aree; compilare il modulo prima della call; per i formati a pagamento compaiono IBAN e causale dopo la prenotazione, bonifico prima della call, conferma via email.
- **Form Netlify** (`prenota-call`, honeypot `bot-field`). Campi: Nome azienda, Ruolo, Tema, Descrizione problema (max 500), Risultato desiderato, Urgenza (Entro un mese / Entro tre mesi / Non urgente), Categoria (Finance, Amministrazione-Finanza-Controllo, Organizzazione, AI, Innovation, Startup, Open Innovation, Governance, Fundraising, Altro), Email, selezione Formato. Se formato a pagamento → box IBAN + causale ("[Nome azienda] — Executive Advisory / Corporate Strategic Sprint"). Invio → redirect `/grazie`.
- NOTA TECNICA: l'IBAN nel codice è un placeholder da sostituire prima del go-live.

---

## 8. GRAZIE (`/grazie`)
Conferma post-form. H1 **Grazie** + "Ho ricevuto la tua richiesta [per <formato>]. Ti confermo l'appuntamento a breve via email." Se formato a pagamento → box promemoria bonifico (IBAN/causale). Link "Torna alla home".

---

## 9. PAGINE DI APPROFONDIMENTO ("criteri")
Struttura comune (`CriterioPage`): H1 + lead + intro opzionale + sezioni numerate, con indice laterale (TOC) sticky su schermi larghi e sezioni pari a sfondo tinta.

### 9a. `/quando-il-problema-arriva` — "Quando il problema arriva, le opzioni sono già finite"
(link da Home e Assetti societari)
Lead: *Alcune delle situazioni da cui nasce un incarico.*
Intro: cinque situazioni (banca sospende istruttoria; cliente grande chiede società di capitali; passaggio generazionale con quote non allineate; socio che esce; imprenditore che valuta la cessione) → stessa forma: impresa mossa, struttura ferma.
Sezioni: Quello che si scopre · Cosa costa il ritardo · **Dove sta il valore** · Con chi lavoro (PMI/imprese familiari italiane ~5–50 mln, gruppi da riordinare; anche altri professionisti su singola operazione) · Cinque domande · Come lavoro · **Alcuni esempi** (riorganizzazione gruppo chimico internazionale con 4 conferimenti in 2 anni in un risanamento attestato; separazione operativo/immobiliare in impresa di servizi familiare; mandato cessione dopo passaggio generazionale non riuscito; assistenza soci minoranza/maggioranza) · Se vuoi parlarne.

### 9b. `/metriche-e-statuto` — "Metriche e statuto: la posizione da cui si negozia."
(link da Home e Assetti societari)
Lead: la due diligence scopre categorie di quote/strumenti/tag-drag along mancanti → da lì decide l'investitore.
Intro (pull-quote): *"Il lavoro che conta si fa prima che l'investitore faccia la prima domanda."*
Sezioni: Le metriche di validazione arrivano prima della raccolta · La cap table è governance · La valuation nasce da metriche verificabili · Molti investitori piccoli, poca governance pensata · Diritti uguali per contributi diversi · **Dove sta il valore** · Con chi lavoro (startup italiane, dalla costituzione ai round).

### 9c. `/ai-senza-governance` — "L'intelligenza artificiale è già in azienda. Nessuno la governa."
(link da Processi)
Lead: qualcuno nel team usa già l'AI con account personale, senza organizzazione.
Sezioni (con dati citati): L'adozione corre prima della governance (survey WalkMe/SAP 2025: 78% usa AI fuori dai tool aziendali) · Usarla non significa averla integrata (McKinsey: ~2/3 non l'hanno scalata, solo 39% impatto misurabile) · Lo strumento non è il processo · Il dato è il prerequisito · Cosa costa non governarla (IBM: +670.000 $ di costi da violazioni per uso non governato) · **Dove sta il valore** · Con chi lavoro · Come lavoro (Osservatorio AI ODCEC Torino).

### 9d. `/prima-che-manchi-la-liquidita` — "La crisi finanziaria inizia prima che manchi la liquidità"
(link da Finanza)
Lead + intro: vedere in anticipo i flussi di cassa; cassa oggi non garantisce equilibrio domani.
Sezioni: I numeri raccontano il passato, non avvisano sul futuro · Il budget si scrive una volta e si dimentica · Fatturato e cassa non sono la stessa cosa · **Dove sta il valore** · Con chi lavoro · Come lavoro.

### 9e. `/founder-e-agenti` — "Un founder, gli agenti come squadra"
(link da Processi)
Lead: startup AI-native, un founder affiancato da agenti su sviluppo/marketing/operations; vantaggio reale ma non automatico (serve controllo del metodo).
Sezioni: struttura simile a 9c (adozione/governance/strumento/dato/costo/dove sta il valore) con "Con chi lavoro" e "Come lavoro" declinati sulle startup che costruiscono i processi da zero, AI integrata fin dall'origine.

### 9f. `/quanto-vali-quanto-raccogli` — "Prima del round: sapere quanto vali e quanto puoi raccogliere"
(link da Finanza)
Lead: l'investitore chiede quanto vale, quanto attrae investimenti, quanto tempo ha.
Sezioni: Una startup raccoglie capitale senza sapere cosa vale · La capacità di attrarre investimenti si misura (Investment Readiness Level 1–9 di Steve Blank) · Il capitale raccolto si consuma più in fretta (burn rate, runway, milestone) · **Dove sta il valore** · Con chi lavoro · Come lavoro.

---

## 10. PAGINA 404 (`*`)
H1 "Pagina non trovata" + testo + link home. Le vecchie rotte prototipo (`/template-a*`) sono rimosse → 404.

---

## 11. MAPPA ROTTE E LINK INTERNI
- **Nel menu**: `/` · `/assetti-societari` · `/processi` · `/finanza` · `/percorso` · `/referenze` · `/contatti`
- **Fuori menu** (raggiunte dai DeepLink): `/quando-il-problema-arriva`, `/metriche-e-statuto`, `/ai-senza-governance`, `/founder-e-agenti`, `/prima-che-manchi-la-liquidita`, `/quanto-vali-quanto-raccogli`, `/grazie`.
- Collegamenti chiave: Home→Referenze; Assetti→(quando / metriche); Processi→(ai-senza-governance / founder-e-agenti); Finanza→(prima-che-manchi-la-liquidita / quanto-vali-quanto-raccogli / percorso#pubblicazioni); Contatti↔Referenze; form→Grazie.

---

## 12. Note aperte / backlog
- Email `alessandro.immobile@gmail.com` è definitiva.
- L'IBAN nel form è un placeholder, da sostituire prima del go-live.
- La sezione "Alcuni esempi" esiste solo su `/quando-il-problema-arriva`; sulle altre aree è ancora da aggiungere (materiale autorizzato mancante).
- Deploy previsto su Netlify (notifiche form via dashboard); dominio `alessandroimmobile.com` in configurazione.

---

## 13. Riferimenti tecnici (file)
- Rotte: `frontend/src/App.js`
- Layout/Header/Footer: `frontend/src/components/{Layout,Header,Footer}.jsx`
- Hero immersivo: `frontend/src/components/ImmersiveHero.jsx`
- Componenti editoriali: `frontend/src/components/Editorial.jsx`
- Pagine criterio: `frontend/src/components/Criterio.jsx` + pagine in `frontend/src/pages/`
- Referenze/Evidenza: `frontend/src/pages/Referenze.jsx`, `frontend/src/components/Evidenza.jsx`
- Form prenotazione: `frontend/src/components/PrenotaCall.jsx`
