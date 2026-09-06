import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { navs } from "../data/navs";
import { personal, resumeUrl } from "../data/personalInfo";
import NavButton from "./NavButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-violet-800 bg-violet-950 text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label={`${personal.name} home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 font-bold tracking-tight shadow-lg shadow-violet-950/30">
            RK
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold">{personal.name}</span>
            <span className="block text-xs text-violet-200">{personal.role}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center gap-1">
            {navs.map((nav) => (
              <li key={nav.link}>
                <NavButton {...nav} />
              </li>
            ))}
          </ul>
          <a
            href={resumeUrl}
            download="Rutik-Kale-Resume.pdf"
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-violet-950 transition-colors hover:bg-violet-100"
          >
            <FiDownload aria-hidden="true" />
            Download resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-violet-100 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-violet-800 transition-[max-height] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[32rem] border-t" : "max-h-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <ul className="space-y-1">
            {navs.map((nav) => (
              <li key={nav.link}>
                <NavButton {...nav} onNavigate={closeMenu} />
              </li>
            ))}
          </ul>
          <a
            href={resumeUrl}
            download="Rutik-Kale-Resume.pdf"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-violet-950"
          >
            <FiDownload aria-hidden="true" />
            Download resume
          </a>
        </div>
      </div>
    </nav>
  );
}
