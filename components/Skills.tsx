// import { skills } from "@/data/portfolio";

// export default function Skills() {
//   return (
//     <section id="skills" className="border-b border-line py-14 sm:py-20">
//       <div className="container-x max-w-4xl">
//         <h2 className="section-title">Technical Skills</h2>
//         <dl className="space-y-5">
//           {skills.map((s) => (
//             <div key={s.group} className="grid gap-2 sm:grid-cols-[220px_1fr] sm:gap-6">
//               <dt className="font-semibold sm:pt-1 sm:text-right">{s.group}:</dt>
//               <dd>
//                 <ul className="flex flex-wrap gap-2">
//                   {s.items.map((i) => <li key={i} className="chip">{i}</li>)}
//                 </ul>
//               </dd>
//             </div>
//           ))}
//         </dl>
//       </div>
//     </section>
//   );
// }
import type { CSSProperties } from "react";
import { primaryStack, skills } from "@/data/portfolio";

const icons: Record<string, React.ReactNode> = {
  code: <path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  cloud: <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5a4.25 4.25 0 0 1-.5 8.5H7z" />,
  layers: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" transform="translate(0 -1.5)" />,
};

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-14 sm:py-20">
      <div className="container-x max-w-5xl">
        <h2 className="section-title !mb-3">Technical Skills</h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted">
          The tools I reach for when building reliable backend and payment systems.
        </p>

        {/* Most-used strip */}
        <div className="mb-8 rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <p className="mb-3 text-center text-sm font-medium text-muted">Most used day to day</p>
          <ul className="flex flex-wrap justify-center gap-2.5">
            {primaryStack.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 rounded-full border border-chipink/40 bg-chip px-4 py-1.5 text-sm font-semibold text-chipink"
              >
                <span className="h-2 w-2 rounded-full bg-chipink" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Category cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((s) => (
            <article
              key={s.group}
              className="skill-card group relative overflow-hidden rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-[rgb(var(--c)/0.55)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6"
              style={{ "--c-dark": s.color.dark, "--c-light": s.color.light } as CSSProperties}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-[rgb(var(--c))]" aria-hidden="true" />
              <span
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[rgb(var(--c)/0.14)] blur-2xl"
                aria-hidden="true"
              />

              <div className="relative flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[rgb(var(--c)/0.14)] text-[rgb(var(--c))]">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icons[s.icon]}
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-tight">{s.group}</h3>
                  <p className="text-sm text-muted">{s.blurb}</p>
                </div>
              </div>

              <ul className="relative mt-5 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-[rgb(var(--c)/0.3)] bg-[rgb(var(--c)/0.1)] px-3 py-1.5 text-sm font-medium text-[rgb(var(--c))] transition hover:bg-[rgb(var(--c)/0.2)]"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}