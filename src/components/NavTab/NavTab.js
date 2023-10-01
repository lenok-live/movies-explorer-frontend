import "./NavTab.css";

export default function NavTab() {
  return (
    <nav className="navtab" aria-label="Навигация по сайту">
      <ul className="navtab__list">
        <li className="navtab__link">
          <a href="#about-project">
            О проекте
          </a>
        </li>
        <li className="navtab__link">
          <a href="#techs">
            Технологии
          </a>
        </li>
        <li className="navtab__link">
          <a href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}
