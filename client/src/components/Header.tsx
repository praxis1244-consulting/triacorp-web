import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTheme } from "../hooks/useTheme";
import SectionLink from "./SectionLink";

const navLinks = [
  { label: "Nosotros", href: "/quienes-somos" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Atelier", href: "/atelier" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      if (location === "/") {
        const el = document.querySelector(href.substring(1));
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  const renderLink = (link: { label: string; href: string }, mobile = false) => {
    const cls = mobile
      ? "text-lg uppercase tracking-widest text-charcoal/70 hover:text-brand transition-colors dark:text-warm-white/60 dark:hover:text-brand"
      : "text-sm uppercase tracking-widest text-charcoal/70 hover:text-brand transition-colors dark:text-warm-white/60 dark:hover:text-brand";

    if (link.href.startsWith("/#")) {
      return (
        <a
          key={link.href}
          href={link.href}
          className={cls}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(link.href);
          }}
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        href={link.href}
        className={cls}
        onClick={() => setMenuOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between gap-4 bg-warm-white/90 backdrop-blur-sm transition-[padding] duration-300 ease-out dark:bg-dark-bg/90 ${
        scrolled ? "py-3 md:py-4" : "py-5 md:py-7"
      }`}
    >
      <Link
        href="/"
        className={`shrink-0 font-serif font-semibold tracking-tight text-charcoal transition-[font-size] duration-300 ease-out dark:text-warm-white ${
          scrolled ? "text-[1.4rem] sm:text-2xl" : "text-[1.65rem] sm:text-3xl"
        }`}
      >
        TRIA<span className="text-brand">CORP</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-5 lg:gap-8">
        {navLinks.map((link) => renderLink(link))}
        <button
          onClick={toggle}
          aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal/60 transition-colors hover:text-brand dark:text-warm-white/60 dark:hover:text-brand"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <SectionLink
          href="/#contacto"
          onClick={() => setMenuOpen(false)}
          className="cta-button bg-brand text-warm-white px-5 py-2.5 text-sm uppercase tracking-widest hover:bg-brand-dark"
        >
          Contactar
        </SectionLink>
      </nav>

      {/* Mobile controls */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={toggle}
          aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-charcoal/70 transition-colors hover:text-brand dark:border-dark-border dark:text-warm-white/60 dark:hover:text-brand"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-charcoal transition-colors hover:text-brand dark:border-dark-border dark:text-warm-white dark:hover:text-brand"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full z-50 mt-3 rounded-2xl border border-border bg-warm-white/95 px-5 py-6 shadow-xl backdrop-blur md:hidden dark:border-dark-border dark:bg-dark-bg/95"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => renderLink(link, true))}
              <SectionLink
                href="/#contacto"
                className="bg-brand text-warm-white px-5 py-3.5 text-sm uppercase tracking-widest hover:bg-brand-dark transition-colors text-center"
                onClick={() => setMenuOpen(false)}
              >
                Contactar
              </SectionLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
