import title from "../assets/images/title.png";
import { navs } from "../data/navs";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center bg-violet-400 p-4 shadow-lg text-white">
        <div className="title">
          <img className="w-[135px] cursor-pointer" src={title} alt="Logo" />
        </div>
        <div className="links">
          <ul className="flex gap-6">
            {navs.map((nav, index) => (
              <NavButton link={nav.link} text={nav.text} key={index} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
