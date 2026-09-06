import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import homeProfile from "../assets/images/home-profile.webp";
import {
  expertise,
  personal,
  resumeUrl,
  summary,
} from "../data/personalInfo";

export default function Home() {
  return (
    <main className="flex flex-1 items-center overflow-hidden">
      <section className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-800">
            {personal.currentTitle} · {personal.location}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            Building reliable web applications—from intuitive interfaces to
            scalable APIs.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-2" aria-label="Primary skills">
            {expertise.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white shadow-lg shadow-violet-700/20 transition-colors hover:bg-violet-800"
            >
              View projects
              <FiArrowRight aria-hidden="true" />
            </Link>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:border-violet-300 hover:bg-violet-50"
            >
              <FiDownload aria-hidden="true" />
              View resume
            </a>
            <a
              href={personal.emailHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-violet-800 transition-colors hover:bg-violet-50"
            >
              <FiMail aria-hidden="true" />
              Contact me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <span className="mr-2 text-sm text-slate-500">Find me on</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white hover:text-violet-700"
            >
              <FaGithub size={21} aria-hidden="true" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white hover:text-violet-700"
            >
              <FaLinkedin size={21} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-violet-200/50 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white p-5 shadow-2xl shadow-violet-900/10 sm:p-8">
            <img
              src={homeProfile}
              width="724"
              height="703"
              alt="Developer working at a desktop computer"
              className="mx-auto h-auto w-full max-w-md"
              fetchPriority="high"
            />
            <div className="mt-4 rounded-2xl bg-violet-950 p-5 text-white">
              <p className="text-sm font-medium text-violet-200">Currently at</p>
              <p className="mt-1 text-lg font-semibold">Mitroz Technologies</p>
              <p className="mt-1 text-sm text-violet-100">
                Full-stack development · Jan 2025 – Present
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
