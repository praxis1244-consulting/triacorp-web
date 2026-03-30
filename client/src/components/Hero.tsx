import { motion } from "framer-motion";
import { Link } from "wouter";
import ScrollImage from "./ScrollImage";
import SectionLink from "./SectionLink";

function BlueprintBg() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full fill-none opacity-[0.18]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="currentColor" className="text-brand" strokeWidth="0.25">
        <line x1="0" y1="40" x2="200" y2="40" />
        <line x1="0" y1="80" x2="200" y2="80" />
        <line x1="0" y1="120" x2="200" y2="120" />
        <line x1="0" y1="160" x2="200" y2="160" />
        <line x1="40" y1="0" x2="40" y2="200" />
        <line x1="80" y1="0" x2="80" y2="200" />
        <line x1="120" y1="0" x2="120" y2="200" />
        <line x1="160" y1="0" x2="160" y2="200" />
      </g>
      <g stroke="currentColor" className="text-brand" strokeWidth="0.4">
        <line x1="0" y1="0" x2="200" y2="200" />
        <line x1="200" y1="0" x2="0" y2="200" />
      </g>
      <g stroke="currentColor" className="text-brand" strokeWidth="0.6">
        <line x1="90" y1="100" x2="110" y2="100" />
        <line x1="100" y1="90" x2="100" y2="110" />
        <circle cx="100" cy="100" r="6" strokeWidth="0.35" />
      </g>
      <g stroke="currentColor" className="text-brand" strokeWidth="0.35" strokeDasharray="2 2">
        <line x1="20" y1="20" x2="180" y2="20" />
        <line x1="20" y1="180" x2="180" y2="180" />
        <line x1="20" y1="20" x2="20" y2="180" />
        <line x1="180" y1="20" x2="180" y2="180" />
      </g>
    </svg>
  );
}

const lineVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative pt-10 pb-12 sm:pt-14 md:pt-20 md:pb-16">
      <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-8 lg:gap-12">
        <h1 className="w-full max-w-5xl font-serif text-[clamp(3.35rem,13vw,8rem)] leading-[0.94] tracking-tight font-normal text-charcoal dark:text-warm-white md:w-3/4">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Visión clara.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Gestión{" "}
              <span className="pr-2 italic text-brand/85 sm:pr-4 dark:text-brand-light/85">
                precisa.
              </span>
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="relative flex min-h-0 w-full max-w-xl flex-col items-start justify-end text-left md:min-h-[320px] md:w-[28%] md:items-end md:text-right"
        >
          <div className="pointer-events-none absolute inset-x-0 -top-16 bottom-10 opacity-100 md:-left-28 md:-right-4 md:-top-8 md:bottom-16">
            <BlueprintBg />
          </div>
          <p className="relative z-10 mb-6 max-w-md text-base leading-relaxed text-charcoal/70 dark:text-warm-white/60">
            Estructuramos, desarrollamos y gestionamos proyectos inmobiliarios.
            Desde la arquitectura hasta la venta — una gestión integral que
            maximiza el valor de cada proyecto.
          </p>
          <div className="relative z-10 flex flex-col items-start gap-3">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center md:items-end md:gap-4">
              <SectionLink
                href="/#contacto"
                className="cta-button inline-block border-b border-charcoal pb-1 text-sm uppercase tracking-[0.28em] transition-colors hover:border-brand hover:text-brand dark:border-warm-white dark:text-warm-white"
              >
                Iniciar Proyecto
              </SectionLink>
              <Link
                href="/proyectos"
                className="inline-block border-b border-charcoal/50 pb-1 text-sm uppercase tracking-[0.28em] text-charcoal/60 transition-colors hover:border-brand hover:text-brand dark:border-warm-white/50 dark:text-warm-white/60"
              >
                Ver Portafolio →
              </Link>
            </div>
            <span className="text-xs text-charcoal/40 dark:text-warm-white/30 md:text-right">
              +7.800 viviendas · 34 proyectos · 4 países
            </span>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 border-y border-border py-4 text-sm uppercase tracking-[0.24em] text-charcoal/70 dark:border-dark-border dark:text-warm-white/60 sm:grid-cols-3 sm:gap-4">
        <span>+10 Años de Trayectoria</span>
        <span className="sm:text-center">4 Países</span>
        <span className="sm:text-right">Gestión Integral</span>
      </div>

      <ScrollImage
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2200&h=1400&fit=crop&q=80"
        fallbackSrc="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2200&h=1400&fit=crop&q=80"
        alt="Arquitectura contemporánea — desarrollo inmobiliario TRIACORP"
        className="relative mt-4 h-[320px] w-full sm:h-[420px] md:h-[560px] lg:h-[680px]"
      />

      <div className="flex flex-col gap-1 py-3 text-sm uppercase tracking-[0.16em] text-charcoal/70 dark:text-warm-white/60 sm:flex-row sm:items-center sm:justify-between sm:text-base sm:tracking-normal">
        <span>Planificación & Gestión Inmobiliaria</span>
        <Link
          href="/proyectos"
          className="text-charcoal/50 transition-colors hover:text-brand dark:text-warm-white/40 dark:hover:text-brand"
        >
          Ver Proyectos →
        </Link>
      </div>
    </section>
  );
}
