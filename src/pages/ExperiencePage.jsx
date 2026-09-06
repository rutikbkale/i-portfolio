import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { experiences } from "../data/personalInfo";

export default function ExperiencePage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            Experience
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Building across the full product stack.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Practical experience delivering responsive interfaces, secure APIs,
            real-time workflows, and third-party integrations.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="border-b border-slate-200 bg-violet-950 p-6 text-white sm:p-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="flex items-center gap-2 text-sm font-medium text-violet-200">
                      <FiBriefcase aria-hidden="true" />
                      {experience.duration}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold">{experience.title}</h2>
                    <p className="mt-1 text-lg text-violet-100">
                      {experience.company}
                    </p>
                  </div>
                  <p className="flex items-center gap-2 text-sm text-violet-100">
                    <FiMapPin aria-hidden="true" />
                    {experience.location}
                  </p>
                </div>
                <p className="mt-5 max-w-3xl leading-7 text-violet-100">
                  {experience.summary}
                </p>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_18rem]">
                <ul className="space-y-4">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 leading-7 text-slate-600"
                    >
                      <span
                        className="mt-2.5 h-2 w-2 flex-none rounded-full bg-violet-600"
                        aria-hidden="true"
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <aside>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                    Core technologies
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-violet-50 px-3 py-2 text-sm font-semibold text-violet-800"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </aside>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
