import Link from "next/link"
import { Star, Users, CreditCard, Zap, TrendingUp, Shield, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { PricingTier } from "../_data"

interface PricingCardProps {
  tier: PricingTier
}

export function PricingCard({ tier }: PricingCardProps) {
  const getFeatureIcon = (feature: string) => {
    if (feature.includes("testing") || feature.includes("money")) return CreditCard
    if (feature.includes("activation") || feature.includes("support")) return Zap
    if (feature.includes("scaling")) return TrendingUp
    if (feature.includes("collaboration")) return Users
    if (feature.includes("Dedicated")) return Shield
    return Check
  }

  return (
    <Card
      className={`relative ${
        tier.popular
          ? "border-primary shadow-lg"
          : tier.enterprise
            ? "border-orange-200 bg-gradient-to-br from-orange-50 to-background"
            : ""
      }`}
    >
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge
            className={
              tier.badge.className ||
              (tier.popular ? "bg-primary text-primary-foreground px-3 py-1" : "bg-orange-500 text-white px-3 py-1")
            }
          >
            {tier.popular && <Star className="w-3 h-3 mr-1" />}
            {tier.enterprise && <Users className="w-3 h-3 mr-1" />}
            {tier.badge.text}
          </Badge>
        </div>
      )}

      <CardHeader className={`text-center pb-6 ${tier.badge ? "pt-6" : ""}`}>
        <CardTitle className="text-xl">{tier.name}</CardTitle>
        <CardDescription>{tier.description}</CardDescription>
        <div className="mt-4">
          <div className="text-3xl font-bold">{tier.price}</div>
          <div className="text-2xl font-semibold text-primary mt-1">{tier.credits}</div>
          <div className="text-xs text-muted-foreground">{tier.pricePerCredit}</div>
          {tier.savings && (
            <Badge variant="secondary" className="mt-2">
              {tier.savings}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          {tier.features.map((feature, index) => {
            const IconComponent = getFeatureIcon(feature)
            return (
              <div key={index} className="flex items-center gap-2 text-sm">
                <IconComponent className="w-4 h-4 text-primary" />
                <span>{feature}</span>
              </div>
            )
          })}
        </div>

        <Button
          className={`w-full ${
            tier.enterprise
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : tier.buttonVariant === "outline"
                ? "bg-transparent"
                : ""
          }`}
          variant={tier.enterprise ? "default" : tier.buttonVariant}
          asChild
        >
          <Link href={tier.href}>{tier.buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
