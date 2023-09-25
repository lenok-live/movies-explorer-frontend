import "./NavTab.css";

export default function NavTab() {
  return (
    <nav className="navtab" aria-label="Навигация по сайту">
      <a href="#about-project" className="navtab__link">
        О проекте
      </a>
      <a href="#techs" className="navtab__link">
        Технологии
      </a>
      <a href="#about-me" className="navtab__link">
        Студент
      </a>
    </nav>
  );
}
