import { metrics, profile } from "@/data/portfolio";

const flow = ["Request", "Validate", "Kafka event", "Ledger", "Settled"];

export default function Hero() {
  return (
    <section id="about" className="border-b border-line">
      <div className="container-x grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Hi, I&rsquo;m {profile.name}
          </h1>
          <p className="mt-5 text-lg">
            {profile.title} {profile.summary.charAt(0).toLowerCase() + profile.summary.slice(1)}
          </p>
          <p className="mt-3 text-muted">{profile.experienceLine}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={profile.resume} download className="btn-primary">Download Resume / CV</a>
            <a href="#projects" className="btn-ghost">View projects</a>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label}>
                <dt className="text-2xl font-bold text-chipink">{m.value}</dt>
                <dd className="text-sm text-muted">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Decorative panel: a simplified payment flow, as in the wireframe's code/diagram art */}
        <div aria-hidden="true" className="card hidden font-mono text-xs text-muted md:block">
          <div className="mb-4 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <p>POST /payments</p>
          <p className="pl-4">idempotencyKey: &quot;ord_1042&quot;</p>
          <p className="pl-4">amount: 2500.00 INR</p>
          <ol className="mt-6 grid grid-cols-5 gap-2">
            {flow.map((step, i) => (
              <li key={step} className="relative rounded-md border border-line bg-chip px-1 py-3 text-center text-[11px] text-chipink">
                {step}
                {i < flow.length - 1 && <span className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 text-muted">›</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
