import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  Check,
  Eye,
  Zap,
  CheckCircle,
  TrendingUp,
  Clock,
  BookKey,
  type LucideIcon
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { caseStudies, getCaseStudyBySlug, getOtherCaseStudies } from "../_data"

// const iconMap = {
//   Building2,
//   Package,
//   Store,
//   CreditCard,
//   Eye,
// }

const getIcon = (iconName: string) => {
  const icons: Record<string, LucideIcon> = {
    Building2,
    Clock,
    Eye,
    Zap,
    TrendingUp,
    BookKey
  }
  return icons[iconName] || Building2
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    notFound()
  }

  const otherStudies = getOtherCaseStudies(slug)


  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">

        {/* Breadcrumb */}
        <section className="w-full py-6">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br`}>
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge variant="secondary" className={`w-fit`}>
                    {study.industry}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {study.title}

                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {study.descriptionLong}
                  </p>
                </div>

                {/* Key Metrics */}
                {/* <div className="grid grid-cols-2 gap-4">
                  {caseStudy.metrics.slice(0, 4).map((metric, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className={`text-2xl font-bold ${colors.metric} mb-1`}>{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div> */}
              </div>

              {study.image && (
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <Image
                      src={study.image.src || "/placeholder.svg"}
                      alt={study.image.alt}
                      width={600}
                      height={400}
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Company Profile & Timeline Section */}
        <section className="w-full py-12 md:py-16 border-b bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              {/* Company Profile */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Company Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{study.companyProfile.name}</h4>
                    <p className="text-sm text-muted-foreground">{study.companyProfile.subtitle}</p>
                  </div>
                  <Separator />
                  <div className="space-y-3 text-sm">
                    {study.companyProfile.details.map((detail, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{detail.label}</span>
                        <span className="font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Project Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {study.timeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 ${item.status === "success" ? "bg-green-500" : "bg-primary"} rounded-full mt-2`}
                        ></div>
                        <div>
                          <p className="font-medium text-sm">{item.week}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              {/* Objective Section */}
              <div className="space-y-4">
                <Badge variant="green" className={"w-fit mb-4"}>
                  The Objective
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter">{study.objective.title}</h2>
                <p className="text-lg text-muted-foreground">{study.objective.description}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {study.objective.goals.map((goal, index) => (
                    <div key={index} className="p-6 rounded-lg border bg-background hover:shadow-sm transition-shadow">
                      <h4 className="font-semibold mb-2">{goal.title}</h4>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* The Challenge Section */}
              <div className="space-y-4">
                <Badge variant="green" className={"w-fit mb-4"}>
                  The Challenge
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter">{study.challenge.title}</h2>
                <p className="text-lg text-muted-foreground">{study.challenge.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-lg border bg-background hover:shadow-sm transition-shadow">
                    <h4 className="font-semibold mb-2">{study.challenge.keyProblems.title}</h4>
                    <ul className="text-sm text-muted-foreground space-y-3">
                      {study.challenge.keyProblems.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg border bg-background hover:shadow-sm transition-shadow">
                    <h4 className="font-semibold mb-2">{study.challenge.businessImpact.title}</h4>
                    <ul className="text-sm text-muted-foreground space-y-3">
                      {study.challenge.businessImpact.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              {/* The Solution Section */}
              <div className="space-y-4">
                <Badge variant="green" className={"w-fit mb-4"}>
                  The Solution
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter">{study.solution.title}</h2>
                <p className="text-lg text-muted-foreground">{study.solution.description}</p>

                <div className="space-y-6">
                  {study.solution.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="grid md:grid-cols-1 gap-3">
                          {step.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="green" className={"w-fit mb-4"}>
                The Results
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">{study.results.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{study.results.description}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {study.results.metrics.map((metric, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className={`text-4xl font-bold text-green-500 mb-2`}>{metric.value}</div>
                    <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                    <div className={`text-xs text-green-500`}>{metric.change}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </section>

        {/* Key Learnings */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="green" className={"w-fit mb-4"}>
                Key Learnings & Insights
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">{study.keyLearnings.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{study.keyLearnings.description}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {study.keyLearnings.categories.map((category, index) => {
                const Icon = getIcon(category.icon)
                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className={`w-5 h-5`} />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>


        {/* More Case Studies */}

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">More Success Stories</h2>
              <p className="text-muted-foreground md:text-lg">Explore how other companies achieved results</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {otherStudies.map((relatedStudy) => (
                <Card key={relatedStudy.slug} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 space-y-4">
                    <Badge variant="secondary" className="w-fit">
                      {relatedStudy.industry}
                    </Badge>
                    <h3 className="text-xl font-bold">{relatedStudy.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{relatedStudy.descriptionShort}</p>
                    <div className="flex items-center justify-end pt-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/case-studies/${relatedStudy.slug}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Achieve Similar Results?</h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your free trial today and see how optml.ai can transform your content performance.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/schedule-demo">
                    <Calendar className="w-4 h-4" />
                    Schedule Demo
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/60">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  14-day free trial
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  No credit card required
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  5-minute setup
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
