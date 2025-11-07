import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { howToUseExtension } from "../_data"

export function HowToUseSection() {
    const data = howToUseExtension

    return (
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-6 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{data.heading}</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {data.subheading}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {data.steps.map((step) => (
                        <Card key={step.number} className="relative overflow-hidden">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <span className="text-green-600 font-bold">{step.number}</span>
                                    </div>
                                    <Badge variant="secondary">{step.badge}</Badge>
                                </div>
                                <CardTitle className="text-xl">{step.title}</CardTitle>
                                <CardDescription>{step.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    {step.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <feature.icon className="h-5 w-5 text-primary" />
                                            <span className="text-sm">{feature.label}</span>
                                        </div>
                                    ))}
                                </div>
                                {step.buttonLabel ? (
                                    <Button className="w-full bg-transparent" variant="outline">
                                        {step.buttonLabel}
                                    </Button>
                                ) : (
                                    <div className="bg-muted rounded-lg p-3">
                                        <p className="text-xs text-muted-foreground">{step.note}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-muted rounded-full px-6 py-3">
                        <data.footer.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">{data.footer.label}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
