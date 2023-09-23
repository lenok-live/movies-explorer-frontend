import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import Icon from "../../images/profile-icon.svg";

export default function Navigation() {
  return (
    <>
      <nav className="navigation__links">
        <NavLink to="/movies" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
          Сохранённые фильмы
        </NavLink>
      </nav>
      <Link to="/profile" className="header__profile-link">
        <p className="header__profile-link-title">Аккаунт</p>
        <img className="header__profile-link-icon" src={Icon} alt="Иконка" />
      </Link>
    </>
  );
}
