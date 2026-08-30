import { ArrowLink } from "@/components/Editorial";

export const EMAIL = "alessandro.immobile@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/alessandroimmobile/";

export const Footer = () => (
  <footer
    data-testid="site-footer"
    className="border-t border-gray-200 bg-white"
  >
    <div className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-sm leading-relaxed text-gray-500 max-w-2xl">
        Dottore commercialista e revisore legale, iscritto all'Ordine di Torino. Dal 1996
        lavoro su bilanci, finanza, assetti societari e operazioni di M&A. Dal 2019 affianco i
        founder come advisor, business angel e investor, su nascita, raccolta di capitali e
        governance delle startup.
      </p>
      <ArrowLink href={`mailto:${EMAIL}`} testId="footer-scrivimi-link" className="mt-6" labelClassName="text-sm">
        Scrivimi
      </ArrowLink>
    </div>
  </footer>
);
