import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { demoInfo, scheduleDemoHero } from "./_data";


export default function ScheduleDemoPage() {
  const h = scheduleDemoHero;
  const di = demoInfo;
  const HeaderIcon = di.whatToExpect.headerIcon;
  const BulletIcon = di.highlights.bulletIcon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">{h.heading}</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">{h.subheading}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Demo Info */}
            <div className="space-y-8">
              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HeaderIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                    {di.whatToExpect.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {di.whatToExpect.points.map((p) => {
                    const Icon = p.icon;
                    return (
                      <div key={p.id} className="flex items-start gap-3">
                        <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                        <div>
                          <h4 className="font-medium">{p.title}</h4>
                          <p className="text-sm text-muted-foreground">{p.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle>{di.highlights.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {di.highlights.items.map((label, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <BulletIcon className="h-4 w-4 text-green-500" aria-hidden="true" />
                        {label}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>



            {/* Booking Form */}
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle>Book Your Demo</CardTitle>
                <CardDescription>Fill out the form below and well schedule your personalized demo.</CardDescription>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
