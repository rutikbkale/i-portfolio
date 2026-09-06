import { summary } from "../data/personalInfo";

export default function Summary() {
  return (
    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-base leading-8 text-slate-600 sm:text-lg">{summary}</p>
      <p className="mt-5 text-base leading-8 text-slate-600">
        My recent work spans reusable React interfaces, NestJS services,
        authentication and role-based access, WebSocket features, payment
        workflows, cloud integrations, and data-driven applications.
      </p>
    </div>
  );
}
