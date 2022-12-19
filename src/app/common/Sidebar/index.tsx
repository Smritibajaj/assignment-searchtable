/*eslint-disable*/
import { sideBarConfig } from "./sideBarConfig";
import AuthHelpers from "../../helpers/AuthHelpers";
import { useSelector } from "react-redux";
import SideBarNavigationLink from "./NavigationLink";
import { Drawer, DrawerHeader } from "./styles";


export default function Sidebar(props: any) {
  const { open } = props;
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader></DrawerHeader>

      <ul className="flex justify-center flex-col">
        {sideBarConfig.map((navItem, index) => {
          {
            return (
                <SideBarNavigationLink
                  key={navItem.id}
                  open={open}
                  navItem={navItem}
                  index={index}
                  isHighlightable={true}
                />
              )
          }
        })}
      </ul>
    </Drawer>
  );
}
