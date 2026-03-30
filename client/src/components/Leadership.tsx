import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const leaders = [
  {
    name: "Rodrigo Tagle Manriquez",
    role: "Director Ejecutivo & Fundador",
    title: "Arquitecto",
    quote:
      "La arquitectura es una respuesta al comportamiento humano — cada espacio que diseñamos refleja cómo las personas viven, sienten y se mueven.",
  },
  {
    name: "Diego Tomás Tagle Viveros",
    role: "Gerente General & Co-Fundador",
    title: "Arquitecto",
    quote:
      "El sector inmobiliario maduró. Ya no basta la experiencia empírica — se requiere liderazgo metódico, analítico y estratégico.",
  },
];

function Initials({ name }: { name: string }) {
  const parts = name.split(" ");
  const initials = parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0];
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-base font-medium text-brand dark:bg-brand/15">
      {initials}
    </div>
  );
}

const headingLine = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function Leadership() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 border-t border-border dark:border-dark-border">
      <div className="mb-8 md:mb-10">
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={inView ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="text-base uppercase tracking-widest text-charcoal/70 dark:text-warm-white/50 block mb-3"
        >
          Liderazgo
        </motion.span>
        <h2 className="font-serif text-[clamp(2.4rem,7vw,3.7rem)] tracking-tight font-normal leading-[1.02] text-charcoal dark:text-warm-white">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              variants={headingLine}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
            >
              Quienes dirigen
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              variants={headingLine}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
            >
              cada proyecto
            </motion.span>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border dark:border-dark-border">
        {leaders.map((leader, i) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
            className={`py-8 sm:py-10 ${
              i === 0
                ? "md:pr-12 md:border-r border-border dark:border-dark-border"
                : "md:pl-12"
            } ${i > 0 ? "border-t md:border-t-0 border-border dark:border-dark-border" : ""}`}
          >
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="block font-serif text-5xl md:text-6xl leading-none text-brand select-none -mb-2 md:-mb-4 origin-bottom-left"
            >
              &ldquo;
            </motion.span>
            <p className="text-lg tracking-wide font-light leading-relaxed text-charcoal/80 dark:text-warm-white/80 mb-6 sm:text-xl">
              {leader.quote}
            </p>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-8 bg-brand/30" />
              <Initials name={leader.name} />
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-widest text-charcoal dark:text-warm-white font-normal">
                  {leader.name}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-charcoal/60 dark:text-warm-white/50 sm:tracking-widest">
                  {leader.title} — {leader.role}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
