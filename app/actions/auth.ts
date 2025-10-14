// app/actions/auth.ts
"use server";


import { redirect } from "next/navigation";
// import { cookies } from "next/headers";
import { signInSchema, signUpSchema } from "@/lib/validations/auth";
import { createSession, deleteSession } from "@/lib/session";


// Example: replace with your real DB calls
async function findUserByEmail(email: string) {
    // TODO query your database
    console.log(email);
    return null as null | { id: string; email: string; passwordHash: string; name?: string };
}
async function createUser(input: { name: string; email: string; password: string }) {
    // TODO hash password and insert user
    return { id: "u_123", email: input.email };
}
async function verifyPassword(_hash: string, _password: string) {
    // TODO compare hash with password (e.g., bcrypt.compare)
    console.log(_hash, _password);
    return true;
}

type FormState = { status: "idle" | "error"; message?: string; fieldErrors?: Record<string, string | undefined> };


export async function signup(prevState: FormState, formData: FormData): Promise<FormState> {
    const raw = Object.fromEntries(formData.entries());
    const parsed = signUpSchema.safeParse(raw);
    if (!parsed.success) {
        const fe: Record<string, string> = {};
        Object.entries(parsed.error.flatten().fieldErrors).forEach(([k, v]) => {
            if (v?.[0]) fe[k] = v[0];
        });
        return { status: "error", message: "Please fix the errors", fieldErrors: fe };
    }


    const { name, email, password } = parsed.data;


    // 3. Create a user or call your auth provider
    const existing = await findUserByEmail(email);
    if (existing) return { status: "error", message: "Email already in use", fieldErrors: { email: "Email already in use" } };


    const user = await createUser({ name, email, password });


    // 4. Create session (stateless cookie)
    await createSession(user.id);


    // 5. Redirect
    redirect("/");
}


export async function signin(prevState: FormState, formData: FormData): Promise<FormState> {
    const raw = Object.fromEntries(formData.entries());
    const parsed = signInSchema.safeParse(raw);
    if (!parsed.success) {
        const fe: Record<string, string> = {};
        Object.entries(parsed.error.flatten().fieldErrors).forEach(([k, v]) => {
            if (v?.[0]) fe[k] = v[0];
        });
        return { status: "error", message: "Please fix the errors", fieldErrors: fe };
    }


    const { email, password } = parsed.data;
    const user = await findUserByEmail(email);
    if (!user) return { status: "error", message: "Invalid credentials" };


    const ok = await verifyPassword(user.passwordHash, password);
    if (!ok) return { status: "error", message: "Invalid credentials" };


    await createSession(user.id);
    redirect("/");
}


export async function signout() {
    await deleteSession();
    redirect("/signin");
}
