import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import SectionLink from "./SectionLink";

const ease = [0.25, 1, 0.5, 1] as const;

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-start border-t border-border py-16 md:py-24 dark:border-dark-border"
    >
      <h2 className="z-10 font-serif text-[clamp(3rem,12vw,7.5rem)] tracking-tight font-normal leading-[0.92] text-charcoal dark:text-warm-white">
        <span className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.7, ease }}
          >
            Tu próximo proyecto
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            merece <span className="italic tracking-[0.02em] text-brand/85 dark:text-brand-light/85">gestión experta</span>
          </motion.span>
        </span>
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6, delay: 0.5, ease }}
        className="z-10 mt-6 max-w-3xl text-base leading-relaxed text-charcoal/75 dark:text-warm-white/70 sm:mt-8 sm:text-lg"
      >
        Más de una década gestionando proyectos inmobiliarios en cuatro países.
        Cuéntanos tu visión y te mostramos cómo hacerla realidad.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6, delay: 0.7, ease }}
        className="z-10 mt-8 flex flex-col items-start gap-4"
      >
        <div className="flex flex-wrap items-center gap-4">
          <SectionLink
            href="/#contacto"
            className="cta-button inline-flex items-center justify-center bg-brand px-6 py-3 text-sm uppercase tracking-[0.22em] text-warm-white transition-colors hover:bg-brand-dark sm:px-8"
          >
            Iniciar Proyecto
          </SectionLink>
          <Link
            href="/proyectos"
            className="cta-button inline-flex items-center justify-center border border-charcoal px-6 py-3 text-sm uppercase tracking-[0.22em] text-charcoal transition-colors hover:border-brand hover:text-brand dark:border-warm-white dark:text-warm-white sm:px-8"
          >
            Ver Portafolio →
          </Link>
        </div>
        <span className="text-xs text-charcoal/40 dark:text-warm-white/30">
          Respuesta en 24 hrs · Sin compromiso
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.08 } : { opacity: 0 }}
        transition={{ duration: 2, delay: 0.3, ease }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <svg
          viewBox="0 0 200 200"
          className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 fill-none sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <g stroke="currentColor" className="text-brand" strokeWidth="0.3">
            <line x1="0" y1="50" x2="200" y2="50" />
            <line x1="0" y1="100" x2="200" y2="100" />
            <line x1="0" y1="150" x2="200" y2="150" />
            <line x1="50" y1="0" x2="50" y2="200" />
            <line x1="100" y1="0" x2="100" y2="200" />
            <line x1="150" y1="0" x2="150" y2="200" />
          </g>
          <g stroke="currentColor" className="text-brand" strokeWidth="0.4">
            <line x1="0" y1="0" x2="200" y2="200" />
            <line x1="200" y1="0" x2="0" y2="200" />
          </g>
          <g stroke="currentColor" className="text-brand" strokeWidth="0.6">
            <line x1="92" y1="100" x2="108" y2="100" />
            <line x1="100" y1="92" x2="100" y2="108" />
            <circle cx="100" cy="100" r="5" strokeWidth="0.35" />
          </g>
        </svg>
      </motion.div>
    </section>
  );
}
