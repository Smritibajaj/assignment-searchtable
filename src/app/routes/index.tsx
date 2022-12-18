import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./RouterConfigConstant";
import Buyer from "../containers/Users";
import { PrivateUser } from "./Users";
import { isProtectedRoute } from "./utils";
import { IRoute } from "./interfaces";
import AuthHelpers from "../helpers/AuthHelpers";
import { APP_USER_ROUTES } from "../utils/constants/appRoutes";

/** Recursive component for nested Routes */
const routesRec = (route: IRoute) => {
  const checkToken = (): boolean => !!localStorage.getItem("token");
  const isTokenAvailable = checkToken();
  if (route.children && route.children.length > 0) {
    return (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children.map((subroute: any, i: number) => {
          return routesRec(subroute);
        })}
        {route.index && route.protected && (
          <Route
            key={route.path}
            element={
              <Buyer isSideBarDisabled={route.isSideBarDisabled}>
                <PrivateUser/>
              </Buyer>
            }
          >
            <Route index element={route.indexElement} />
          </Route>
        )}
        {route.index && !route.protected && (
          <Route
            index
            element={
              (!isTokenAvailable || !AuthHelpers.getUserTypeFromLocalStorage()) ? (
                route.indexElement
              ) : (
                <Navigate
                  to={`/${AuthHelpers.getUserTypeFromLocalStorage()}/${
                    APP_USER_ROUTES.dashboard
                  }`}
                  replace
                />
              )
            }
          />
        )}
      </Route>
    );
  } else {
    return isProtectedRoute(route);
  }
};

/** Router component takes route config and has 1st level of permission */
const Router: React.FC = () => {
  return (
    <Routes>
      {routes.map((route: any) => {
        return routesRec(route);
      })}
    </Routes>
  );
};

export default Router;
