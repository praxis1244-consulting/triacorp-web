import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/types";
import { trpc } from "../lib/trpc";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const steps = [
  { field: "name", question: "Para empezar, tu nombre", placeholder: "Nombre completo" },
  { field: "email", question: "Tu correo electrónico", placeholder: "email@ejemplo.com" },
  { field: "phone", question: "Un teléfono de contacto", placeholder: "+56 9 1234 5678 (opcional)" },
  { field: "projectType", question: "Qué tipo de proyecto?", placeholder: "" },
  { field: "message", question: "Cuéntanos más", placeholder: "Describe brevemente lo que necesitas..." },
] as const;

const projectTypes = [
  { value: "desarrollo-inmobiliario" as const, label: "Desarrollo Inmobiliario" },
  { value: "gestion-proyecto" as const, label: "Gestión de Proyecto" },
  { value: "arquitectura" as const, label: "Arquitectura" },
  { value: "inversion" as const, label: "Inversión" },
  { value: "otro" as const, label: "Otro" },
];

const inputClass =
  "w-full border border-warm-white/20 bg-warm-white/10 px-4 py-4 text-lg text-warm-white placeholder-warm-white/40 backdrop-blur-sm transition-colors focus:border-warm-white/60 focus:outline-none md:text-xl";

export default function ContactMixed() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const mutation = trpc.submitContact.useMutation({
    onSuccess: () => setSubmitted(true),
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const currentStep = steps[step];
  const isLast = step === steps.length - 1;

  const goNext = async () => {
    const valid = await trigger(currentStep.field as keyof ContactFormData);
    if (valid) {
      if (isLast) {
        handleSubmit(onSubmit)();
      } else {
        setStep((s) => s + 1);
      }
    }
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 border-t border-border dark:border-dark-border">
      <div className="grid grid-cols-1 overflow-hidden rounded-[1.75rem] lg:grid-cols-5">
        {/* Left info panel */}
        <div className="flex flex-col justify-between bg-charcoal p-7 text-warm-white sm:p-8 md:p-12 lg:col-span-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-warm-white/50 block mb-8">
              Contacto
            </span>
            <h2 className="mb-6 font-serif text-[clamp(2.4rem,8vw,3.8rem)] tracking-tight font-normal leading-[0.98]">
              Conversemos
              <br />
              sobre tu
              <br />
              proyecto.
            </h2>
            <p className="text-base leading-relaxed text-warm-white/60">
              Cuéntanos tu visión y recibirás una propuesta de gestión
              personalizada en menos de 24 horas. Sin compromiso.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-6 md:mt-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-warm-white/40 mb-1">
                Oficina
              </p>
              <p className="text-base">Nueva Costanera 4040, Piso -1</p>
              <p className="text-base text-warm-white/70">Vitacura, Santiago</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-warm-white/40 mb-1">
                Email
              </p>
              <a
                href="mailto:contacto@triacorp.cl"
                className="text-base hover:text-brand transition-colors"
              >
                contacto@triacorp.cl
              </a>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex min-h-[420px] flex-col justify-center bg-brand p-7 sm:p-8 md:min-h-[480px] md:p-12 lg:col-span-3">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-10 text-center sm:py-12"
            >
              <h3 className="font-serif text-3xl md:text-4xl mb-4 text-warm-white">
                Mensaje Recibido
              </h3>
              <p className="text-lg text-warm-white/80">
                Te contactaremos dentro de las próximas 24 horas hábiles.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between h-full">
              <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-center sm:gap-4">
                <span className="text-xs uppercase tracking-widest text-warm-white/60 sm:shrink-0">
                  Paso {step + 1} de {steps.length}
                </span>
                <div className="flex-1 h-px bg-warm-white/20 relative">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-warm-white"
                    animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="mb-6 font-serif text-2xl tracking-tight font-normal leading-tight text-warm-white sm:mb-8 md:text-3xl">
                      {currentStep.question}
                    </h3>

                    {currentStep.field === "projectType" ? (
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {projectTypes.map((pt) => (
                          <label
                            key={pt.value}
                            className="flex cursor-pointer items-center gap-3 border border-warm-white/20 px-4 py-3 transition-colors hover:border-warm-white/50 has-[:checked]:border-warm-white has-[:checked]:bg-warm-white/10"
                          >
                            <input
                              type="radio"
                              value={pt.value}
                              {...register("projectType")}
                              className="sr-only"
                            />
                            <div className="w-3.5 h-3.5 rounded-full border-2 border-warm-white/40 flex items-center justify-center shrink-0" />
                            <span className="text-base text-warm-white">{pt.label}</span>
                          </label>
                        ))}
                      </div>
                    ) : currentStep.field === "message" ? (
                      <textarea
                        rows={3}
                        placeholder={currentStep.placeholder}
                        className={`${inputClass} resize-none`}
                        {...register("message")}
                      />
                    ) : (
                      <input
                        type={currentStep.field === "email" ? "email" : currentStep.field === "phone" ? "tel" : "text"}
                        placeholder={currentStep.placeholder}
                        className={inputClass}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            goNext();
                          }
                        }}
                        {...register(currentStep.field as keyof ContactFormData)}
                      />
                    )}

                    {errors[currentStep.field as keyof ContactFormData] && (
                      <p className="text-warm-white/90 text-sm mt-3 font-medium">
                        {errors[currentStep.field as keyof ContactFormData]?.message || "Campo requerido"}
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="flex h-12 w-12 items-center justify-center border border-warm-white/30 transition-colors hover:border-warm-white"
                  >
                    <ArrowLeft size={18} className="text-warm-white" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={goNext}
                  disabled={mutation.isPending}
                  className="flex min-h-12 w-full items-center justify-center gap-3 bg-charcoal px-6 py-3 text-sm uppercase tracking-[0.22em] text-warm-white transition-colors hover:bg-charcoal/80 disabled:opacity-70 sm:w-auto sm:px-8"
                >
                  {isLast
                    ? mutation.isPending
                      ? "Enviando..."
                      : "Enviar Mensaje"
                    : "Continuar"}
                  <ArrowRight size={16} />
                </button>
                {currentStep.field === "phone" && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    className="ml-0 text-sm text-warm-white/60 transition-colors hover:text-warm-white sm:ml-2"
                  >
                    Omitir
                  </button>
                )}
                {mutation.error && (
                  <p className="w-full text-sm text-warm-white/90">
                    {mutation.error.message}
                  </p>
                )}
              </div>
              <p className="mt-4 text-xs text-warm-white/40">
                Tu información es confidencial · Respuesta en menos de 24 hrs
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
