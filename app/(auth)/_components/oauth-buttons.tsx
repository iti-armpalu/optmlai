// components/auth/OAuthButtons.tsx
"use client";


import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


export function OAuthButtons() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-11 bg-transparent" type="button" onClick={() => alert("TODO: Google OAuth")}>Continue with Google</Button>
                <Button variant="outline" className="h-11 bg-transparent" type="button" onClick={() => alert("TODO: GitHub OAuth")}>Continue with GitHub</Button>
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>
        </div>
    );
}