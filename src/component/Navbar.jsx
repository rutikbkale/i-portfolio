import title from "../assets/images/title.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center bg-violet-400 p-4 shadow-lg text-white">
        <div className="title">
          <img className="w-[135px] cursor-pointer" src={title} alt="Logo" />
        </div>
        <div className="links">
          <ul className="flex gap-6">
            <li className="text-xl px-3 py-2 cursor-pointer hover:text-violet-800 font-semibold transition duration-300 ease-in-out">
              <NavLink to={"/home"}>HOME</NavLink>
            </li>
            <li className="text-xl px-3 py-2 cursor-pointer hover:text-violet-800 font-semibold transition duration-300 ease-in-out">
              <NavLink to={"/about"}>ABOUT ME</NavLink>
            </li>
            <li className="text-xl px-3 py-2 cursor-pointer hover:text-violet-800 font-semibold transition duration-300 ease-in-out">
              <NavLink to={"/project"}>PROJECTS</NavLink>
            </li>
            <li className="text-xl px-3 py-2 cursor-pointer hover:text-violet-800 font-semibold transition duration-300 ease-in-out">
              <NavLink to={"/achievement"}>ACHIEVEMENTS</NavLink>
            </li>
            <li className="text-xl px-3 py-2 cursor-pointer hover:text-violet-800 font-semibold transition duration-300 ease-in-out">
              <NavLink to={"/contact"}>CONTACTS</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
