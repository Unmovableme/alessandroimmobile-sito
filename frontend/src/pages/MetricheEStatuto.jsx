import { Seo } from "@/components/Seo";
import { Body } from "@/components/Editorial";
import { CriterioPage } from "@/components/Criterio";

const sections = [
  {
    id: "metriche-validazione",
    title: "Le metriche di validazione arrivano prima della raccolta, non dopo",
    content: (
      <Body>
        Alcune startup aprono la raccolta prima di avere le metriche che dimostrano che il problema
        è reale e che la soluzione lo risolve. Un investitore le chiede quasi subito: senza quei
        dati, la trattativa si sposta dal valore dimostrato alla fiducia personale nei founder, un
        terreno più lento e più fragile da percorrere.
      </Body>
    ),
  },
  {
    id: "cap-table-governance",
    title: "La cap table è governance, non un elenco di soci",
    content: (
      <Body>
        Cosa si distribuisce, chi decide e con quali meccanismi, quale contributo porta ciascun
        investitore oltre al capitale: tre dimensioni che una cap table costruita raccogliendo le
        opportunità via via che si presentano finisce per ignorare. Ignorarle costa quando serve
        decidere in fretta: la struttura che ne risulta non regge la governance.
      </Body>
    ),
  },
  {
    id: "valuation-metriche",
    title: "La valuation nasce da metriche verificabili",
    content: (
      <Body>
        Una cifra comunicata prima di avere le metriche di validazione, la trazione, la qualità
        degli investitori e la struttura della raccolta che la sostengono resta un desiderio davanti
        a un fondo che fa domande.
      </Body>
    ),
  },
  {
    id: "investitori-piccoli",
    title: "Molti investitori piccoli, poca governance pensata",
    content: (
      <Body>
        Ogni ingresso, anche di quota minima, porta diritti, comunicazione, documenti da gestire.
        Senza categorie di quote, soglie di ingresso e regole statutarie pensate in anticipo, la
        complessità cresce più in fretta del capitale raccolto.
      </Body>
    ),
  },
  {
    id: "diritti-uguali",
    title: "Diritti uguali per contributi diversi",
    content: (
      <Body>
        Chi porta solo capitale e chi costruisce il progetto ricevono spesso le stesse quote, con
        gli stessi diritti patrimoniali e amministrativi. Il controllo si sposta senza che nessuno
        l'abbia deciso: basta differenziare le categorie di quote per far coincidere i diritti con
        il contributo reale di ciascuno.
      </Body>
    ),
  },
  {
    id: "dove-sta-il-lavoro",
    title: "Dove sta il valore",
    content: (
      <Body>
        Il lavoro che conta si fa prima che l'investitore faccia la prima domanda: statuto pensato
        per i round che verranno, cap table progettata come infrastruttura di governance, valuation
        costruita su metriche verificabili, quote e diritti differenziati per il contributo reale di
        chi entra.
      </Body>
    ),
  },
  {
    id: "con-chi-lavoro",
    title: "Con chi lavoro",
    content: (
      <Body>
        Startup italiane, dalla costituzione al primo round e ai successivi. Founder che hanno già
        validato un'idea o un prodotto e che stanno per affrontare la parte che non hanno mai fatto
        prima.
      </Body>
    ),
  },
];

export default function MetricheEStatuto() {
  return (
    <>
      <Seo
        title="Metriche e statuto: la posizione da cui si negozia — Alessandro Immobile"
        description="Le metriche di validazione arrivano prima della raccolta, la cap table è governance, la valuation nasce da metriche verificabili. Dove sta il lavoro."
      />
      <CriterioPage
        testId="metriche-page"
        titleTestId="metriche-title"
        title="Metriche e statuto: la posizione da cui si negozia."
        lead="Un investitore arriva alla due diligence e trova quello che nessuno aveva ancora guardato: categorie di quote non previste, strumenti finanziari non disciplinati, tag along e drag along assenti. Da quel momento le condizioni le decide lui, non i founder che fino a un istante prima le stavano ancora impostando."
        sections={sections}
      />
    </>
  );
}
