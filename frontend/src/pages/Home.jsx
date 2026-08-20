import { Seo } from "@/components/Seo";
import { Body, SectionTitle, TintBand, BandTitle, ArrowLink, FadeIn } from "@/components/Editorial";

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
      <main data-testid="home-page" className="pb-24 md:pb-32">
        {/* Hero immersivo a colori naturali (opz. 3b) */}
        <section
          data-testid="home-hero"
          className="relative w-full min-h-[88vh] flex items-end overflow-hidden"
        >
          <img
            src="/portrait-hero.png"
            alt="Ritratto di Alessandro Immobile"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/90 via-[#0d1526]/35 to-transparent"
          />
          <div className="relative z-10 w-full">
            <div className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
              <FadeIn>
                <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/75 font-medium">
                  Assetti societari · Processi · Finanza
                </p>
              </FadeIn>
              <FadeIn delay={0.04}>
                <h1
                  data-testid="home-title"
                  className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.02] drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]"
                >
                  Alessandro Immobile
                </h1>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mt-6 max-w-2xl font-serif text-2xl md:text-[1.7rem] italic leading-snug text-white/90 drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]">
                  Struttura societaria, processi e finanza, per aziende e startup.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Indicatore "scorri": linea verticale sottile animata */}
          <div
            aria-hidden
            data-testid="home-hero-scroll"
            className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
          >
            <div className="scroll-line-track" />
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 mt-16 md:mt-20">
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
        </div>
      </main>
    </>
  );
}
