import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, Body, SectionTitle, SectionJump, Descriptor, DeepLink, TintBand, BandTitle, PullQuote, FadeIn, ArrowLink, TopicItem } from "@/components/Editorial";

export default function Finanza() {
  return (
    <>
      <Seo
        title="Finanza — Alessandro Immobile"
        description="Contabilità, controllo di gestione e tesoreria per le aziende; struttura della raccolta di capitale, strumenti e valutazione per le startup."
      />
      <PageContainer testId="finanza-page">
        <PageTitle testId="finanza-title">Finanza</PageTitle>

        <Lead>
          Contabilità, controllo di gestione e tesoreria rispondono a tre domande distinte: cos'è
          accaduto, cosa sta accadendo, se l'impresa sarà in grado di far fronte ai pagamenti. In
          molte realtà le tre risposte convergono sulla stessa persona, con lo stesso gestionale,
          spesso in ritardo.
        </Lead>

        <PullQuote testId="finanza-pullquote" tight>Va misurata prima che manchi.</PullQuote>

        <SectionJump />

        <SectionTitle id="aziende" tight>Aziende</SectionTitle>
        <Descriptor>Contabilità che arriva quando l'anno è già chiuso.</Descriptor>
        <Body>
          In molte PMI la contabilità resta fuori, presso il commercialista, aggiornata in vista
          degli adempimenti. Chi guida l'impresa lavora per mesi su un fatturato approssimativo.
        </Body>
        <Body>
          Avere il fatturato per cliente, per commessa, con il margine, oggi non richiede
          necessariamente un gestionale acquistato e tenuto in azienda. I dati vivono sempre più
          spesso su una piattaforma, spesso verticale sul settore, e il commercialista lavora su
          quei dati come servizio.
        </Body>
        <Body>
          Il punto di ingresso resta il bisogno di più controllo sui numeri e più tempestività. La
          risposta, in questi casi, è spesso un progetto di revisione dei processi, di introduzione
          dell'intelligenza artificiale, di efficienza: i dati finanziari ne sono un pezzo.
        </Body>
        <TopicItem n="01" title="Budget e controllo di gestione" testId="finanza-topic-1">
          Un piano che si confronta con i risultati ogni mese.
        </TopicItem>
        <TopicItem n="02" title="Cash flow e tesoreria" testId="finanza-topic-2">
          La cassa vista con settimane di anticipo.
        </TopicItem>
        <Body>
          Il bisogno emerge spesso subito dopo un'operazione societaria: una trasformazione, una
          scissione, un ingresso di soci cambiano il modo in cui l'impresa deve leggere e comunicare
          i propri numeri.
        </Body>
        <DeepLink to="/prima-che-manchi-la-liquidita" testId="finanza-deeplink-liquidita" label="Approfondimento">
          La crisi finanziaria inizia prima che manchi la liquidità
        </DeepLink>
        <FadeIn className="mt-4">
          <p className="mb-1.5 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Case study</p>
          <ArrowLink to="/case-study#caso-05" testId="finanza-casestudy-aziende" labelClassName="text-lg">
            Il primo budget strutturato dell'azienda
          </ArrowLink>
          <ArrowLink to="/case-study#caso-07" testId="finanza-casestudy-ma" className="mt-4" labelClassName="text-lg">
            Valutazione come base della trattativa
          </ArrowLink>
        </FadeIn>

        <SectionTitle id="startup">Startup</SectionTitle>
        <Descriptor>Capitale da raccogliere prima che il fatturato lo giustifichi.</Descriptor>
        <TopicItem n="01" title="Percorso di raccolta per fasi" testId="finanza-startup-topic-1">
          Obiettivi e strumenti diversi da una fase all'altra.
        </TopicItem>
        <TopicItem n="02" title="Strumenti convertibili e aumenti di capitale" testId="finanza-startup-topic-2">
          La scelta dipende dal contesto, dalla fase e dagli investitori a cui ci si rivolge.
        </TopicItem>
        <TopicItem n="03" title="Capacità di attrarre investimenti" testId="finanza-startup-topic-3">
          Cosa manca perché la startup sia leggibile a chi valuta se investire, e cosa fare per
          colmarlo.
        </TopicItem>
        <TopicItem n="04" title="Relazione con gli investitori" testId="finanza-startup-topic-4">
          Chi ha già messo capitale riceve aggiornamenti regolari, con la stessa cura riservata al
          round successivo.
        </TopicItem>
        <DeepLink to="/quanto-vali-quanto-raccogli" testId="finanza-deeplink-quantovali" label="Approfondimento">
          Prima del round: sapere quanto vali e quanto puoi raccogliere
        </DeepLink>
        <FadeIn className="mt-4">
          <p className="mb-1.5 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Case study</p>
          <ArrowLink to="/case-study#caso-06" testId="finanza-casestudy-startup" labelClassName="text-lg">
            Validazione prima ancora di costituire la società
          </ArrowLink>
        </FadeIn>

        <TintBand testId="finanza-come-lavoro">
          <BandTitle>Come lavoro</BandTitle>
          <Body>
            Sistemi di reporting e controllo su gruppi multi-paese, ristrutturazioni con piani
            industriali, direzione finanziaria in società operative.
          </Body>
          <Body>
            Affiancamento startup e PMI su struttura della raccolta, strumenti, investitori. Nelle
            cessioni e acquisizioni, valutazione d'azienda e struttura finanziaria dell'operazione.
          </Body>
        </TintBand>

        <DeepLink to="/percorso#pubblicazioni" testId="finanza-deeplink-pubblicazioni">
          Le pubblicazioni: la finanza alternativa, dalla startup alla quotazione
        </DeepLink>
      </PageContainer>
    </>
  );
}
