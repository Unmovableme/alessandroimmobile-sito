import { Seo } from "@/components/Seo";
import { Body, SubTitle, FadeIn } from "@/components/Editorial";
import { CriterioPage } from "@/components/Criterio";

const sections = [
  {
    id: "sell-side",
    title: "Sell side",
    content: (
      <>
        <SubTitle>Obiettivo</SubTitle>
        <Body>
          Un'azienda vale più di quanto dice il bilancio quando il patrimonio che l'ha costruita,
          tecnologia, relazioni, posizionamento, competenze, non è mai stato tradotto in valore
          misurabile. Farlo emergere prima che l'azienda cambi proprietà è ciò che trasforma un
          potenziale in un prezzo.
        </Body>

        <SubTitle>Come lavoro</SubTitle>
        <Body>
          Parto dai bilanci storici e dalla situazione patrimoniale. Da lì lavoro con l'imprenditore
          per portare alla luce il valore che il bilancio non mostra: contratti, relazioni
          commerciali, competenze chiave, posizionamento. La valutazione che ne risulta diventa la
          base su cui negozio prezzo e condizioni con la controparte, fino alla sottoscrizione
          dell'atto di cessione.
        </Body>

        <SubTitle>Cosa serve</SubTitle>
        <Body>
          Bilanci e situazione patrimoniale degli ultimi esercizi. Compagine sociale e libro soci in
          ordine. Contratti commerciali e rapporti con clienti e fornitori documentati. Posizione
          fiscale e eventuali contenziosi, in corso o potenziali. Più in generale, la disponibilità a
          mettere sul tavolo anche ciò che non è mai stato messo a valore.
        </Body>

        <SubTitle>Dove sta il valore</SubTitle>
        <Body>
          Chi acquista aziende lo fa spesso, con un metodo rodato e advisor stabili al proprio
          fianco. Chi vende, nella maggior parte dei casi, lo fa una volta sola. È in quello
          squilibrio di esperienza che si perde valore: chi conosce meglio i processi di valutazione
          negozia meglio e con maggiore consapevolezza. Un advisor indipendente pareggia quella
          condizione, prima che diventi uno svantaggio quando ormai si è già seduti al tavolo.
        </Body>
      </>
    ),
  },
  {
    id: "buy-side",
    title: "Buy side",
    content: (
      <>
        <SubTitle>Obiettivo</SubTitle>
        <Body>
          Comprare un'azienda significa acquisire più di un bilancio: contratti da onorare, debiti
          non sempre evidenti, persone da integrare. Ma la domanda che decide il valore
          dell'operazione è un'altra: quell'azienda è in grado di generare valore una volta
          integrata? Mercato e clientela raggiunti, competenze acquisite, contratti strategici,
          posizionamento nella filiera, capacità di estendere il controllo su di essa. La due
          diligence dice cosa si sta comprando. La strategia dice perché vale la pena farlo.
        </Body>

        <SubTitle>Come lavoro</SubTitle>
        <Body>
          Selezione dei target a partire da un database aggiornato e da ricerche mirate sul settore
          specifico. Le aziende individuate entrano in un processo di verifica asincrono: una o più
          survey iniziali, un rating che ne misura la coerenza con l'obiettivo di acquisizione, un
          assessment approfondito sulle candidate con il punteggio più alto. Il risultato è una rosa
          ristretta di aziende, ciascuna con un info memo che ne descrive punti di forza, criticità,
          rischi e opportunità non ancora espresse. Su quella base valuto il target su elementi
          indipendenti da quanto proposto dal venditore: bilanci, esposizione debitoria, contratti in
          essere, sostenibilità del business nel tempo. La valutazione diventa lo strumento con cui
          negozio prezzo e condizioni.
        </Body>

        <SubTitle>Cosa serve</SubTitle>
        <Body>
          Un obiettivo di acquisizione chiaro: settore, dimensione, tipo di integrazione ricercata.
          Budget e struttura finanziaria dell'operazione definiti a monte. Tempi realistici: un
          processo di selezione, verifica e negoziazione che si misura in mesi, non in settimane.
        </Body>

        <SubTitle>Dove sta il valore</SubTitle>
        <Body>
          Chi ha diretto aziende, non solo valutato bilanci da consulente esterno, riconosce prima
          gli elementi che un'analisi solo contabile lascia passare: contratti che decadono al cambio
          di controllo, valore che dipende da persone chiave, sinergie che sulla carta funzionano e
          nella pratica no. Sono le cose che, se non emergono prima del closing, si scoprono dopo,
          quando il prezzo non è più negoziabile.
        </Body>
      </>
    ),
  },
  {
    id: "con-chi-lavoro",
    title: "Con chi lavoro",
    content: (
      <Body>
        Imprenditori che valutano una cessione per cogliere un'opportunità di business. Gruppi e
        aziende che crescono per acquisizioni mirate, con una strategia di espansione già definita.
        Altri commercialisti o avvocati, che mi coinvolgono come advisor esterno su una singola
        operazione dei loro clienti.
      </Body>
    ),
  },
];

export default function MeA() {
  return (
    <>
      <Seo
        title="M&A: due lati dello stesso tavolo — Alessandro Immobile"
        description="Cessioni e acquisizioni come advisor indipendente. Sell side e buy side: una valutazione che regge e una trattativa condotta su quella base, fino alla chiusura."
      />
      <CriterioPage
        testId="ma-page"
        titleTestId="ma-title"
        title="M&A: due lati dello stesso tavolo"
        lead="Chi vende e chi compra arrivano al tavolo con interessi opposti. Il lavoro serio è lo stesso da entrambi i lati: una valutazione che regge, e una trattativa condotta su quella base."
        intro={
          <FadeIn delay={0.05}>
            <p className="mt-8 text-lg leading-relaxed text-gray-700">
              Due mandati diversi, la stessa base di lavoro: una valutazione che non lascia margini di
              ambiguità, e una trattativa condotta su processi consolidati, nell'interesse delle
              parti, fino alla chiusura.
            </p>
          </FadeIn>
        }
        sections={sections}
      />
    </>
  );
}
