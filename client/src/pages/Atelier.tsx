import { motion } from "framer-motion";
import SectionLink from "../components/SectionLink";

const principles = [
  {
    title: "Cocina 360°",
    description:
      "Un concepto que trasciende fronteras fusionando influencias globales. No presentamos proyectos — los revelamos como experiencias emocionales, culturales y sofisticadas.",
  },
  {
    title: "Cada Detalle Importa",
    description:
      "Cada proceso tiene un propósito y cada experiencia debe emocionar desde el primer contacto. Aplicamos los principios de la haute cuisine al lanzamiento inmobiliario.",
  },
  {
    title: "Estrategia + Emoción",
    description:
      "Donde la estrategia comercial, la estética y la emoción dialogan en igualdad de condiciones. Transformamos lanzamientos en experiencias sensoriales memorables.",
  },
];

export default function Atelier() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-10 pb-12 sm:pt-14 md:pt-20 md:pb-16 border-b border-border dark:border-dark-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-6 block text-sm uppercase tracking-[0.28em] text-charcoal/50 dark:text-warm-white/40">
            Atelier de Experiencias
          </span>
          <h1 className="font-serif text-[clamp(2.8rem,10vw,5.5rem)] leading-[0.94] tracking-tight font-normal text-charcoal dark:text-warm-white max-w-5xl">
            Donde la gastronomía
            <br />
            encuentra al desarrollo
            <br />
            <span className="italic text-brand/85 dark:text-brand-light/85">inmobiliario.</span>
          </h1>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 border-b border-border dark:border-dark-border">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-[clamp(1.5rem,4vw,2.4rem)] tracking-tight leading-snug text-charcoal dark:text-warm-white"
            >
              El Atelier de Experiencias es la división de TRIACORP que fusiona
              la sofisticación culinaria con la estrategia de desarrollo
              inmobiliario.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-base leading-relaxed text-charcoal/70 dark:text-warm-white/60 sm:text-lg max-w-xl"
            >
              Transformamos los lanzamientos de proyectos en experiencias
              inmersivas, aplicando principios de la haute cuisine para crear
              momentos donde cada detalle importa, cada proceso tiene un
              propósito, y cada experiencia emociona desde el primer contacto.
            </motion.p>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="border-l-2 border-brand pl-6">
              <span className="text-xs uppercase tracking-widest text-charcoal/40 dark:text-warm-white/30 block mb-3">
                Dirección
              </span>
              <p className="font-serif text-xl text-charcoal dark:text-warm-white">
                Gerardo Farías
              </p>
              <p className="mt-2 text-base leading-relaxed text-charcoal/70 dark:text-warm-white/60">
                Casi cuatro décadas de experiencia en haute cuisine contemporánea.
                Desde restaurantes de prestigio hasta eventos exclusivos,
                transformando ocasiones en experiencias sensoriales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24 border-b border-border dark:border-dark-border">
        <span className="text-base uppercase tracking-widest text-charcoal/70 dark:text-warm-white/50 block mb-12">
          Filosofía
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-border pt-6 dark:border-dark-border"
            >
              <h3 className="font-serif text-2xl tracking-tight text-charcoal dark:text-warm-white mb-4">
                {p.title}
              </h3>
              <p className="text-base leading-relaxed text-charcoal/65 dark:text-warm-white/55">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] leading-[1.02] tracking-tight font-normal text-charcoal dark:text-warm-white">
          ¿Quieres una experiencia
          <br />
          de lanzamiento única?
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-charcoal/75 dark:text-warm-white/65">
          Conversemos sobre cómo transformar tu próximo lanzamiento en un
          evento que emociona e inspira.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <SectionLink
            href="/#contacto"
            className="inline-flex items-center justify-center bg-brand px-6 py-3 text-sm uppercase tracking-[0.22em] text-warm-white transition-colors hover:bg-brand-dark sm:px-8"
          >
            Contactar
          </SectionLink>
        </div>
      </section>
    </main>
  );
}
