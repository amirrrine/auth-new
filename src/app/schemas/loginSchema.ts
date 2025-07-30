import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/, {
    message: "شماره باید با 09 شروع شود و شامل 11 رقم باشد.",
  }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
