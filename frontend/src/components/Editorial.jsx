import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

export const FadeIn = ({ children, delay = 0, className = "", as = "div", y = 18, ...props }) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export const PageContainer = ({ children, testId }) => (
  <main data-testid={testId} className="mx-auto max-w-3xl px-6 pt-28 pb-24 md:pt-40 md:pb-32">
    {children}
  </main>
);

export const PageTitle = ({ children, testId }) => (
  <FadeIn>
    <h1
      data-testid={testId}
      className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-navy leading-[1.02]"
    >
      {children}
    </h1>
  </FadeIn>
);

export const Lead = ({ children }) => (
  <FadeIn delay={0.05}>
    <p className="mt-10 text-xl md:text-2xl leading-relaxed text-gray-700">{children}</p>
  </FadeIn>
);

export const Body = ({ children, className = "" }) => (
  <FadeIn>
    <p className={`mt-6 text-lg leading-relaxed text-gray-700 ${className}`}>{children}</p>
  </FadeIn>
);

export const SectionTitle = ({ children }) => (
  <FadeIn>
    <h2 className="mt-16 md:mt-24 mb-8 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
      {children}
    </h2>
  </FadeIn>
);

export const SubTitle = ({ children }) => (
  <FadeIn>
    <h3 className="mt-14 text-xl md:text-2xl font-medium tracking-tight text-gray-900">
      {children}
    </h3>
  </FadeIn>
);

export const Descriptor = ({ children }) => (
  <FadeIn>
    <blockquote className="border-l-2 border-navy pl-6 text-lg italic text-gray-500 leading-relaxed">
      {children}
    </blockquote>
  </FadeIn>
);

export const Rule = () => <div className="mt-20 border-t border-gray-200" />;

export const ArrowLink = ({ to, href, children, testId, className = "", labelClassName = "", target, rel }) => {
  const cls = `group inline-flex items-baseline gap-2 text-navy ${className}`;
  const inner = (
    <>
      <span
        className={`relative inline-block pb-0.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 ${labelClassName}`}
      >
        {children}
      </span>
      <span aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-1">
        →
      </span>
    </>
  );
  if (href) {
    return (
      <a href={href} data-testid={testId} target={target} rel={rel} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to} data-testid={testId} className={cls}>
      {inner}
    </Link>
  );
};

export const DeepLink = ({ to, children, testId }) => (
  <FadeIn className="mt-12">
    <ArrowLink to={to} testId={testId} labelClassName="text-lg">
      {children}
    </ArrowLink>
  </FadeIn>
);

export const TintBand = ({ children, testId }) => (
  <div
    data-testid={testId}
    className="relative left-1/2 w-screen -translate-x-1/2 bg-[#F4F6FA] border-y border-[#E5EAF3] mt-20 md:mt-28 mb-0"
  >
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">{children}</div>
  </div>
);

export const BandTitle = ({ children }) => (
  <FadeIn>
    <h2 className="mb-8 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
      {children}
    </h2>
  </FadeIn>
);

export const PullQuote = ({ children, testId }) => (
  <FadeIn>
    <p
      data-testid={testId}
      className="font-serif italic text-navy text-[1.75rem] md:text-[2rem] leading-snug my-16 md:my-24"
    >
      {children}
    </p>
  </FadeIn>
);

export const Portrait = ({ variant = "bw", className = "", testId = "portrait" }) => (
  <figure data-testid={testId} className={`relative ${className}`}>
    <div className="relative overflow-hidden rounded-2xl bg-[#EDF0F5] shadow-[0_20px_50px_-28px_rgba(30,58,107,0.45)]">
      <img
        src="/portrait-hero.png"
        alt="Ritratto di Alessandro Immobile"
        loading="eager"
        className={`w-full h-auto object-cover ${variant === "navy" ? "grayscale contrast-[1.02] brightness-[1.02]" : "grayscale contrast-[1.03]"}`}
      />
      {variant === "navy" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-navy/60 mix-blend-color"
        />
      )}
    </div>
  </figure>
);
