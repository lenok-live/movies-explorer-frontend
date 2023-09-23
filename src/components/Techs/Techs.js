import './Techs.css';

export default function Techs() {
    return (
        <section id='techs' className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <h3 className='techs__subtitle'>7 технологии</h3>
            <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className='techs__list'>
                <a href='https://htmlbook.ru/html' title='webref.ru/html' className='techs__skill' target="_ blank">HTML</a>
                <a href='https://developer.mozilla.org/ru/docs/Web/CSS' title='webref.ru/css' className='techs__skill' target="_ blank">CSS</a>
                <a href='https://learn.javascript.ru' title='learn.javascript.ru' className='techs__skill' target="_ blank">JS</a>
                <a href='https://ru.legacy.reactjs.org/' title='ru.reactjs.org' className='techs__skill' target="_ blank">React</a>
                <a href='https://git-scm.com' title='git-scm.com' className='techs__skill' target="_ blank">Git</a>
                <a href='https://expressjs.com' title='expressjs.com' className='techs__skill' target="_ blank">Express.js</a>
                <a href='https://www.mongodb.com' title='mongodb.com' className='techs__skill' target="_ blank">mongoDB</a>
            </div>
        </section>
    );
}
