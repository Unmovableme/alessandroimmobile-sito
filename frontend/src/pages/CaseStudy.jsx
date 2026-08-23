import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import { Seo } from "@/components/Seo";
import { FadeIn } from "@/components/Editorial";
import { ImmersiveHero } from "@/components/ImmersiveHero";

const groups = [
  {
    area: "Assetti societari",
    id: "gruppo-assetti",
    cases: [
      {
        id: "caso-01",
        kind: "Aziende",
        title: "Riorganizzazione di un gruppo industriale",
        teaser:
          "Produzione, immobili e unità territoriali separati in quattro conferimenti, dentro un piano di risanamento attestato.",
        situazione:
          "Un gruppo industriale del settore chimico, con presenza in più paesi, aveva accumulato nel tempo attività produttiva, unità territoriali e patrimonio immobiliare all'interno delle stesse società operative, senza una separazione chiara fra chi produce, chi possiede gli immobili e chi opera nei diversi territori. Il gruppo era inserito in un piano di risanamento attestato, che richiedeva una riorganizzazione ordinata per sostenere la continuità aziendale.",
        intervento:
          "Nell'arco di due anni sono stati realizzati quattro conferimenti, con separazione dell'attività produttiva, delle unità territoriali e del patrimonio immobiliare in società distinte, all'interno del perimetro del piano di risanamento attestato.",
        risultato:
          "Una struttura di gruppo più leggibile, con responsabilità e rischi separati fra le diverse aree, coerente con gli obiettivi del piano di risanamento.",
      },
      {
        id: "caso-02",
        kind: "Startup",
        title: "Un round chiuso senza perdere il controllo",
        teaser:
          "Una srl ordinaria diventata startup innovativa, con uno statuto pronto ad accogliere i round successivi.",
        situazione:
          "Una startup nata come società a responsabilità limitata ordinaria, con un prodotto già validato e i primi clienti, si trovava davanti a un investitore pronto a entrare, senza però i requisiti di startup innovativa né uno statuto pensato per accogliere categorie di quote differenziate fra fondatori e investitori.",
        intervento:
          "Trasformazione della società in startup innovativa, con iscrizione nella sezione speciale del Registro delle Imprese. Redazione di uno statuto con categorie di quote multiple, per bilanciare i diritti dei fondatori con quelli degli investitori entrati in fasi diverse. Strutturazione e chiusura del primo round di raccolta tramite strumenti finanziari partecipativi.",
        risultato:
          "Round di raccolta chiuso con una struttura di quote solida, che ha tutelato il controllo dei fondatori e reso possibile l'ingresso ordinato di nuovi investitori nei round successivi.",
      },
    ],
  },
  {
    area: "Processi",
    id: "gruppo-processi",
    cases: [
      {
        id: "caso-03",
        kind: "Aziende",
        title: "Chiusura mensile più veloce in un gruppo bancario",
        teaser:
          "Analisi dei processi di bilancio e gap analysis, per rendere la chiusura dei conti più veloce e affidabile.",
        situazione:
          "Una società di servizi che gestisce l'operatività di back-office per un gruppo di banche doveva rendere più veloce, stabile e affidabile il processo di chiusura mensile dei conti. Il problema si concentrava su due aree critiche: la classificazione e valutazione dei crediti, dove i processi non erano ancora allineati a un nuovo sistema in fase di adozione, e il controllo sull'avanzamento delle chiusure, privo di uno strumento che rendesse visibile lo stato di lavorazione ai referenti coinvolti.",
        intervento:
          "Analisi dei processi di bilancio, con ruolo di specialista esterno. Rilevazione dei processi esistenti, in particolare quelli di classificazione e valutazione dei crediti. Laboratori con i referenti operativi, per definire gli obiettivi di tempo e identificare le criticità. Gap analysis fra il nuovo sistema di valutazione dei crediti in adozione e i requisiti effettivi degli utenti di bilancio. Valutazione dell'applicabilità di uno strumento di gestione dei processi al flusso di chiusura mensile. Consegna della documentazione completa degli interventi proposti, con stime e piano di massima.",
        risultato:
          "Un quadro completo e documentato dei processi di bilancio critici, con la mappa dei gap fra sistemi e utenti e un piano di intervento strutturato: la base su cui la società ha proceduto nelle fasi successive del progetto.",
      },
      {
        id: "caso-04",
        kind: "Startup",
        title: "Un'unica architettura per investitori, incentivi, governance",
        teaser:
          "Selezione degli investitori, onboarding, incentivazione e cap table, dentro un'unica architettura di processo.",
        situazione:
          "Awentia, startup in fase di crescita, gestiva fino a quel momento i rapporti con investitori e con le persone chiave del team in modo perlopiù informale, affidato ai founder. Con la crescita, decisioni che in fase early stage si prendono una alla volta (chi far entrare nel capitale, con quali aspettative, con quale strumento, con quale impatto sulla cap table) non reggevano più separate. Ogni nuovo investitore o key person modificava contemporaneamente equity, governance e incentivi, senza un criterio comune che collegasse le decisioni fra loro.",
        intervento:
          "Costruzione di un'architettura di processi che collega selezione degli investitori, onboarding, incentivazione delle key people e governance della cap table. Per la selezione, introduzione di un criterio che valuta l'investitore anche per il contributo strategico che può generare nel tempo (competenze, relazioni, accesso al mercato), oltre che per il capitale sottoscritto. Per l'onboarding, definizione di regole di ingaggio da condividere prima dell'ingresso: ruolo atteso, modalità di relazione con i founder, criteri con cui valutare il contributo nel tempo. Per le key people, predisposizione di un piano di incentivazione equity con meccanismi di vesting, così che la maturazione delle quote segua la permanenza e il contributo effettivamente generato dalla persona. Per la governance, strutturazione dell'architettura societaria attorno a strumenti finanziari partecipativi (SFP) convertibili in quote di categoria B, con l'evento di conversione come momento in cui valutare il contributo prodotto dall'investitore prima di determinare le condizioni economiche del suo ingresso.",
        risultato:
          "Awentia dispone oggi di processi distinti e coordinati per selezionare gli investitori, gestirne l'onboarding, incentivare le key people e presidiare la governance della cap table, incluso il controllo della diluizione legata ai risultati prodotti dagli investitori fino alla conversione degli SFP. Il cambiamento principale riguarda il metodo: ogni ingresso nel capitale, prima trattato come operazione a sé, fa oggi parte della stessa architettura di processo, che collega selezione, incentivazione, valuation e governance.",
      },
    ],
  },
  {
    area: "Finanza",
    id: "gruppo-finanza",
    cases: [
      {
        id: "caso-05",
        kind: "Aziende",
        title: "Il primo budget strutturato dell'azienda",
        teaser:
          "Contabilità internalizzata, controllo di gestione impostato, primo budget annuale redatto.",
        situazione:
          "Lài Srl, azienda attiva nella progettazione e produzione di apparecchiature e prodotti per uso estetico attraverso due divisioni, gestiva la contabilità interamente all'esterno, affidata al commercialista, senza contabilità analitica, controllo di gestione o pianificazione finanziaria strutturata. I bilanci mostravano una posizione finanziaria netta in crescita costante rispetto ai ricavi, un cash flow operativo negativo per più esercizi consecutivi e tempi di incasso dai clienti superiori ai quattro mesi. La gestione degli ordini, specie nel settore delle tecnologie, avveniva manualmente e senza criteri standardizzati. Prima di impegnarsi in un progetto pluriennale, la proprietà ha voluto un assessment iniziale per capire da dove partire.",
        intervento:
          "Coordinamento di un progetto strutturato su tre ambiti: insourcing della contabilità generale, con selezione e attivazione di un nuovo gestionale ERP; costruzione della contabilità analitica e del controllo di gestione; impostazione della pianificazione finanziaria e della gestione di tesoreria. Nel concreto: scrittura di decine di procedure operative, definizione dei mansionari, affiancamento continuativo alla responsabile amministrativa per portarla all'autonomia operativa, costruzione del piano dei conti analitico e, come punto di arrivo del primo ciclo di lavoro, redazione del primo budget annuale strutturato dell'azienda.",
        risultato:
          "L'azienda dispone oggi del primo strumento di programmazione economica completo che avesse mai avuto: un budget articolato per mercato e canale, costruito su ipotesi esplicite di costo e di ricavo, verificabile e confrontabile con i risultati degli esercizi precedenti. La direzione legge oggi l'andamento del business su basi comparabili nel corso dell'anno, prima ancora della chiusura di bilancio.",
      },
      {
        id: "caso-06",
        kind: "Startup",
        title: "Validazione prima ancora di costituire la società",
        teaser:
          "Due cicli di interviste strutturate, per testare il problema e la soluzione prima di formalizzare l'impresa.",
        situazione:
          "Toothfy, progetto nel campo del MedTech che sta costruendo una piattaforma di intelligenza artificiale per studi odontoiatrici (data entry automatizzato, refertazione vocale, analisi di immagini diagnostiche, simulazioni estetiche prima/dopo), non è ancora costituito in società: la costituzione è prevista nei prossimi mesi. Quando è iniziato il lavoro insieme, il founder, Mattia Morgut, aveva una direzione chiara ma nessun percorso strutturato di validazione del mercato, del problema clinico e delle ipotesi di prodotto prima di formalizzare l'impresa.",
        intervento:
          "Affiancamento al founder nel percorso di validazione pre-costituzione, con uno strumento di simulazione e validazione empirica. Costruzione del quadro strategico: strategic assessment, market sizing, business model canvas, lean canvas, lettura del progetto secondo l'Investment Readiness Level. Due cicli di interviste, prima sul problema e poi sulla soluzione, condotte direttamente dal founder con sei odontoiatri proprietari di cliniche multi-poltrona in Italia, supportate dal software di simulazione per preparare e affinare gli esperimenti. Il primo ciclo ha smentito alcune ipotesi iniziali, fra cui la ricerca clinica assistita e la simulazione estetica come priorità, e ha isolato i due problemi reali degli studi: il tempo perso nella trascrizione manuale delle visite e il rischio di errore diagnostico da affaticamento nella lettura di radiografie e immagini. Il secondo ciclo ha portato a un ulteriore pivot, verso l'integrazione bidirezionale con i gestionali italiani più diffusi negli studi, emersa come condizione imprescindibile per l'adozione. Definizione del posizionamento di prezzo e del dimensionamento del mercato. Impostazione del meccanismo attraverso cui la validazione diventa anche selezione dei futuri soci: gli odontoiatri coinvolti negli esperimenti avranno la possibilità di entrare nel capitale, sottoscrivendo uno strumento finanziario partecipativo una volta costituita la società.",
        risultato:
          "Il percorso ha portato Toothfy a un Investment Readiness Level 5, con l'indicazione a procedere verso la costruzione di un MVP testato in ambiente clinico reale. Le interviste hanno registrato un'intenzione d'acquisto del 75% tra gli odontoiatri target e confermato la disponibilità a pagare tra 250 e 300 euro al mese per lo strumento. Il mercato è stato dimensionato in un TAM di 140,86 milioni di euro, un SAM di 51 milioni e un SOM di 261 mila euro sulle prime cliniche obiettivo. È in corso il pre-commitment con gli odontoiatri che hanno partecipato al processo di validazione, primo passo verso la costituzione della società e la raccolta di capitale.",
      },
    ],
  },
];

const allIds = groups.flatMap((g) => g.cases.map((c) => c.id));

const Part = ({ label, children }) => (
  <div className="mt-6 first:mt-0">
    <p className="text-xs uppercase tracking-[0.2em] font-medium text-navy/60">{label}</p>
    <p className="mt-2 text-lg leading-relaxed text-gray-700">{children}</p>
  </div>
);

const CaseItem = ({ data, open, onToggle }) => (
  <div
    id={data.id}
    data-testid={`case-${data.id}`}
    className="scroll-mt-28 border-b border-navy/15"
  >
    <button
      type="button"
      onClick={() => onToggle(data.id)}
      data-testid={`case-${data.id}-toggle`}
      aria-expanded={open}
      className="group flex w-full items-start justify-between gap-6 py-7 text-left"
    >
      <span className="flex-1">
        <span className="block text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
          {data.kind}
        </span>
        <span className="mt-2 block font-serif text-xl md:text-2xl font-semibold tracking-tight text-gray-900 leading-snug">
          {data.title}
        </span>
        {!open && (
          <span className="mt-2 block text-base leading-relaxed text-gray-500">
            {data.teaser}
          </span>
        )}
      </span>
      <span
        aria-hidden
        className="mt-1 shrink-0 rounded-full border border-navy/25 p-1.5 text-navy transition-colors duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-white"
      >
        {open ? <Minus size={16} strokeWidth={1.75} /> : <Plus size={16} strokeWidth={1.75} />}
      </span>
    </button>

    {open && (
      <div data-testid={`case-${data.id}-body`} className="pb-9 -mt-1 max-w-2xl">
        <Part label="Situazione">{data.situazione}</Part>
        <Part label="Intervento">{data.intervento}</Part>
        <Part label="Risultato">{data.risultato}</Part>
      </div>
    )}
  </div>
);

export default function CaseStudy() {
  const location = useLocation();
  const [openIds, setOpenIds] = useState(() => new Set());

  const toggle = (id) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id && allIds.includes(id)) {
      setOpenIds((prev) => new Set(prev).add(id));
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 96,
            behavior: "smooth",
          });
        }
      }, 250);
    }
  }, [location.hash]);

  return (
    <>
      <Seo
        title="Case study — Alessandro Immobile"
        description="Sei situazioni reali su assetti societari, processi e finanza: per aziende e startup, dalla riorganizzazione di gruppo alla validazione pre-costituzione."
      />
      <main data-testid="case-study-page" className="pb-24 md:pb-32">
        <ImmersiveHero
          eyebrow="Assetti societari · Processi · Finanza"
          title="Case study"
          titleTestId="case-study-title"
          lead="Sei situazioni reali, per le tre aree in cui lavoro."
          testId="case-study-hero"
        />

        <div className="mx-auto max-w-3xl px-6 mt-16 md:mt-20 space-y-16 md:space-y-20">
          {groups.map((g) => (
            <section key={g.id} data-testid={g.id}>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy leading-tight">
                  {g.area}
                </h2>
              </FadeIn>
              <div className="mt-6 border-t border-navy/15">
                {g.cases.map((c) => (
                  <CaseItem
                    key={c.id}
                    data={c}
                    open={openIds.has(c.id)}
                    onToggle={toggle}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
