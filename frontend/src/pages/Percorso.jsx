import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, Body, FadeIn } from "@/components/Editorial";

const stages = [
  {
    title: "Studio e prime esperienze",
    body: (
      <>
        Il praticantato in uno studio commercialista, poi la laurea e il master in finanza. I primi
        incarichi di consulenza sui processi finanziari, per una società di servizi finanziari a
        Torino.
      </>
    ),
  },
  {
    title: "Consulenza per gruppi bancari e imprese industriali",
    body: (
      <>
        Dal 2000, in una primaria società di consulenza internazionale, poi in uno studio di
        consulenza aziendale a Torino: progetti di adeguamento a principi contabili internazionali,
        riorganizzazione di processi creditizi, bilancio consolidato di un gruppo con attività in
        più paesi, ristrutturazione aziendale con piano industriale e rinegoziazione del debito.
      </>
    ),
  },
  {
    title: "Ruoli esecutivi e di governo",
    body: (
      <>
        Dal 2015, dentro le imprese: consulenza di direzione per progetti in ambito bancario, la
        presidenza del Polo GGB, Polo di Innovazione in Genomica, Genetica e Biologia, la presidenza
        e la direzione finanziaria di Netgenomics S.r.l., startup innovativa nelle scienze della
        vita, la direzione finanziaria di Guanxi S.r.l., società di digital transformation, di cui
        oggi sono advisor.
      </>
    ),
  },
  {
    title: "Oggi",
    body: (
      <>
        Fondatore e amministratore delegato di Imment S.r.l. Partner di P3 Ventures, fondo pre-seed
        su società AI-native. Co-fondatore, vicepresidente e tesoriere di Business Angel Club.
        Componente di due gruppi di lavoro dell'Ordine dei Dottori Commercialisti di Torino, su
        startup innovative e su intelligenza artificiale. Docente di finanziamento aziendale alla
        GIOYA Higher Education Institution, a Malta.
      </>
    ),
  },
];

export default function Percorso() {
  return (
    <>
      <Seo
        title="Percorso — Alessandro Immobile"
        description="Dal 1996 a oggi: studio e prime esperienze, consulenza per gruppi bancari e imprese industriali, ruoli esecutivi e di governo, startup e venture."
      />
      <PageContainer testId="percorso-page">
        <PageTitle testId="percorso-title">Percorso</PageTitle>

        <Lead>
          Il percorso comincia nel 1996, in uno studio a Napoli, con la contabilità ordinaria e i
          bilanci delle prime imprese clienti.
        </Lead>

        <div className="mt-20 md:mt-24 border-l border-navy/25 pl-8" data-testid="percorso-timeline">
          {stages.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.04} className={i < stages.length - 1 ? "pb-16" : ""}>
              <div className="relative" data-testid={`timeline-stage-${i + 1}`}>
                <span
                  aria-hidden
                  className="absolute top-2 h-3 w-3 rounded-full bg-navy ring-4 ring-white"
                  style={{ left: "calc(-2rem - 6px)" }}
                />
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 leading-tight">
                  {s.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-gray-700">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </PageContainer>
    </>
  );
}
