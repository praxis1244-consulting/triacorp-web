import { Link } from "wouter";
import SectionLink from "./SectionLink";

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-dark-border bg-charcoal dark:bg-dark-surface text-warm-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
          <div className="md:col-span-2 max-w-xl">
            <span className="text-2xl font-serif font-semibold tracking-tight text-warm-white">
              TRIA<span className="text-brand">CORP</span>
            </span>
            <p className="mt-2 text-sm text-warm-white/40">
              Planificación & Gestión
            </p>
            <p className="mt-4 text-warm-white/60 max-w-md">
              Estructuramos, desarrollamos y gestionamos proyectos inmobiliarios
              con excelencia. Presencia en Chile, Panamá, Uruguay y Paraguay.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-warm-white/40 mb-4">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/quienes-somos"
                className="hover:text-brand transition-colors"
              >
                Quiénes Somos
              </Link>
              <SectionLink
                href="/#servicios"
                className="hover:text-brand transition-colors"
              >
                Servicios
              </SectionLink>
              <Link
                href="/proyectos"
                className="hover:text-brand transition-colors"
              >
                Proyectos
              </Link>
              <Link
                href="/atelier"
                className="hover:text-brand transition-colors"
              >
                Atelier
              </Link>
              <SectionLink
                href="/#contacto"
                className="hover:text-brand transition-colors"
              >
                Contacto
              </SectionLink>
            </nav>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-warm-white/40 mb-4">
              Servicios
            </h4>
            <nav className="flex flex-col gap-3">
              <span>Arquitectura</span>
              <span>Gestión Inmobiliaria</span>
              <span>Estructuración</span>
              <span>Ventas & Marketing</span>
              <span>Legal</span>
              <span>Corretaje</span>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-warm-white/10 pt-8 text-left sm:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-warm-white/40">
            &copy; {new Date().getFullYear()} TRIACORP. Todos los derechos
            reservados.
          </p>
          <p className="text-sm text-warm-white/40">
            Nueva Costanera 4040, Vitacura, Santiago
          </p>
        </div>
      </div>
    </footer>
  );
}
