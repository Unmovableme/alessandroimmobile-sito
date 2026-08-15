import { FadeIn } from "@/components/Editorial";

// Referenze messe in evidenza (estratti verbatim dalle testimonianze).
export const featured = [
  {
    name: "Claudio Grimoldi",
    role: "Turbo Crowd",
    excerpt: "Un professionista raro da trovare: competente e serio come davvero pochi.",
  },
  {
    name: "Angelo Marra",
    role: "Presidente Fondimpresa Calabria, Confindustria",
    excerpt:
      "Lo consiglio a chiunque abbia una startup e ha bisogno di un consulente esperto e sul pezzo.",
  },
  {
    name: "Federico Chigbuh Gasparini",
    role: "COO @MarshYellow, Business Designer, Startup Mentor",
    excerpt:
      "Straordinariamente competente, con una vasta e profonda esperienza in tutto ciò che riguarda la raccolta fondi per le startup.",
  },
];

// variant: "full" (pagina Referenze) | "compact" (miniatura vicino al form)
export const Evidenza = ({ variant = "full", testId = "referenze-evidenza" }) => {
  const compact = variant === "compact";
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
            </figcaption>
          </figure>
        </FadeIn>
      ))}
    </div>
  );
};
