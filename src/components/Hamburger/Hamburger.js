// Hamburger - компонент отображения бургер-меню в Header
import "./Hamburger.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ProfileLink from "../ProfileLink/ProfileLink";

export default function Hamburger(props) {
  // const { onHandleHamburger } = props;
  // const onHandleHamburger = true;
  const ref = useRef(null);

  const toggleMenu = (ref) => {
    const {current} = ref;
    if(current.classList.contains('hidden')) {
      current.classList.remove('hidden');
      current.classList.add('visible');
    } else {
      current.classList.add('hidden');
      current.classList.remove('visible');
    }
  }

  const closeMenu = (ref) => {
    const { current } = ref;
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
      className: 'navigation__link'
    },
    {
      to: '/saved-movies',
      title: 'Сохраненные фильмы',
      className: 'navigation__link'
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
        className="header__burger-btn"
        id="burger"
        type="button"
        onClick={() => toggleMenu(ref)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
        <nav ref={ref} className="menu" id="menu">
          {
            routesList.map(route =>
              <Link key={route.to} onClick={() => closeMenu(ref)} to={route.to} className={route.className} title={route.title}>{route.title}</Link>
            )
          }
        </nav>
    </>
    // <button className="hamburger" type="button" onClick={onHandleHamburger} />
  );
}
