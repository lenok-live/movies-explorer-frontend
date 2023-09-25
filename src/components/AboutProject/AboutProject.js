import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__heading">О проекте</h2>
      <div className="about-project__table">
        <div className="about-project__wrapper">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__wrapper">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__graphic">
        <p className="about-project__development">1 неделя</p>
        <p className="about-project__development">4 недели</p>
        <p className="about-project__development">Back-end</p>
        <p className="about-project__development">Front-end</p>
      </div>
    </section>
  );
}
