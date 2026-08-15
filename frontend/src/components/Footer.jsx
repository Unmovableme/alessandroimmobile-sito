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
        1996 lavoro su bilanci, finanza e assetti societari. Dal 2019 affianco anche le
        startup, dalla costituzione alla raccolta di capitale.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        data-testid="footer-scrivimi-link"
        className="group mt-6 inline-flex items-baseline gap-2 text-navy border-b border-navy-soft hover:border-navy pb-1 transition-colors duration-300"
      >
        <span className="text-sm">Scrivimi</span>
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  </footer>
);
