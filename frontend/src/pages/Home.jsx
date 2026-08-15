import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Body, SectionTitle, TintBand, BandTitle, ArrowLink, FadeIn, Portrait } from "@/components/Editorial";

const areas = [
  {
    name: "Assetti societari.",
    text: " La forma giuridica dell'impresa, la struttura di gruppo, i soci, i patti e le regole della compagine sociale nel tempo.",
    to: "/assetti-societari",
    id: "area-assetti",
  },
  {
    name: "Processi.",
    text: " Come funziona l'azienda, e cosa cambia quando entra l'intelligenza artificiale.",
    to: "/processi",
    id: "area-processi",
  },
  {
    name: "Finanza.",
    text: " Come si misura l'impresa e come si sostiene, in azienda o in una raccolta di capitale.",
    to: "/finanza",
    id: "area-finanza",
  },
];

const highlights = [
  {
    title: "Quando il problema arriva, le opzioni sono già finite.",
    text: "Cinque situazioni diverse, nate dalla stessa causa: una struttura societaria rimasta ferma mentre l'azienda si muoveva.",
    to: "/quando-il-problema-arriva",
    id: "highlight-quando",
  },
  {
    title: "Metriche e statuto: la posizione da cui si negozia.",
    text: "Un investitore chiede le metriche che dimostrano che il problema è reale, e uno statuto pronto a reggere la trattativa. Arrivare senza l'uno o l'altro significa negoziare da una posizione più debole.",
    to: "/metriche-e-statuto",
    id: "highlight-metriche",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Alessandro Immobile — Aziendalista e dottore commercialista"
        description="Assetti societari, processi e finanza per imprese e startup. Dal 1996 su bilanci, finanza e assetti societari; dal 2019 anche startup, dalla costituzione alla raccolta di capitale."
      />
      <PageContainer testId="home-page">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_15rem] gap-8 sm:gap-12 items-start">
          <div className="order-2 sm:order-1">
            <FadeIn>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-navy/70 font-medium">
                Assetti societari · Processi · Finanza
              </p>
            </FadeIn>
            <PageTitle testId="home-title">Alessandro Immobile</PageTitle>
            <FadeIn delay={0.06}>
              <p className="mt-6 font-serif text-2xl md:text-[1.7rem] italic leading-snug text-gray-800">
                Struttura societaria, processi e finanza, per aziende e startup.
              </p>
            </FadeIn>
            <div className="mt-8 h-px w-16 bg-navy/25" />

            <Body>
              Dal 1996 lavoro su bilanci, finanza, processi e assetti societari: in studio, per
              gruppi bancari e imprese industriali, poi con ruoli esecutivi e di governo in società.
            </Body>

            <Body>
              Dal 2019 il campo si è esteso alle startup: validazione del modello, costituzione e
              statuto in chiave innovativa, raccolta di capitale di rischio e di debito, valutazione
              per i round di finanziamento. Sono fondatore e CEO di Imment S.r.l., dedicata ai modelli
              di crescita e di raccolta di capitale per startup e PMI. Sono partner di P3 Ventures,
              fondo che investe nelle fasi più giovani delle startup, co-fondatore di Business Angel
              Club, associazione di business angel, e docente di finanziamento aziendale alla GIOYA
              Higher Education Institution, a Malta.
            </Body>

            <Body>
              Dottore commercialista, iscritto all'Ordine di Torino, e revisore legale.
            </Body>

            <FadeIn delay={0.05}>
              <ArrowLink to="/referenze" testId="home-referenze-link" className="mt-8" labelClassName="text-[15px]">
                Cosa dicono di me
              </ArrowLink>
            </FadeIn>
          </div>

          <Portrait variant="bw" testId="home-portrait" className="order-1 sm:order-2 max-w-[15rem] sm:pt-3" />
        </div>

        <SectionTitle>Le tre aree</SectionTitle>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:divide-x md:divide-navy/15">
          {areas.map((a, i) => (
            <FadeIn
              key={a.id}
              delay={i * 0.05}
              className={i === 0 ? "md:pr-12" : i === areas.length - 1 ? "md:pl-12" : "md:px-6"}
            >
              <div data-testid={a.id}>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong className="font-semibold text-gray-900">{a.name}</strong>
                  {a.text}
                </p>
                <ArrowLink to={a.to} testId={`${a.id}-link`} className="mt-5" labelClassName="text-[15px]">
                  Scopri di più
                </ArrowLink>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <figure className="mt-24 md:mt-32 border-l-2 border-navy pl-6 md:pl-8">
            <blockquote className="font-serif text-[1.75rem] md:text-[2.15rem] italic leading-snug text-navy">
              Il lavoro che conta si fa prima che un investitore, una banca o un socio facciano la prima domanda.
            </blockquote>
          </figure>
        </FadeIn>

        <TintBand testId="home-in-evidenza">
          <BandTitle>In evidenza</BandTitle>
          <div className="space-y-14">
            {highlights.map((h, i) => (
              <FadeIn key={h.id} delay={i * 0.05}>
                <article data-testid={h.id}>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 leading-snug">
                    {h.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-700">{h.text}</p>
                  <ArrowLink to={h.to} testId={`${h.id}-link`} className="mt-5" labelClassName="text-[15px]">
                    Leggi
                  </ArrowLink>
                </article>
              </FadeIn>
            ))}
          </div>
        </TintBand>
      </PageContainer>
    </>
  );
}
