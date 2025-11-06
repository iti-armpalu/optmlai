import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  Rocket,
  Users,
  TrendingUp,
  Cpu,
  Shield,
  Lock,
  Video,
  Smartphone,
  DollarSign,
  Package,
  BarChart,
} from "lucide-react"

interface KeyLearningsProps {
  categories: {
    icon: string
    title: string
    items: string[]
  }[]
}

const iconMap = {
  rocket: Rocket,
  users: Users,
  "trending-up": TrendingUp,
  cpu: Cpu,
  shield: Shield,
  lock: Lock,
  video: Video,
  smartphone: Smartphone,
  "dollar-sign": DollarSign,
  package: Package,
  "bar-chart": BarChart,
}

export function KeyLearnings({ categories }: KeyLearningsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap] || Rocket
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-accent" />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
