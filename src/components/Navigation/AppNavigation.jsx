import css from "./AppNavigation.module.css"
import { NavLink } from "react-router-dom";
import clsx from 'clsx';

const getActiveLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getActiveLink}>Home</NavLink>
      <NavLink to="/movies" className={getActiveLink}>Movies</NavLink>      
    </nav>
  );
}
