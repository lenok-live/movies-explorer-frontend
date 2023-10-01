import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link
        className="menu__navigation-link"
        to="/movies"
        title="Фильмы">
        Фильмы
      </Link>
      <Link
        className="menu__navigation-link"
        to="/saved-movies"
        title="Сохранённые фильмы">
        Сохранённые фильмы
      </Link>
    </nav>
  );
}
