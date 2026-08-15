import { FadeIn, ArrowLink } from "@/components/Editorial";

// URL LinkedIn per nome (fonte unica condivisa da Referenze ed Evidenza).
export const linkedinByName = {
  "Marta Nappo": "https://www.linkedin.com/in/martanappo/",
  "Massimiliano Bosaro": "https://www.linkedin.com/in/massimilianobosaro/",
  "Fabrizio Gallante": "https://www.linkedin.com/in/gallante/",
  "Matteo Fornaca": "https://www.linkedin.com/in/teofornaca/",
  "Barbara Rizzi": "https://www.linkedin.com/in/barbara-rizzi-giurista/",
  "Angelo Marra": "https://www.linkedin.com/in/angelomarra/",
  "Claudio Grimoldi": "https://www.linkedin.com/in/claudio-grimoldi/",
  "Federico Chigbuh Gasparini": "https://www.linkedin.com/in/federicochigbuhgasparini/",
  "Matteo Moccia": "https://www.linkedin.com/in/matteomoccia/",
  "Giuseppe Virzì": "https://www.linkedin.com/in/peppevirzi/",
};

// Pool completo delle referenze utilizzabili in evidenza (estratti verbatim brevi).
const evidenzaPool = [
  {
    name: "Marta Nappo",
    role: "CMO, Chief Sales Officer, Business Development Executive",
    excerpt:
      "Fa dell'ascolto dei suoi collaboratori e clienti un'arma vincente per ottimizzare al meglio l'organizzazione e le soluzioni offerte.",
  },
  {
    name: "Massimiliano Bosaro",
    role: "Founder & CEO, CentraleRisk SpA",
    excerpt: "Competente ed innovatore prima di tutto, ma anche disponibile e cordiale.",
  },
  {
    name: "Fabrizio Gallante",
    role: "Managing Partner di Enzima12, CEO di 12Venture",
    excerpt:
      "Alessandro si distingue per visione strategica, pragmatismo e un'evidente passione nel sostenere nuovi imprenditori.",
  },
  {
    name: "Matteo Fornaca",
    role: "Founder e CEO, The Spiritual Machine",
    excerpt:
      "Sempre disponibile, professionale, impeccabile e con gli occhi aperti su quanto di nuovo succede nel mondo.",
  },
  {
    name: "Barbara Rizzi",
    role: "Commercialista",
    excerpt:
      "La sua competenza nel campo del crowdfunding e della finanza alternativa è davvero notevole.",
  },
  {
    name: "Angelo Marra",
    role: "Presidente Fondimpresa Calabria, Confindustria",
    excerpt:
      "Lo consiglio a chiunque abbia una startup e ha bisogno di un consulente esperto e sul pezzo.",
  },
  {
    name: "Claudio Grimoldi",
    role: "Turbo Crowd",
    excerpt: "Un professionista raro da trovare: competente e serio come davvero pochi.",
  },
  {
    name: "Federico Chigbuh Gasparini",
    role: "COO @MarshYellow, Business Designer, Startup Mentor",
    excerpt:
      "Straordinariamente competente, con una vasta e profonda esperienza in tutto ciò che riguarda la raccolta fondi per le startup.",
  },
  {
    name: "Matteo Moccia",
    role: "Commercialista",
    excerpt: "Conosco Alessandro come un vero punto di riferimento nel mondo dell'innovazione.",
  },
  {
    name: "Giuseppe Virzì",
    role: "Founder, Tuduu",
    excerpt:
      "È un punto di riferimento imprescindibile ogni qual volta c'è da strutturare non solo tecnicamente un'operazione straordinaria.",
  },
];

// Rotazione nel tempo: ogni giorno mostra un trio diverso, ciclando su tutte e dieci.
const getFeatured = (count = 3) => {
  const dayIndex = Math.floor(Date.now() / 86400000);
  const start = (dayIndex * count) % evidenzaPool.length;
  return Array.from({ length: count }, (_, k) => evidenzaPool[(start + k) % evidenzaPool.length]);
};

// variant: "full" (pagina Referenze) | "compact" (miniatura vicino al form)
export const Evidenza = ({ variant = "full", testId = "referenze-evidenza" }) => {
  const compact = variant === "compact";
  const featured = getFeatured(3);
  return (
    <div
      data-testid={testId}
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${compact ? "" : "gap-5"}`}
    >
      {featured.map((f, i) => (
        <FadeIn key={f.name} delay={i * 0.06}>
          <figure
            data-testid={`${testId}-${i + 1}`}
            className={`relative h-full rounded-xl border border-[#E5EAF3] bg-[#F4F6FA] ${
              compact ? "p-5 pt-8" : "p-7 pt-10"
            }`}
          >
            <span
              aria-hidden
              className={`absolute left-5 top-2 font-serif leading-none text-navy/25 select-none ${
                compact ? "text-4xl" : "text-5xl left-6 top-3"
              }`}
            >
              &ldquo;
            </span>
            <blockquote
              className={`font-serif italic leading-snug text-navy ${
                compact ? "text-base" : "text-lg md:text-xl"
              }`}
            >
              {f.excerpt}
            </blockquote>
            <figcaption className={compact ? "mt-4" : "mt-5"}>
              <p
                className={`font-semibold tracking-tight text-gray-900 ${
                  compact ? "text-sm" : "text-base"
                }`}
              >
                {f.name}
              </p>
              {f.role && (
                <p className={`mt-0.5 text-gray-500 ${compact ? "text-xs" : "text-sm"}`}>
                  {f.role}
                </p>
              )}
              {linkedinByName[f.name] && (
                <ArrowLink
                  href={linkedinByName[f.name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  testId={`${testId}-${i + 1}-linkedin`}
                  className="mt-3"
                  labelClassName={compact ? "text-xs" : "text-sm"}
                >
                  LinkedIn
                </ArrowLink>
              )}
            </figcaption>
          </figure>
        </FadeIn>
      ))}
    </div>
  );
};
