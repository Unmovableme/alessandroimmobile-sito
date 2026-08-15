import { Seo } from "@/components/Seo";
import { Body } from "@/components/Editorial";
import { CriterioPage } from "@/components/Criterio";

const sections = [
  {
    id: "adozione-governance",
    title: "L'adozione corre prima della governance",
    content: (
      <Body>
        Secondo una survey WalkMe/SAP del 2025, il 78% dei dipendenti usa strumenti di intelligenza
        artificiale al di fuori di quelli forniti dall'azienda. Non è un'eccezione, è la norma:
        l'adozione anticipa quasi sempre le decisioni organizzative su come usarla.
      </Body>
    ),
  },
  {
    id: "usarla-integrata",
    title: "Usarla non significa averla integrata",
    content: (
      <Body>
        McKinsey rileva che quasi tutte le organizzazioni dichiarano di usare l'intelligenza
        artificiale, ma quasi due terzi non l'hanno ancora scalata a livello aziendale, e solo il
        39% dichiara un impatto misurabile sui risultati. Più output non significa più valore: senza
        un metodo, l'aumento di produttività può anche ridurre la qualità del lavoro.
      </Body>
    ),
  },
  {
    id: "strumento-processo",
    title: "Lo strumento non è il processo",
    content: (
      <Body>
        Scegliere un software è la parte visibile e veloce. Il lavoro che conta è capire quale
        processo quello strumento dovrebbe migliorare: dove si perde tempo, dove nascono gli errori,
        quali passaggi rallentano il lavoro. Partire dallo strumento invece che dal processo produce
        un supporto utile al singolo, difficile da collegare a un risultato per l'azienda.
      </Body>
    ),
  },
  {
    id: "dato-prerequisito",
    title: "Il dato è il prerequisito, non un dettaglio",
    content: (
      <Body>
        Un'intelligenza artificiale che lavora su dati incompleti, dispersi tra sistemi diversi o
        non aggiornati produce risultati fragili, indipendentemente da quanto sia sofisticato lo
        strumento. La qualità del risultato dipende dalla qualità del contesto informativo su cui
        lavora.
      </Body>
    ),
  },
  {
    id: "costa-non-governarla",
    title: "Cosa costa non governarla",
    content: (
      <Body>
        Il rischio non è solo la sicurezza dei dati. Secondo IBM, le organizzazioni con un uso
        diffuso e non governato dell'intelligenza artificiale hanno subito in media 670.000 dollari
        in più di costi legati a violazioni, rispetto a quelle con un uso limitato o assente. La
        causa più comune non è l'assenza di strumenti di sicurezza, ma l'assenza di controlli
        sull'accesso.
      </Body>
    ),
  },
  {
    id: "dove-sta-il-lavoro",
    title: "Dove sta il valore",
    content: (
      <Body>
        Mappare come funziona oggi il processo, prima di introdurre qualsiasi strumento. Ridisegnare
        il processo, non aggiungere l'intelligenza artificiale sopra quello che c'è già. Strutturare
        l'ambiente informativo su cui lavora, un punto unico di accesso a dati e informazioni.
        Definire poche regole chiare su cosa si può fare, con quali dati, con quale livello di
        supervisione.
      </Body>
    ),
  },
  {
    id: "con-chi-lavoro",
    title: "Con chi lavoro",
    content: (
      <Body>
        Startup che costruiscono i propri processi da zero, con l'occasione di incorporare
        l'intelligenza artificiale fin dall'origine invece di innestarla dopo.
      </Body>
    ),
  },
  {
    id: "come-lavoro",
    title: "Come lavoro",
    content: (
      <Body>
        Per le startup l'esperienza è diretta: sono founder e investitore in startup che nascono con
        l'intelligenza artificiale integrata nel prodotto fin dal primo giorno.
      </Body>
    ),
  },
];

export default function FounderEAgenti() {
  return (
    <>
      <Seo
        title="Un founder, gli agenti come squadra — Alessandro Immobile"
        description="Startup AI-native: un solo founder affiancato da agenti su sviluppo, marketing e operations. Il vantaggio è reale quando si mantiene il controllo del metodo."
      />
      <CriterioPage
        testId="founder-page"
        titleTestId="founder-title"
        title="Un founder, gli agenti come squadra"
        lead="Sempre più startup nascono già abilitate dall'intelligenza artificiale: sviluppo più veloce, costi iniziali più bassi, decine di landing page testate in parallelo per validare un'idea prima di costruirla per intero. Un solo founder può oggi farsi affiancare da agenti AI su funzioni che un tempo richiedevano un team, dallo sviluppo al marketing alle operations. Il vantaggio è reale, ma non è automatico: funziona quando chi guida la startup mantiene il controllo del metodo, non quando delega senza criterio."
        sections={sections}
      />
    </>
  );
}
