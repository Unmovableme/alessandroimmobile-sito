import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, FadeIn, ArrowLink } from "@/components/Editorial";
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
      </PageContainer>
    </>
  );
}
