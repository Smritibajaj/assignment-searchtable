import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getUserProfile } from "../redux/features/user/userApi";
import { APP_USER_ROUTES } from "../utils/constants/appRoutes";
import AuthHelpers from "../helpers/AuthHelpers";
import FullPageLoader from "../common/Loader/FullPageLoader";
import { AppDispatch } from "../redux/store";
import { IRoute } from "./interfaces";

/** Provide User Instance after calling me api */
export const PrivateUser = () => {
  const isTokenAvailable = AuthHelpers.checkToken();
  
  const dispatch = useDispatch<AppDispatch>();
  const userSelector = useSelector((state: any) => state.user);

  useEffect(() => {
    if (isTokenAvailable) {
      dispatch(getUserProfile());
    }
  }, [isTokenAvailable, dispatch]);

  const location = useLocation();
  useEffect(() => {
    if (!isTokenAvailable) {
      AuthHelpers.saveDataInLocalStorage("intendedUrl", location.pathname);
    }
  }, [location.pathname, isTokenAvailable]);
  if (isTokenAvailable && !userSelector.data) {
    return <FullPageLoader />;
  }

  return isTokenAvailable ? (
    <Outlet />
  ) : (
    <Navigate to={'/'} state={{ from: location }} replace />
  );
};

/** Non Authenticated routes */
export const PublicUser = ({ route }: { route: IRoute }) => {
  const checkToken = (): boolean => !!localStorage.getItem("token");
  const isTokenAvailable = checkToken();
  const location = useLocation();

  if (route.redirectSkip) {
    return <Outlet />;
  }
  return !isTokenAvailable ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/user/${
        APP_USER_ROUTES.dashboard
      }`}
      state={{ from: location }}
      replace
    />
  );
};
