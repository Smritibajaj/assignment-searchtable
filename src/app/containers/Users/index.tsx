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
  if(sideBarStatus && sideBarStatus === "false") {
    sideBarOpen = false;
  }
  const { children, isSideBarDisabled } = props;
  const [open, setOpen] = useState(sideBarOpen);
  const [loading, setLoading] = useState(false);
  const compamySlug = AuthHelpers.getDataFromLocalStorage("company");
  const userType = AuthHelpers.getUserTypeFromLocalStorage() || props.routeKey;
  const companyDetails = compamySlug && JSON.parse(compamySlug);
  const redirectUrl = companyDetails?.slug
    ? `/${userType}/${companyDetails.slug}/${APP_USER_ROUTES.login}`
    : `/${userType}/${APP_USER_ROUTES.login}`;
  const userSelector = useSelector((state: any) => state.user);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(!open);
    localStorage.setItem("sideBarOpen", String(!open));
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (userSelector.status === API_CONSTANTS.error) {
      AuthHelpers.removeTokenFromLocalStorage()
      setLoading(false);
      navigate(redirectUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSelector]);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div className="flex h-screen">
      {!isSideBarDisabled ? <div>
        <CssBaseline />
        <Header open={open} handleDrawerOpen={handleDrawerOpen} routeKey={userType} />
       <Sidebar open={open} handleDrawerClose={handleDrawerClose} routeKey={userType} />
      </div> : <></>}
      <main className="flex-1 bg-brand-background-white overflow-hidden pt-14 h-full">
        <div className="overflow-auto h-full">
          <div className="m-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
