export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-semibold text-blue-600">
          AI-POWERED PLACEMENT PREPARATION
        </p>

        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Prepare smarter for your next placement.
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Assess your placement readiness, identify skill gaps, practice
          interviews, improve your resume, and get personalized career
          guidance.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/assessment"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Start Assessment
          </a>

          <a
            href="/coach"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Talk to AI Coach
          </a>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          title="Placement Assessment"
          description="Understand your current placement readiness."
          href="/assessment"
        />

        <FeatureCard
          title="AI Career Coach"
          description="Get personalized guidance based on your goals."
          href="/coach"
        />

        <FeatureCard
          title="Interview Practice"
          description="Practice common technical and behavioral questions."
          href="/interview"
        />

        <FeatureCard
          title="Resume Review"
          description="Find opportunities to improve your resume."
          href="/resume"
        />
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h2 className="font-semibold text-slate-900">{title}</h2>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <span className="mt-4 inline-block text-sm font-medium text-blue-600">
        Open →
      </span>
    </a>
  );
}