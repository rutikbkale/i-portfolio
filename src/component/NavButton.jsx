/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function NavButton({ link, text }) {
  return (
    <li className="text-xl px-3 py-2 cursor-pointer hover:text-violet-800 font-semibold transition duration-300 ease-in-out">
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? "text-violet-800" : "")}
      >
        {text}
      </NavLink>
    </li>
  );
}
