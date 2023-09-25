import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import AuthMobile from "../AuthMobile/AuthMobile";
// import Hamburger from "../Hamburger/Hamburger";

export default function Header(props) {
  // const { hamburger, onHandleHamburger } = props;
  const hamburger = true;
  const onHandleHamburger = true;
  const loggedIn = false;

  return (
    <>
    { loggedIn ? (
              <AuthMobile
                  hamburger={hamburger}
                  onHandleHamburger={onHandleHamburger}
              />
          ) : null}
      <header className="header">
        <a aria-current="page" href="/">
          <img className="header__logo" src={headerLogo} alt="Логотип" />
        </a>

        {loggedIn ? (
          <>
            {/* <Hamburger onHandleHamburger={onHandleHamburger} /> */}
            <Navigation />
            <Link
              to="/profile"
              className="header__link"
              title="Аккаунт"
              >
                Аккаунт
            </Link>
          </>
        ) : (
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
        )}
      </header>
    </>
  );
}
