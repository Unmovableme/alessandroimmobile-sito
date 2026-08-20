import { FadeIn } from "@/components/Editorial";

// Hero condiviso per le pagine interne (Contatti, Percorso, Referenze):
// sfondo navy pieno (#1B2A4A), tinta unita, testo bianco/off-white.
// La foto ritratto resta esclusiva della Home.
export const ImmersiveHero = ({
  eyebrow,
  title,
  lead,
  testId = "immersive-hero",
  titleTestId,
  className = "min-h-[54vh] md:min-h-[60vh]",
}) => (
  <section
    data-testid={testId}
    className={`relative w-full flex items-end overflow-hidden bg-[#1B2A4A] ${className}`}
  >
    <div className="relative z-10 w-full">
      <div className="mx-auto max-w-6xl px-6 pb-14 md:pb-20">
        {eyebrow && (
          <FadeIn>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/70 font-medium">
              {eyebrow}
            </p>
          </FadeIn>
        )}
        <FadeIn delay={0.04}>
          <h1
            data-testid={titleTestId || `${testId}-title`}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.02]"
          >
            {title}
          </h1>
        </FadeIn>
        {lead && (
          <FadeIn delay={0.08}>
            <p className="mt-6 max-w-2xl font-serif text-xl md:text-[1.6rem] italic leading-snug text-white/85">
              {lead}
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  </section>
);
