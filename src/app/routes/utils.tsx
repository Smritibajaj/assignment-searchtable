import { Route } from "react-router-dom";
import Buyer from "../containers/Users";
import { PublicUser, PrivateUser } from "./Users";

/** check weather page needs authentication */

export const isProtectedRoute = (route: any) => {
  if (route.protected) {
    return (
      <Route
        key={route.path}
        element={
          <Buyer isSideBarDisabled={route.isSideBarDisabled}>
            <PrivateUser
            />
          </Buyer>
        }
      >
        <Route path={route.path} element={route.element} />
      </Route>
    );
  } else {
    return (
      <Route key={route.path} element={<PublicUser route={route} />}>
        <Route key={route.path} path={route.path} element={route.element} />
      </Route>
    );
  }
};
