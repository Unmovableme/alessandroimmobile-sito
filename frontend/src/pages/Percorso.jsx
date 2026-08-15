import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, Body, SectionTitle } from "@/components/Editorial";

export default function Percorso() {
  return (
    <>
      <Seo
        title="Percorso — Alessandro Immobile"
        description="Dal 1996 a oggi: studio e prime esperienze, consulenza per gruppi bancari e imprese industriali, ruoli esecutivi e di governo, startup e venture."
      />
      <PageContainer testId="percorso-page">
        <PageTitle testId="percorso-title">Percorso</PageTitle>

        <Lead>
          Il percorso comincia nel 1996, in uno studio a Napoli, con la contabilità ordinaria e i
          bilanci delle prime imprese clienti.
        </Lead>

        <SectionTitle>Studio e prime esperienze</SectionTitle>
        <Body>
          Il praticantato in uno studio commercialista, poi la laurea e il master in finanza. I
          primi incarichi di consulenza sui processi finanziari, per una società di servizi
          finanziari a Torino.
        </Body>

        <SectionTitle>Consulenza per gruppi bancari e imprese industriali</SectionTitle>
        <Body>
          Dal 2000, in una primaria società di consulenza internazionale, poi in uno studio di
          consulenza aziendale a Torino: progetti di adeguamento a principi contabili
          internazionali, riorganizzazione di processi creditizi, bilancio consolidato di un gruppo
          con attività in più paesi, ristrutturazione aziendale con piano industriale e
          rinegoziazione del debito.
        </Body>

        <SectionTitle>Ruoli esecutivi e di governo</SectionTitle>
        <Body>
          Dal 2015, dentro le imprese: consulenza di direzione per progetti in ambito bancario, la
          presidenza del Polo GGB, Polo di Innovazione in Genomica, Genetica e Biologia, la
          presidenza e la direzione finanziaria di Netgenomics S.r.l., startup innovativa nelle
          scienze della vita, la direzione finanziaria di Guanxi S.r.l., società di digital
          transformation, di cui oggi sono advisor.
        </Body>

        <SectionTitle>Oggi</SectionTitle>
        <Body>
          Fondatore e amministratore delegato di Imment S.r.l. Partner di P3 Ventures, fondo
          pre-seed su società AI-native. Co-fondatore, vicepresidente e tesoriere di Business Angel
          Club. Componente di due gruppi di lavoro dell'Ordine dei Dottori Commercialisti di Torino,
          su startup innovative e su intelligenza artificiale. Docente di finanziamento aziendale
          alla GIOYA Higher Education Institution, a Malta.
        </Body>
      </PageContainer>
    </>
  );
}
