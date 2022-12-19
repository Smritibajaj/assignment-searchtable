import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import SideBarLogo from "assignment-typescript-fe/assets/img/logo/sidebar-logo.svg";
import AppLogo from "../AppLogo";
import { ReactComponent as OpenMenuIcon } from "assignment-typescript-fe/assets/img/sidebar/right-circle.svg";
import { ReactComponent as CloseMenuIcon } from "assignment-typescript-fe/assets/img/sidebar/left-circle.svg";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import { useNavigate } from "react-router";
import { APP_USER_ROUTES } from "../../utils/constants/appRoutes";
import AuthHelpers from "../../helpers/AuthHelpers";
const drawerWidth = 264;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const capitalize = (str: string) => str?.charAt(0).toUpperCase() + str?.slice(1) ?? 'P';
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  boxShadow: "none",
  backgroundClor: "#ffffff",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    boxShadow: "none",
    backgroundColor: "#ffffff",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Appbar(props: any) {
  const { open, handleDrawerOpen } = props;
  const navigate = useNavigate();
  //const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const userSelector = useSelector((state: any) => state.user);


  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate(
      `/${APP_USER_ROUTES.buyer}/${APP_USER_ROUTES.profile}`
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    //navigate('/')
    window.location.reload();
  }

  return (
    <AppBar
      position="fixed"
      open={open}
      color={"transparent"}
      sx={{ padding: "0" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        }}
      >
        <div
          className="flex justify-between items-center px-6"
          style={open ? { width: drawerWidth } : {}}
        >
          {open ? (
            <AppLogo small={true} className="pl-2" />
          ) : (
            <img src={SideBarLogo} className={"pl-2"} alt="sidebar"/>
          )}
          <button
            className="stroke-brand-extra-icon hover:stroke-brand-primary-blue pl-2"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            {open ? <CloseMenuIcon /> : <OpenMenuIcon />}
          </button>
        </div>
        <div className="flex items-center px-6">
          <button
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            className="flex justify-center items-center space-x-2"
          >
            <Avatar
              className="align-middle h-6 w-6 text-brand-primary-blue"
              sx={{
                backgroundColor: "#286EF1",
                width: "32px",
                height: "32px",
              }}
              aria-hidden="true"
            >
              <p className="truncate text-base">
                {userSelector.data
                  ? capitalize(userSelector.data?.userName)[0]
                  : "R"}
              </p>
            </Avatar>
            <p>{userSelector.data?.name || ""}</p>
          </button>
          <Popover
            id={"simple-popover"}
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Popover>
        </div>
      </Toolbar>
    </AppBar>
  );
}
