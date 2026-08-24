import { FadeIn } from "@/components/Editorial";

// Apertura pagine interne (Contatti, Percorso, Referenze): sfondo bianco,
// coerente con le pagine di competenza. Occhiello grigio tenue, H1 navy serif,
// lead in corsivo navy. Blocco allineato in alto (non centrato).
export const ImmersiveHero = ({ eyebrow, title, lead, testId = "immersive-hero", titleTestId }) => (
  <section data-testid={testId} className="mx-auto max-w-3xl px-6 pt-28 md:pt-40">
    {eyebrow && (
      <FadeIn>
        <p className="mb-4 text-xs uppercase tracking-[0.24em] font-medium text-gray-400">{eyebrow}</p>
      </FadeIn>
    )}
    <FadeIn delay={0.04}>
      <h1
        data-testid={titleTestId || `${testId}-title`}
        className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-navy leading-[1.02]"
      >
        {title}
      </h1>
    </FadeIn>
    {lead && (
      <FadeIn delay={0.08}>
        <p className="mt-8 max-w-2xl font-serif text-xl md:text-2xl italic leading-snug text-navy/90">{lead}</p>
      </FadeIn>
    )}
  </section>
);
