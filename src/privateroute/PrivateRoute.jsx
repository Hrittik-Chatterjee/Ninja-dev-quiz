/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

import HashLoader from "react-spinners/ClipLoader";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <HashLoader color="#36d7b7" />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
