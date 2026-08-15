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
        Dottore commercialista e revisore legale, iscritto all'Ordine di Torino. Dal
        1996 lavoro su bilanci, finanza e assetti societari. Dal 2019 affianco le
        startup come advisor e business angel: costituzione, raccolta di capitali e
        governance.
      </p>
      <ArrowLink href={`mailto:${EMAIL}`} testId="footer-scrivimi-link" className="mt-6" labelClassName="text-sm">
        Scrivimi
      </ArrowLink>
    </div>
  </footer>
);
