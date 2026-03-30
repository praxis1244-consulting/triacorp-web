import { motion } from "framer-motion";
import { Link } from "wouter";
import { useDividerReveal } from "../hooks/useDividerReveal";

export default function About() {
  const dividerRef = useDividerReveal<HTMLElement>();

  return (
    <section ref={dividerRef} id="nosotros" className="py-16 md:py-24 divider-reveal">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-8 min-w-0">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="pr-0 font-serif text-[clamp(2.35rem,8vw,4.6rem)] tracking-tight font-normal leading-[1.02] text-charcoal dark:text-warm-white md:pr-12"
          >
            Gestión externa que convierte terrenos en proyectos rentables — con excelencia de principio a fin.
          </motion.h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/quienes-somos"
              className="text-base sm:text-lg uppercase tracking-[0.24em] border-b border-charcoal dark:border-warm-white pb-1 hover:text-brand hover:border-brand transition-colors dark:text-warm-white"
            >
              Conocer Nuestro Equipo
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-center overflow-hidden md:col-span-4 md:items-center">
          {/* Architectural triangle motif — inspired by TRIACORP logo */}
          <div className="pointer-events-none absolute inset-0 -m-10 opacity-90 sm:-m-12 md:-m-14 md:-ml-20">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full stroke-brand fill-none opacity-12 stroke-[0.4]"
              preserveAspectRatio="xMidYMid meet"
            >
              <polygon points="50,10 10,90 90,90" />
              <polygon points="50,25 22,80 78,80" />
              <polygon points="50,40 34,70 66,70" />
              <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.2" />
              <line x1="10" y1="90" x2="90" y2="90" strokeWidth="0.2" />
              <line x1="30" y1="50" x2="70" y2="50" strokeWidth="0.2" strokeDasharray="2 2" />
            </svg>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10 max-w-lg text-base leading-relaxed text-charcoal/80 dark:text-warm-white/70 sm:text-lg"
          >
            TRIACORP nació para profesionalizar el desarrollo inmobiliario.
            Conectamos inversionistas y desarrolladores a través de modelos de
            gestión externa que optimizan recursos y maximizan rentabilidad.
            34 proyectos y más de 7.800 viviendas en Chile, Panamá, Uruguay
            y Paraguay lo respaldan.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
