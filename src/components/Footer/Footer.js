import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>

      <div className='footer__container'>
        <p className='footer__text'>&copy; 2023</p>

        <div className='footer__container-link'>
          <a
            className='footer__link'
            href='https://practicum.yandex.ru'
            title='Яндекс.Практикум'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            className='footer__link'
            href='https://github.com/lenok-live'
            title='Github'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
