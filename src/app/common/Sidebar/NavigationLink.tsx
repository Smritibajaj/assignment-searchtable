import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthHelpers from "../../helpers/AuthHelpers";
import { ReactComponent as ChevronRightIcon } from "assignment-typescript-fe/assets/img/sidebar/chevron-right.svg";
import { ReactComponent as ChevronUpIcon } from "assignment-typescript-fe/assets/img/sidebar/chevron-up.svg";

const SideBarNavigationLink = (props: any) => {
    const { navItem, open, index, isHighlightable, userType } = props;
    const [expanded, setExpanded] = useState<boolean>(false);
    const user = AuthHelpers.getUserTypeFromLocalStorage();
    const isAllowedUserPath = (navItem: any, user: string) =>
      navItem.allowedUserType.includes(user);
    const isAllowedUser = (navItem: any, userType: string) =>
      navItem.allowedUsers.includes(userType);
    const handleExpanded = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setExpanded(!expanded);
    };
    useEffect(() => {
      if (open === false) {
        setExpanded(false);
      }
    }, [open]);
  
    return (
      <li className={`${!open && "hover:bg-brand-background-skyblue"}`}>
        <NavLink
          to={navItem.link}
          className={({ isActive }) =>
            `px-6 flex items-center py-3.5 justify-between group hover:bg-brand-background-skyblue ${
              isActive && isHighlightable ? "bg-brand-background-skyblue" : ""
            }`
          }
        >
          {({ isActive }) => {
            return (
              <React.Fragment key={navItem.drawerItemName + index}>
                <div className="flex">
                  {navItem.icon && (
                    <>
                      <Tooltip title={navItem.drawerItemName}>
                        <div
                          className={`${
                            isActive
                              ? ` fill-brand-primary-blue stroke-brand-primary-blue`
                              : `fill-brand-text-primary stroke-brand-text-primary`
                          }  group-hover:fill-brand-primary-blue group-hover:stroke-brand-primary-blue`}
                        >
                          <navItem.icon />
                        </div>
                      </Tooltip>
                    </>
                  )}
                  <span
                    className={`group-hover:text-brand-primary-blue ${
                      isActive
                        ? "text-brand-primary-blue"
                        : "text-brand-text-primary"
                    } ${open ? "block px-3" : "hidden"}`}
                  >
                    {navItem.drawerItemName}
                  </span>
                </div>
                {open &&
                  !expanded &&
                  navItem.subItems &&
                  navItem.subItems.length > 0 && (
                    <button
                      onClick={handleExpanded}
                      className={`${
                        isActive
                          ? ` fill-brand-primary-blue stroke-brand-primary-blue`
                          : `fill-brand-text-primary stroke-brand-text-primary`
                      }  group-hover:fill-brand-primary-blue group-hover:stroke-brand-primary-blue`}
                    >
                      <ChevronRightIcon />
                    </button>
                  )}
                {open &&
                  expanded &&
                  navItem.subItems &&
                  navItem.subItems.length > 0 && (
                    <button
                      onClick={handleExpanded}
                      className={`${
                        isActive
                          ? ` fill-brand-primary-blue stroke-brand-primary-blue`
                          : `fill-brand-text-primary stroke-brand-text-primary`
                      }  group-hover:fill-brand-primary-blue group-hover:stroke-brand-primary-blue`}
                    >
                      <ChevronUpIcon />
                    </button>
                  )}
              </React.Fragment>
            );
          }}
        </NavLink>
        {navItem.subItems &&
          navItem.subItems.length > 0 &&
          expanded &&
          navItem.subItems.map((subItem: any, index: number) => {
            return (
              user &&
              userType &&
              isAllowedUserPath(subItem, user) &&
              isAllowedUser(subItem, userType) && (
                <>
                  <SideBarNavigationLink
                    open={open}
                    key={subItem.key}
                    navItem={subItem}
                    index={index}
                    isHighlightable={false}
                  />
                </>
              )
            );
          })}
      </li>
    );
  };

  export default SideBarNavigationLink