import { competitiveAdvantage } from "../_data"

export function CompetitiveAdvantageSection() {
  const data = competitiveAdvantage

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{data.heading}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {data.subheading}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-background rounded-lg max-w-4xl mx-auto">
            <thead>
              <tr className="border-b">
                <th className="text-left p-6 font-semibold">Feature</th>
                <th className="text-center p-6 font-semibold">Traditional Tools</th>
                <th className="text-center p-6 font-semibold text-primary">optml.ai</th>
              </tr>
            </thead>
            <tbody>
              {data.comparisonTable.map((row, index) => (
                <tr key={index} className="border-b hover:bg-muted/50">
                  <td className="p-6 font-medium">{row.feature}</td>
                  <td className="text-center p-6 text-muted-foreground">{row.traditional}</td>
                  <td className="text-center p-6 font-medium text-primary">{row.optml}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
