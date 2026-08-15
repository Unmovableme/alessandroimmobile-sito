import { Seo } from "@/components/Seo";
import { PageContainer, PageTitle, Lead } from "@/components/Editorial";

export default function MetricheEStatuto() {
  return (
    <>
      <Seo
        title="Metriche e statuto: la posizione da cui si negozia — Alessandro Immobile"
        description="Le metriche di validazione arrivano prima della raccolta, la cap table è governance, la valuation nasce da metriche verificabili. Dove sta il lavoro."
      />
      <PageContainer testId="metriche-page">
        <PageTitle testId="metriche-title">
          Metriche e statuto: la posizione da cui si negozia.
        </PageTitle>

        <Lead>
          Un investitore arriva alla due diligence e trova quello che nessuno aveva ancora guardato:
          categorie di quote non previste, strumenti finanziari non disciplinati, tag along e drag
          along assenti. Da quel momento le condizioni le decide lui, non i founder che fino a un
          istante prima le stavano ancora impostando.
        </Lead>

        <MSection title="Le metriche di validazione arrivano prima della raccolta, non dopo">
          Alcune startup aprono la raccolta prima di avere le metriche che dimostrano che il
          problema è reale e che la soluzione lo risolve. Un investitore le chiede quasi subito:
          senza quei dati, la trattativa si sposta dal valore dimostrato alla fiducia personale nei
          founder, un terreno più lento e più fragile da percorrere.
        </MSection>

        <MSection title="La cap table è governance, non un elenco di soci">
          Cosa si distribuisce, chi decide e con quali meccanismi, quale contributo porta ciascun
          investitore oltre al capitale: tre dimensioni che una cap table costruita raccogliendo le
          opportunità via via che si presentano finisce per ignorare. Ignorarle costa quando serve
          decidere in fretta: la struttura che ne risulta non regge la governance.
        </MSection>

        <MSection title="La valuation nasce da metriche verificabili">
          Una cifra comunicata prima di avere le metriche di validazione, la trazione, la qualità
          degli investitori e la struttura della raccolta che la sostengono resta un desiderio
          davanti a un fondo che fa domande.
        </MSection>

        <MSection title="Molti investitori piccoli, poca governance pensata">
          Ogni ingresso, anche di quota minima, porta diritti, comunicazione, documenti da gestire.
          Senza categorie di quote, soglie di ingresso e regole statutarie pensate in anticipo, la
          complessità cresce più in fretta del capitale raccolto.
        </MSection>

        <MSection title="Diritti uguali per contributi diversi">
          Chi porta solo capitale e chi costruisce il progetto ricevono spesso le stesse quote, con
          gli stessi diritti patrimoniali e amministrativi. Il controllo si sposta senza che nessuno
          l'abbia deciso: basta differenziare le categorie di quote per far coincidere i diritti con
          il contributo reale di ciascuno.
        </MSection>

        <MSection title="Dove sta il lavoro">
          Il lavoro che conta si fa prima che l'investitore faccia la prima domanda: statuto pensato
          per i round che verranno, cap table progettata come infrastruttura di governance, valuation
          costruita su metriche verificabili, quote e diritti differenziati per il contributo reale
          di chi entra.
        </MSection>

        <MSection title="Con chi lavoro">
          Startup italiane, dalla costituzione al primo round e ai successivi. Founder che hanno già
          validato un'idea o un prodotto e che stanno per affrontare la parte che non hanno mai
          fatto prima.
        </MSection>
      </PageContainer>
    </>
  );
}

const MSection = ({ title, children }) => (
  <section className="mt-24">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">{title}</h2>
    <p className="mt-7 text-lg leading-relaxed text-gray-700">{children}</p>
  </section>
);
