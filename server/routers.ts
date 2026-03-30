import { TRPCError } from "@trpc/server";
import { initTRPC } from "@trpc/server";
import { contactFormSchema } from "../shared/types.js";
import { sendContactEmail } from "./email.js";

const t = initTRPC.create();

export const appRouter = t.router({
  submitContact: t.procedure.input(contactFormSchema).mutation(async ({ input }) => {
    try {
      await sendContactEmail(input);
      return {
        success: true,
        message: "Mensaje recibido. Nos pondremos en contacto pronto.",
      };
    } catch (error) {
      console.error("Contact submission failed:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message:
          "No pudimos enviar tu solicitud en este momento. Escríbenos a contacto@triacorp.cl.",
      });
    }
  }),
});

export type AppRouter = typeof appRouter;
