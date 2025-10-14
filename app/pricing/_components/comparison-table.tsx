import { X } from "lucide-react"
import { comparisonFeatures } from "../_data"

export function ComparisonTable() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Compare Credit Packs</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See what you can accomplish with each credit pack.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-background rounded-lg">
            <thead>
              <tr className="border-b">
                <th className="text-left p-6 font-semibold">Features</th>
                <th className="text-center p-6 font-semibold">Free Tier</th>
                <th className="text-center p-6 font-semibold">Starter Pack</th>
                <th className="text-center p-6 font-semibold">Standard Pack</th>
                <th className="text-center p-6 font-semibold">Growth Pack</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className="border-b hover:bg-muted/50">
                  <td className="p-6 font-medium">{feature.name}</td>
                  <td
                    className={`text-center p-6 ${
                      feature.name === "Price" && feature.freeTier === "Free"
                        ? "font-bold text-green-500"
                        : feature.name === "Price"
                          ? "font-bold"
                          : ""
                    }`}
                  >
                    {feature.freeTier === "❌" ? (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    ) : (
                      feature.freeTier
                    )}
                  </td>
                  <td className={`text-center p-6 ${feature.name === "Price" ? "font-bold" : ""}`}>
                    {feature.starterPack}
                  </td>
                  <td className={`text-center p-6 ${feature.name === "Price" ? "font-bold" : ""}`}>
                    {feature.standardPack}
                  </td>
                  <td className={`text-center p-6 ${feature.name === "Price" ? "font-bold" : ""}`}>
                    {feature.growthPack}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
