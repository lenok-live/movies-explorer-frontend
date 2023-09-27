import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
// import NavigationMobile from "../NavigationMobile/NavigationMobile";
import Hamburger from "../Hamburger/Hamburger";

export default function Header(props) {
  const loggedIn = true;

  return (
    <>
      {/* {loggedIn ? (
        <AuthMobile
          hamburger={hamburger}
          onHandleHamburger={onHandleHamburger}
        />
      ) : null} */}
      <header className="header">
        <a aria-current="page" href="/">
          <img className="header__logo" src={headerLogo} alt="Логотип" />
        </a>
        {loggedIn ? (
          <>
            {/* <Hamburger onHandleHamburger={onHandleHamburger} /> */}
            <div className='header__wrapper'>
            <Navigation />
            <Link to="/profile" className="header__link" title="Аккаунт">
              Аккаунт
            </Link>
            </div>
            <Hamburger />
            {/* <Link className="header__burger-menu">
              <button
                className="header__burger-btn"
                onClick={onHandleHamburger}
              />
            </Link> */}

          </>
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

            {/* <Link className="header__burger-menu">
              <button
                className="header__burger-btn"
                onClick={onHandleHamburger}
              />
            </Link> */}
          </>
        )}
      </header>
    </>
  );
}
