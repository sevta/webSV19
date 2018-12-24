import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about/About"));
const Playground = lazy(() => import("../pages/playground/Playground"));
const Login = lazy(() => import("../pages/admin/auth/login/Login"));
const ComponentList = lazy(() => import("../pages/componentList"));

const routesPath = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    name: "about",
    exact: true,
    component: About
  },
  {
    path: "/playground",
    name: "playground",
    exact: true,
    component: Playground
  },
  {
    path: "/login",
    name: "login",
    exact: true,
    component: Login
  },
  {
    path: "/component",
    name: "component",
    exact: true,
    component: ComponentList
  }
];

function RoutesMap({ ...rest }) {
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

export { RoutesMap, routesPath };
