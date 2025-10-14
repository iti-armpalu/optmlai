// lib/validations/auth.ts
import { z } from "zod";


export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});


export const signUpSchema = z
    .object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
        confirm: z.string().min(6),
    })
    .refine((data) => data.password === data.confirm, {
        message: "Passwords must match",
        path: ["confirm"],
    });


export type SignInValues = z.infer<typeof signInSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;