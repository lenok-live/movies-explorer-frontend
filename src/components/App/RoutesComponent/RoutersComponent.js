import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {UserContext} from "../../../context/user";
import {routes} from "../../../constrains/routes";
import PageNotFound from "../../PageNotFound/PageNotFound";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute";

const RoutersComponent = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Routes>
      {routes.map(item => <Route key={item.path} path={item.path} element={
        <ProtectedRoute isLoggedIn={isLoggedIn} isPublicPage={item.isPublicPage}>
          {item.component}
        </ProtectedRoute>
      } /> )}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutersComponent;
