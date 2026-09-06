import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import profilePic from "../assets/images/profile-pic.jpeg";
import { personal } from "../data/personalInfo";

export const Profile = () => {
  return (
    <aside className="self-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-24">
      <img
        className="mx-auto aspect-square w-full max-w-[20rem] rounded-2xl object-cover"
        src={profilePic}
        width="480"
        height="480"
        alt={`Portrait of ${personal.name}`}
        loading="lazy"
        decoding="async"
      />
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-slate-950">{personal.name}</h2>
        <p className="mt-1 font-medium text-violet-700">{personal.role}</p>
      </div>

      <div className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-sm">
        <a
          href={personal.emailHref}
          className="flex items-center gap-3 rounded-lg p-2 text-slate-600 transition-colors hover:bg-violet-50 hover:text-violet-800"
        >
          <FiMail className="flex-none" aria-hidden="true" />
          <span className="min-w-0 break-all">{personal.email}</span>
        </a>
        <a
          href={personal.phoneHref}
          className="flex items-center gap-3 rounded-lg p-2 text-slate-600 transition-colors hover:bg-violet-50 hover:text-violet-800"
        >
          <FiPhone className="flex-none" aria-hidden="true" />
          <span>{personal.phone}</span>
        </a>
        <p className="flex items-center gap-3 p-2 text-slate-600">
          <FiMapPin className="flex-none" aria-hidden="true" />
          <span>{personal.location}</span>
        </p>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="rounded-lg p-2.5 text-slate-500 transition-colors hover:bg-violet-50 hover:text-violet-700"
        >
          <FaGithub size={20} aria-hidden="true" />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="rounded-lg p-2.5 text-slate-500 transition-colors hover:bg-violet-50 hover:text-violet-700"
        >
          <FaLinkedin size={20} aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
};
