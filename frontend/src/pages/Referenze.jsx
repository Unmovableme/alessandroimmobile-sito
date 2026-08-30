import { Seo } from "@/components/Seo";
import { FadeIn, ArrowLink } from "@/components/Editorial";
import { ImmersiveHero } from "@/components/ImmersiveHero";
import { Evidenza, linkedinByName } from "@/components/Evidenza";

const referenze = [
  {
    name: "Marta Nappo",
    role: "CMO, Chief Sales Officer, Business Development Executive",
    quote:
      "Estremamente competente per tutto quello che concerne l'aspetto di gestione finanziaria di un'azienda e gli assetti societari, Alessandro è un professionista che fa dell'ascolto dei suoi collaboratori e clienti un'arma vincente per ottimizzare al meglio l'organizzazione e le soluzioni offerte. Non è difficile lavorare insieme a lui anche per il suo approccio sempre pacato e bilanciato.",
  },
  {
    name: "Massimiliano Bosaro",
    role: "Founder & CEO, CentraleRisk SpA",
    quote:
      "Competente ed innovatore prima di tutto, ma anche disponibile e cordiale! Questa l'esperienza che posso trasmettere all'esterno, riguardo ad Alessandro.",
  },
  {
    name: "Fabrizio Gallante",
    role: "Managing Partner di Enzima12, CEO di 12Venture",
    quote:
      "Ho avuto il piacere di collaborare con Alessandro Immobile Molaro in diversi contesti legati al mondo delle startup. Alessandro si distingue per visione strategica, pragmatismo e un'evidente passione nel sostenere nuovi imprenditori. La sua capacità di comprendere subito le esigenze di un progetto e di attivare rapidamente sinergie con investitori, mentor e professionisti del settore fa davvero la differenza in ogni percorso di crescita. In particolare, ho potuto apprezzare la sua competenza nello strutturare processi di investimento in modo trasparente e nel facilitare la creazione di network di qualità attorno a ogni iniziativa.",
  },
  {
    name: "Matteo Fornaca",
    role: "Founder e CEO, The Spiritual Machine",
    quote:
      "Alessandro è stato cruciale nella raccolta di capitale che abbiamo fatto, trovando sempre le soluzioni giuste visto che si trattava sostanzialmente di una modalità innovativa. Sempre disponibile, professionale, impeccabile e con gli occhi aperti su quanto di nuovo succede nel mondo.",
  },
  {
    name: "Barbara Rizzi",
    role: "Commercialista",
    quote:
      "Ho conosciuto personalmente Alessandro Immobile Molaro nel suo ruolo di advisor e mentore di una startup innovativa. La sua competenza nel campo del crowdfunding e della finanza alternativa è davvero notevole: sa come strutturare un progetto affinché sia interessante per gli investitori e al contempo sostenibile nel tempo. Quello che apprezzo di più di Alessandro, oltre alla sua indiscussa preparazione tecnica, è la sua capacità di fare mentoring, guidando gli startupper passo dopo passo, con consigli chiari e concreti. Alessandro non si limita a spiegare strumenti finanziari complessi; li rende comprensibili e utilizzabili, aiutando le startup e le PMI innovative a trasformare le idee in piani di crescita solidi.",
  },
  {
    name: "Angelo Marra",
    role: "Presidente Fondimpresa Calabria, Confindustria",
    quote:
      "Alessandro è un professionista molto serio, ho avuto il piacere di conoscerlo pochi anni fa ma ho apprezzato da subito la sua visione verso le startup innovative, lo consiglio a chiunque abbia una startup e ha bisogno di un consulente esperto e sul pezzo.",
  },
  {
    name: "Claudio Grimoldi",
    role: "Turbo Crowd",
    quote:
      "Alessandro è un professionista raro da trovare: competente e serio come davvero pochi! Non ho ancora trovato chi è più preparato di lui sugli strumenti finanziari partecipativi e, più in generale, la sua visione sulla raccolta di capitale in azienda è merce preziosa.",
  },
  {
    name: "Federico Chigbuh Gasparini",
    role: "COO @MarshYellow, Business Designer, Startup Mentor",
    quote:
      "Alessandro è straordinariamente competente, con una vasta e profonda esperienza in tutto ciò che riguarda la raccolta fondi per le startup. Le nostre discussioni su strumenti complessi come i SAFE e gli SFP sono state sempre illuminanti e incredibilmente utili. La sua capacità di semplificare concetti finanziari e legali complessi è rara e preziosa. Al di là della competenza tecnica, ciò che distingue Alessandro è la sua profonda cultura imprenditoriale e le sue eccezionali qualità umane.",
  },
  {
    name: "Matteo Moccia",
    role: "Commercialista",
    quote:
      "Un professionista ed un mentore. Conosco Alessandro come un vero punto di riferimento nel mondo dell'innovazione: riesce ad unire la sua conoscenza della finanza e della trasformazione digitale a una visione strategica lucida. Ciò che lo rende speciale è la sua generosità nel condividere il suo sapere e la sua attenzione alla crescita delle persone che ha intorno.",
  },
  {
    name: "Giuseppe Virzì",
    role: "Founder, Tuduu",
    quote:
      "Ho avuto e ho il piacere di confrontarmi con Alessandro spesso. È un punto di riferimento imprescindibile ogni qual volta c'è da strutturare non solo tecnicamente un'operazione straordinaria, ma soprattutto quando c'è da pianificare la strategia a monte, cosa spesso sottovalutata dai più. Non posso che consigliarlo a chiunque avesse bisogno di un po' di struttura nelle cose.",
  },
];

export default function Referenze() {
  return (
    <>
      <Seo
        title="Referenze — Alessandro Immobile"
        description="Quello che dicono di me le persone con cui ho lavorato: founder, manager e professionisti su assetti societari, finanza, M&A e raccolta di capitale."
      />
      <main data-testid="referenze-page" className="pb-24 md:pb-32">
        <ImmersiveHero
          eyebrow="Founder · Manager · Professionisti"
          title="Referenze"
          titleTestId="referenze-title"
          lead="Quello che dicono di me le persone con cui ho lavorato."
          testId="referenze-hero"
          objectPosition="center 20%"
        />

        <div className="mx-auto max-w-3xl px-6 mt-10 md:mt-20">
          <Evidenza variant="full" testId="referenze-evidenza" />

          <div className="mt-20 md:mt-24 divide-y divide-navy/15">
          {referenze.map((r, i) => (
            <FadeIn key={r.name} delay={Math.min(i, 5) * 0.04}>
              <figure
                data-testid={`referenza-${i + 1}`}
                className={i === 0 ? "pb-14 md:pb-16" : "py-14 md:py-16"}
              >
                <figcaption>
                  <p className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
                    {r.name}
                  </p>
                  {r.role && (
                    <p className="mt-1 text-sm italic text-gray-500">{r.role}</p>
                  )}
                </figcaption>
                <blockquote className="mt-5 text-lg leading-relaxed text-gray-700">
                  {r.quote}
                </blockquote>
                {linkedinByName[r.name] && (
                  <ArrowLink
                    href={linkedinByName[r.name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    testId={`referenza-${i + 1}-linkedin`}
                    className="mt-4"
                    labelClassName="text-sm"
                  >
                    LinkedIn
                  </ArrowLink>
                )}
              </figure>
            </FadeIn>
          ))}
          </div>
        </div>
      </main>
    </>
  );
}
