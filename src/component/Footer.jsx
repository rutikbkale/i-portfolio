import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personal } from "../data/personalInfo";

const socialLinks = [
  { label: "GitHub", href: personal.github, icon: FaGithub },
  { label: "LinkedIn", href: personal.linkedin, icon: FaLinkedin },
  { label: "LeetCode", href: personal.leetcode, icon: SiLeetcode },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8">
        <p className="text-center text-sm text-slate-600 sm:text-left">
          © {new Date().getFullYear()} {personal.name}.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-violet-50 hover:text-violet-700"
            >
              <Icon size={19} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
