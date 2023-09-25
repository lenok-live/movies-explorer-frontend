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

export default function App() {
  // const [isHamburger, setIsHamburger] = useState(false);

  // function onHandleHamburger() {
  //   setIsHamburger(!isHamburger);
  // }

  return (
    <div className="page">

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}
