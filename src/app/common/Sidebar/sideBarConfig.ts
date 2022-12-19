import AuthHelpers from "../../helpers/AuthHelpers";
import { APP_USER_ROUTES } from "../../utils/constants/appRoutes";
import {
  PLATFORM_USERS,
 
} from "../../utils/constants/constants";
import { ReactComponent as DashboardIcon } from "assignment-typescript-fe/assets/img/sidebar/dashboard.svg";
import { ReactComponent as ProfileIcon } from "assignment-typescript-fe/assets/img/sidebar/settings.svg";

export const sideBarConfig = [
  {
    id: "dashboard",
    drawerItemName: "Dashboard",
    icon: DashboardIcon,
    allowedUserType: [
      PLATFORM_USERS.BUYER,
    ],
    link: `/${ APP_USER_ROUTES.buyer}/${
          APP_USER_ROUTES.dashboard
        }`
  },
  {
    id: "profile",
    drawerItemName: "Profile",
    icon: ProfileIcon,
    allowedUserType: [
      PLATFORM_USERS.BUYER,
    ],
    link: `/${ APP_USER_ROUTES.buyer}/${
      APP_USER_ROUTES.profile
    }`
  },
];
