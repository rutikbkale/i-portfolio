/* eslint-disable react/prop-types */
import { FiAward } from "react-icons/fi";

export default function Certificate({ certificate }) {
  return (
    <article className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-violet-200">
      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-violet-100 text-violet-800">
        <FiAward size={22} aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-lg font-bold text-slate-950">{certificate.title}</h3>
        <p className="mt-1 font-medium text-violet-700">{certificate.issuer}</p>
        <p className="mt-2 text-sm text-slate-500">{certificate.date}</p>
      </div>
    </article>
  );
}
