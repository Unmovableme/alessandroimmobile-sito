import { Seo } from "@/components/Seo";
import { Body } from "@/components/Editorial";
import { CriterioPage } from "@/components/Criterio";

const sections = [
  {
    id: "numeri-passato",
    title: "I numeri raccontano il passato, non avvisano sul futuro",
    content: (
      <>
        <Body>
          Il bilancio racconta ciò che è già successo. Non dice se la liquidità sarà sufficiente nel
          prossimo trimestre, se il margine di una commessa sta progressivamente diminuendo, se un
          cliente importante sta assorbendo più risorse di quante ne remuneri.
        </Body>
        <Body>
          Per capire dove sta andando l'azienda serve un controllo di gestione che legga i numeri
          con continuità, mese dopo mese, mettendo in relazione ricavi, margini, costi, cassa e
          assorbimento di risorse. Solo così i segnali deboli si intercettano prima che diventino
          problemi.
        </Body>
      </>
    ),
  },
  {
    id: "budget-dimentica",
    title: "Il budget si scrive una volta e si dimentica",
    content: (
      <>
        <Body>
          Un budget annuale confrontato solo a fine anno con i risultati reali resta un documento
          archiviato, buono per spiegare cosa è andato storto.
        </Body>
        <Body>
          Il suo valore nasce dal confronto continuo tra quanto previsto e quanto sta accadendo:
          ricavi, costi, margini, investimenti, cassa. Gli scostamenti vanno verificati e analizzati
          mese per mese, non a consuntivo: è lì che emergono i primi segnali di cambiamento, e le
          decisioni da prendere finché c'è ancora tempo.
        </Body>
        <Body>
          Il budget è un modello di gestione. La disciplina di guardare ogni mese quanto previsto e
          quanto realizzato tiene l'azienda allineata a dove sta andando davvero.
        </Body>
      </>
    ),
  },
  {
    id: "fatturato-cassa",
    title: "Fatturato e cassa non sono la stessa cosa",
    content: (
      <>
        <Body>
          Un'azienda può fatturare bene e avere comunque un problema di liquidità. Tra l'emissione
          di una fattura e il suo incasso possono passare settimane, a volte mesi, mentre stipendi,
          fornitori, imposte e altre scadenze seguono tempi diversi. È questo disallineamento fra
          entrate e uscite a generare tensioni finanziarie, anche in aziende economicamente sane.
        </Body>
        <Body>
          Un piano di tesoreria legge questi tempi in anticipo: quando il denaro entra davvero,
          quando deve uscire. La liquidità diventa così una variabile da governare con settimane di
          margine, non un dato da controllare sul conto corrente quando la scadenza è già arrivata.
        </Body>
      </>
    ),
  },
  {
    id: "dove-sta-il-lavoro",
    title: "Dove sta il valore",
    content: (
      <Body>
        Il lavoro che conta si fa prima che la banca o il fornitore facciano la domanda: contabilità
        e controllo di gestione che parlano ogni mese, non una volta l'anno, tesoreria vista con
        anticipo.
      </Body>
    ),
  },
  {
    id: "con-chi-lavoro",
    title: "Con chi lavoro",
    content: (
      <Body>
        Aziende che vogliono passare da una contabilità tenuta per gli adempimenti a uno strumento
        che aiuta a decidere.
      </Body>
    ),
  },
  {
    id: "come-lavoro",
    title: "Come lavoro",
    content: (
      <Body>
        Ho costruito sistemi di reporting e controllo di gestione su gruppi con attività in più
        paesi, guidato ristrutturazioni con piani industriali e rinegoziazione del debito, ricoperto
        ruoli di direzione finanziaria in società operative.
      </Body>
    ),
  },
];

export default function PrimaCheManchiLaLiquidita() {
  return (
    <>
      <Seo
        title="La crisi finanziaria inizia prima che manchi la liquidità — Alessandro Immobile"
        description="Controllo di gestione, budget come modello e tesoreria in anticipo: i segnali deboli si intercettano prima che diventino emergenze, quando c'è ancora tempo per decidere."
      />
      <CriterioPage
        testId="liquidita-page"
        titleTestId="liquidita-title"
        title="La crisi finanziaria inizia prima che manchi la liquidità"
        lead="Un'azienda scopre di avere un problema di cassa quasi sempre nel momento peggiore: quando un fornitore chiede un pagamento anticipato, quando la banca rivede un affidamento, quando un investitore fa una domanda a cui i numeri interni non sanno rispondere. Il problema nasce mesi prima, quando nessuno osserva come si muovono i flussi di cassa e cosa succederà nelle settimane successive."
        intro={
          <Body>
            Avere liquidità oggi non garantisce equilibrio finanziario domani: un'impresa con cassa
            sul conto può trovarsi in difficoltà tra sessanta giorni. Vedere in anticipo come si
            muoverà la cassa nelle prossime settimane fa la differenza tra gestire una tensione per
            tempo e subirla come emergenza.
          </Body>
        }
        sections={sections}
      />
    </>
  );
}
