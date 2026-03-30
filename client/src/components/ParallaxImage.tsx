import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollImage from "./ScrollImage";

export default function ParallaxImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);

  return (
    <section ref={ref} className="py-8 border-t border-border">
      <div className="relative flex h-[360px] w-full items-center justify-center overflow-hidden text-center sm:h-[460px] md:h-[620px]">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-x-0 -top-[15%] z-0 w-full h-[130%]"
        >
          <ScrollImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2200&h=1400&fit=crop&q=80"
            fallbackSrc="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2200&h=1400&fit=crop&q=80"
            alt="Arquitectura contemporánea — proyecto inmobiliario TRIACORP"
            className="w-full h-full"
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-charcoal/35" />
        <div className="relative z-10 px-4 text-warm-white sm:px-6">
          <span className="mb-4 block text-sm uppercase tracking-[0.24em] sm:text-base sm:tracking-widest">
            Nuestros Proyectos
          </span>
          <h2 className="font-serif text-[clamp(2.8rem,10vw,6rem)] tracking-tight font-normal leading-[0.95]">
            Arquitectura que
            <br />
            Transforma
          </h2>
        </div>
      </div>
    </section>
  );
}
