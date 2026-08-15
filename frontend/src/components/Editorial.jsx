import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

export const FadeIn = ({ children, delay = 0, className = "", as = "div", ...props }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
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
      className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.05]"
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
    <p className={`mt-7 text-lg leading-relaxed text-gray-700 ${className}`}>{children}</p>
  </FadeIn>
);

export const SectionTitle = ({ children }) => (
  <FadeIn>
    <h2 className="mt-24 md:mt-28 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
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
    <p className="mt-5 text-lg italic text-gray-500 leading-relaxed">{children}</p>
  </FadeIn>
);

export const Rule = () => <div className="mt-20 border-t border-gray-200" />;

export const DeepLink = ({ to, children, testId }) => (
  <FadeIn>
    <Link
      to={to}
      data-testid={testId}
      className="group mt-10 inline-flex items-baseline gap-2 text-navy border-b border-navy-soft hover:border-navy pb-1 transition-colors duration-300"
    >
      <span className="text-lg">{children}</span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  </FadeIn>
);
