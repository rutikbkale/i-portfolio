/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function NavButton({ link, text, end, onNavigate }) {
  return (
    <NavLink
      to={link}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        `block rounded-lg px-3 py-2 text-sm font-medium transition-colors lg:px-2 xl:px-3 ${
          isActive
            ? "bg-white/15 text-white"
            : "text-violet-100 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      {text}
    </NavLink>
  );
}
