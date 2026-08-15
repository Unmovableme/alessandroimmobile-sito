import { useEffect, useState } from "react";
import { FadeIn } from "@/components/Editorial";

const two = (n) => String(n).padStart(2, "0");

const SectionHeading = ({ number, title }) => (
  <FadeIn>
    <div className="mb-8">
      <span className="block text-sm font-medium tabular-nums text-navy mb-3">{number}</span>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
        {title}
      </h2>
    </div>
  </FadeIn>
);

const CriterioSection = ({ id, number, title, tint, children }) => {
  if (tint) {
    return (
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#F4F6FA] border-y border-[#E5EAF3] mt-24 md:mt-32 py-16 md:py-20">
        <section id={id} data-testid={`section-${id}`} className="scroll-mt-28">
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeading number={number} title={title} />
            {children}
          </div>
        </section>
      </div>
    );
  }
  return (
    <section id={id} data-testid={`section-${id}`} className="scroll-mt-28 mt-24 md:mt-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading number={number} title={title} />
        {children}
      </div>
    </section>
  );
};

export function CriterioPage({ testId, titleTestId, title, lead, intro, sections }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;
    const visible = new Set();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const topmost = sections.find((s) => visible.has(s.id));
        if (topmost) setActive(topmost.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main data-testid={testId} className="relative pt-28 pb-24 md:pt-40 md:pb-32">
      <nav
        aria-label="Indice della pagina"
        data-testid="criterio-toc"
        className="hidden xl:block fixed left-8 2xl:left-16 top-1/2 -translate-y-1/2 z-30 w-52"
      >
        <ul className="space-y-3.5 border-l border-gray-200 pl-4">
          {sections.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => goTo(s.id)}
                data-testid={`toc-${s.id}`}
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

      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <h1
            data-testid={titleTestId}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-navy leading-[1.02]"
          >
            {title}
          </h1>
        </FadeIn>
        {lead && (
          <FadeIn delay={0.05}>
            <p className="mt-10 text-xl md:text-2xl leading-relaxed text-gray-700">{lead}</p>
          </FadeIn>
        )}
        {intro}
      </div>

      {sections.map((s, i) => (
        <CriterioSection key={s.id} id={s.id} number={two(i + 1)} title={s.title} tint={i % 2 === 1}>
          {s.content}
        </CriterioSection>
      ))}
    </main>
  );
}
