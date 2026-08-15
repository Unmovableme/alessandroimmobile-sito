import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, FadeIn } from "@/components/Editorial";
import { EMAIL, LINKEDIN } from "@/components/Footer";

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
              className="text-xl md:text-2xl font-medium text-navy border-b border-navy-soft hover:border-navy pb-1 transition-colors duration-300"
            >
              {EMAIL}
            </a>
            <p className="mt-3 text-sm italic text-gray-500">
              (provvisoria, in attesa dell'email su dominio proprio)
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contatti-linkedin-link"
            className="group mt-10 inline-flex items-baseline gap-2 text-navy border-b border-navy-soft hover:border-navy pb-1 transition-colors duration-300"
          >
            <span className="text-lg">LinkedIn</span>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </FadeIn>
      </PageContainer>
    </>
  );
}
