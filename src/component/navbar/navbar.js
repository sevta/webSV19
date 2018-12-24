import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./menu/Menu";
import "./style.scss";
import { routesPath } from "../utils/routes";

export default class Navbar1 extends Component {
  render() {
    return (
      <div className="navbar w-full bg-white font-bold py-10 px-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="nav-left">
            <div className="logo text-2xl uppercase">sv19</div>
          </div>
          <div className="nav-right">
            <Menu menuItem={routesPath} />
          </div>
        </div>
      </div>
    );
  }
}
