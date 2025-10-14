// components/auth/AuthForm.tsx
"use client";


import * as React from "react";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup, signin } from "@/app/actions/auth";
import { OAuthButtons } from "./oauth-buttons";
import { PasswordField } from "./password-field";


// Shared UI that posts to a Server Action following Next.js docs
export function AuthForm({ mode }: { mode: "signin" | "signup" }) {
    const action = mode === "signup" ? signup : signin;
    const [state, formAction, pending] = useActionState(action, {
        status: "idle" as "idle" | "error",
        message: "",
        fieldErrors: {} as Record<string, string | undefined>,
    });

    return (
        <form action={formAction} className="space-y-6">
            <OAuthButtons />


            <div className="grid gap-4">
                {mode === "signup" && (
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" type="text" />
                        {state.fieldErrors?.name ? (
                            <p className="text-xs text-destructive">{state.fieldErrors.name}</p>
                        ) : null}
                    </div>
                )}


                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" autoComplete="email" />
                    {state.fieldErrors?.email ? (
                        <p className="text-xs text-destructive">{state.fieldErrors.email}</p>
                    ) : null}
                </div>

                {/* For consistency with our PasswordField, set the name to 'password' */}
                <PasswordField />
                {state.fieldErrors?.password ? (
                    <p className="text-xs text-destructive">{state.fieldErrors.password}</p>
                ) : null}


                {mode === "signup" && (
                    <div className="grid gap-2">
                        <Label htmlFor="confirm">Confirm password</Label>
                        <Input id="confirm" name="confirm" type="password" />
                        {state.fieldErrors?.confirm ? (
                            <p className="text-xs text-destructive">{state.fieldErrors.confirm}</p>
                        ) : null}
                    </div>
                )}
            </div>


            {state.status === "error" && state.message ? (
                <p className="text-sm text-destructive">{state.message}</p>
            ) : null}


            <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
        </form>
    );
}
