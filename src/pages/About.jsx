import Education from "../component/Education";
import Summary from "../component/Summary";
import { Profile } from "../component/Profile";
import { educations } from "../data/personalInfo";

export default function About() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            About
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Full-stack engineering focused on usability, security, and
            maintainability.
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Profile />
          <div className="space-y-10">
            <section aria-labelledby="summary-heading">
              <h2 id="summary-heading" className="text-2xl font-bold text-slate-950">
                Professional summary
              </h2>
              <Summary />
            </section>

            <section aria-labelledby="education-heading">
              <h2 id="education-heading" className="text-2xl font-bold text-slate-950">
                Education
              </h2>
              <div className="mt-5 space-y-4">
                {educations.map((education) => (
                  <Education education={education} key={education.id} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
