import "./Header.css";
import React from "react";
import headerLogo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import { useState } from 'react';

export default function Header({ isAuth }) {

  function NavigationAuth() {
    return (
      <section className="auth-links">
        <nav className="auth-links__list">
          <NavLink to="/signup" className="auth-links__link">
            Регистрация
          </NavLink>
          <NavLink
            to="/signin"
            className="auth-links__link auth-links__link_login">
            Войти
          </NavLink>
        </nav>
      </section>
    );
  }

  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  function handleMobNav() {
    setIsMobNavOpen(!isMobNavOpen);
  }

  return (
    <header className="header">
      <a aria-current="page" href="/">
        <img className="header-logo" src={headerLogo} alt="Логотип" />
      </a>

      { isAuth ? <Navigation /> : NavigationAuth() }
      { isAuth ? <button className='header__burger-btn' onClick={handleMobNav} /> : '' }
    </header>
  );
}
