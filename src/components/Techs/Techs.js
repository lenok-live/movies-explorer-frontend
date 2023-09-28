import "./Techs.css";

export default function Techs() {
  return (
    <section id="techs" className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__skill">
          <a
            href="https://htmlbook.ru/html"
            title="webref.ru/html"
            target="blank"
          >
            HTML
          </a>
        </li>
        <li className="techs__skill">
          <a
            href="https://developer.mozilla.org/ru/docs/Web/CSS"
            title="webref.ru/css"
            target="blank"
          >
            CSS
          </a>
        </li>
        <li className="techs__skill">
          <a
            href="https://learn.javascript.ru"
            title="learn.javascript.ru"
            target="blank"
          >
            JS
          </a>
        </li>
        <li className="techs__skill">
          <a
            href="https://ru.legacy.reactjs.org/"
            title="ru.reactjs.org"
            target="blank"
          >
            React
          </a>
        </li>
        <li className="techs__skill">
          <a href="https://git-scm.com" title="git-scm.com" target="blank">
            Git
          </a>
        </li>
        <li className="techs__skill">
          <a
            href="https://expressjs.com"
            title="expressjs.com"
            target="blank"
          >
            Express.js
          </a>
        </li>
        <li className="techs__skill">
          <a
            href="https://www.mongodb.com"
            title="mongodb.com"
            target="blank"
          >
            mongoDB
          </a>
        </li>
      </ul>
    </section>
  );
}
