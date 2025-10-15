// components/FeatureCard.tsx
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export type FeatureBullet = {
  label: string;
  icon?: LucideIcon;
  iconClass?: string;
};

export type FeatureBadge = {
  label: string;
  variant?: "default" | "secondary" | "outline" | "destructive";
};

export type FeatureCTA = {
  label: string;
  href?: string; // if omitted, render a plain button
  variant?: "default" | "secondary" | "outline" | "destructive" | "ghost" | "link";
  size?: "sm" | "default" | "lg" | "icon";
};

export type FeatureCardProps = {
  icon: LucideIcon;                 // big top-left icon
  title: string;
  description: string;
  bullets: FeatureBullet[];
  badge?: FeatureBadge;             // optional for landing page
  cta?: FeatureCTA;                 // optional for landing page
  className?: string;
  /** Override to tweak vertical alignment across different grids */
  descriptionMinHeightClass?: string; // e.g. "min-h-[48px]"
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  bullets,
  badge,
  cta,
  className,
  descriptionMinHeightClass = "min-h-[48px]",
}: FeatureCardProps) {
  return (
    <Card className={`relative overflow-hidden ${className ?? ""}`}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-primary/10 p-2">
            <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>

          {badge ? (
            <Badge variant={badge.variant ?? "outline"}>{badge.label}</Badge>
          ) : null}
        </div>

        <CardTitle className="text-xl">{title}</CardTitle>

        <CardDescription className={descriptionMinHeightClass}>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-2 text-sm">
          {bullets.map((b, idx) => {
            const BulletIcon = b.icon;
            return (
              <li className="flex items-center gap-2" key={idx}>
                {BulletIcon ? (
                  <BulletIcon
                    className={`h-4 w-4 ${b.iconClass ?? ""}`}
                    aria-hidden="true"
                  />
                ) : null}
                {b.label}
              </li>
            );
          })}
        </ul>

        {cta ? (
          <div className="pt-4">
            {cta.href ? (
              <Button
                asChild
                variant={cta.variant ?? "outline"}
                size={cta.size ?? "sm"}
                className="w-full bg-transparent"
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ) : (
              <Button
                variant={cta.variant ?? "outline"}
                size={cta.size ?? "sm"}
                className="w-full bg-transparent"
              >
                {cta.label}
              </Button>
            )}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
