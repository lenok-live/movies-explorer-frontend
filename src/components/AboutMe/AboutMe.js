import "./AboutMe.css";
import avatar from "../../images/photo.jpg";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__wrapper">
          <h3 className="about-me__name">Елена</h3>
          <p className="about-me__job">Фронтенд-разработчик, 28 лет</p>

          <p className="about-me__description">
            Я родилась и живу в Рязани, закончила физико-математический
            факультет РГУ. У меня есть муж и сын. Я люблю слушать музыку, а ещё
            увлекаюсь бегом. Недавно начала кодить. Работала администратором в
            частной клинике. После того, как прошла курс по
            веб-разработке, начала искать свою первую работу в сфере IT.
          </p>

          <ul className="about-me__links">
            <li>
              <a
                className="about-me__link"
                href="https://vk.com/s7647"
                target="_blank"
                rel="noreferrer"
              >
                Vkontakte
              </a>
            </li>
            <li>
              <a
                className="about-me__link"
                href="https://github.com/lenok-live"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <img src={avatar} alt="Аватар студента" className="about-me__image" />
      </div>
    </section>
  );
}
