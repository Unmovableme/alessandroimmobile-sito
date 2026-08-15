import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead, Body, SectionTitle, TintBand, BandTitle } from "@/components/Editorial";

export default function PrimaCheManchiLaLiquidita() {
  return (
    <>
      <Seo
        title="La crisi finanziaria inizia prima che manchi la liquidità — Alessandro Immobile"
        description="Controllo di gestione, budget come modello, tesoreria in anticipo, valutazione e runway: i segnali deboli si intercettano prima che diventino emergenze."
      />
      <PageContainer testId="liquidita-page">
        <PageTitle testId="liquidita-title">
          La crisi finanziaria inizia prima che manchi la liquidità
        </PageTitle>

        <Lead>
          Un'azienda scopre di avere un problema di cassa quasi sempre nel momento peggiore: quando
          un fornitore chiede un pagamento anticipato, quando la banca rivede un affidamento, quando
          un investitore fa una domanda a cui i numeri interni non sanno rispondere. Il problema
          nasce mesi prima, quando nessuno osserva come si muovono i flussi di cassa e cosa
          succederà nelle settimane successive.
        </Lead>

        <Body>
          Avere liquidità oggi non garantisce equilibrio finanziario domani: un'impresa con cassa
          sul conto può trovarsi in difficoltà tra sessanta giorni. Vedere in anticipo come si
          muoverà la cassa nelle prossime settimane fa la differenza tra gestire una tensione per
          tempo e subirla come emergenza.
        </Body>

        <SectionTitle>I numeri raccontano il passato, non avvisano sul futuro</SectionTitle>
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

        <SectionTitle>Il budget si scrive una volta e si dimentica</SectionTitle>
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

        <SectionTitle>Fatturato e cassa non sono la stessa cosa</SectionTitle>
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

        <SectionTitle>Una startup raccoglie capitale senza sapere cosa vale</SectionTitle>
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

        <SectionTitle>Il capitale raccolto si consuma più in fretta di quanto si pensi</SectionTitle>
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

        <SectionTitle>Dove sta il lavoro</SectionTitle>
        <Body>
          Il lavoro che conta si fa prima che la banca, l'investitore o il fornitore facciano la
          domanda: contabilità e controllo di gestione che parlano ogni mese, non una volta l'anno,
          tesoreria vista con anticipo, valutazione costruita su metriche verificabili, percorso di
          raccolta dimensionato su quanto la startup consuma davvero.
        </Body>

        <SectionTitle>Con chi lavoro</SectionTitle>
        <Body>
          Aziende che vogliono passare da una contabilità tenuta per gli adempimenti a uno strumento
          che aiuta a decidere. Startup che affrontano una raccolta di capitale e vogliono arrivarci
          con numeri che reggono alle domande.
        </Body>

        <TintBand testId="liquidita-come-lavoro">
          <BandTitle>Come lavoro</BandTitle>
          <Body>
            Ho costruito sistemi di reporting e controllo di gestione su gruppi con attività in più
            paesi, guidato ristrutturazioni con piani industriali e rinegoziazione del debito,
            ricoperto ruoli di direzione finanziaria in società operative. Per le startup lavoro sulla
            stessa logica applicata a una fase diversa: dimensionare la raccolta su ciò che la startup
            consuma davvero, costruire una valutazione che regge al confronto con un investitore.
          </Body>
        </TintBand>
      </PageContainer>
    </>
  );
}
