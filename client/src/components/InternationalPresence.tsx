import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useDividerReveal } from "../hooks/useDividerReveal";

interface Country {
  name: string;
  image: string | null;
  stat?: string;
  statLabel?: string;
  detail?: string;
}

const countries: Country[] = [
  {
    name: "Chile",
    stat: "2.150",
    statLabel: "viviendas",
    image:
      "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ANTOFAGASTA-FARELLON-NORTE-III-3-scaled.png",
  },
  {
    name: "Panamá",
    stat: "41",
    statLabel: "pisos",
    image:
      "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/01-VISTA-EXTERIOR-1-scaled.jpg",
  },
  {
    name: "Uruguay",
    detail: "José Ignacio · Punta del Este · Montevideo",
    image:
      "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Casa-Horizonte-scaled.png",
  },
  {
    name: "Paraguay",
    detail: "Renta residencial · Asunción",
    image:
      "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Imagen4-2-scaled.png",
  },
];

const parallaxRanges: [number, number][] = [
  [-18, 18],
  [14, -14],
  [-10, 10],
  [16, -16],
];

function CountryColumn({ country, index }: { country: Country; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : parallaxRanges[index],
  );

  return (
    <motion.div ref={ref} style={{ y }}>
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0% 0 0 0)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.9,
          delay: index * 0.15,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="group relative overflow-hidden h-[280px] sm:h-[360px] md:h-[460px]"
      >
        {country.image ? (
          <>
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
            >
              <img
                src={country.image}
                alt={`Proyecto TRIACORP en ${country.name}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[#1C2A28] dark:bg-dark-surface">
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.035]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id={`bp-${index}`}
                  width="28"
                  height="28"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 28 0 L 0 0 0 28"
                    fill="none"
                    stroke="#F8F9F7"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#bp-${index})`} />
            </svg>
          </div>
        )}

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
          <h3 className="font-serif text-[clamp(1.6rem,4vw,2.6rem)] leading-none text-warm-white tracking-tight">
            {country.name}
          </h3>
          {country.stat ? (
            <div className="mt-2.5 flex items-baseline gap-1.5">
              <span className="text-lg md:text-xl font-light text-warm-white/90 tracking-tight">
                {country.stat}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-warm-white/50">
                {country.statLabel}
              </span>
            </div>
          ) : (
            <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-widest text-warm-white/40 leading-relaxed">
              {country.detail}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function InternationalPresence() {
  const dividerRef = useDividerReveal<HTMLElement>();

  return (
    <section ref={dividerRef} className="py-12 md:py-20 divider-reveal">
      <p className="mb-8 md:mb-12 text-sm uppercase tracking-[0.24em] text-charcoal/60 dark:text-warm-white/50 sm:text-base sm:tracking-widest">
        Presencia Internacional
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {countries.map((country, i) => (
          <CountryColumn key={country.name} country={country} index={i} />
        ))}
      </div>
    </section>
  );
}
