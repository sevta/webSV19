import React, { Component } from "react";
import "./style.scss";
import { FiCircle, FiLock } from "react-icons/fi";
import { AppContext } from "../../utils/provider";
import Tooltip from "../tooltip/Tooltip";
import CV from "../CV/CV";

export default class Menubar extends Component {
  static contextType = AppContext;

  openResume = () => {
    const { setState } = this.context;
    setState({
      showWindow: true,
      windowContent: (
        <div className="resume-container">
          <CV />
        </div>
      )
    });
  };

  render() {
    const { setState } = this.context;
    const classes = {
      menubar: `
        menubar
        w-full
        fixed
        pin-t pin-l
        z-30
        text-white px-6
        font-sans
        capitalize
        flex 
        items-center
      `
    };
    return (
      <div className={classes.menubar}>
        <div className="menubar-overlay" />
        <div className="text w-full list-menu flex items center justify-between ">
          <div className="menu-left flex items-center text-sm">
            <Menu name={<FiCircle />} style={{ paddingTop: 3 }} />
            <Menu bold name="finder" />
            <Menu name="file" />
            <Menu name="photos" />
            <Menu name="about" />
            <Menu name="resume" onClick={this.openResume} />
          </div>
          <div className="menu-right">
            <Menu
              name={<FiLock />}
              onClick={() => setState({ lock: true })}
              style={{ paddingTop: 3 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

function Menu({ name, showSubMenu, bold, extendClasses, ...rest }) {
  return (
    <div
      className={`mr-8 relative cursor-pointer ${
        bold ? "font-bold" : null
      } ${extendClasses}`}
      {...rest}
    >
      {name}
      {showSubMenu ? <Tooltip /> : null}
    </div>
  );
}
