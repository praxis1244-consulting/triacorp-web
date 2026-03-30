import { motion } from "framer-motion";
import { useDividerReveal } from "../hooks/useDividerReveal";

const featured = [
  {
    title: "Arquitectura & Desarrollo",
    description:
      "Desde el análisis normativo hasta la recepción final. Diseñamos proyectos que cumplen estándares regulatorios y superan expectativas de mercado.",
  },
  {
    title: "Gestión Inmobiliaria",
    description:
      "Supervisión, monitoreo y control integral. Coordinación técnica, gestión de permisos y evaluación económica de cada etapa del desarrollo.",
  },
];

const supporting = [
  {
    title: "Estructuración",
    description:
      "Articulamos los aspectos técnicos, legales y financieros. Desarrollamos cartas Gantt y gestionamos financiamiento propio, crediticio o de fondos de inversión.",
  },
  {
    title: "Ventas & Marketing",
    description:
      "Estudio de mercado, branding, estrategia de precios y canales de venta. Posicionamos cada proyecto para maximizar su absorción comercial.",
  },
  {
    title: "Legal",
    description:
      "Revisión de títulos, contratos de compraventa, constitución de sociedades, vehículos de inversión y poderes. Todo el respaldo jurídico que tu proyecto necesita.",
  },
  {
    title: "Corretaje",
    description:
      "Intermediación profesional entre compradores y vendedores. Coordinación de firmas, supervisión de pagos y asistencia legal hasta el cierre.",
  },
];

export default function Services() {
  const dividerRef = useDividerReveal<HTMLElement>();

  return (
    <section ref={dividerRef} id="servicios" className="py-16 md:py-24 divider-reveal">
      <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <span className="text-base uppercase tracking-widest text-charcoal/70 dark:text-warm-white/50 block mb-6">
            Servicios Inmobiliarios
          </span>
          <h2 className="font-serif text-[clamp(2.4rem,7vw,3.7rem)] tracking-tight font-normal leading-[1.02] text-charcoal dark:text-warm-white">
            Tu visión,
            <br />
            nuestro know–how.
          </h2>
        </div>
        <p className="max-w-lg text-base leading-relaxed text-charcoal/70 dark:text-warm-white/60 sm:text-lg">
          El sector inmobiliario ya no se gestiona con intuición. Estructuramos
          y desarrollamos proyectos con metodología, análisis y ejecución
          rigurosa — para que tu inversión rinda lo que debe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
        {featured.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-warm-gray dark:bg-dark-surface p-8 sm:p-10 md:p-12 flex flex-col justify-between min-h-[260px] border-l-2 border-brand"
          >
            <h3 className="font-serif text-[clamp(2rem,5vw,2.6rem)] tracking-tight font-normal leading-tight text-charcoal dark:text-warm-white">
              {service.title}
            </h3>
            <p className="text-base leading-relaxed text-charcoal/70 dark:text-warm-white/60 mt-8 max-w-lg sm:text-lg">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {supporting.map((service) => (
          <div
            key={service.title}
            className="py-8 border-t border-border dark:border-dark-border"
          >
            <h3 className="font-serif text-xl tracking-tight font-normal mb-4 text-charcoal dark:text-warm-white">
              {service.title}
            </h3>
            <p className="text-base leading-relaxed text-charcoal/65 dark:text-warm-white/55">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
