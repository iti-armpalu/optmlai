// components/auth/PasswordField.tsx
"use client";


import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";


export function PasswordField({ id = "password" }: { id?: string }) {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                </Link>
            </div>
            <div className="relative">
                <Input id={id} name={id} type={showPassword ? "text" : "password"} required />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                </Button>
            </div>
        </div>
    );
}