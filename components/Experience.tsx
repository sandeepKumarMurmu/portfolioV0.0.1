import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-14 sm:py-20">
      <div className="container-x max-w-4xl">
        <h2 className="section-title">Work Experience</h2>
        <ol className="relative ml-2 border-l-2 border-line">
          {experience.map((job, i) => (
            <li key={job.company} className="relative pb-10 pl-6 last:pb-0 sm:pl-8">
              <span
                className={`absolute -left-[9px] top-3 h-4 w-4 rounded-full border-2 border-chipink ${i === 0 ? "bg-chipink" : "bg-bg"}`}
              />
              <div className="flex gap-4">
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-[10px] font-bold text-white"
                  style={{ background: job.badge.bg }}
                  aria-hidden="true"
                >
                  {job.badge.text}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug">
                    {job.company}
                    <span className="block text-base font-normal text-muted sm:inline">
                      <span className="hidden sm:inline"> | </span>{job.role}
                    </span>
                  </h3>
                  <p className="text-sm text-muted">{job.period}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] sm:ml-[60px]">
                {job.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
