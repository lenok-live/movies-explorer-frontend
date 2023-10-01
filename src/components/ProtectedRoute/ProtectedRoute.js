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
      <>{children}</>
    )
  ) : (
    <>{children}</>
  );
};

export default ProtectedRoute;
