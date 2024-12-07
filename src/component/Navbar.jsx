import title from "../assets/images/title.png";
import { navs } from "../data/navs";
import NavButton from "./NavButton";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-violet-400 shadow-lg text-white sticky top-0">
      <div className="flex justify-between items-center p-4">
        <div className="title">
          <img className="w-[135px] cursor-pointer" src={title} alt="Logo" />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {navs.map((nav, index) => (
              <NavButton link={nav.link} text={nav.text} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
          {navs.map((nav, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left hover:text-gray-300"
              >
                <NavButton link={nav.link} text={nav.text} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
