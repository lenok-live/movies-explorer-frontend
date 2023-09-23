import React from 'react';
import './Profile.css';

export default function Profile() {
  const [isInEditMode, setIsInEditMode] = React.useState(true);

  function switchEditMode(evt) {
    evt.preventDefault();
    setIsInEditMode((state) => !state);
  }

  return (
    <main className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, Студент!</h1>
        <form className="profile__form">
          <label className="profile__input-container">
            <span className="profile__input-label">Имя</span>
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
            <span className="profile__input-label">E-mail</span>
            <input
              type="email"
              className="profile__input"
              name="email"
              required={true}
              placeholder="example@example.com"
              {...(!isInEditMode ? { disabled: true } : {})}
            />
          </label>

          {isInEditMode && (
            <>
              <button className="profile__edit"  onClick={switchEditMode}>
              Редактировать
              </button>
              <button className="submit-button">Выйти из аккаунта</button>
            </>
          )}
        </form>

        {!isInEditMode && (
          <ul className="profile__links">
            <li className="profile__links-item">
              <button className="profile__link" onClick={switchEditMode}>
                Редактировать
              </button>
            </li>
            <li className="profile__links-item">
              <button className="profile__link profile__link_type_logout">
                Выйти из аккаунта
              </button>
            </li>
          </ul>
        )}
      </div>
    </main>
  );
}
