import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { personal } from "../data/personalInfo";

const contactMethods = [
  {
    label: "Email",
    value: personal.email,
    href: personal.emailHref,
    icon: FiMail,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: personal.phoneHref,
    icon: FiPhone,
  },
  {
    label: "Location",
    value: personal.location,
    icon: FiMapPin,
  },
];

const socialLinks = [
  { label: "GitHub", href: personal.github, icon: FaGithub },
  { label: "LinkedIn", href: personal.linkedin, icon: FaLinkedin },
  { label: "LeetCode", href: personal.leetcode, icon: SiLeetcode },
];

export default function ContactPage() {
  return (
    <main className="flex flex-1 items-center">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Let’s build something useful.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            The simplest way to reach me is by email. You can also call or
            connect with me through the developer profiles below.
          </p>
          <a
            href={personal.emailHref}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white shadow-lg shadow-violet-700/20 transition-colors hover:bg-violet-800"
          >
            <FiMail aria-hidden="true" />
            Send an email
          </a>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">Contact details</h2>
          <div className="mt-5 space-y-3">
            {contactMethods.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-violet-100 text-violet-800">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-slate-500">{label}</span>
                    <span className="block break-words font-semibold text-slate-800">
                      {value}
                    </span>
                  </span>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-violet-200 hover:bg-violet-50"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 p-4"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="text-sm font-semibold text-slate-700">Developer profiles</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-800"
                >
                  <Icon aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
