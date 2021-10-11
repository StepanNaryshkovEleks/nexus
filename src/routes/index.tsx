import { Route, Switch } from "react-router-dom";
import CNST from "../constants/app";
import IsAuthUser from "./IsAuthUser";
import IsNotAuthUser from "./IsNotAuthUser";

import SignIn from "../pages/sign-in";
import Dashboard from "../pages/dashboard";

export const Router = () => (
  <Switch>
    <IsNotAuthUser exact path={CNST.ROUTE.SIGN_IN} component={SignIn} />
    <IsAuthUser exact path={CNST.ROUTE.DASHBOARD} component={Dashboard} />
    <Route path="*">Not found</Route>
  </Switch>
);

export default Router;
