import { useLocation } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, FadeIn, ArrowLink } from "@/components/Editorial";

export default function Grazie() {
  const location = useLocation();
  const paid = Boolean(location.state?.paid);
  const formato = location.state?.formato;

  return (
    <>
      <Seo
        title="Grazie — Alessandro Immobile"
        description="Prenotazione ricevuta. Confermo l'appuntamento a breve via email."
      />
      <PageContainer testId="grazie-page">
        <PageTitle testId="grazie-title">Grazie</PageTitle>

        <Lead>
          Ho ricevuto la tua richiesta{formato ? ` per ${formato}` : ""}. Ti confermo
          l'appuntamento a breve via email.
        </Lead>

        {paid && (
          <FadeIn delay={0.1}>
            <div
              data-testid="grazie-bonifico"
              className="mt-12 rounded-lg border border-[#E5EAF3] bg-[#F4F6FA] p-6 md:p-8"
            >
              <p className="text-base leading-relaxed text-gray-700">
                Trattandosi di un formato a pagamento, ricorda di effettuare il bonifico
                prima della call, secondo l'IBAN e la causale che ti sono stati mostrati al
                momento della prenotazione.
              </p>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.15}>
          <ArrowLink to="/" testId="grazie-home-link" className="mt-12" labelClassName="text-lg">
            Torna alla home
          </ArrowLink>
        </FadeIn>
      </PageContainer>
    </>
  );
}
