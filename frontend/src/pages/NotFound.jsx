import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead } from "@/components/Editorial";

export default function NotFound() {
  return (
    <>
      <Seo title="Pagina non trovata — Alessandro Immobile" description="La pagina richiesta non esiste." />
      <PageContainer testId="notfound-page">
        <PageTitle testId="notfound-title">Pagina non trovata</PageTitle>
        <Lead>La pagina che cercavi non esiste o è stata spostata.</Lead>
        <Link
          to="/"
          data-testid="notfound-home-link"
          className="group mt-10 inline-flex items-baseline gap-2 text-navy border-b border-navy-soft hover:border-navy pb-1 transition-colors duration-300"
        >
          <span className="text-lg">Torna alla home</span>
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </PageContainer>
    </>
  );
}
