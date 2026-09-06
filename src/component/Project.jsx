/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiCode } from "react-icons/fi";

export default function Project({ project, index }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-900/5">
      {project.image ? (
        <div className="flex h-44 items-center justify-center overflow-hidden bg-slate-100 p-5">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className="flex h-44 items-center justify-between bg-violet-950 p-7 text-white">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-300">
              Project {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 max-w-[12rem] text-2xl font-bold leading-tight">
              Digital health records
            </p>
          </div>
          <FiCode className="text-violet-300" size={48} aria-hidden="true" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-xl font-bold text-slate-950">{project.name}</h2>
        <p className="mt-3 flex-1 leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
          {project.techStack.map((tech) => (
            <span
              className="rounded-lg bg-violet-50 px-2.5 py-1.5 text-xs font-semibold text-violet-800"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800"
          >
            <span className="inline-flex items-center gap-2">
              <FaGithub aria-hidden="true" />
              View repository
            </span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
