import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <ul className="portfolio__links">
        <li>
          <a
            href="https://github.com/lenok-live/how-to-learn"
            title="Статический сайт"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
        </li>
        <li>
          <a
            href="https://lenok-live.github.io/russian-travel"
            title="Адаптивный сайт"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lenok-live/react-mesto-api-full-gha"
            title="Одностраничное приложение"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}
