import Project from "../component/Project";
import { projects } from "../data/personalInfo";

export default function ProjectPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            Selected work
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Projects built around real workflows.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A focused selection covering digital health records, blood-bank
            operations, and secure contact management.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Project project={project} index={index} key={project.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
