import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, Body, SectionTitle, SectionJump, Descriptor, DeepLink, TintBand, BandTitle, PullQuote, FadeIn, ArrowLink } from "@/components/Editorial";

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
          La struttura di un'impresa è una decisione che si prende una volta e condiziona tutto
          quello che viene dopo: chi comanda, chi rischia, chi guadagna, cosa si può vendere, chi
          può entrare e a quali condizioni.
        </Lead>

        <PullQuote testId="assetti-pullquote" tight>Va progettata prima che serva.</PullQuote>

        <SectionJump />

        <SectionTitle id="aziende" tight>Aziende</SectionTitle>
        <Descriptor>
          Strutture scelte anni fa, per un'impresa che nel frattempo è diventata un'altra cosa.
        </Descriptor>
        <Body>
          Trasformazione da società di persone o ditta individuale a società di capitali.
        </Body>
        <Body>
          Separazione di rami di attività, con scissione o conferimento: l'operativo
          dall'immobiliare, due business con rischi e mercati diversi, un ramo che deve poter essere
          venduto o finanziato per conto suo.
        </Body>
        <Body>
          Costituzione di holding e riordino di gruppo: dove stanno gli utili, dove stanno gli
          immobili e i marchi, chi controlla cosa.
        </Body>
        <Body>
          Ingresso e uscita di soci: cessione di quote, aumenti riservati, clausole statutarie,
          patti parasociali, categorie di quote con diritti differenziati.
        </Body>
        <Body>
          Passaggio generazionale: chi entra, chi non entra, come si separa la proprietà dalla
          gestione.
        </Body>
        <Body>
          Cessioni e acquisizioni: preparazione dell'operazione, valutazione, struttura,
          negoziazione, coordinamento fino all'atto.
        </Body>
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
        <Body>
          Costituzione e iscrizione nella sezione speciale del Registro delle Imprese: requisiti,
          oggetto sociale innovativo, adempimenti di mantenimento.
        </Body>
        <Body>
          Statuto e patti costruiti in funzione dei round futuri: categorie di quote, diritti
          amministrativi e patrimoniali, clausole di lock-up, drag e tag along, anti-diluizione.
        </Body>
        <Body>
          Cap table: come si presenta oggi, come si presenterà dopo il prossimo aumento e dopo la
          conversione degli strumenti emessi, e a chi resta il controllo alla fine.
        </Body>
        <Body>
          Piani di incentivazione in equity per soci d'opera, key people e advisor.
        </Body>
        <Body>
          Governance: chi decide cosa, con quali maggioranze, e cosa succede quando entra un
          investitore che vuole voce in capitolo.
        </Body>
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
            In un'operazione societaria intervengono figure diverse, ciascuna competente sul proprio
            pezzo: il notaio sull'atto, l'avvocato sui contratti e sulle garanzie, il fiscalista sugli
            effetti tributari, l'esperto sulla stima, il consulente del lavoro sul personale. Il
            mandato di ciascuna si ferma al proprio perimetro, e il disegno complessivo resta senza un
            titolare.
          </Body>
          <Body>
            È il ruolo che ricopro. Definisco l'obiettivo con chi decide, scelgo la struttura fra le
            alternative possibili, coordino i professionisti coinvolti e verifico che ogni pezzo resti
            coerente con il resto fino all'atto.
          </Body>
          <Body>
            La perizia di stima la affido di regola a un terzo indipendente: chi struttura
            un'operazione e chi ne attesta i valori dovrebbero essere due persone diverse ogni volta
            che è possibile.
          </Body>
        </TintBand>
      </PageContainer>
    </>
  );
}
