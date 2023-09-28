import "./Profile.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Profile() {
  const [isInEditMode, setIsInEditMode] = React.useState(true);

  function switchEditMode(evt) {
    evt.preventDefault();
    setIsInEditMode((state) => !state);
  }

  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, Студент!</h1>

          <form className="profile__form">
            <label className="profile__input-container">
              <span className="profile__input-span">Имя</span>
              <input
                type="text"
                className="profile__input"
                name="name"
                minLength="2"
                maxLength="30"
                required={true}
                placeholder="Лена"
                {...(!isInEditMode ? { disabled: true } : {})}
              />
            </label>
            <label className="profile__input-container">
              <span className="profile__input-span">E-mail</span>
              <input
                type="email"
                className="profile__input"
                name="email"
                required={true}
                placeholder="example@example.com"
                {...(!isInEditMode ? { disabled: true } : {})}
              />
            </label>

            <button type="submit" className="profile__button-edit" onClick={switchEditMode}>
              Редактировать
            </button>

            <Link to="/" className="profile__button-exit">
              Выйти из аккаунта
            </Link>

            {/* {isInEditMode && (
              <>
                <p className="profile__error-message">
                  При обновлении профиля произошла ошибка.
                </p>
              </>
            )} */}
          </form>
        </div>
      </section>
    </>
  );
}
