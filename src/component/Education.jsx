/* eslint-disable react/prop-types */
import { FiMapPin } from "react-icons/fi";

export default function Education({ education }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-violet-200 sm:p-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-lg font-bold text-slate-950 sm:text-xl">
            {education.degree}
          </h3>
          <p className="mt-1 font-medium text-violet-700">
            {education.institution}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <FiMapPin aria-hidden="true" />
            {education.location}
          </p>
        </div>
        <p className="whitespace-nowrap text-sm font-semibold text-slate-600">
          {education.duration}
        </p>
      </div>
      <div className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-600">
        CGPA: <span className="font-bold text-slate-900">{education.grade}</span>
      </div>
    </article>
  );
}
