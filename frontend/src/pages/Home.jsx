import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, Body, SectionTitle, DeepLink, FadeIn } from "@/components/Editorial";
import { Link } from "react-router-dom";

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
        <PageTitle testId="home-title">Alessandro Immobile</PageTitle>

        <Lead>
          Dal 1996 lavoro su bilanci, finanza, processi e assetti societari: in studio, per
          gruppi bancari e imprese industriali, poi con ruoli esecutivi e di governo in società.
        </Lead>

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

        <SectionTitle>Le tre aree</SectionTitle>
        <div className="mt-10 space-y-12">
          {areas.map((a, i) => (
            <FadeIn key={a.id} delay={i * 0.05}>
              <div data-testid={a.id}>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="font-semibold text-gray-900">{a.name}</strong>
                  {a.text}
                </p>
                <Link
                  to={a.to}
                  data-testid={`${a.id}-link`}
                  className="group mt-4 inline-flex items-baseline gap-2 text-navy border-b border-navy-soft hover:border-navy pb-1 transition-colors duration-300"
                >
                  <span className="text-[15px]">Scopri di più</span>
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <SectionTitle>In evidenza</SectionTitle>
        <div className="mt-10 space-y-14">
          {highlights.map((h, i) => (
            <FadeIn key={h.id} delay={i * 0.05}>
              <article data-testid={h.id}>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 leading-snug">
                  {h.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">{h.text}</p>
                <Link
                  to={h.to}
                  data-testid={`${h.id}-link`}
                  className="group mt-4 inline-flex items-baseline gap-2 text-navy border-b border-navy-soft hover:border-navy pb-1 transition-colors duration-300"
                >
                  <span className="text-[15px]">Leggi</span>
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </PageContainer>
    </>
  );
}
