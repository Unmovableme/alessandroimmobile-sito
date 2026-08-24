import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, Body, SectionTitle, SectionJump, Descriptor, DeepLink, TintBand, BandTitle, PullQuote, FadeIn, ArrowLink } from "@/components/Editorial";

export default function Processi() {
  return (
    <>
      <Seo
        title="Processi — Alessandro Immobile"
        description="Mappatura AS IS e ridisegno TO BE dei processi, company brain e layer informativo, intelligenza artificiale governata. Per aziende e startup."
      />
      <PageContainer testId="processi-page">
        <PageTitle testId="processi-title">Processi</PageTitle>

        <Lead>
          Molte aziende hanno strumenti informatici stratificati negli anni: un gestionale per la
          contabilità, un CRM per le vendite, fogli excel per il resto, nessuno che li fa parlare
          tra loro. Prima di introdurre l'intelligenza artificiale in un processo così, bisogna
          sapere come lavora davvero, non come dovrebbe lavorare secondo l'organigramma.
        </Lead>

        <PullQuote testId="processi-pullquote" tight>
          Il layer informativo si progetta a valle dei processi. Chi salta l'analisi ottiene un
          archivio ordinato che non cambia come l'impresa lavora.
        </PullQuote>

        <SectionJump />

        <SectionTitle id="aziende" tight>Aziende</SectionTitle>
        <Descriptor>Processi cresciuti per sedimentazione, mai ridisegnati.</Descriptor>
        <Body>
          Mappatura AS IS: come funziona oggi il processo, chi fa cosa, dove sono i colli di
          bottiglia e le informazioni che si perdono per strada.
        </Body>
        <Body>
          Ridisegno TO BE: il processo si riscrive prima di essere informatizzato. I dati che
          produce si strutturano in un impianto unico, pensato per essere consultato e usato quando
          serve.
        </Body>
        <Body>
          Un company brain è la memoria operativa dell'impresa: raccoglie regole, processi, stato
          dei progetti, decisioni prese, e la conoscenza che oggi vive nella testa di poche persone.
          La rende leggibile per chi lavora in azienda e per gli assistenti AI, prima che producano
          qualsiasi output.
        </Body>
        <Body>
          In molte adozioni AI la conoscenza operativa resta sparsa fra email, chat, drive, CRM, mai
          scritta in un formato che un assistente possa usare in modo affidabile. Ogni strumento
          finisce per generalizzare, con un risultato che non riflette il modo specifico in cui
          quell'azienda lavora.
        </Body>
        <Body>
          Costruirlo richiede una fonte unica considerata valida, regole su chi la aggiorna e con
          quale frequenza, e un collegamento agli strumenti operativi già in uso.
        </Body>
        <Body>Riorganizzazione: ruoli e responsabilità ridisegnati insieme al processo.</Body>
        <DeepLink to="/ai-senza-governance" testId="processi-deeplink-ai" label="Approfondimento">
          L'intelligenza artificiale è già in azienda. Nessuno la governa.
        </DeepLink>
        <FadeIn className="mt-4">
          <p className="mb-1.5 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Case study</p>
          <ArrowLink to="/case-study#caso-03" testId="processi-casestudy-aziende" labelClassName="text-lg">
            Chiusura mensile più veloce in un gruppo bancario
          </ArrowLink>
        </FadeIn>

        <SectionTitle id="startup">Startup</SectionTitle>
        <Descriptor>Processi da disegnare e costruire prima che sia tardi.</Descriptor>
        <Body>
          Una startup che cresce ha quasi sempre già dei processi: nati in fretta, con l'orizzonte
          del problema che c'era da risolvere in quel momento. Il lavoro è estenderli, dare loro
          respiro, insieme a chi li ha pensati e a chi dovrà seguirli ogni giorno. Un processo
          esteso bene sposta la conoscenza dalla testa del founder al metodo: il risultato smette
          di dipendere da chi lo esegue. Serve per governare la crescita, anticipare le criticità
          prima che diventino urgenti, e mostrare a chi valuta se investire che le operations sono
          sistemiche, non affidate all'estro di una persona sola.
        </Body>
        <Body>
          Validare il modello, prima di scalare quello che ancora non funziona. Governare i soci,
          attraverso uno statuto pensato per i round futuri. Raccogliere capitale, con modalità che
          responsabilizzano gli investitori che aderiscono. Pianificare i round successivi, con la
          diluizione governata nel tempo. Attrarre e trattenere i talenti, con piani di
          incentivazione in equity e vesting.
        </Body>
        <DeepLink to="/founder-e-agenti" testId="processi-deeplink-founder" label="Approfondimento">
          Un founder, gli agenti come squadra
        </DeepLink>
        <FadeIn className="mt-4">
          <p className="mb-1.5 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Case study</p>
          <ArrowLink to="/case-study#caso-04" testId="processi-casestudy-startup" labelClassName="text-lg">
            Un'unica architettura per investitori, incentivi, governance
          </ArrowLink>
        </FadeIn>

        <TintBand testId="processi-come-lavoro">
          <BandTitle>Come lavoro</BandTitle>
          <Body>
            Sui processi porto una lunga esperienza maturata in una primaria società di consulenza
            internazionale, su processi finance per grandi banche e corporate, poi mappatura,
            reingegnerizzazione e riorganizzazione di funzioni in gruppi bancari e aziende di
            produzione e logistica. Per le startup l'esperienza è diretta: sono founder e investitore
            in startup che nascono con l'intelligenza artificiale integrata nel prodotto fin dal primo
            giorno. Il lavoro più recente sull'AI applicata ai processi delle aziende nasce nel
            percorso istituzionale con l'Osservatorio Intelligenza Artificiale e Trasformazione
            Digitale dell'ODCEC di Torino.
          </Body>
        </TintBand>
      </PageContainer>
    </>
  );
}
