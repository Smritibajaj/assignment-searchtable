/*eslint-disable*/
import { sideBarConfig } from "./sideBarConfig";
import AuthHelpers from "../../helpers/AuthHelpers";
import { useSelector } from "react-redux";
import SideBarNavigationLink from "./NavigationLink";
import { Drawer, DrawerHeader } from "./styles";


export default function Sidebar(props: any) {
  const { open } = props;
  const user = AuthHelpers.getUserTypeFromLocalStorage();
  const userSelector = useSelector((state: any) => state.user);
  const userType = userSelector.data?.company_roles[0]?.name;
  const isAllowedUserPath = (navItem: any, user: string) =>
    navItem.allowedUserType.includes(user);
  const isAllowedUser = (navItem: any, userType: string) =>
    navItem.allowedUsers.includes(userType);
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader></DrawerHeader>

      <ul className="flex justify-center flex-col">
        {sideBarConfig.map((navItem, index) => {
          {
            return (
              user &&
              userType &&
              isAllowedUserPath(navItem, user) &&
              isAllowedUser(navItem, userType) && (
                <SideBarNavigationLink
                  key={navItem.id}
                  open={open}
                  navItem={navItem}
                  index={index}
                  isHighlightable={true}
                  userType={userType}
                />
              )
            );
          }
        })}
      </ul>
    </Drawer>
  );
}
