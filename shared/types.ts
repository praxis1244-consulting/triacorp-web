import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  projectType: z.enum([
    "desarrollo-inmobiliario",
    "gestion-proyecto",
    "arquitectura",
    "inversion",
    "otro",
  ]),
  message: z.string().min(10, "Mínimo 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
