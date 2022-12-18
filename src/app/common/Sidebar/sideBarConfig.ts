import AuthHelpers from "../../helpers/AuthHelpers";
import { APP_USER_ROUTES } from "../../utils/constants/appRoutes";
import {
  PLATFORM_USERS,
 
} from "../../utils/constants/constants";
import { ReactComponent as DashboardIcon } from "assignment-typescript-fe/assets/img/sidebar/dashboard.svg";

export const sideBarConfig = [
  {
    id: "dashboard",
    drawerItemName: "Dashboard",
    icon: DashboardIcon,
    allowedUserType: [
      PLATFORM_USERS.BUYER,
    ],
    link: AuthHelpers.getUserTypeFromLocalStorage()
      ? `/${AuthHelpers.getUserTypeFromLocalStorage()}/${
          APP_USER_ROUTES.dashboard
        }`
      : "",
  },
];
