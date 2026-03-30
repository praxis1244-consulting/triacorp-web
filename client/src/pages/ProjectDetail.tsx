import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useParams, useLocation } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, getAdjacentProjects } from "../data/projects";
import ScrollImage from "../components/ScrollImage";
import SectionLink from "../components/SectionLink";

function GalleryImage({
  src,
  alt,
  className,
  index,
}: {
  src: string;
  alt: string;
  className: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index % 2 === 1 ? 0.1 : 0 }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={className}
      />
    </motion.div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const project = getProject(slug ?? "");
  const { prev, next } = getAdjacentProjects(slug ?? "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="py-24 text-center">
        <h1 className="font-serif text-3xl text-charcoal dark:text-warm-white">
          Proyecto no encontrado
        </h1>
        <Link
          href="/proyectos"
          className="mt-6 inline-block text-sm uppercase tracking-[0.22em] text-brand hover:text-brand-dark"
        >
          ← Volver a proyectos
        </Link>
      </main>
    );
  }

  const galleryImages = project.images.slice(1);
  const galleryRows: { type: "full" | "pair"; images: typeof galleryImages }[] = [];
  let gi = 0;
  while (gi < galleryImages.length) {
    if (gi % 3 === 0) {
      galleryRows.push({ type: "full", images: [galleryImages[gi]] });
      gi++;
    } else {
      const pair = [galleryImages[gi]];
      if (gi + 1 < galleryImages.length) pair.push(galleryImages[gi + 1]);
      galleryRows.push({ type: "pair", images: pair });
      gi += 2;
    }
  }

  return (
    <main>
      {/* Back link */}
      <section className="pt-8 sm:pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/proyectos"
            className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal/40 transition-colors hover:text-charcoal dark:text-warm-white/30 dark:hover:text-warm-white"
          >
            <ArrowLeft size={14} />
            Proyectos
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-charcoal/45 dark:text-warm-white/35">
              <span>{project.categoryLabel}</span>
              <span className="text-charcoal/15 dark:text-warm-white/15">/</span>
              <span>{project.year}</span>
              <span className="text-charcoal/15 dark:text-warm-white/15">/</span>
              <span>{project.location}</span>
            </div>
            <h1 className="font-serif text-[clamp(3.2rem,12vw,7.5rem)] leading-[0.90] tracking-tight font-normal text-charcoal dark:text-warm-white">
              {project.name}
            </h1>
          </div>
          <div className="max-w-md pb-2 md:text-right">
            <p className="text-base leading-relaxed text-charcoal/60 dark:text-warm-white/50">
              {project.units} {project.units === 1 ? "unidad" : "unidades"} · {project.location}
            </p>
            <p className="mt-1 text-sm text-brand/70 dark:text-brand-light/70">
              {project.highlight}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-8 md:mt-12"
      >
        <ScrollImage
          src={project.heroImage}
          alt={`Proyecto ${project.name} — vista principal`}
          className="relative h-[360px] w-full sm:h-[480px] md:h-[600px] lg:h-[720px]"
        />
      </motion.div>

      {/* Summary + specs */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 grid grid-cols-1 gap-10 border-t border-border pt-10 dark:border-dark-border md:grid-cols-[5fr_3fr] md:gap-16 lg:gap-24"
      >
        <div>
          <p className="text-lg leading-relaxed text-charcoal/85 dark:text-warm-white/75 sm:text-xl sm:leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {project.units > 0 && (
            <div>
              <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-charcoal/35 dark:text-warm-white/25">
                Unidades
              </span>
              <span className="block font-serif text-2xl tracking-tight text-charcoal dark:text-warm-white">
                {project.units.toLocaleString("es-CL")}
              </span>
            </div>
          )}

          {(project.floors || project.towers) && (
            <div className="flex gap-8">
              {project.floors && (
                <div>
                  <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-charcoal/35 dark:text-warm-white/25">
                    Pisos
                  </span>
                  <span className="block font-serif text-2xl tracking-tight text-charcoal dark:text-warm-white">
                    {project.floors}
                  </span>
                </div>
              )}
              {project.towers && (
                <div>
                  <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-charcoal/35 dark:text-warm-white/25">
                    Torres
                  </span>
                  <span className="block font-serif text-2xl tracking-tight text-charcoal dark:text-warm-white">
                    {project.towers}
                  </span>
                </div>
              )}
            </div>
          )}

          <div>
            <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-charcoal/35 dark:text-warm-white/25">
              Gestión TRIACORP
            </span>
            <ul className="flex flex-col gap-1.5">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-charcoal/70 dark:text-warm-white/55"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="mt-14 md:mt-20">
          <div className="flex flex-col gap-3 md:gap-4">
            {galleryRows.map((row, ri) => {
              if (row.type === "full") {
                const img = row.images[0];
                return (
                  <GalleryImage
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    index={ri}
                    className="h-[300px] w-full object-cover sm:h-[420px] md:h-[540px] lg:h-[640px]"
                  />
                );
              }
              return (
                <div key={row.images[0].src} className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
                  {row.images.map((img, ii) => (
                    <GalleryImage
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      index={ii}
                      className="h-[260px] w-full object-cover sm:h-[320px] md:h-[400px]"
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Prev/Next */}
      <section className="mt-16 border-t border-border dark:border-dark-border md:mt-24">
        <div className="grid grid-cols-2">
          <div className="border-r border-border py-10 pr-6 dark:border-dark-border md:py-16 md:pr-12">
            {prev ? (
              <Link href={`/proyectos/${prev.slug}`} className="group flex flex-col gap-3">
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/35 transition-colors group-hover:text-charcoal dark:text-warm-white/25 dark:group-hover:text-warm-white">
                  <ArrowLeft size={12} /> Anterior
                </span>
                <span className="font-serif text-xl tracking-tight text-charcoal transition-colors group-hover:text-brand dark:text-warm-white md:text-3xl">
                  {prev.name}
                </span>
              </Link>
            ) : (
              <Link href="/proyectos" className="group flex flex-col gap-3">
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/35 transition-colors group-hover:text-charcoal dark:text-warm-white/25 dark:group-hover:text-warm-white">
                  <ArrowLeft size={12} /> Volver
                </span>
                <span className="font-serif text-xl tracking-tight text-charcoal transition-colors group-hover:text-brand dark:text-warm-white md:text-3xl">
                  Todos los proyectos
                </span>
              </Link>
            )}
          </div>
          <div className="flex flex-col items-end py-10 pl-6 md:py-16 md:pl-12">
            {next ? (
              <Link href={`/proyectos/${next.slug}`} className="group flex flex-col items-end gap-3">
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/35 transition-colors group-hover:text-charcoal dark:text-warm-white/25 dark:group-hover:text-warm-white">
                  Siguiente <ArrowRight size={12} />
                </span>
                <span className="font-serif text-xl tracking-tight text-charcoal transition-colors group-hover:text-brand dark:text-warm-white md:text-3xl">
                  {next.name}
                </span>
              </Link>
            ) : (
              <Link href="/proyectos" className="group flex flex-col items-end gap-3">
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/35 transition-colors group-hover:text-charcoal dark:text-warm-white/25 dark:group-hover:text-warm-white">
                  Ver más <ArrowRight size={12} />
                </span>
                <span className="font-serif text-xl tracking-tight text-charcoal transition-colors group-hover:text-brand dark:text-warm-white md:text-3xl">
                  Todos los proyectos
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border pb-16 pt-12 dark:border-dark-border md:pb-24 md:pt-16">
        <p className="text-charcoal/50 dark:text-warm-white/40">
          ¿Buscas algo similar?
        </p>
        <h2 className="mt-2 font-serif text-[clamp(2rem,6vw,3.5rem)] leading-[1.02] tracking-tight font-normal text-charcoal dark:text-warm-white">
          Conversemos sobre tu proyecto
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <SectionLink
            href="/#contacto"
            className="inline-flex items-center justify-center bg-brand px-6 py-3 text-sm uppercase tracking-[0.22em] text-warm-white transition-colors hover:bg-brand-dark sm:px-8"
          >
            Iniciar Proyecto
          </SectionLink>
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center border border-charcoal px-6 py-3 text-sm uppercase tracking-[0.22em] text-charcoal transition-colors hover:border-brand hover:text-brand dark:border-warm-white dark:text-warm-white sm:px-8"
          >
            Ver Portafolio →
          </Link>
        </div>
      </section>
    </main>
  );
}
