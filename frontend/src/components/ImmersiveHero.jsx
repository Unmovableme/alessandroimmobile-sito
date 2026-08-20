import { FadeIn } from "@/components/Editorial";

// Hero immersivo condiviso (stile Home) per le pagine interne: ritratto a piena
// larghezza + velo navy + testo bianco. Altezza ridotta rispetto alla Home.
export const ImmersiveHero = ({
  eyebrow,
  title,
  lead,
  testId = "immersive-hero",
  titleTestId,
  objectPosition = "center 20%",
  className = "min-h-[54vh] md:min-h-[60vh]",
}) => (
  <section
    data-testid={testId}
    className={`relative w-full flex items-end overflow-hidden ${className}`}
  >
    <img
      src="/portrait-hero.png"
      alt="Ritratto di Alessandro Immobile"
      loading="eager"
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition }}
    />
    <div
      aria-hidden
      className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/90 via-[#0d1526]/35 to-transparent"
    />
    <div className="relative z-10 w-full">
      <div className="mx-auto max-w-6xl px-6 pb-14 md:pb-20">
        {eyebrow && (
          <FadeIn>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/75 font-medium">
              {eyebrow}
            </p>
          </FadeIn>
        )}
        <FadeIn delay={0.04}>
          <h1
            data-testid={titleTestId || `${testId}-title`}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.02] drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]"
          >
            {title}
          </h1>
        </FadeIn>
        {lead && (
          <FadeIn delay={0.08}>
            <p className="mt-6 max-w-2xl font-serif text-xl md:text-[1.6rem] italic leading-snug text-white/90 drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]">
              {lead}
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  </section>
);
