import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLink from "../components/SectionLink";

const founders = [
  { name: "Rodrigo Tagle", tag: "Dirección", role: "Arquitecto — Director Ejecutivo & Fundador", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Diego Tagle", tag: "Estrategia", role: "Arquitecto — Gerente General & Co-Fundador", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&q=80" },
];

const team = [
  { name: "Jean Paul Hobon", tag: "Proyectos", role: "Arquitecto — Director de Proyectos", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "José Tomás Bravo", tag: "Coordinación", role: "Arquitecto — Coordinador General", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Sergio Villagrán", tag: "Operaciones", role: "Administrador — Coordinador General", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Patricio Ferrada", tag: "Gestión", role: "Gerente Ejecutivo", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Cristian Melero", tag: "Legal", role: "Abogado — Fiscal", photo: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Felipe Calderón", tag: "Finanzas", role: "Contador", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Víctor Aguilera", tag: "Social", role: "Arquitecto — Vivienda Social", photo: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Felipe Camiruaga", tag: "Extensión", role: "Arquitecto — Cambio de Uso", photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Camilo Torrealba", tag: "Comercial", role: "Arquitecto — Comercial e Industrial", photo: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Felipe Carvajal", tag: "Obra", role: "Constructor — Jefe de Proyecto", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Pablo Melelli", tag: "Supervisión", role: "Constructor — Supervisor", photo: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&crop=face&q=80" },
  { name: "Pablo Rojas", tag: "Supervisión", role: "Constructor — Supervisor", photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop&crop=face&q=80" },
];

const lineVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] },
  }),
};

function Avatar({ name, photo, large }: { name: string; photo?: string; large?: boolean }) {
  const parts = name.split(" ");
  const initials = `${parts[0][0]}${parts[parts.length - 1][0]}`;
  const size = large ? "h-16 w-16" : "h-11 w-11";

  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className={`${size} shrink-0 rounded-full object-cover`}
      />
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-brand/8 font-serif font-medium text-brand dark:bg-brand/12 ${size} ${large ? "text-xl" : "text-sm"}`}
    >
      {initials}
    </div>
  );
}

function TeamCard({
  name,
  tag,
  role,
  photo,
  index,
  founder,
}: {
  name: string;
  tag: string;
  role: string;
  photo?: string;
  index: number;
  founder?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.25, 1, 0.5, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative cursor-default overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        founder
          ? "bg-warm-gray dark:bg-dark-surface p-7 sm:p-8"
          : "border border-border/60 dark:border-dark-border/60 p-5 sm:p-6"
      } ${hovered ? "-translate-y-1 shadow-lg shadow-charcoal/6 dark:shadow-black/20" : ""}`}
    >
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        style={{ transformOrigin: "top" }}
      />

      <div className="flex items-start gap-4">
        <Avatar name={name} photo={photo} large={founder} />
        <div className="min-w-0 flex-1">
          <motion.span
            className="block text-[10px] uppercase tracking-[0.3em] text-brand/70 dark:text-brand-light/70 mb-1.5"
            animate={{ x: hovered ? 2 : 0 }}
            transition={{ duration: 0.25 }}
          >
            {tag}
          </motion.span>
          <p className={`font-medium text-charcoal dark:text-warm-white tracking-tight ${
            founder ? "text-lg" : "text-[0.94rem]"
          }`}>
            {name}
          </p>
          <motion.p
            className="text-xs text-charcoal/50 dark:text-warm-white/40 mt-1 leading-relaxed"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: hovered ? 1 : 0,
              height: hovered ? "auto" : 0,
            }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            {role}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default function QuienesSomos() {
  const directorRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: directorRef,
    offset: ["start end", "end start"],
  });
  const quoteY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <main>
      {/* ─── Hero — dramatic staggered entrance ─── */}
      <section className="pt-14 pb-16 sm:pt-20 md:pt-28 md:pb-24">
        <span className="mb-8 block text-sm uppercase tracking-[0.28em] text-charcoal/50 dark:text-warm-white/40">
          Quiénes Somos
        </span>
        <h1 className="font-serif text-[clamp(3.2rem,12vw,8rem)] leading-[0.90] tracking-tight font-normal text-charcoal dark:text-warm-white">
          <span className="block overflow-hidden pb-[0.15em]">
            <motion.span
              className="block"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Un equipo que
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.15em]">
            <motion.span
              className="block"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              transforma{" "}
              <span className="italic text-brand/85 dark:text-brand-light/85">
                visiones
              </span>
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.15em]">
            <motion.span
              className="block"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              en proyectos.
            </motion.span>
          </span>
        </h1>
      </section>

      {/* ─── Mission & Vision — asymmetric editorial layout ─── */}
      <section className="py-16 md:py-28 border-y border-border dark:border-dark-border">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          {/* Mission — dominant, takes 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <span className="text-xs uppercase tracking-widest text-charcoal/40 dark:text-warm-white/30 block mb-6">
              Misión
            </span>
            <p className="font-serif text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] tracking-tight text-charcoal dark:text-warm-white">
              Estructurar, desarrollar y gestionar proyectos inmobiliarios con excelencia.
            </p>
            <p className="mt-8 text-base leading-relaxed text-charcoal/70 dark:text-warm-white/60 max-w-lg sm:text-lg">
              Conectamos inversionistas y desarrolladores a través de modelos de
              gestión externa eficientes que optimizan recursos y maximizan la
              rentabilidad de cada proyecto.
            </p>
          </motion.div>

          {/* Vision — supporting sidebar with teal accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-4 md:col-start-9 relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand/30 dark:bg-brand/20 hidden md:block" />
            <div className="md:pl-8">
              <span className="text-xs uppercase tracking-widest text-charcoal/40 dark:text-warm-white/30 block mb-6">
                Visión
              </span>
              <p className="font-serif text-xl md:text-2xl leading-snug tracking-tight text-charcoal dark:text-warm-white">
                Ser reconocidos como la principal gestora inmobiliaria externa de Latinoamérica.
              </p>
              <p className="mt-6 text-base leading-relaxed text-charcoal/70 dark:text-warm-white/60">
                Distinguidos por nuestra capacidad estratégica, innovación en modelos
                de negocio y compromiso genuino con el éxito de nuestros clientes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Director's message — full-bleed immersive section ─── */}
      <div
        ref={directorRef}
        className="relative -mx-4 sm:-mx-6 lg:-mx-8 bg-charcoal dark:bg-dark-surface overflow-hidden"
      >
        {/* Subtle blueprint grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full fill-none"
            preserveAspectRatio="none"
          >
            <g stroke="currentColor" className="text-warm-white" strokeWidth="0.3">
              <line x1="0" y1="50" x2="200" y2="50" />
              <line x1="0" y1="100" x2="200" y2="100" />
              <line x1="0" y1="150" x2="200" y2="150" />
              <line x1="50" y1="0" x2="50" y2="200" />
              <line x1="100" y1="0" x2="100" y2="200" />
              <line x1="150" y1="0" x2="150" y2="200" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 items-center">
            {/* Director photo — large, prominent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="md:col-span-4 flex justify-center md:justify-start"
            >
              <div className="relative">
                <img
                  src={founders[0].photo}
                  alt="Rodrigo Tagle Manriquez"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover"
                />
                {/* Teal ring accent */}
                <div className="absolute -inset-3 rounded-full border border-brand/20" />
                <div className="absolute -inset-6 rounded-full border border-brand/8 hidden sm:block" />
              </div>
            </motion.div>

            {/* Quote — massive and editorial */}
            <div className="md:col-span-8">
              <motion.div style={{ y: quoteY }}>
                <span className="text-xs uppercase tracking-widest text-warm-white/30 block mb-8">
                  Palabras del Director Ejecutivo
                </span>

                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="block font-serif text-7xl md:text-[8rem] leading-none text-brand select-none -mb-4 md:-mb-8 origin-bottom-left"
                >
                  &ldquo;
                </motion.span>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-serif text-[clamp(1.6rem,4vw,2.8rem)] leading-[1.15] tracking-tight text-warm-white"
                >
                  La arquitectura es una respuesta al comportamiento humano —
                  cada espacio que diseñamos refleja cómo las personas viven,
                  sienten y se mueven.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 text-base leading-relaxed text-warm-white/50 max-w-2xl sm:text-lg"
                >
                  Sobrevivimos a los desafíos del mercado anticipando obstáculos
                  y convirtiéndolos en oportunidades. Somos un equipo diverso que
                  entrega soluciones colaborativas donde otros perciben solo
                  dificultades.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-10 flex items-center gap-4"
                >
                  <div className="h-px w-12 bg-brand/40" />
                  <div>
                    <p className="text-sm uppercase tracking-widest text-warm-white font-normal">
                      Rodrigo Tagle Manriquez
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-warm-white/40">
                      Arquitecto — Director Ejecutivo & Fundador
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Stat bar — confident positioning statement ─── */}
      <section className="py-10 md:py-14 border-b border-border dark:border-dark-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8"
        >
          {[
            { value: "34", label: "Proyectos" },
            { value: "7.882", label: "Viviendas" },
            { value: "4", label: "Países" },
            { value: "10", label: "Regiones" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="block font-serif text-[clamp(2.4rem,6vw,3.5rem)] tracking-tighter text-charcoal dark:text-warm-white leading-none">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-charcoal/40 dark:text-warm-white/30">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-16 md:py-24 border-b border-border dark:border-dark-border">
        <div className="flex flex-col gap-4 mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-base uppercase tracking-widest text-charcoal/70 dark:text-warm-white/50 block mb-6">
              Equipo
            </span>
            <h2 className="font-serif text-[clamp(2.4rem,7vw,3.7rem)] tracking-tight font-normal leading-[1.02] text-charcoal dark:text-warm-white">
              14 profesionales, una visión.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-charcoal/50 dark:text-warm-white/40 md:text-right">
            Pasa el cursor sobre cada perfil para conocer más
          </p>
        </div>

        {/* Founders — prominent row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
          {founders.map((f, i) => (
            <TeamCard
              key={f.name}
              name={f.name}
              tag={f.tag}
              role={f.role}
              photo={f.photo}
              index={i}
              founder
            />
          ))}
        </div>

        {/* Team — dynamic grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard
              key={member.name}
              name={member.name}
              tag={member.tag}
              role={member.role}
              photo={member.photo}
              index={i + 2}
            />
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-24">
        <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] leading-[1.02] tracking-tight font-normal text-charcoal dark:text-warm-white">
          ¿Quieres trabajar con nosotros?
        </h2>
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
