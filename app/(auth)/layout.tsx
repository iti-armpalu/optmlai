// app/(auth)/layout.tsx
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: {
        default: "Account | optml.ai",
        template: "%s | YourApp",
    },
    description: "Access your account on YourApp.",
};


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
            <div className="w-full max-w-md">
                {children}
            </div>
        </div>
    );
}