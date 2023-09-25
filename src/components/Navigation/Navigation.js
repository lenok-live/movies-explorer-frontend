import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link
        className="navigation__link"
        to="/movies"
        title="Фильмы">
        Фильмы
      </Link>
      <Link
        className="navigation__link"
        to="/saved-movies"
        title="Сохранённые фильмы">
        Сохранённые фильмы
      </Link>
    </nav>
  );
}
