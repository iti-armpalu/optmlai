import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { productStory } from "../_data"

export function ProductStorySection() {
    const data = productStory

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 sm:px-6 lg:px-8">
                <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <Badge variant={data.badge.variant} className="w-fit">
                                <data.badge.icon className="mr-1 h-3 w-3" aria-hidden="true" />
                                {data.badge.label}
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                {data.heading.before}
                                <span className="text-primary">{data.heading.highlight}</span>
                                {data.heading.after ?? null}
                            </h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">{data.subheading}</p>
                        </div>
                        <div className="space-y-4">
                            {data.points.map((p) => (
                                <div key={p.id} className="flex items-start gap-3">
                                    <div
                                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${p.badge.bgClass}`}
                                    >
                                        <p.badge.icon className={`h-4 w-4 ${p.badge.textClass}`} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className={`mb-1 font-semibold ${p.tone === "negative" ? "text-red-600" : "text-green-600"}`}>
                                            {p.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{p.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Card className="w-full max-w-md shadow-2xl">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <data.compareCard.title.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                                    {data.compareCard.title.label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    {data.compareCard.rows.map((row, i) => (
                                        <div key={i} className={`flex items-center justify-between rounded-lg p-3 ${row.bgClass}`}>
                                            <span className="text-sm font-medium">{row.label}</span>
                                            <span className={`text-sm ${row.textClass}`}>{row.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
