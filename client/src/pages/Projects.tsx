import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { projects, categoryLabels, type ProjectCategory } from "../data/projects";
import SectionLink from "../components/SectionLink";

const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "desarrollado", label: categoryLabels.desarrollado },
  { value: "en-desarrollo", label: categoryLabels["en-desarrollo"] },
  { value: "en-venta", label: categoryLabels["en-venta"] },
  { value: "master-plan", label: categoryLabels["master-plan"] },
];

function ProjectImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={inView ? { clipPath: "inset(0 0 0% 0)" } : undefined}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        className="h-full w-full"
      >
        <motion.img
          src={src}
          alt={alt}
          initial={{ scale: 1.15 }}
          animate={inView ? { scale: 1 } : undefined}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
}

function HeroProject({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group relative block"
    >
      <ProjectImage
        src={project.heroImage}
        alt={`Proyecto ${project.name}`}
        className="h-[70vh] min-h-[480px] max-h-[800px] w-full"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

      {/* Content overlaid at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-12">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest text-warm-white/50">
              <span className="font-serif text-2xl text-brand sm:text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-warm-white/30" />
              <span>{project.categoryLabel}</span>
              <span className="text-warm-white/20">/</span>
              <span>{project.location}</span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.94] tracking-tight text-warm-white">
              {project.name}
            </h2>
            <p className="mt-3 max-w-xl text-base text-warm-white/60 leading-relaxed sm:text-lg">
              {project.highlight}
            </p>
          </div>
          <motion.span
            className="hidden shrink-0 text-sm uppercase tracking-widest text-warm-white/40 transition-colors group-hover:text-brand sm:block"
            whileHover={{ x: 4 }}
          >
            Ver proyecto →
          </motion.span>
        </div>
      </div>
    </Link>
  );
}

function ProjectCard({
  project,
  index,
  reversed,
}: {
  project: (typeof projects)[0];
  index: number;
  reversed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : undefined}
      transition={{ duration: 0.6 }}
    >
      <Link
        href={`/proyectos/${project.slug}`}
        className="group block"
      >
        <div
          className={`grid grid-cols-1 gap-0 md:grid-cols-12 ${
            reversed ? "" : ""
          }`}
        >
          {/* Image — 7 cols */}
          <div
            className={`md:col-span-7 ${
              reversed ? "md:order-2 md:col-start-6" : "md:order-1"
            }`}
          >
            <ProjectImage
              src={project.heroImage}
              alt={`Proyecto ${project.name}`}
              className="h-[320px] w-full sm:h-[400px] md:h-[480px] lg:h-[540px]"
            />
          </div>

          {/* Content — 5 cols */}
          <div
            className={`flex flex-col justify-center md:col-span-5 ${
              reversed
                ? "md:order-1 md:pr-10 lg:pr-16"
                : "md:order-2 md:pl-10 lg:pl-16"
            } py-8 md:py-0`}
          >
            {/* Index number */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-serif text-[clamp(3rem,8vw,5rem)] leading-none tracking-tighter text-charcoal/8 dark:text-warm-white/6 mb-4"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-widest text-charcoal/40 dark:text-warm-white/30">
                <span>{project.categoryLabel}</span>
                <span className="text-charcoal/15 dark:text-warm-white/10">/</span>
                <span>{project.year}</span>
              </div>

              <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.02] tracking-tight text-charcoal dark:text-warm-white">
                {project.name}
              </h2>

              <p className="mt-3 text-sm text-charcoal/55 dark:text-warm-white/45 leading-relaxed max-w-md">
                {project.highlight}
              </p>

              <div className="mt-4 flex items-center gap-4 text-xs uppercase tracking-widest text-charcoal/35 dark:text-warm-white/25">
                <span>{project.units.toLocaleString("es-CL")} {project.units === 1 ? "unidad" : "uds."}</span>
                <span className="h-px w-4 bg-charcoal/15 dark:bg-warm-white/10" />
                <span>{project.location}</span>
              </div>

              <div className="mt-6">
                <span className="inline-block border-b border-charcoal/30 pb-0.5 text-xs uppercase tracking-[0.2em] text-charcoal/50 transition-colors group-hover:border-brand group-hover:text-brand dark:border-warm-white/20 dark:text-warm-white/40 dark:group-hover:border-brand dark:group-hover:text-brand">
                  Ver proyecto →
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const [hero, ...rest] = filtered;

  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="pt-14 pb-6 sm:pt-20 md:pt-28 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-6 block text-sm uppercase tracking-[0.28em] text-charcoal/50 dark:text-warm-white/40">
              Portafolio
            </span>
            <h1 className="font-serif text-[clamp(3.2rem,12vw,8rem)] leading-[0.90] tracking-tight font-normal text-charcoal dark:text-warm-white">
              Nuestros
              <br />
              <span className="italic text-brand/85 dark:text-brand-light/85">Proyectos</span>
            </h1>
          </div>
          <div className="pb-2 md:text-right">
            <span className="block font-serif text-[clamp(2.5rem,6vw,4rem)] tracking-tighter text-charcoal/10 dark:text-warm-white/6 leading-none">
              {projects.length}
            </span>
            <span className="block text-xs uppercase tracking-widest text-charcoal/40 dark:text-warm-white/30 mt-1">
              Proyectos
            </span>
          </div>
        </motion.div>
      </section>

      {/* ─── Category filters ─── */}
      <section className="py-5 border-y border-border dark:border-dark-border mb-10 md:mb-16">
        <div className="flex items-center gap-2 overflow-x-auto">
          {categories.map((cat, i) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`relative shrink-0 px-4 py-2.5 text-xs uppercase tracking-widest transition-colors ${
                filter === cat.value
                  ? "text-charcoal dark:text-warm-white"
                  : "text-charcoal/40 hover:text-charcoal/70 dark:text-warm-white/30 dark:hover:text-warm-white/60"
              }`}
            >
              {cat.label}
              {filter === cat.value && (
                <motion.div
                  layoutId="filter-indicator"
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-brand"
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                />
              )}
            </button>
          ))}
          <span className="ml-auto shrink-0 text-xs text-charcoal/30 dark:text-warm-white/20 hidden sm:block">
            {filtered.length} {filtered.length === 1 ? "proyecto" : "proyectos"}
          </span>
        </div>
      </section>

      {/* ─── Featured project — full-bleed hero ─── */}
      {hero && (
        <section className="-mx-4 sm:-mx-6 lg:-mx-8 mb-16 md:mb-24">
          <HeroProject project={hero} index={0} />
        </section>
      )}

      {/* ─── Remaining projects — alternating editorial layout ─── */}
      <section className="flex flex-col gap-16 md:gap-24 pb-16 md:pb-24">
        {rest.map((project, i) => (
          <div
            key={project.slug}
            className="border-t border-border/50 dark:border-dark-border/50 pt-10 md:pt-16"
          >
            <ProjectCard
              project={project}
              index={i + 1}
              reversed={i % 2 === 1}
            />
          </div>
        ))}
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-border py-16 dark:border-dark-border md:py-24">
        <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] leading-[1.02] tracking-tight font-normal text-charcoal dark:text-warm-white">
          ¿Tienes un proyecto?
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-charcoal/75 dark:text-warm-white/65">
          Conversemos sobre cómo podemos estructurar, desarrollar y gestionar
          tu próximo desarrollo inmobiliario.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <SectionLink
            href="/#contacto"
            className="inline-flex items-center justify-center bg-brand px-6 py-3 text-sm uppercase tracking-[0.22em] text-warm-white transition-colors hover:bg-brand-dark sm:px-8"
          >
            Conversemos
          </SectionLink>
        </div>
      </section>
    </main>
  );
}
