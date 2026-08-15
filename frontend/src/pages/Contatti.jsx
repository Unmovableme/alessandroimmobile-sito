import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, FadeIn, ArrowLink } from "@/components/Editorial";
import { EMAIL, LINKEDIN } from "@/components/Footer";
import PrenotaCall from "@/components/PrenotaCall";

const summary = [
  { name: "Intro & Focus Call", meta: "10 minuti", price: "gratuita" },
  { name: "Executive Advisory", meta: "30 minuti", price: "300 €" },
  { name: "Corporate Strategic Sprint", meta: "3 × 60 minuti", price: "900 €" },
];

const formats = [
  {
    title: "Intro & Focus Call — 10 minuti — gratuita",
    desc: "Ci conosciamo, definiamo il tema, prepariamo la sessione successiva.",
  },
  {
    title: "Executive Advisory — 30 minuti — 300 €",
    desc: "Una domanda aziendale specifica. Un confronto senior. Una raccomandazione operativa.",
  },
  {
    title: "Corporate Strategic Sprint — 3 sessioni da 60 minuti, in circa tre settimane — 900 €",
    desc: "Dalla diagnosi al piano operativo: si comprende il problema, si valutano le alternative, si costruisce una soluzione e una roadmap a novanta giorni.",
  },
];

export default function Contatti() {
  return (
    <>
      <Seo
        title="Contatti — Alessandro Immobile"
        description="Scrivimi direttamente, senza moduli da compilare. Rispondo io. Email e LinkedIn di Alessandro Immobile."
      />
      <PageContainer testId="contatti-page">
        <PageTitle testId="contatti-title">Contatti</PageTitle>

        <Lead>Scrivimi direttamente, senza moduli da compilare. Rispondo io.</Lead>

        <FadeIn delay={0.1}>
          <div className="mt-12">
            <a
              href={`mailto:${EMAIL}`}
              data-testid="contatti-email-link"
              className="group inline-block text-xl md:text-2xl font-medium text-navy"
            >
              <span className="relative inline-block pb-0.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100">
                {EMAIL}
              </span>
            </a>
            <p className="mt-3 text-sm italic text-gray-500">
              (provvisoria, in attesa dell'email su dominio proprio)
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ArrowLink
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            testId="contatti-linkedin-link"
            className="mt-10"
            labelClassName="text-lg"
          >
            LinkedIn
          </ArrowLink>
        </FadeIn>

        {/* ---------- Prenota una call ---------- */}
        <section data-testid="prenota-call-section" className="mt-24 md:mt-32 border-t border-gray-200 pt-16 md:pt-20">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-navy leading-tight">
              Prenota una call
            </h2>
          </FadeIn>

          <FadeIn delay={0.03}>
            <div
              data-testid="prenota-riepilogo"
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200"
            >
              {summary.map((s) => (
                <div key={s.name} className="bg-white px-5 py-5">
                  <p className="font-serif text-base font-semibold tracking-tight text-gray-900 leading-snug">
                    {s.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{s.meta}</p>
                  <p className="mt-2 text-lg font-semibold text-navy">{s.price}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="mt-8 text-lg leading-relaxed text-gray-700">
              Il confronto può toccare anche organizzazione, innovazione e intelligenza
              artificiale, oltre alle tre aree del sito.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Compila il modulo prima della call: azienda, ruolo, tema, una descrizione del
              problema in poche righe, il risultato che vorresti ottenere, entro quando vuoi
              decidere.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-8">
            {formats.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.05}>
                <div data-testid={`prenota-formato-desc-${i}`}>
                  <p className="font-serif text-lg font-semibold tracking-tight text-gray-900">
                    {f.title}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-gray-600">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="mt-12 text-base leading-relaxed text-gray-500">
              Per i formati a pagamento, dopo la prenotazione compaiono IBAN e causale per il
              bonifico, da effettuare prima della call. Ricevuta la prenotazione, confermo
              l'appuntamento via email.
            </p>
          </FadeIn>

          <PrenotaCall />
        </section>
      </PageContainer>
    </>
  );
}
