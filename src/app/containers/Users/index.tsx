import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../../common/Sidebar";
import Header from "../../common/Header";
import { useSelector } from "react-redux";
import AuthHelpers from "../../helpers/AuthHelpers";
import { API_CONSTANTS } from "../../utils/constants/constants";
import FullPageLoader from "../../common/Loader/FullPageLoader";
import { useNavigate } from "react-router";
import { APP_USER_ROUTES } from "../../utils/constants/appRoutes";

export default function Buyer(props: any) {
  // Get Sidebar Open status from localstorage
  let sideBarOpen = true;
  const sideBarStatus = localStorage.getItem("sideBarOpen");
  if (sideBarStatus && sideBarStatus === "false") {
    sideBarOpen = false;
  }
  const { children, isSideBarDisabled } = props;
  const [open, setOpen] = useState(sideBarOpen);
  const [loading, setLoading] = useState(false);
  const userSelector = useSelector((state: any) => state.user);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(!open);
    localStorage.setItem("sideBarOpen", String(!open));
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };
  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div className="flex h-screen">
      {!isSideBarDisabled ? (
        <div>
          <CssBaseline />
          <Header
            open={open}
            handleDrawerOpen={handleDrawerOpen}
          />
          <Sidebar
            open={open}
            handleDrawerClose={handleDrawerClose}
          />
        </div>
      ) : (
        <></>
      )}
      <main className="flex-1 bg-brand-background-white overflow-hidden pt-14 h-full">
        <div className="overflow-auto h-full">
          <div className="m-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
