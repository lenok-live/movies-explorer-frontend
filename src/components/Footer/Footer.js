import "./Footer.css";
import { useLocation } from "react-router-dom";
import { routes } from "../../constrains/routes";

export default function Footer() {
  const path = useLocation().pathname;

  if (path === "/signup" || path === "/signin" || path === "/profile") {
    return;
  } else if (!routes.some((item) => item.path === path)) {
    return;
  }

  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>

      <div className="footer__container">
        <p className="footer__text">&copy; 2023</p>

        <ul className="footer__container-links">
          <li>
            <a
              className="footer__link"
              href="https://practicum.yandex.ru"
              title="Яндекс.Практикум"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/lenok-live"
              title="Github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
