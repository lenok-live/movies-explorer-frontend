import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import PageNotFound from "../PageNotFound/PageNotFound";
import RoutersComponent from "./RoutesComponent/RoutersComponent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {UserProvider} from "../../context/user";

export default function App() {
  return (
    <div className="page">
      <UserProvider>
        <Header />
        <RoutersComponent />
        <Footer />
      </UserProvider>
    </div>
  );
}
