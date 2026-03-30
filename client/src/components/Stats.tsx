import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STAGGER = 0.12;
const BASE_DELAY = 0.4;

const stats = [
  { value: 34, suffix: "", label: "Proyectos diseñados" },
  { value: 7882, suffix: "", label: "Viviendas entregadas", accent: true },
  { value: 4, suffix: "", label: "Países con presencia" },
  { value: 10, suffix: "", label: "Regiones de Chile" },
];

function CountUp({
  target,
  suffix,
  inView,
  delay,
}: {
  target: number;
  suffix: string;
  inView: boolean;
  delay: number;
}) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const controls = animate(mv, target, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, target, delay, mv]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      setDisplay(target >= 1000 ? v.toLocaleString("es-CL") : String(v));
    });
    return unsub;
  }, [rounded, target]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

function BlueprintGrid() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full fill-none opacity-[0.12]"
      preserveAspectRatio="none"
    >
      <g stroke="currentColor" className="text-brand" strokeWidth="0.25">
        <line x1="0" y1="50" x2="200" y2="50" />
        <line x1="0" y1="100" x2="200" y2="100" />
        <line x1="0" y1="150" x2="200" y2="150" />
        <line x1="50" y1="0" x2="50" y2="200" />
        <line x1="100" y1="0" x2="100" y2="200" />
        <line x1="150" y1="0" x2="150" y2="200" />
      </g>
      <g stroke="currentColor" className="text-brand" strokeWidth="0.35">
        <line x1="0" y1="0" x2="200" y2="200" />
        <line x1="200" y1="0" x2="0" y2="200" />
      </g>
      <g stroke="currentColor" className="text-brand" strokeWidth="0.3" strokeDasharray="2 2">
        <rect x="15" y="15" width="170" height="170" />
      </g>
    </svg>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 border-t border-border dark:border-dark-border"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block font-serif text-[clamp(8rem,22vw,14rem)] leading-[0.85] tracking-tighter text-charcoal dark:text-warm-white">
                +10
              </span>
            </motion.div>
          </div>
          <motion.span
            initial={{ opacity: 0, x: -12 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 block text-sm uppercase tracking-[0.28em] text-charcoal/50 dark:text-warm-white/40"
          >
            Años de trayectoria
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 1, 0.5, 1] }}
            className="mt-8 max-w-md text-base leading-relaxed text-charcoal/75 dark:text-warm-white/65 sm:text-lg lg:mt-10"
          >
            Más de una década estructurando, desarrollando y gestionando
            proyectos inmobiliarios. Cada cifra refleja gestión real detrás
            de cada desarrollo.
          </motion.p>
        </div>

        <div className="relative flex flex-col justify-center">
          <div className="pointer-events-none absolute -inset-8 md:-inset-12">
            <BlueprintGrid />
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-x-12 lg:gap-y-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{
                  duration: 0.55,
                  delay: BASE_DELAY + i * STAGGER,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                <span
                  className={`block text-2xl font-medium tracking-tight sm:text-3xl ${
                    stat.accent ? "text-brand" : "text-charcoal dark:text-warm-white"
                  }`}
                >
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={isInView}
                    delay={BASE_DELAY + 0.1 + i * STAGGER}
                  />
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: BASE_DELAY + 0.15 + i * STAGGER,
                  }}
                  className="mt-1 block text-sm text-charcoal/55 dark:text-warm-white/45"
                >
                  {stat.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
