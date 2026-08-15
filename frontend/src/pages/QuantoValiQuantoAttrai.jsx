import { Seo } from "@/components/Seo";
import { Body } from "@/components/Editorial";
import { CriterioPage } from "@/components/Criterio";

const sections = [
  {
    id: "startup-valore",
    title: "Una startup raccoglie capitale senza sapere cosa vale",
    content: (
      <>
        <Body>
          Arrivare davanti a un investitore senza una valutazione sostenuta da metriche, dati e
          ipotesi verificabili trasforma rapidamente la trattativa in una discussione sul prezzo.
        </Body>
        <Body>
          La domanda "quanto vale la startup" ha una risposta che parte da ciò che l'azienda ha già
          dimostrato, da ciò che può realisticamente costruire, dal rischio che l'investitore sta
          assumendo: non da un numero scelto in base all'obiettivo di raccolta. Traction, crescita,
          marginalità, mercato, capitale necessario, milestone future e livello di diluizione
          raccontano insieme una storia coerente, ed è quella storia a rendere il valore
          comprensibile e difendibile.
        </Body>
      </>
    ),
  },
  {
    id: "capacita-attrarre",
    title: "La capacità di attrarre investimenti si misura, non si presume",
    content: (
      <Body>
        L'Investment Readiness Level, la scala da 1 a 9 elaborata da Steve Blank, misura la capacità
        di una startup di attrarre investimenti: non solo l'idea, ma la maturità del team, del
        prodotto, del mercato, del modello di business. Un investitore la osserva anche quando non la
        nomina esplicitamente: una startup che non sa collocarsi su questa scala arriva alla
        trattativa senza sapere cosa le manca davvero per essere credibile.
      </Body>
    ),
  },
  {
    id: "capitale-consuma",
    title: "Il capitale raccolto si consuma più in fretta di quanto si pensi",
    content: (
      <>
        <Body>
          Una startup che non tiene sotto controllo il proprio burn rate rischia di scoprire troppo
          tardi quanto rapidamente sta consumando il capitale raccolto.
        </Body>
        <Body>
          Il runway, cioè per quanto tempo la liquidità disponibile permette di operare, va letto
          insieme alle milestone che l'azienda può raggiungere in quel tempo: crescita, prodotto,
          clienti, ricavi. Se il runway si accorcia prima che quel salto sia avvenuto, la startup
          torna sul mercato senza le condizioni per negoziare una valutazione migliore.
        </Body>
        <Body>
          Il capitale raccolto finanzia le milestone che aumentano il valore dell'azienda, non
          semplicemente il tempo che passa.
        </Body>
      </>
    ),
  },
  {
    id: "dove-sta-il-valore",
    title: "Dove sta il valore",
    content: (
      <Body>
        Il lavoro che conta si fa prima che l'investitore faccia la prima domanda: valutazione
        costruita su metriche verificabili, capacità di attrarre investimenti dimostrabile, percorso
        di raccolta dimensionato su quanto la startup consuma davvero.
      </Body>
    ),
  },
  {
    id: "con-chi-lavoro",
    title: "Con chi lavoro",
    content: (
      <Body>
        Startup che affrontano una raccolta di capitale e vogliono arrivarci con numeri che reggono
        alle domande.
      </Body>
    ),
  },
  {
    id: "come-lavoro",
    title: "Come lavoro",
    content: (
      <Body>
        Per le startup lavoro su una logica applicata a una fase diversa: dimensionare la raccolta
        su ciò che la startup consuma davvero, costruire una valutazione che regge al confronto con
        un investitore.
      </Body>
    ),
  },
];

export default function QuantoValiQuantoAttrai() {
  return (
    <>
      <Seo
        title="Prima del round: sapere quanto vali e quanto puoi attrarre — Alessandro Immobile"
        description="Valutazione su metriche verificabili, Investment Readiness Level e runway: arrivare al round con numeri che reggono al confronto con un investitore."
      />
      <CriterioPage
        testId="quantovali-page"
        titleTestId="quantovali-title"
        title="Prima del round: sapere quanto vali e quanto puoi attrarre"
        lead="Un investitore chiede tre cose, quasi sempre nello stesso ordine: quanto vale la startup, quanto è capace di attrarre investimenti, quanto tempo ha prima di doverne raccogliere altro. Le risposte costruite su dati verificabili cambiano il tono della trattativa fin dal primo incontro."
        sections={sections}
      />
    </>
  );
}
