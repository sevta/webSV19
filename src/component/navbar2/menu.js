import React from "react";
import { NavLink } from "react-router-dom";
import { routesPath } from "../utils/routes";

export default function Menu() {
  let linkClasses =
    "menu-wrapper_link link ml-6 cursor-pointer font-sans text-sm font-bold text-blue-darker uppercase no-underline";
  return (
    <div className="menu-wrapper flex">
      {routesPath.map((route, i) => (
        <NavLink
          activeClassName="active"
          to={route.path}
          className={linkClasses}
        >
          {route.name}
        </NavLink>
      ))}
    </div>
  );
}
