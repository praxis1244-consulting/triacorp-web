import { useDividerReveal } from "../hooks/useDividerReveal";

const countries = [
  {
    name: "Chile",
    flag: "\u{1F1E8}\u{1F1F1}",
    description: "Casa matriz — vivienda social, renta, proyectos comerciales e industriales.",
  },
  {
    name: "Panamá",
    flag: "\u{1F1F5}\u{1F1E6}",
    description: "Alianza con IKLP y Pacific Developers — desarrollo y renta residencial.",
  },
  {
    name: "Uruguay",
    flag: "\u{1F1FA}\u{1F1FE}",
    description: "Junto a Biosfera Austral — proyectos en José Ignacio, Punta del Este y Montevideo.",
  },
  {
    name: "Paraguay",
    flag: "\u{1F1F5}\u{1F1FE}",
    description: "Alianza con Singular Paraguay — renta residencial en zonas clave de Asunción.",
  },
];

export default function InternationalPresence() {
  const dividerRef = useDividerReveal<HTMLElement>();

  return (
    <section ref={dividerRef} className="py-12 divider-reveal">
      <p className="mb-8 text-center text-sm uppercase tracking-[0.24em] text-charcoal/60 dark:text-warm-white/50 sm:text-base sm:tracking-widest md:text-left">
        Presencia Internacional
      </p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8">
        {countries.map((c) => (
          <div key={c.name} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden>{c.flag}</span>
              <span className="text-sm font-medium uppercase tracking-widest text-charcoal dark:text-warm-white">
                {c.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-charcoal/60 dark:text-warm-white/50">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
