import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <a
        href="https://github.com/lenok-live/how-to-learn"
        title="Статический сайт"
        className="portfolio__link"
        target='_blank'
        rel="noreferrer"
      >
        Статический сайт
      </a>
      <a
        href="https://lenok-live.github.io/russian-travel"
        title="Адаптивный сайт"
        className="portfolio__link"
        target='_blank'
        rel="noreferrer"
      >
        Адаптивный сайт
      </a>
      <a
        href="https://mesto.sultanova.nomoreparties.co"
        title="Одностраничное приложение"
        className="portfolio__link"
        target='_blank'
        rel="noreferrer"
      >
        Одностраничное приложение
      </a>
    </section>
  );
}
