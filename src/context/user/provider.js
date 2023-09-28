import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import mainApi from "../../utils/api/MainApi";
import {UserContext} from "./context";
import Preloader from "../../components/Preloader/Preloader";

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigate();

  const fetchUserData = async () => {
    const token = localStorage.getItem('jwt');
    if(token) {
      try {
        const data = await mainApi.getMe(token);
        setUserData(data);
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
        localStorage.removeItem('jwt');
        navigation('/');
      }
    }
  };

  useEffect(() => {
      fetchUserData().finally(() => {
        setIsLoading(false);
      });
  }, []);

  const login = async (email, password) => {
    try {
      const { token } = await mainApi.authorization(email, password).catch(() => {
        alert('Неправильный логин или пароль')
      });

      if(token) {
        const user = await mainApi.getMe(token).then(res => {
          return res
        });
        localStorage.setItem('jwt', token);
        setIsLoggedIn(true);
        setUserData(user);

        return true;
      }
    } catch (error) {
      console.error('Ошибка при попытке авторизации: ', error);
    }
  }

  const logout = () => {
      setIsLoggedIn(false);
      setUserData(null);
      localStorage.removeItem('jwt');
      localStorage.removeItem('shorts')
      localStorage.removeItem('movies')
      localStorage.removeItem('searchFilm')
  };


  return (
    <UserContext.Provider value={{ isLoggedIn, userData, login, logout, setUserData }}>
      {isLoading ? <Preloader /> : children}
    </UserContext.Provider>
  );

}
