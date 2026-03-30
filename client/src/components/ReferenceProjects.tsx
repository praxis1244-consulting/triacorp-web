import { motion } from "framer-motion";
import { Link } from "wouter";
import { projects } from "../data/projects";
import { useDividerReveal } from "../hooks/useDividerReveal";

const featured = [
  projects.find((p) => p.slug === "kings-park"),
  projects.find((p) => p.slug === "isla-negra"),
  projects.find((p) => p.slug === "farellon-norte"),
  projects.find((p) => p.slug === "frutillar"),
].filter(Boolean);

export default function ReferenceProjects() {
  const dividerRef = useDividerReveal<HTMLElement>();

  return (
    <section
      ref={dividerRef}
      id="proyectos"
      className="py-16 md:py-24 divider-reveal"
    >
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <span className="text-base uppercase tracking-widest text-charcoal/70 dark:text-warm-white/50 block mb-6">
            Portafolio
          </span>
          <h2 className="font-serif text-[clamp(2.4rem,7vw,3.7rem)] tracking-tight font-normal leading-[1.02] text-charcoal dark:text-warm-white">
            Proyectos Destacados
          </h2>
        </div>
        <p className="max-w-md text-base leading-relaxed text-charcoal/75 dark:text-warm-white/65 md:text-right">
          Desde vivienda social hasta torres de 41 pisos en Panamá.
          Cada proyecto refleja nuestra capacidad de gestión integral.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        {featured.map((project, i) => (
          <motion.div
            key={project!.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={`/proyectos/${project!.slug}`}
              className="group block border border-border dark:border-dark-border bg-warm-gray/50 dark:bg-dark-surface/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal/8 dark:hover:shadow-black/20"
            >
              <div className="overflow-hidden">
                <img
                  src={project!.heroImage}
                  alt={`Proyecto ${project!.name}`}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-72"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-xs uppercase tracking-widest text-charcoal/60 dark:text-warm-white/45 mb-2">
                  {project!.categoryLabel} · {project!.location}
                </p>
                <h3 className="font-serif text-2xl tracking-tight text-charcoal dark:text-warm-white">
                  {project!.name}
                </h3>
                <p className="mt-1.5 text-xs text-brand/70 dark:text-brand-light/70">
                  {project!.highlight}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/proyectos"
          className="inline-block border-b border-charcoal pb-1 text-sm uppercase tracking-[0.22em] text-charcoal transition-colors hover:border-brand hover:text-brand dark:border-warm-white dark:text-warm-white"
        >
          Ver todos los proyectos →
        </Link>
      </div>
    </section>
  );
}
