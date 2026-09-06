import Certificate from "../component/Certificate";
import Skill from "../component/Skill";
import { certificates, techStack } from "../data/personalInfo";

export default function SkillsPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            Technical toolkit
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Skills for modern full-stack development.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Technologies used to create maintainable interfaces, APIs, data
            layers, and deployment workflows.
          </p>
        </div>

        <section className="mt-10" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="sr-only">
            Technical skills
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((skill) => (
              <Skill skill={skill} key={skill.id} />
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="certifications-heading">
          <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
                Credentials
              </p>
              <h2
                id="certifications-heading"
                className="mt-2 text-2xl font-bold text-slate-950"
              >
                Certifications & participation
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {certificates.map((certificate) => (
              <Certificate certificate={certificate} key={certificate.id} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
