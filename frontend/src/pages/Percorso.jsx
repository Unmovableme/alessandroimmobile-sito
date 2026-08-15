import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, Body, FadeIn, ArrowLink, Portrait } from "@/components/Editorial";

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
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#pubblicazioni") {
      const el = document.getElementById("pubblicazioni");
      if (el) {
        setTimeout(() => {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
        }, 150);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Seo
        title="Percorso — Alessandro Immobile"
        description="Dal 1996 a oggi: studio e prime esperienze, consulenza per gruppi bancari e imprese industriali, ruoli esecutivi e di governo, startup e venture."
      />
      <PageContainer testId="percorso-page">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_15rem] gap-8 sm:gap-12 items-start">
          <div className="order-2 sm:order-1">
            <PageTitle testId="percorso-title">Percorso</PageTitle>

            <Lead>
              Il percorso comincia nel 1996, in uno studio a Napoli, con la contabilità ordinaria e i
              bilanci delle prime imprese clienti.
            </Lead>
          </div>

          <Portrait variant="bw" testId="percorso-portrait" className="order-1 sm:order-2 max-w-[15rem] sm:pt-3" />
        </div>

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

        <section data-testid="percorso-pubblicazioni" id="pubblicazioni" className="mt-24 md:mt-28 scroll-mt-24">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 leading-tight">
              Pubblicazioni
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Capitolo &laquo;La finanza alternativa, dalla startup alla quotazione&raquo;, in
              &laquo;Diritto dell'innovazione e P.M.I.&raquo;, a cura di Oreste Cagnasso e Angelo
              Mambriani, Zanichelli. Firmato Alessandro Immobile Molaro.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ArrowLink
              href="https://www.zanichelli.it/ricerca/prodotti/diritto-dell-innovazione-e-p-m-i-con-risorse-digitali-cagnasso"
              target="_blank"
              rel="noopener noreferrer"
              testId="percorso-pubblicazioni-link"
              className="mt-6"
              labelClassName="text-lg"
            >
              Il volume
            </ArrowLink>
          </FadeIn>
        </section>
      </PageContainer>
    </>
  );
}
