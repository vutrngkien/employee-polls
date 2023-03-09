import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const authId = useSelector((state) => state.auth.authId);
  const location = useLocation();

  return authId ? (
    children
  ) : (
    <Navigate
      to="/login"
      state={{
        path: location?.pathname === "/" ? "/home" : location?.pathname,
      }}
      replace
    />
  );
};

export default PrivateRoute;
