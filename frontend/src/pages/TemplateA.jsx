import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Body, SectionTitle, FadeIn, ArrowLink } from "@/components/Editorial";

/* ---------- Banner di anteprima (solo per il prototipo) ---------- */
const DemoBanner = () => (
  <div className="mx-auto max-w-3xl px-6">
    <div
      data-testid="template-a-banner"
      className="flex flex-wrap items-center gap-x-5 gap-y-2 border border-gray-200 rounded-sm px-5 py-3 text-xs text-gray-500"
    >
      <span className="font-medium text-navy">Anteprima · Template A</span>
      <span className="text-gray-300">/</span>
      <Link to="/template-a" className="hover:text-navy transition-colors" data-testid="demo-link-home">
        Home
      </Link>
      <Link to="/template-a-criterio" className="hover:text-navy transition-colors" data-testid="demo-link-criterio">
        Pagina di criterio
      </Link>
      <span className="text-gray-300">/</span>
      <Link to="/" className="hover:text-navy transition-colors" data-testid="demo-link-site">
        ← Torna al sito
      </Link>
    </div>
  </div>
);

/* ---------- HOME — versione A pura ---------- */
const areas = [
  { title: "Assetti societari", desc: "La forma giuridica dell'impresa, la struttura di gruppo, i soci, i patti e le regole della compagine sociale nel tempo.", to: "/assetti-societari", id: "a-area-assetti" },
  { title: "Processi", desc: "Come funziona l'azienda, e cosa cambia quando entra l'intelligenza artificiale.", to: "/processi", id: "a-area-processi" },
  { title: "Finanza", desc: "Come si misura l'impresa e come si sostiene, in azienda o in una raccolta di capitale.", to: "/finanza", id: "a-area-finanza" },
];

const highlights = [
  { title: "Quando il problema arriva, le opzioni sono già finite.", text: "Cinque situazioni diverse, nate dalla stessa causa: una struttura societaria rimasta ferma mentre l'azienda si muoveva.", to: "/quando-il-problema-arriva", id: "a-hl-quando" },
  { title: "Metriche e statuto: la posizione da cui si negozia.", text: "Un investitore chiede le metriche che dimostrano che il problema è reale, e uno statuto pronto a reggere la trattativa. Arrivare senza l'uno o l'altro significa negoziare da una posizione più debole.", to: "/metriche-e-statuto", id: "a-hl-metriche" },
];

const HomeSections = () => (
  <div className="mx-auto max-w-3xl px-6">
    <SectionTitle>Le tre aree</SectionTitle>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
      {areas.map((a, i) => (
        <FadeIn key={a.id} delay={i * 0.06}>
          <Link
            to={a.to}
            data-testid={`${a.id}-link`}
            className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy/40 hover:bg-[#F7F9FC] hover:shadow-[0_14px_34px_-20px_rgba(30,58,107,0.4)]"
          >
            <span className="font-serif text-5xl leading-none text-navy/20">{`0${i + 1}`}</span>
            <h3 className="mt-6 font-serif text-2xl font-semibold tracking-tight text-gray-900">{a.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-gray-600">{a.desc}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-navy text-[15px]">
              Scopri di più
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </FadeIn>
      ))}
    </div>

    <FadeIn>
      <figure className="mt-24 md:mt-28 border-l-2 border-navy pl-6 md:pl-8">
        <blockquote className="font-serif text-[1.75rem] md:text-[2.15rem] italic leading-snug text-navy">
          Il lavoro che conta si fa prima che l'investitore faccia la prima domanda.
        </blockquote>
      </figure>
    </FadeIn>

    <div className="mt-24 md:mt-28 rounded-xl border border-[#E5EAF3] bg-[#F4F6FA] p-8 md:p-12">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">In evidenza</h2>
      <div className="mt-10 space-y-12">
        {highlights.map((h, i) => (
          <FadeIn key={h.id} delay={i * 0.05}>
            <article data-testid={h.id}>
              <span className="font-serif text-3xl leading-none text-navy/25 tabular-nums">{`0${i + 1}`}</span>
              <h3 className="mt-3 font-serif text-2xl md:text-[1.75rem] font-medium tracking-tight text-gray-900 leading-snug">
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
    </div>
  </div>
);

export function TemplateAHome() {
  return (
    <>
      <Seo title="Template A — Anteprima" description="Anteprima del Template A (versione editoriale sobria) applicato alla Home." />
      <main data-testid="template-a-home" className="pt-28 pb-24 md:pt-32 md:pb-32">
        <DemoBanner />

        {/* ---------- Hero full-bleed asimmetrico (opzione 5) ---------- */}
        <section
          data-testid="template-a-hero"
          className="mt-10 md:mt-14 grid lg:grid-cols-2 lg:min-h-[78vh]"
        >
          <div className="order-2 lg:order-1 flex items-center">
            <div className="w-full max-w-xl mx-auto px-6 lg:pr-14 py-12 lg:py-0">
              <FadeIn>
                <p className="mb-4 text-xs uppercase tracking-[0.22em] text-navy/70 font-medium">
                  Assetti societari · Processi · Finanza
                </p>
              </FadeIn>
              <FadeIn delay={0.04}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-navy leading-[1.02]">
                  Alessandro Immobile
                </h1>
              </FadeIn>
              <FadeIn delay={0.08}>
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
                per i round di finanziamento.
              </Body>
              <Body>
                Dottore commercialista, iscritto all'Ordine di Torino, e revisore legale.
              </Body>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative min-h-[54vh] lg:min-h-full bg-[#EDF0F5] overflow-hidden">
            <img
              src="/portrait-hero.png"
              alt="Ritratto di Alessandro Immobile"
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover object-top grayscale contrast-[1.03]"
            />
          </div>
        </section>

        <HomeSections />
      </main>
    </>
  );
}

/* ---------- HOME — opzione 2: banda orizzontale a tutta larghezza ---------- */
export function TemplateBHome() {
  return (
    <>
      <Seo title="Template A — Banda (opz. 2)" description="Anteprima Home con hero a banda orizzontale a tutta larghezza." />
      <main data-testid="template-b-home" className="pt-28 pb-24 md:pt-32 md:pb-32">
        <DemoBanner />

        {/* Intestazione testuale */}
        <div className="mx-auto max-w-3xl px-6 mt-10 md:mt-14">
          <FadeIn>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-navy/70 font-medium">
              Assetti societari · Processi · Finanza
            </p>
          </FadeIn>
          <FadeIn delay={0.04}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-navy leading-[1.02]">
              Alessandro Immobile
            </h1>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mt-6 font-serif text-2xl md:text-[1.7rem] italic leading-snug text-gray-800">
              Struttura societaria, processi e finanza, per aziende e startup.
            </p>
          </FadeIn>
        </div>

        {/* Banda orizzontale full-bleed */}
        <FadeIn delay={0.1}>
          <div
            data-testid="template-b-band"
            className="mt-12 md:mt-16 w-full bg-[#EDF0F5] overflow-hidden"
          >
            <img
              src="/portrait-hero.png"
              alt="Ritratto di Alessandro Immobile"
              loading="eager"
              className="w-full h-72 md:h-[26rem] object-cover object-[center_26%] grayscale contrast-[1.03]"
            />
          </div>
        </FadeIn>

        {/* Bio */}
        <div className="mx-auto max-w-3xl px-6 mt-14 md:mt-16">
          <Body>
            Dal 1996 lavoro su bilanci, finanza, processi e assetti societari: in studio, per
            gruppi bancari e imprese industriali, poi con ruoli esecutivi e di governo in società.
          </Body>
          <Body>
            Dal 2019 il campo si è esteso alle startup: validazione del modello, costituzione e
            statuto in chiave innovativa, raccolta di capitale di rischio e di debito, valutazione
            per i round di finanziamento.
          </Body>
          <Body>
            Dottore commercialista, iscritto all'Ordine di Torino, e revisore legale.
          </Body>
        </div>

        <HomeSections />
      </main>
    </>
  );
}


/* ---------- HOME — opzione 3: hero immersivo con overlay ---------- */
export function TemplateCHome() {
  return (
    <>
      <Seo title="Template A — Immersivo (opz. 3)" description="Anteprima Home con hero immersivo a tutta pagina e overlay navy." />
      <main data-testid="template-c-home" className="pb-24 md:pb-32">
        {/* Hero immersivo full-bleed con overlay */}
        <section
          data-testid="template-c-hero"
          className="relative w-full min-h-[88vh] flex items-end overflow-hidden"
        >
          <img
            src="/portrait-hero.png"
            alt="Ritratto di Alessandro Immobile"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-[center_20%] grayscale"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-[#1B2A4A]/70 to-[#1B2A4A]/25"
          />
          <div className="relative z-10 w-full">
            <div className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
              <FadeIn>
                <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/70 font-medium">
                  Assetti societari · Processi · Finanza
                </p>
              </FadeIn>
              <FadeIn delay={0.04}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.02]">
                  Alessandro Immobile
                </h1>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mt-6 max-w-2xl font-serif text-2xl md:text-[1.7rem] italic leading-snug text-white/85">
                  Struttura societaria, processi e finanza, per aziende e startup.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Bio */}
        <div className="mx-auto max-w-3xl px-6 mt-16 md:mt-20">
          <Body>
            Dal 1996 lavoro su bilanci, finanza, processi e assetti societari: in studio, per
            gruppi bancari e imprese industriali, poi con ruoli esecutivi e di governo in società.
          </Body>
          <Body>
            Dal 2019 il campo si è esteso alle startup: validazione del modello, costituzione e
            statuto in chiave innovativa, raccolta di capitale di rischio e di debito, valutazione
            per i round di finanziamento.
          </Body>
          <Body>
            Dottore commercialista, iscritto all'Ordine di Torino, e revisore legale.
          </Body>
        </div>

        <HomeSections />
      </main>
    </>
  );
}


/* ---------- PAGINA DI CRITERIO — versione A pura ---------- */
const two = (n) => String(n).padStart(2, "0");

const critSections = [
  { id: "a-metriche-validazione", title: "Le metriche di validazione arrivano prima della raccolta, non dopo", content: (
    <Body>
      Alcune startup aprono la raccolta prima di avere le metriche che dimostrano che il problema è
      reale e che la soluzione lo risolve. Un investitore le chiede quasi subito: senza quei dati, la
      trattativa si sposta dal valore dimostrato alla fiducia personale nei founder, un terreno più
      lento e più fragile da percorrere.
    </Body>
  ) },
  { id: "a-cap-table", title: "La cap table è governance, non un elenco di soci", content: (
    <Body>
      Cosa si distribuisce, chi decide e con quali meccanismi, quale contributo porta ciascun
      investitore oltre al capitale: tre dimensioni che una cap table costruita raccogliendo le
      opportunità via via che si presentano finisce per ignorare. Ignorarle costa quando serve
      decidere in fretta: la struttura che ne risulta non regge la governance.
    </Body>
  ) },
  { id: "a-valuation", title: "La valuation nasce da metriche verificabili", content: (
    <Body>
      Una cifra comunicata prima di avere le metriche di validazione, la trazione, la qualità degli
      investitori e la struttura della raccolta che la sostengono resta un desiderio davanti a un
      fondo che fa domande.
    </Body>
  ) },
  { id: "a-investitori", title: "Molti investitori piccoli, poca governance pensata", content: (
    <Body>
      Ogni ingresso, anche di quota minima, porta diritti, comunicazione, documenti da gestire. Senza
      categorie di quote, soglie di ingresso e regole statutarie pensate in anticipo, la complessità
      cresce più in fretta del capitale raccolto.
    </Body>
  ) },
  { id: "a-diritti", title: "Diritti uguali per contributi diversi", content: (
    <Body>
      Chi porta solo capitale e chi costruisce il progetto ricevono spesso le stesse quote, con gli
      stessi diritti patrimoniali e amministrativi. Il controllo si sposta senza che nessuno l'abbia
      deciso: basta differenziare le categorie di quote per far coincidere i diritti con il
      contributo reale di ciascuno.
    </Body>
  ) },
  { id: "a-dove-valore", title: "Dove sta il valore", content: (
    <Body>
      Il lavoro che conta si fa prima che l'investitore faccia la prima domanda: statuto pensato per
      i round che verranno, cap table progettata come infrastruttura di governance, valuation
      costruita su metriche verificabili, quote e diritti differenziati per il contributo reale di
      chi entra.
    </Body>
  ) },
  { id: "a-con-chi", title: "Con chi lavoro", content: (
    <Body>
      Startup italiane, dalla costituzione al primo round e ai successivi. Founder che hanno già
      validato un'idea o un prodotto e che stanno per affrontare la parte che non hanno mai fatto
      prima.
    </Body>
  ) },
];

export function TemplateACriterio() {
  const [active, setActive] = useState(critSections[0].id);

  useEffect(() => {
    const els = critSections.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;
    const visible = new Set();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const topmost = critSections.find((s) => visible.has(s.id));
        if (topmost) setActive(topmost.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
  };

  return (
    <>
      <Seo title="Template A — Anteprima pagina di criterio" description="Anteprima del Template A applicato a una pagina di criterio: sobria, uniforme, senza numeri in filigrana né tint." />
      <main data-testid="template-a-criterio" className="relative pt-28 pb-24 md:pt-32 md:pb-32">
        <nav
          aria-label="Indice della pagina"
          data-testid="template-a-toc"
          className="hidden xl:block fixed left-8 2xl:left-16 top-1/2 -translate-y-1/2 z-30 w-52"
        >
          <ul className="space-y-3.5 border-l border-gray-200 pl-4">
            {critSections.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => goTo(s.id)}
                  aria-current={active === s.id ? "true" : undefined}
                  className={`group flex gap-2.5 text-left text-xs leading-snug transition-colors duration-300 ${
                    active === s.id ? "text-navy" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <span className="tabular-nums pt-px shrink-0">{two(i + 1)}</span>
                  <span className="line-clamp-2">{s.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <DemoBanner />

        <div className="mx-auto max-w-3xl px-6 mt-16 md:mt-20">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-navy leading-[1.02]">
              Metriche e statuto: la posizione da cui si negozia.
            </h1>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mt-10 text-xl md:text-2xl leading-relaxed text-gray-700">
              Un investitore arriva alla due diligence e trova quello che nessuno aveva ancora
              guardato: categorie di quote non previste, strumenti finanziari non disciplinati, tag
              along e drag along assenti. Da quel momento le condizioni le decide lui, non i founder
              che fino a un istante prima le stavano ancora impostando.
            </p>
          </FadeIn>
        </div>

        {critSections.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-28 mt-24 md:mt-28">
            <div className="mx-auto max-w-3xl px-6">
              <FadeIn>
                <div className="mb-8">
                  <span className="block text-sm font-medium tabular-nums text-navy mb-3">{two(i + 1)}</span>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
                    {s.title}
                  </h2>
                </div>
              </FadeIn>
              {s.content}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
