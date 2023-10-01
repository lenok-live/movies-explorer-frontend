import React, {useEffect} from 'react';
import './ProtectedRoute.css';
import {useLocation, useNavigate} from "react-router-dom";

const ProtectedRoute = ({children, isLoggedIn, isPublicPage}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if ((isLoggedIn && pathname === '/signin') || (isLoggedIn && pathname === '/signup')) {
      navigate('/');
    }
  }, [isLoggedIn, isPublicPage, pathname, navigate]);

  return !isPublicPage ? (
    isLoggedIn ? (
      <>{children}</>
    ) : (
      <div className={'center'}>
        <h1>Зайдите в профиль чтобы посмотреть эту страницу</h1>
      </div>
    )
  ) : (
    <>{children}</>
  );
};

export default ProtectedRoute;
