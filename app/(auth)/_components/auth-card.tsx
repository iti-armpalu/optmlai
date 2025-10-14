// components/auth/AuthCard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function AuthCard({
    title,
    subtitle,
    children,
    footer,
}: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}) {
    return (
        <Card className="border-0 shadow-2xl">
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                {subtitle ? (
                    <CardDescription>{subtitle}</CardDescription>
                ) : null}
            </CardHeader>
            <CardContent className="space-y-6">
                {children}
                <Separator />
                {footer}
            </CardContent>
        </Card>
    );
}