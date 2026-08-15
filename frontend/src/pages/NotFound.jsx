import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, ArrowLink } from "@/components/Editorial";

export default function NotFound() {
  return (
    <>
      <Seo title="Pagina non trovata — Alessandro Immobile" description="La pagina richiesta non esiste." />
      <PageContainer testId="notfound-page">
        <PageTitle testId="notfound-title">Pagina non trovata</PageTitle>
        <Lead>La pagina che cercavi non esiste o è stata spostata.</Lead>
        <ArrowLink to="/" testId="notfound-home-link" className="mt-10" labelClassName="text-lg">
          Torna alla home
        </ArrowLink>
      </PageContainer>
    </>
  );
}
