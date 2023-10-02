import React from "react";
import Main from "../components/Main/Main";
import Movies from "../components/Movies/Movies";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import SavedMovies from "../components/SavedMovies/SavedMovies";
import Login from "../components/Login/Login";

export const routes = [
  {
    path: '/',
    name: 'Главная',
    isPublicPage: true,
    component: <Main />
  },
  {
    path: '/movies',
    name: 'Фильмы',
    isPublicPage: false,
    component: <Movies />
  },
  {
    path: '/profile',
    name: 'Аккаунт',
    isPublicPage: false,
    component: <Profile />
  },
  {
    path: '/signup',
    name: 'Регистрация',
    isPublicPage: true,
    component: <Register />
  },
  {
    path: '/saved-movies',
    name: 'Сохранённые фильмы',
    isPublicPage: false,
    component: <SavedMovies />
  },
  {
    path: '/signin',
    name: 'Войти',
    isPublicPage: true,
    component: <Login />
  }
]
