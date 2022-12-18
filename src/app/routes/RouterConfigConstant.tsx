import React, { lazy } from "react";
import { Outlet } from "react-router";
import { APP_USER_ROUTES } from "../utils/constants/appRoutes";
import Landing from "../containers/Main/Home";
import NotFound from "../containers/Main/NotFound";
import { PLATFORM_USERS, ROUTE } from "../utils/constants/constants";
import ResetPassword from "../containers/Main/Authentication/ResetPassword";
import { IRoute } from "./interfaces";

const Unautherised = lazy(() => import("../containers/Main/NotFound/403page"));
const Auth = lazy(() => import("../containers/Main/Authentication"));
const Login = lazy(() => import("../containers/Main/Authentication/Login"));
const Register = lazy(
  () => import("../containers/Main/Authentication/Register")
);
//const Admin = lazy(() => import("../archieve/layouts/Admin"));
const ForgotPassword = lazy(
  () => import("../containers/Main/Authentication/ForgetPassword")
);

const BuyerDashboard = React.lazy(
  () => import("../containers/Users/Dashboard")
);

const BuyerProfile = React.lazy(() => import("../containers/Users/Profile"));

//TODO - Write Hook

/** Config meaning
 *
 * path - path for url
 * element - component, add routekey as a props to check user for that component
 * index is it index route
 * indexElement - if index routes then what's is the route element. <Outlet/> in that component is mandatory
 * chidlren : to define nested route
 */

const UserRouteModule: IRoute = {
  path: APP_USER_ROUTES.buyer,
  element: <Outlet />,
  index: true,
  protected: false,
  indexElement: (
    <Auth>
      <Login routeKey={PLATFORM_USERS.BUYER} />
    </Auth>
  ),
  children: [
    {
      path: APP_USER_ROUTES.register,
      element: (
        <Auth>
          <Register routeKey={PLATFORM_USERS.BUYER} />
        </Auth>
      ),
      protected: false,
    },
    {
      path: APP_USER_ROUTES.login,

      element: (
        <Auth>
          <Login routeKey={PLATFORM_USERS.BUYER} />
        </Auth>
      ),
      protected: false,
    },
    {
      path: APP_USER_ROUTES.forgotPassword,

      element: (
        <Auth>
          <ForgotPassword routeKey={PLATFORM_USERS.BUYER} />,
        </Auth>
      ),
      protected: false,
    },
    {
      path: APP_USER_ROUTES.resetPassword,

      element: (
        <Auth>
          <ResetPassword routeKey={PLATFORM_USERS.BUYER} />
        </Auth>
      ),
      protected: false,
    },
    {
      path: APP_USER_ROUTES.dashboard,
      element: <BuyerDashboard routeKey={PLATFORM_USERS.BUYER} />,
      protected: true,
    },
    {
      path: APP_USER_ROUTES.profile,
      element: <BuyerProfile routeKey={PLATFORM_USERS.BUYER} />,
      protected: true,
    },
  ],
};

export const routes: IRoute[] = [
  {
    path: "/",
    element: <Landing />,
    redirectSkip: true,
    protected: false,
    isSideBarDisabled: true,
  },
  UserRouteModule,
  {
    path: APP_USER_ROUTES.unauthorised,
    element: <Unautherised />,
    redirectSkip: true,
    protected: false,
    isSideBarDisabled: true,
  },
  {
    path: APP_USER_ROUTES.notFound,
    element: <NotFound />,
    redirectSkip: true,
    protected: false,
    isSideBarDisabled: true,
  },
];
