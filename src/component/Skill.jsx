/* eslint-disable react/prop-types */
export default function Skill({ skill }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-violet-200">
      <h2 className="text-lg font-bold text-slate-950">{skill.title}</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {skill.tech.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-violet-100 bg-violet-50 px-3 py-2 text-sm font-medium text-violet-800"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
