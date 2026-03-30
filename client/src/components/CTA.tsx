import { Link } from "wouter";
import SectionLink from "./SectionLink";

export default function CTA() {
  return (
    <section className="relative flex flex-col items-start border-t border-border py-16 md:py-24 dark:border-dark-border">
      <h2 className="z-10 font-serif text-[clamp(3rem,12vw,7.5rem)] tracking-tight font-normal leading-[0.92] text-charcoal dark:text-warm-white">
        Tu próximo proyecto
        <br />
        merece <span className="italic tracking-[0.02em] text-brand/85 dark:text-brand-light/85">gestión experta</span>
      </h2>
      <p className="z-10 mt-6 max-w-3xl text-base leading-relaxed text-charcoal/75 dark:text-warm-white/70 sm:mt-8 sm:text-lg">
        Más de una década gestionando proyectos inmobiliarios en cuatro países.
        Cuéntanos tu visión y te mostramos cómo hacerla realidad.
      </p>
      <div className="z-10 mt-8 flex flex-col items-start gap-4">
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
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.08]">
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
      </div>
    </section>
  );
}
