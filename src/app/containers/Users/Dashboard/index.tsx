import React from "react";
import PageTitle from "../../../common/Typography/PageTitle";

import { useSelector } from "react-redux";
import { useCompanySelector } from "../../../hooks/useCompanySelector";
import Loader from "../../../common/Loader";

const Dashboard = (props: any) => {
  const userSelector = useSelector((state: any) => state.user);
  const userType = userSelector.data?.current_role?.name;
  const { user, c_uuid } = useCompanySelector(props.routeKey);
  if (!userType) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <PageTitle>Dashboard</PageTitle>
    </React.Fragment>
  );
};

export default Dashboard;
