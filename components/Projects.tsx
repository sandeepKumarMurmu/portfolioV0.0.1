import { projects } from "@/data/portfolio";

const linkLabels: Record<string, string> = {
  github: "GitHub",
  demo: "Live Demo",
  caseStudy: "Case Study",
};

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-14 sm:py-20">
      <div className="container-x">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.title} className="card flex flex-col">
              <h3 className="text-xl font-semibold">
                Project {i + 1}: {p.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{p.subtitle}</p>
              <p className="mt-4">{p.summary}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px]">
                {p.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => <li key={t} className="chip">{t}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-5 border-t border-line pt-4 text-sm font-medium">
                {Object.entries(p.links).map(([key, href]) => (
                  <a key={key} href={href} className="text-chipink hover:underline" target="_blank" rel="noopener noreferrer">
                    {linkLabels[key] ?? key}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
