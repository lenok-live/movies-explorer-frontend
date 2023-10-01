import "./Profile.css";
import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import mainApi from "../../utils/api/MainApi";
import {UserContext} from "../../context/user";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";

export default function Profile() {
  const [isSubmitting, setIsSubmitting] = useState(false);


  const { values, handleChange, errors, setIsValid, setValues, isValid } = useFormAndValidation();

  const { email, name } = values;

  const { logout, userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    setValues({email: userData.email, name: userData.name})
  }, [userData])

  useEffect(() => {
    if ((!email && !name)) {
      setIsValid(false)
    }

    if((userData.name === name && userData.email === email) ) {
      setIsValid(false)
    }
  }, [email, name, setIsValid, isSubmitting, userData])

  const handleSubmitChanges = (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    if (userData.name === name && userData.email === email) {
      setIsSubmitting(false);
      return;
    }
    const token = localStorage.getItem('jwt');

    mainApi.editMyInfo(token, {name, email}).then((res) => {
      alert('Вы успешно изменили данные!')
      setUserData(res)
    }).catch((err) => {
      if(err.status === 409) {
        alert('Такой Email уже зарегистрирован')
      } else {
        alert('Ошибка при изменении данных.')
      }
      console.log(err)
    }).finally(() => {
      setIsSubmitting(false);
    });
  }

  const handleExit = () => {
    logout();
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, {userData.name}!</h1>

          <form className="profile__form">
            <div className="profile__input-container">
              <label className="profile__input-wrapper">
                <span className="profile__input-span">Имя</span>
                <input
                  type="text"
                  className="profile__input"
                  name="name"
                  minLength="2"
                  maxLength="30"
                  required
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Лена"
                />
              </label>
              {/* <span className="auth__error">
                  {errors.name}
                </span> */}
            </div>

            <div className="profile__input-container">
              <label className="profile__input-wrapper">

                <span className="profile__input-span">E-mail</span>
                <input
                  type="email"
                  className="profile__input"
                  name="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                />
              </label>
              {/* <span className="auth__error">
                  {errors.email}
                </span> */}
            </div>


            <button type="submit" className="profile__button-edit" onClick={handleSubmitChanges} disabled={!isValid}>
              Редактировать
            </button>

            <Link to="/" className="profile__button-exit" onClick={handleExit}>
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
    </main>
  );
}
