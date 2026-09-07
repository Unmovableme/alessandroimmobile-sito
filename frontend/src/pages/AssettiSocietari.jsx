import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, Body, SectionTitle, SectionJump, Descriptor, DeepLink, TintBand, BandTitle, PullQuote, FadeIn, ArrowLink, TopicItem } from "@/components/Editorial";

export default function AssettiSocietari() {
  return (
    <>
      <Seo
        title="Assetti societari — Alessandro Immobile"
        description="Struttura societaria, holding e riordino di gruppo, ingresso e uscita di soci, passaggio generazionale, cessioni e acquisizioni. Per aziende e startup."
      />
      <PageContainer testId="assetti-page">
        <PageTitle testId="assetti-title">Assetti societari</PageTitle>

        <Lead>
          La struttura di un'impresa è una decisione che condiziona tutto quello che viene dopo:
          chi comanda, chi rischia, chi guadagna, chi può entrare e a quali condizioni.
        </Lead>

        <PullQuote testId="assetti-pullquote" tight>Va progettata prima che serva.</PullQuote>

        <SectionJump />

        <SectionTitle id="aziende" tight>Aziende</SectionTitle>
        <Descriptor>
          Strutture scelte anni fa, per un'impresa che nel frattempo è diventata un'altra cosa.
        </Descriptor>
        <TopicItem n="01" title="Trasformazione societaria" testId="assetti-topic-1">
          Da società di persone o ditta individuale a società di capitali.
        </TopicItem>
        <TopicItem n="02" title="Separazione di rami di attività" testId="assetti-topic-2">
          Scissione o conferimento: l'operativo dall'immobiliare, due business con rischi e mercati
          diversi, un ramo che deve poter essere venduto o finanziato per conto suo.
        </TopicItem>
        <TopicItem n="03" title="Holding e riordino di gruppo" testId="assetti-topic-3">
          Dove stanno gli utili, dove stanno gli immobili e i marchi, chi controlla cosa.
        </TopicItem>
        <TopicItem n="04" title="Ingresso e uscita di soci" testId="assetti-topic-4">
          Cessione di quote, aumenti riservati, clausole statutarie, patti parasociali, categorie di
          quote con diritti differenziati.
        </TopicItem>
        <TopicItem n="05" title="Passaggio generazionale" testId="assetti-topic-5">
          Chi entra, chi non entra, come si separa la proprietà dalla gestione.
        </TopicItem>
        <TopicItem n="06" title="Cessioni e acquisizioni" testId="assetti-topic-6">
          Preparazione dell'operazione, valutazione, struttura, negoziazione, coordinamento fino
          all'atto, sell side e buy side.
        </TopicItem>
        <DeepLink to="/quando-il-problema-arriva" testId="assetti-deeplink-quando" label="Approfondimento">
          Quando il problema arriva, le opzioni sono già finite
        </DeepLink>
        <FadeIn className="mt-4">
          <p className="mb-1.5 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Case study</p>
          <ArrowLink to="/case-study#caso-01" testId="assetti-casestudy-aziende" labelClassName="text-lg">
            Riorganizzazione di un gruppo industriale
          </ArrowLink>
        </FadeIn>

        <SectionTitle id="startup">Startup</SectionTitle>
        <Descriptor>
          Strutture da costruire adesso, per un'impresa che dovrà reggere quello che ancora non è
          successo.
        </Descriptor>
        <TopicItem n="01" title="Costituzione e iscrizione" testId="assetti-startup-topic-1">
          Sezione speciale del Registro delle Imprese: requisiti, oggetto sociale innovativo,
          adempimenti di mantenimento.
        </TopicItem>
        <TopicItem n="02" title="Statuto e patti" testId="assetti-startup-topic-2">
          Costruiti in funzione dei round futuri: categorie di quote, diritti amministrativi e
          patrimoniali, clausole di lock-up, drag e tag along, anti-diluizione.
        </TopicItem>
        <TopicItem n="03" title="Cap table" testId="assetti-startup-topic-3">
          Come si presenta oggi, come si presenterà dopo il prossimo aumento e dopo la conversione
          degli strumenti emessi, e a chi resta il controllo alla fine.
        </TopicItem>
        <TopicItem n="04" title="Incentivazione in equity" testId="assetti-startup-topic-4">
          Piani per soci d'opera, key people e advisor.
        </TopicItem>
        <TopicItem n="05" title="Governance" testId="assetti-startup-topic-5">
          Chi decide cosa, con quali maggioranze, e cosa succede quando entra un investitore che
          vuole voce in capitolo.
        </TopicItem>
        <DeepLink to="/metriche-e-statuto" testId="assetti-deeplink-metriche" label="Approfondimento">
          Metriche e statuto: la posizione da cui si negozia
        </DeepLink>
        <FadeIn className="mt-4">
          <p className="mb-1.5 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Case study</p>
          <ArrowLink to="/case-study#caso-02" testId="assetti-casestudy-startup" labelClassName="text-lg">
            Un round chiuso senza perdere il controllo
          </ArrowLink>
        </FadeIn>

        <TintBand testId="assetti-come-lavoro">
          <BandTitle>Come lavoro</BandTitle>
          <Body>
            Regia sopra i professionisti coinvolti: notaio, avvocato, fiscalista, esperto,
            consulente del lavoro. Definizione dell'obiettivo con chi decide, scelta della
            struttura, coordinamento fino all'atto.
          </Body>
          <Body>
            Perizia di stima affidata ad advisor indipendente. Nelle cessioni e acquisizioni,
            negoziazione diretta con la controparte esterna.
          </Body>
        </TintBand>
      </PageContainer>
    </>
  );
}
