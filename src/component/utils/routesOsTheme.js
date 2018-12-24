import React, { lazy } from "react";
import { Route } from "react-router-dom";

const OsPage = lazy(() => import("../osPages/"));

const routesPath = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: OsPage
  }
];

function OsRoutesMap({ ...rest }) {
  return routesPath.map((route, i) => (
    <Route
      key={i}
      exact={route.exact}
      path={route.path}
      component={route.component}
      {...rest}
    />
  ));
}

export { OsRoutesMap, routesPath };
