import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, Body, SectionTitle, SectionJump, Descriptor, DeepLink, TintBand, BandTitle, PullQuote, FadeIn, ArrowLink } from "@/components/Editorial";

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
          La contabilità, il controllo di gestione e la tesoreria rispondono a tre domande diverse:
          cosa è successo, cosa sta succedendo, se domani si riesce a pagare. In molte imprese le
          tre risposte arrivano dalla stessa persona, con lo stesso gestionale, e spesso in ritardo.
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
        <Body>
          Budget e controllo di gestione: un piano che si confronta con i risultati ogni mese. Cash
          flow e tesoreria: la cassa vista con settimane di anticipo.
        </Body>
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
        </FadeIn>

        <SectionTitle id="startup">Startup</SectionTitle>
        <Descriptor>Capitale da raccogliere prima che il fatturato lo giustifichi.</Descriptor>
        <Body>
          Il percorso di raccolta si disegna per fasi, con obiettivi e strumenti diversi da una fase
          all'altra.
        </Body>
        <Body>
          Strumenti convertibili e aumenti di capitale: la scelta dipende dal contesto, dalla fase e
          dagli investitori a cui ci si rivolge.
        </Body>
        <Body>
          Misurare la capacità di attrarre investimenti, e lavorare per costruirla: cosa manca
          perché la startup sia leggibile a chi valuta se investire, e cosa fare per colmarlo.
        </Body>
        <Body>
          Relazione con gli investitori: chi ha già messo capitale riceve aggiornamenti regolari,
          con la stessa cura riservata al round successivo.
        </Body>
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
            Sistemi di reporting/controllo su gruppi multi-paese, ristrutturazioni con piani
            industriali e rinegoziazione debito, direzione finanziaria in società operative;
            affiancamento startup/PMI su struttura raccolta, strumenti, investitori; nelle cessioni
            e acquisizioni, valutazione d'azienda e struttura finanziaria dell'operazione.
          </Body>
        </TintBand>

        <DeepLink to="/percorso#pubblicazioni" testId="finanza-deeplink-pubblicazioni">
          Le pubblicazioni: la finanza alternativa, dalla startup alla quotazione
        </DeepLink>
      </PageContainer>
    </>
  );
}
