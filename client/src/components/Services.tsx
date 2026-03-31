import { motion } from "framer-motion";
import { useDividerReveal } from "../hooks/useDividerReveal";

const services = [
  { title: "Arquitectura & Desarrollo", tagline: "Del plano al hecho" },
  { title: "Gestión Inmobiliaria", tagline: "Control total, cada etapa" },
  { title: "Estructuración", tagline: "Técnico · Legal · Financiero" },
  { title: "Ventas & Marketing", tagline: "Posicionar para vender" },
  { title: "Legal", tagline: "Respaldo jurídico integral" },
  { title: "Corretaje", tagline: "Del acuerdo al cierre" },
];

export default function Services() {
  const dividerRef = useDividerReveal<HTMLElement>();

  return (
    <section
      ref={dividerRef}
      id="servicios"
      className="py-16 md:py-24 divider-reveal"
    >
      <div className="mb-10 md:mb-12">
        <span className="text-base uppercase tracking-widest text-charcoal/70 dark:text-warm-white/50 block mb-6">
          Servicios Inmobiliarios
        </span>
        <motion.h2
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="font-serif text-[clamp(2.4rem,7vw,3.7rem)] tracking-tight font-normal leading-[1.02] text-charcoal dark:text-warm-white"
        >
          Tu visión,
          <br />
          nuestro know–how.
        </motion.h2>
      </div>

      <div className="bg-warm-gray/40 dark:bg-dark-surface/50 px-5 md:px-8 py-2">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="group/row -mx-5 md:-mx-8 px-5 md:px-8 hover:bg-warm-gray/70 dark:hover:bg-dark-border/20 transition-colors duration-300 cursor-default"
          >
            <motion.div
              className="h-px bg-border/50 dark:bg-dark-border/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              style={{ transformOrigin: "left" }}
            />

            <div className="py-4 md:py-5 grid grid-cols-1 md:grid-cols-[3rem_1fr_auto] gap-y-1 gap-x-5 items-baseline">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="hidden md:block text-sm font-light text-brand/40 dark:text-brand-light/30 group-hover/row:text-brand dark:group-hover/row:text-brand-light tabular-nums tracking-wide transition-colors duration-300"
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>

              <motion.h3
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="font-serif text-[clamp(1.5rem,4vw,2.6rem)] tracking-tight leading-[1.1] text-charcoal dark:text-warm-white group-hover/row:translate-x-1.5 transition-transform duration-300"
              >
                {service.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-charcoal/35 dark:text-warm-white/25 group-hover/row:text-charcoal/60 dark:group-hover/row:text-warm-white/50 transition-colors duration-300"
              >
                {service.tagline}
              </motion.p>
            </div>
          </div>
        ))}

        <motion.div
          className="h-px bg-border/50 dark:bg-dark-border/50"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </section>
  );
}
