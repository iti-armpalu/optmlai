import { notFound } from "next/navigation";
import { caseStudies } from "../_data"; // your case study list

type CaseStudyPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return notFound();

  return (
    <main className="container mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-24">
      <article className="space-y-8">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">{study.title}</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {study.description}
          </p>
        </header>

        <section className="prose prose-neutral dark:prose-invert mx-auto">
          <p>test</p>
        </section>
      </article>
    </main>
  );
}
