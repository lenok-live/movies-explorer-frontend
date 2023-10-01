// Hamburger - компонент отображения бургер-меню в Header
import "./Hamburger.css";
import {useRef, useState} from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ProfileLink from "../ProfileLink/ProfileLink";

export default function Hamburger(props) {
  // const { onHandleHamburger } = props;
  // const onHandleHamburger = true;
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (ref) => {
    const {current} = ref;
    if(current.classList.contains('hidden') || !current.classList.contains('visible')) {
      current.classList.remove('hidden');
      current.classList.add('visible');
      setIsOpen(true);
    } else {
      current.classList.add('hidden');
      setIsOpen(false)
      current.classList.remove('visible');
    }
  }

  const closeMenu = (ref) => {
    const { current } = ref;
    setIsOpen(false)
    current.classList.add('hidden');
    current.classList.remove('visible');
  }

  const routesList = [
    {
      to: '/',
      title: 'Главная',
      className: 'menu__profile'
    },
    {
      to: '/movies',
      title: 'Фильмы',
      className: 'menu__navigation-link'
    },
    {
      to: '/saved-movies',
      title: 'Сохраненные фильмы',
      className: 'menu__navigation-link'
    },
    {
      to: '/profile',
      title: 'Аккаунт',
      className: 'header__link'
    }
  ]


  return (
    <>
      <button
        className={`header__burger-btn ${isOpen ? 'open' : 'close'}`}
        id="burger"
        type="button"
        onClick={() => toggleMenu(ref)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <section className={`mobile-nav ${isOpen ? 'mobile-nav_active' : ''}`}>
        <nav ref={ref} className="menu" id="menu">
          <ul className='menu__list'>
            {
            routesList.map(route =>
              <li>
              <Link key={route.to} onClick={() => closeMenu(ref)} to={route.to} className={`${route.className} `} title={route.title}>{route.title}</Link>
              </li>
            )
          }
          </ul>


        </nav>
      </section>

    </>
    // <button className="hamburger" type="button" onClick={onHandleHamburger} />
  );
}
