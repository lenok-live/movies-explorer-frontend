import "./Header.css";
import React, {useContext, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation";
// import NavigationMobile from "../NavigationMobile/NavigationMobile";
import Hamburger from "../Hamburger/Hamburger";
import ProfileLink from "../ProfileLink/ProfileLink";
import {routes} from "../../constrains/routes";
import {UserContext} from "../../context/user";

export default function Header() {
  const navigate = useLocation();

  const {isLoggedIn} = useContext(UserContext);

  // const isLoggedIn = true;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if( navigate.pathname === '/signin' || navigate.pathname === '/signup' || navigate.pathname === '/no-results'  || !routes.some(route => route.path === navigate.pathname)) {
    return
  }

  function handlePopupClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="header" title="header">
        <Logo />
        {isLoggedIn ? (
          <nav className="header__container">
            {isMobile
            ? <Hamburger />
            : <div className='header__wrapper'>
                <Navigation />
                <ProfileLink />
              </div>
            }
          </nav>
        ) : (
          <>
            <nav className="auth-links">
              <Link
                to="/signup"
                className="auth-links__link"
                title="Регистрация"
              >
                Регистрация
              </Link>
              <Link
                to="/signin"
                className="auth-links__link auth-links__link_login"
                title="Войти"
              >
                Войти
              </Link>
            </nav>
          </>
        )}
      </header>
    </>
  );
}
